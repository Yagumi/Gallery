import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const StoreContext = createContext();

export const useStore = () => {
  return useContext(StoreContext);
}

export const StoreProvider = ({children}) => {
  const [imagesList, setImagesList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
   // Авторизация в ручную в vk api с получением токена
  const [accessToken, setAccessToken] = useState('6621bc22b637708d12c9012c056f6dfc90b627607ab1180467c704dfd373e6bcaa2b190e10edaae86439e');
  
  // Тут можно задать количество картинок в previewer
  const [imagesCount, setImagesCount] = useState(7);

  const [isFetching, setIsFetching] = useState(false);
  const [selectedImageId, setSelectedImageId] = useState();

  const getPreviewerList = () => {
    const index = imagesList.findIndex((item) => item.id === selectedImageId);

    if(imagesList.length <= imagesCount || index+1 <= imagesCount) {
      return imagesList.slice(0, imagesCount);
    } else {
      return imagesList.slice(index-imagesCount+1, index+1);
    }
  }

  const toggleModal = () => {
    setIsModalOpen(prev => !prev);
  }

  const setCurrentImageId = (id) => {
    setSelectedImageId(id);
  }

  const fetchImages = async () => {
    try{
      setIsFetching(true);
      const res = await axios.get(`/method/photos.get?owner_id=-42564857&album_id=wall&count=${imagesCount}&rev=1&v=5.52&&access_token=${accessToken}`);
  
      setImagesList(res.data.response.items)
      setSelectedImageId(res.data.response.items[0].id)
      setIsFetching(false);
    } catch(err) {
      console.log(err)
    }
    
  }

  const getNextImage = async () => {
    const index = imagesList.findIndex((item) => item.id === selectedImageId);

    if(index < imagesList.length - 1) {
      setSelectedImageId(imagesList[index+1].id);
    } else {
      try {
        setIsFetching(true);
        const res = await axios.get(`/method/photos.get?owner_id=-42564857&album_id=wall&count=1&offset=${imagesList.length-1}&v=5.52&&access_token=${accessToken}`)
        setImagesList(prev => [...prev, res.data.response.items[0]])
        setSelectedImageId(res.data.response.items[0].id)
        setIsFetching(false);
      } catch(err) {
        console.log(err)
        setIsFetching(false);
      } 
    }
  }

  const getPrevImage = () => {
    const index = imagesList.findIndex((item) => item.id === selectedImageId);
    if(index > 0) {
      setSelectedImageId(imagesList[index-1].id);
    }
  }
  
  const getSelectedImage = () => {
    if(selectedImageId) {
      const image = imagesList.find(image => image.id === selectedImageId);
      return image.photo_604;
    }
  }

  return (
    <StoreContext.Provider value={{
      fetchImages,
      imagesList,
      isModalOpen,
      toggleModal,
      selectedImageId,
      setCurrentImageId,
      getNextImage,
      getPrevImage,
      getSelectedImage,
      isFetching,
      getPreviewerList,
      }}>
      {children}
    </StoreContext.Provider>
  )
}