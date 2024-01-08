import { AppRoutes } from "./routes";
import { GlobalStyle } from "./styles/common.styles";
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  const userData = JSON.parse(localStorage.getItem('auth')) || null

  return (
    <>
      <Provider store={store}>
        <AppRoutes userData={userData} />
      </Provider>  
      <GlobalStyle />
    </>
     
  );
}

export default App;
