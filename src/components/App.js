import { useState } from "react";
import React from "react";
import './../styles/App.css';
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";

const App = () => {
  let [selectedoption, selectOption] = useState("");
  return (
    <div style={{backgroundColor:"yellow",padding:'10px'}}>
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        <ChildComponent1 selectedoption={selectedoption} selectOption={selectOption}/>
        <ChildComponent2 selectedoption={selectedoption} selectOption={selectOption}/>
        <p>Selected Option : {selectedoption}</p>
    </div>
  )
}

export default App
