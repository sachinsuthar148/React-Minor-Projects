import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import DisplayCounter from "./Components/DisplayCounter";
import Container from "./Components/Container";
import Controls from "./Components/Controls";
import { useSelector } from "react-redux";
import WelcomeMessage from "./Components/WelcomeMessge";

function App() {

  const privacyMsg=useSelector(store=>store.privacy);
  console.log(privacyMsg);
  
  return (
    <center className="px-4 py-5 my-5 text-center">
      <Container>
        <Header />
        { privacyMsg ? <WelcomeMessage/> : <DisplayCounter />}
        <Controls />
      </Container>
    </center>
  );
}

export default App;
