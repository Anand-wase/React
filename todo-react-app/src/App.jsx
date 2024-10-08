import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import WelcomMesg from "./components/WelcomeMesg";
import TodoItemsContextProvider from "./store/todo-items-store";

function App() {
  return (
    <TodoItemsContextProvider>
    <center className="todo-container">
      <AppName/>
      <AddTodo />
      <WelcomMesg/>
      <TodoItems/>
    </center>
    </TodoItemsContextProvider>

  );
}

export default App;
