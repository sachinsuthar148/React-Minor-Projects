import { useState } from "react";
import "./App.css";
import TodoAdd from "./Components/TodoAdd";
import TodoHead from './Components/TodoHead'
// import TodoItem1 from "./Components/TodoItem1";
// import TodoItem2 from "./Components/TodoItem2";
import TodoItems from "./Components/TodoItems";
function App() {

  let Arr=[
    
  ]

  const [TodoList , setTodoList]=useState(Arr)

  let handleAddButton=(TodoName,TodoDate)=>{
      console.log(`The new item added is ${TodoName} and date is ${TodoDate}`)
      if(TodoName==="" || TodoDate==="")
      {
        alert("Please fill both inputs")
      }
      else{
      let newTodoArr= [...TodoList,{TodoName:TodoName, TodoDate:TodoDate}];
      setTodoList(newTodoArr);
      }
  }

  let handleDeleteButton=(TodoName)=>{
    let newDelArr=TodoList.filter((item)=> item.TodoName !== TodoName);
    setTodoList(newDelArr);
    console.log(`Item to be deleted ${TodoName}`);
  }

  return <>
  <center>

  <TodoHead/>
  <TodoAdd handleAddButton={handleAddButton}/>
  <h1>{(TodoList.length===0 && "Enjoy your day")}</h1>
  <TodoItems TodoList={TodoList} handleDeleteButton={handleDeleteButton}/>
  </center>
  </>;
}

export default App;
