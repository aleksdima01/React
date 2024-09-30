import { Button } from "@mui/material";
import { useEffect, useState } from "react";

export const Counter = ({ count, setCount }) => {
  const [disabeldDecr, setDisabeldDecr] = useState(true);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);

  useEffect(() => {
    if (count > 0) {
      setDisabeldDecr(false);
    } else {
      setDisabeldDecr(true);
    }
  }, [count]);

  return (
    <div>
      <Button variant="contained" color="primary" onClick={increment}>
        +
      </Button>

      <Button
        variant="contained"
        color="secondary"
        onClick={decrement}
        disabled={disabeldDecr}>
        -
      </Button>
    </div>
  );
};
