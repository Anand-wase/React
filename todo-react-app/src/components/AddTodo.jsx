import { useContext } from "react";
import { useRef } from "react";
import { BiCommentAdd } from "react-icons/bi";
import { TodoItemsContext } from "../store/todo-items-store";

export default function AddTodo() {
  const {addNewItem} = useContext(TodoItemsContext);
  const todoNameElement = useRef('');
  const todoDateElement = useRef('');
  const handleAddClick = (event) => {
    event.preventDefault();
    const name = todoNameElement.current.value;
    const duedate = todoDateElement.current.value;
    addNewItem(name,duedate);

  }
  return <div className="container text-center">
  <form  className="row kg-row" onSubmit={handleAddClick}>
    <div className="col-4">
      <input type="text" placeholder="Enter Todo here" ref={todoNameElement} ></input>
    </div>
    <div className="col-4">
    <input type="date" ref={todoDateElement} ></input>
    </div>
    <div className="col-2">
    <button className="btn btn-success kg-button" onClick={handleAddClick}><BiCommentAdd /></button>
    </div>
  </form>
</div>
  
}
