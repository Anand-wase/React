import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

const WelcomMesg = () => {
  const {todoItems} = useContext(TodoItemsContext);
  return !todoItems.length && <h3>Enjoy Your Day</h3>
}
export default WelcomMesg