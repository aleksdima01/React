import { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from './store/userReducer';

function App() {

  const { users, loading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers(3))
  }, [dispatch])
  return (
    <div className="App">
      <h1>Users</h1>
      {loading && <p>Загрузка...</p>}
      {error && <p>Ошибка {error}</p>}
      {users.length ? <ul>
        {
          users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))

        }
      </ul> : null}
    </div>
  );
}

export default App;
