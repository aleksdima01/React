import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJoke } from './store/jokeSlice';
import { fetchExchange, setAmount, setCurrency } from './store/exchangeSlice';
import { useEffect } from 'react';

function App() {
  const url = 'https://api.chucknorris.io/jokes/random';
  const { value, loading, error } = useSelector((state) => state.joke);
  const { amount, currency, result, currencyList, loading: loadingConvertation, error: errorConvertation } = useSelector((state) => state.exchange);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchExchange())
  }, [dispatch])

  const handleConvert = (e) => {
    e.preventDefault();
    if (amount && currency) {
      dispatch(fetchExchange())
    }
  }
  return (
    <div className="App">
      <div>
        <h2>Jokes about Chuck Norris</h2>
        <button onClick={() => dispatch(fetchJoke(url))} disabled={loading}>{loading ? "loading..." : "Get new joke"}</button>
        <p>{error ? error.message || "Что-то пошло не так" : value}</p>
      </div>
      <div>
        <h2>Exchange rates</h2>
        <form onSubmit={handleConvert}>
          <input
            type="number"
            placeholder="Количество рублей"
            value={amount}
            onChange={(e) => dispatch(setAmount(e.target.value))} />
          <select
            onChange={(e) => { dispatch(setCurrency(e.target.value)) }}
            value={currency}>

            <option value="">Выберете код валюты</option>
            {currencyList.map(value => <option key={value}>{value}</option>)}
          </select>
          <button type="submit">Convertate</button>
        </form>
        <p>{amount} RUB={result} {currency}</p>
      </div>
    </div>
  );
}

export default App;
