import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({onButtonClick}) => {
  const buttonNames = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];
  return <div>
    <div className={styles.buttonsContainer}>
      {buttonNames.map(btn=> <button key={btn} className={styles.button} onClick={() => onButtonClick(btn)}>{btn}</button>)}
     
    </div>
  </div>;
};
export default ButtonsContainer;
