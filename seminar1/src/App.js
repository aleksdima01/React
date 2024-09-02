import logo from './logo.svg';
import './App.css';
import Greetings from './components/Greeting';
import CurrentTime from './components/CurrentTime';

function App() {
  return (
    <div className="App">
      <Greetings />
      <CurrentTime />
      <p>
        Hello
      </p>
    </div>
  );
}

export default App;
