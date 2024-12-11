import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import PostList from "./Components/PostList";
import CreatePost from "./Components/CreatePost";
import { useState } from "react";
import PostListProvider from "./Store/Post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("home");

  return (
    <PostListProvider>
      <div className="outer-container">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
        <div className="main-container">
          <Header />
          {selectedTab === "home" ? <PostList /> : <CreatePost />}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
