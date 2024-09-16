import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export const Header = () => {
    const { username } = useContext(UserContext);
    return (
        <div>Имя:{username}</div>
    )
}