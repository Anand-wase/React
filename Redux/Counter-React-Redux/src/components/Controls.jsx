import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";

const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();
  const handleIncreament = () => {
    dispatch(counterActions.increament());
  };
  const handleDecreament = () => {
    dispatch(counterActions.decreament());
  };
  const handleAdd =() => {

    dispatch(counterActions.add(inputElement.current.value,
    ));
    inputElement.current.value = "";
  };
  const handleSub =() => {
    dispatch(counterActions.sub(inputElement.current.value,
    ));
    inputElement.current.value = "";
  };
  const handlePrivacyToggle = () => {
    dispatch(privacyActions.toggle())
  };

  return (
    <>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button type="button" className="btn btn-primary" onClick={handleIncreament}>
        +1
      </button>
      <button type="button" className="btn btn-success" onClick={handleDecreament}>
        -1
      </button>
      <button type="button" className="btn btn-warning" onClick={handlePrivacyToggle}>
      Privacy Toggle
      </button>
    </div>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
      <input type="text" className="number-input" ref={inputElement} placeholder="Enter Number"/>
      <button type="button" className="btn btn-info" onClick={handleAdd}>
        Add
      </button>
      <button type="button" className="btn btn-danger" onClick={handleSub}>
        Sub
      </button>
    </div>
    </>
  );
};
export default Controls;
