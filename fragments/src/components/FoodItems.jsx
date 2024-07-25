import Item from "./Item";

const FoodItems=({items})=> {

  //foodItems=[]
  return (
    <>
    <ul className="list-group">
      {items.map((item) => (
        <Item key={item} foodItem={item}/>
      ))}
    </ul>
  </>
);
}
export default FoodItems;
