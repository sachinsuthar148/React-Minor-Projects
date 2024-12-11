import { useContext } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { TodoItemsContext } from "../store/Todo-items-store";


function TodoItem({TodoName,TodoDate}){

  const {deleteItem}=useContext(TodoItemsContext)

    return(
    <div className="container">
      <div className="row">
        <div className="col-6">{TodoName}</div>
        <div className="col-4">{TodoDate}</div>
        <div className="col-2"><button className="btn btn-danger" onClick={()=>{deleteItem(TodoName)}}><FaDeleteLeft />
</button></div>
      </div>
    </div>
    );
}
export default TodoItem;