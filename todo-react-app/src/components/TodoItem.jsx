import { useContext } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";


export default function TodoItem({todoName, todoDate}) {
  const {deleteItem} = useContext(TodoItemsContext);
  return (
    <div className="container">
      <div className="row kg-row">
        <div id="data" className="col-4">{todoName}</div>
        <div id="data" className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button" onClick={()=>deleteItem(todoName, todoDate)}>
          <MdDeleteOutline />

          </button>
        </div>
      </div>
    </div>
  );
}
