import { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from './store/userReducer';
import ShowUserInfo from './components/ShowUserInfo';
import { fetchShowUsers, toggleShow } from './store/showReducer';

function App() {

  const { users, loading, error } = useSelector((state) => state.users);

  const handleShowInfo = (id) => {
    dispatch(fetchShowUsers(id))
    dispatch(toggleShow(id))
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <div className="App">
      <h1>Users</h1>
      {loading && <p>Загрузка...</p>}
      {error && <p>Ошибка {error}</p>}
      {users.length ? <ul>
        {
          users.map(user => (
            <>
              <li className="li_hover" key={user.id} onClick={(e) => handleShowInfo(user.id)} >{user.name}</li>
            </>
          ))
        }
        <ShowUserInfo />
      </ul> : null
      }
    </div >
  );
}

export default App;
