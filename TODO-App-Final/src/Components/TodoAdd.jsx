import { useState } from "react";

function TodoAdd({ handleAddButton }) {
  let [TodoName, setTodoName] = useState();
  let [TodoDate, setTodoDate] = useState();

  let handleTodoName = (event) => {
    setTodoName(event.target.value);
  };
  let handleTodoDate = (event) => {
    setTodoDate(event.target.value);
  };

  let handleOnClick = () => {
    handleAddButton(TodoName, TodoDate);
    setTodoDate("");
    setTodoName("");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter TODO Here"
            value={TodoName}
            onChange={handleTodoName}
          />
        </div>
        <div className="col-4">
          <input type="date" value={TodoDate} onChange={handleTodoDate} />
        </div>
        <div className="col-2">
          <button className="btn btn-success" onClick={handleOnClick}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoAdd;
