import React from "react";
import "./App.css";
import Sidebar from "../src/components/Sidebar";
import Feed from "../src/components/Feed";
import Widgets from '../src/components/Widgets'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Feed/>
      <Widgets/>
    </div>
    //feed
    //sidebar
    //widgets
  );
}

export default App;
