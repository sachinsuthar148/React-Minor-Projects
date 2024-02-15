import { useState } from "react";
import Items from "./Items";

function Furniture({ FurnitureItems }) {

  let [activeItems,setActiveItems]=useState([])

  let handleOnClick=(items, event)=>{
      let newActiveItems=[...activeItems,items]
      setActiveItems(newActiveItems)
  }

  return (
    <ul className="list-group lst ">
      {FurnitureItems.map((items) => {
        return (
          <Items
            key={items}
            items={items}
            bought={activeItems.includes(items)}
            handleOnClick={(event)=>handleOnClick(items,event)}
          />
        );
      })}
    </ul>
  );
}
export default Furniture;
