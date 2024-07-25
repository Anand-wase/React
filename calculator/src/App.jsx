import Display from "./components/Display";
import { useState } from "react";
import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css";

function App() {
  const [calVal, setCalVal] = useState("");
  const handleButtonClick = (btn) => {
    if (btn === "C") setCalVal("");
    else if (btn === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } 
    else 
    setCalVal(calVal + btn);
    console.log(btn, "button Clicked");
  };
  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal} />
      <ButtonsContainer onButtonClick={handleButtonClick} />
    </div>
  );
}

export default App;
