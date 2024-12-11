import TodoItem from "./TodoItem";

import { TodoItemsContext } from "../store/Todo-items-store";
import { useContext } from "react";


function TodoItems() {

    const {TodoList}= useContext(TodoItemsContext);
  

    return TodoList.map((item) => (
    <TodoItem
      key={item.TodoName}
      TodoName={item.TodoName}
      TodoDate={item.TodoDate}
    
    />
  ));
}
export default TodoItems;
