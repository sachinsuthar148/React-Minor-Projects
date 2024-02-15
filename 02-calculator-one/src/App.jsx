import { useState } from "react";
import "./App.css";
import Buttons from "./Components/Buttons";
import Display from "./Components/Display";


function App() {

  let [calval,setCalval]=useState("")


  const handleOnClick=(event,buttonValue)=>{
      if(buttonValue=== 'C'){
        setCalval("")
      }
      else if(buttonValue==='='){
        let result = eval(calval)
        setCalval(result)
      }
      else{
        let newExp = calval+buttonValue;
        setCalval(newExp);
      }
  }

  return <>
  <center>
      <div className="calculatorBox">
        <Display calval={calval}/>
        <Buttons handleOnClick={handleOnClick}/>
      </div>
      </center>
  </>;
}

export default App;
