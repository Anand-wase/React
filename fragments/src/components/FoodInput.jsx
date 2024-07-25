import styles from './FoodInput.module.css'
const FoodInput = ({handleInputChange,title}) =>{
  return <input type="text" placeholder={title} className={styles.foodInput} onChange={handleInputChange}/>
}
export default FoodInput;