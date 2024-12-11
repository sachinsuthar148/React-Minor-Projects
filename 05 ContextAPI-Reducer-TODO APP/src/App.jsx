import { useReducer, useState } from "react";
import "./App.css";
import TodoAdd from "./Components/TodoAdd";
import TodoHead from "./Components/TodoHead";
import TodoItems from "./Components/TodoItems";
import WelcomeMessage from "./Components/WelcomeMessage";
import TodoItemsContextProvider, { TodoItemsContext } from "./store/Todo-items-store";


function App() {
  // const [TodoList, setTodoList] = useState([]);

 
  return (
    <>
     <TodoItemsContextProvider>
        <center>
          <TodoHead />
          <TodoAdd />
          <WelcomeMessage />
          <TodoItems />
        </center>
        </TodoItemsContextProvider>
    </>
  );
}

export default App;
