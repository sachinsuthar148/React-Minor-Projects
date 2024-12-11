import { useRef } from "react";
import { useDispatch } from "react-redux";

function Controls() {
  const numberInput = useRef("");

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleAdd = () => {
    dispatch({ type: "ADD", payload: { num: numberInput.current.value } });
    numberInput.current.value = "";
  };
  const handleSUbstrat = () => {
    dispatch({
      type: "SUBSTRACT",
      payload: { num: numberInput.current.value },
    });
    numberInput.current.value = "";
  };

  const handlePrivacy = () => {
    dispatch({
      type: "PRIVATE"
    });
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrement}>
          +1
        </button>

        <button
          type="button"
          className="btn btn-success"
          onClick={handleDecrement}>
          -1
        </button>

        <button type="button" className="btn btn-info" onClick={handlePrivacy}>
          Private
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <input type="text" placeholder="Enter number" ref={numberInput} />

        <button type="button" className="btn btn-success" onClick={handleAdd}>
          Add
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleSUbstrat}>
          Substract
        </button>
      </div>
    </>
  );
}
export default Controls;
