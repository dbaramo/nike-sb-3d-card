import './App.css';
import styled from 'styled-components';
import { NikeCard } from './nikeCard';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

function App() {
  return (
    <AppContainer>
      <NikeCard />
    </AppContainer>
  );
}

export default App;
