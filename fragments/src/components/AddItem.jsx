import FoodInput from "./FoodInput";
const AddItem = ({ handleClick, handleInputChange }) => {
  return (
    <div>
      <span>
        <FoodInput handleInputChange={handleInputChange} title='Add items here'/>
        <button className="kbutton btn btn-success" onClick={handleClick}>
          Add
        </button>
      </span>
    </div>
  );
};

export default AddItem;
