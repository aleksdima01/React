import { Provider } from 'react-redux';
import './App.css';
import Main from './components/Main/Main';
import { store } from './components/Store/store';

function App() {
  return (
    <Provider store={store}>
      <div >
        <Main />
      </div>
    </Provider>
  );
}

export default App;
