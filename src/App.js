import styled from 'styled-components';

import { StoreProvider } from './contexts/storeContext';
import { AppContent } from './containers/AppContent';

const AppWrapper = styled.section`
  max-width: 1200px; 
  margin: 50px auto;
`

function App() {
  return (
    <StoreProvider>
      <AppWrapper className="app">
        <AppContent />
      </AppWrapper>
    </StoreProvider>
  );
}

export default App;
