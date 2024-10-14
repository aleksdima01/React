import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJoke } from './store/jokeSlice';

function App() {
  const url = 'https://api.chucknorris.io/jokes/random';
  const { value, loading, error } = useSelector((state) => state.joke);
  const dispatch = useDispatch();


  return (
    <div className="App">
      <h2>Jokes about Chuck Norris</h2>
      <button onClick={() => dispatch(fetchJoke(url))} disabled={loading}>{loading ? "loading..." : "Get new joke"}</button>
      <p>{error ? error.message || "Что-то пошло не так" : value}</p>
    </div>
  );
}

export default App;
