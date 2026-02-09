import React from "react";

function ChildComponent1({ onSelect }) {
  return (
    <div>
      <button onClick={() => onSelect("Option 1 from Child 1")}>
        Select Option 1
      </button>
    </div>
  );
}

export default ChildComponent1;

