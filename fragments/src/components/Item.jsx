import classNames from 'classnames';
import styles from "./Item.module.css";

const Item = ({foodItem}) => {
  const buttonClass = classNames(styles.kbutton, 'btn', 'btn-info');

  return (
    <li className="list-group-item">
      <span>{foodItem}</span>
      <button className= {buttonClass} onClick={()=>console.log('{foodItem} buy clicked')}>Buy</button>
    </li>
  );
};
export default Item;
