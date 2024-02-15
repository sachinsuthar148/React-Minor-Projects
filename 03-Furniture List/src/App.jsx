import React, { useState } from "react";
import ErrorMessage from "./Components/ErrorMessage";
import Furniture from "./Components/Furniture";
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from "./Components/Container";
import './App.css'
import FurnitureInput from "./Components/FurnitureInput";


function App() {
  // let FurnitureItems = ["table", "chair", "bed", "wardrobe", "keyboard","Book"];
  // let FurnitureItems = [];

  //Using IF-ELSE Statements
  // if(FunitureItems.length===0){
  //   return "No Furniture Found"
  // }

  // Using turnary operator 
  // {(FunitureItems.length!==0)?
  //   <ul>
  //     {FunitureItems.map((items) => {
  //       return <li key={items}>{items}</li>;
  //     })}
  //     </ul>:"No Funiture Found"}


  let [FurnitureItems,setFurnitureItems]=useState(["table", "chair", "bed"])

  // let [textToShow,setTextToShow]=useState("Food ordered by user")

  // let textToShow = "Food ordered by user"
  // let handleInputChange=(event)=>{
  //   setTextToShow(event.target.value);
  //   console.log(event.target.value)
  // }

  let handleOnKeyDown = (event)=>{
    if(event.key=== 'Enter')
    {
      let newItem = event.target.value;
      event.target.value=""
      let newFurnitureItems = [...FurnitureItems,newItem]
      setFurnitureItems(newFurnitureItems)
      console.log(newItem)
    }
  }

  return (
    <>
    <Container>
      <h1>Furniture Items</h1>
      <FurnitureInput handleOnKeyDown={handleOnKeyDown}/>
      {/* <FurnitureInput handleInputChange={handleInputChange}/> */}
      {/* <p>{textToShow}</p> */}
     <ErrorMessage FurnitureItems={FurnitureItems} />
     <Furniture FurnitureItems = {FurnitureItems}/>
     </Container>

     </>
  );
}

export default App;
