import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

const TodoItems = () => {
  const {todoItems,deleteItem} = useContext(TodoItemsContext);
  return (
    <div className="items-container">
      {todoItems.map(item =>
        <TodoItem key={item.name} todoName={item.name} todoDate={item.duedate} onDeleteClick = {deleteItem}/>
      )}
    </div>
  );
};
export default TodoItems;
