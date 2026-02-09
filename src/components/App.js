import React, { useState } from "react";
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";

function App() {
  const [selectedOption, setSelectedOption] = useState("");

  // Function to update state from child
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="parent">
      <h2>Selected Option: {selectedOption}</h2>

      <ChildComponent1 onSelect={handleOptionChange} />
      <ChildComponent2 onSelect={handleOptionChange} />
    </div>
  );
}

export default App;
