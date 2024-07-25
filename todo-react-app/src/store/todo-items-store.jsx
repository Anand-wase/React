import { createContext } from "react";
import { useReducer } from "react";
export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const todoItemsReducer = (curState, action) => {
  let newtodoItems = curState;
  if (action.type === "NEW_ITEM") {
    newtodoItems = [
      ...curState,
      { name: action.payload.name, duedate: action.payload.duedate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newtodoItems = newtodoItems.filter(
      (item) =>
        item.name !== action.payload.name &&
        item.duedate !== action.payload.duedate
    );
  }

  return newtodoItems;
};

const TodoItemsContextProvider = ({children}) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);
  const deleteItem = (name, duedate) => {
    const newItemAction = {
      type: "DELETE_ITEM",
      payload: {
        name,
        duedate,
      },
    };
    dispatchTodoItems(newItemAction);
  };
  const addNewItem = (name, duedate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        name,
        duedate,
      },
    };
    dispatchTodoItems(newItemAction);
  };
  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;