import React from 'react'

export default function ChildComponent1(props) {
  return (
    <div style={{backgroundColor:"pink",padding:'10px'}}>
        <h2>Child Component 1</h2>
        <button onClick={()=>props.selectOption("Option 1")}>Option 1</button>
    </div>
  )
}
