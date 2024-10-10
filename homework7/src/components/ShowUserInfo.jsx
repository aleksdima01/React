import { useSelector } from "react-redux";


const ShowUserInfo = () => {
    const { user, loading, error, show } = useSelector((state) => state.user);

    return (
        <div>
            {(show === false) ?
                (<></>) :
                (<>
                    <h2>User info</h2>
                    {loading && <p>Загрузка...</p>}
                    {error && <p>Ошибка {error}</p>}
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                </>)}
        </div>
    )
}
export default ShowUserInfo
