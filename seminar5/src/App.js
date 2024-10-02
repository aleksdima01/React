import './App.css';
import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { UserContext } from './contexts/UserContext';
import { ThemeProvider } from './contexts/ThemeContext';
import MainWithLoading from './components/Main';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './components/Store/store';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [username, setUsername] = useState("гость");
  const [data, setData] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setData("Привет");
    }, 2000);
  }, [setIsLoading])
  return (

    <Provider store={store}>
      <ThemeProvider>
        <UserContext.Provider value={{ username, setUsername }}>
          <Header />
          <MainWithLoading isLoading={isLoading} data={data} />
        </UserContext.Provider >
        <Footer />
      </ThemeProvider>
    </Provider>

  );
};

export default App;
