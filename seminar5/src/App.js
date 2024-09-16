import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Header } from './components/Header';
import { UserContext } from './contexts/UserContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Footer from './components/Footer';

function App() {
  const [username, setUsername] = useState("гость");
  const [theme, setTheme] = useState("светлая");
  return (
    <>
      <UserContext.Provider value={{ username, setUsername }}>
        <header>
          <Header />
        </header>
        <main className=''>
          <button onClick={() => setUsername(prompt("Напишите имя", "Макс"))}>Сменить имя</button>
          <button onClick={setTheme}>
            сменить тему
          </button>
        </main>
      </UserContext.Provider >
      <ThemeProvider>
        <footer className='light'>
          {/* <Footer /> */}
        </footer>
      </ThemeProvider>
    </>
  );
}

export default App;
