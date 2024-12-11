import { useContext, useRef } from "react";
import { MdAddAlert } from "react-icons/md";
import { TodoItemsContext } from "../store/Todo-items-store";

function TodoAdd() {

  const {addNewItem}=useContext(TodoItemsContext);

  

  let newTodoName = useRef("");
  let newTodoDate = useRef("");

  let handleOnClick = (event) => {
    event.preventDefault();

    let TodoName = newTodoName.current.value;
    let TodoDate = newTodoDate.current.value;
    addNewItem(TodoName, TodoDate);
    newTodoName.current.value="";
    newTodoDate.current.value="";
    
  };

  return (
    <div className="container">
      <form className="row" onSubmit={handleOnClick}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter TODO Here"
            // value={TodoName}
            // onChange={handleTodoName}
            ref={newTodoName}
          />
        </div>
        <div className="col-4">
          <input type="date"   ref={newTodoDate}
          // value={TodoDate} onChange={handleTodoDate}
           />
        </div>
        <div className="col-2">
          <button className="btn btn-success" type="submit">
            <MdAddAlert />
          </button>
        </div>
      </form>
    </div>
  );
}
export default TodoAdd;
