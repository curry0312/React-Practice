//When you change your useState, 
//the component will be re-render
import React, { useEffect, useRef, useState } from 'react';

function App() {
  const [name, setName] = useState('')
  const counts = useRef(1)//store temporarily data
  const inputRef = useRef()//reference DOM, it return an object

  useEffect(()=>{
    counts.current = counts.current + 1
  })

  const focus = () => {
    inputRef.current.focus()
  }

  return (
    <>
    <input ref={inputRef} value={name} onChange={ e => setName(e.target.value) }  />
    <div>My name is {name}</div>
    <div>I rendered {counts.current} times</div>
    <button onClick={focus}>Focus</button>
    </>
  );
}

export default App;
