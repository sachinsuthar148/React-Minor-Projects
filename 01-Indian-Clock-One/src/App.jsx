import ClockContent from "./Components/ClockContent";
import ClockHeading from "./Components/ClockHeading";
import ClockTime from "./Components/ClockTime";
import "bootstrap/dist/css/bootstrap.min.css"


function App (){
  return <center>
    <ClockHeading></ClockHeading>
    <ClockContent></ClockContent>
    <ClockTime></ClockTime>
  </center>
}

export default App;