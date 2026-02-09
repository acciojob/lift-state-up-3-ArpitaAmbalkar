import React from "react";

function ChildComponent2({ onSelect }) {
  return (
    <div>
      <button onClick={() => onSelect("Option 2 from Child 2")}>
        Select Option 2
      </button>
    </div>
  );
}

export default ChildComponent2;
