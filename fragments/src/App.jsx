import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import AddItem from "./components/AddItem";
import "./App.css";
import { useState } from "react";

function App() {
  let foodItems = ["Dal", "Green Vegetables", "Roti", "Salad", "Milk"];
  const [foodList, setfoodList] = useState(foodItems.map((x) => x));
  const [inputItem, setinputItem] = useState('')
  const handleInputChange = (event)=>{
    const a = event.target.value;
    if (a==="")
      setfoodList(foodItems.map((x) => x))
    else
      setfoodList(foodItems.map((x) => x).filter(str => str.toLowerCase().includes(a.toLowerCase())));
  }

  const handleClick = ()=>{
    if (inputItem!=='')
      setfoodList([...foodList,inputItem]);
  }
  const handleInputChangeAdd = (event) =>{
    setinputItem(event.target.value);
  }

  return (
    <>
      <Container>
        <h1>Fragments</h1>
        <ErrorMessage items={foodList} />
        <FoodInput handleInputChange={handleInputChange} title='Filter items here'/>
        <AddItem handleClick={handleClick} handleInputChange={handleInputChangeAdd}/>
        <FoodItems items={foodList} />
      </Container>
    </>
  );
}

export default App;
