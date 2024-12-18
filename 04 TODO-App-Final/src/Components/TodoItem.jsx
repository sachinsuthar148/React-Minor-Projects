import { FaDeleteLeft } from "react-icons/fa6";


function TodoItem({item,handleDeleteButton}){

    return(
    <div className="container">
      <div className="row">
        <div className="col-6">{item.TodoName}</div>
        <div className="col-4">{item.TodoDate}</div>
        <div className="col-2"><button className="btn btn-danger" onClick={()=>{handleDeleteButton(item.TodoName)}}><FaDeleteLeft />
</button></div>
      </div>
    </div>
    );
}
export default TodoItem;