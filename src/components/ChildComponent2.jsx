import React from 'react'

export default function ChildComponent2(props) {
  return (
    <div style={{backgroundColor:"red",padding:'10px'}}>
        <h2>Child Component 2</h2>
        <button onClick={()=>props.selectOption("Option 2")}>Option 2</button>
    </div>
  )
}
