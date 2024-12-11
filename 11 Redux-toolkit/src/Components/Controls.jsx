import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";


function Controls() {
  const numberInput = useRef("");
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(counterActions.incrament());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decreament());
  };

  const handleAdd = () => {
    dispatch(counterActions.add(numberInput.current.value));
  };

  const handleSUbstrat = () => {
    dispatch(counterActions.substract(numberInput.current.value));
  };

  const handlePrivacy = () => {
    dispatch(privacyActions.toggle());
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
