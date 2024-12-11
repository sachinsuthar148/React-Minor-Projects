import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
  TodoList: [],
  addNewItem: ()=>{},
  deleteItem: ()=>{},
});

const todoItemsReducer = (currTodoItems, action) => {
    let newTodoItems = currTodoItems;
    if (action.type === "NEW_ITEM") {
      newTodoItems = [
        ...currTodoItems,
        { TodoName: action.payload.TodoName, TodoDate: action.payload.TodoDate },
      ];
    } else if (action.type === "DELETE_ITEM") {
      newTodoItems = currTodoItems.filter(
        (item) => item.TodoName !== action.payload.TodoName
      );
    }
    return newTodoItems;
  };
  

function TodoItemsContextProvider({children}){

    const [TodoList, dispatchTodoItems] = useReducer(todoItemsReducer, []);

    let addNewItem = (TodoName, TodoDate) => {
      const newItemAction = {
        type: "NEW_ITEM",
        payload: {
          TodoName,
          TodoDate,
        },
      };
      dispatchTodoItems(newItemAction);
  
    };
  
    let deleteItem = (TodoName) => {
      const deleteItemAction = {
        type: "DELETE_ITEM", 
        payload: {
          TodoName: TodoName,
        },
      };
      dispatchTodoItems(deleteItemAction);
    };
  
    return  <TodoItemsContext.Provider
    value={{
      TodoList: TodoList,
      addNewItem: addNewItem,
      deleteItem: deleteItem,
    }}>
        {children}
    </TodoItemsContext.Provider>
}
export default TodoItemsContextProvider;