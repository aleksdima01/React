import "./App.css";
import data from "./data.json";
import { MessagesList } from "./components/MessagesList/MessagesList";
import { ThemeSwitcher } from "./components/ThemeSwitcher/ThemeSwitcher";

const App = () => {
  return (
    <div>
      <MessagesList messages={data} />
      <ThemeSwitcher />
      <ThemeSwitcher />
      <ThemeSwitcher />
      <ThemeSwitcher />
    </div>
  );
};

export default App;

// useEffect(() => {
//   setTimeout(() => {
//     setNumber(number + 1);
//   }, 500);
// }, [number, setNumber]);
