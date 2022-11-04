import React , {useState, useMemo} from 'react'

function App() {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)
  const themes = {
    background: dark ? 'black': 'white',
    color: dark? 'white': ''
  }

  //Use useMemo() once you don't want to invoke the function 
  //again when re-render the component
  const doubleNumber = useMemo(()=>{
    return slowFunction(number) 
  },[number]) 

  return (
    <>
    <input type="number" onChange={(e)=>{setNumber(e.target.value)}}/>
    <button onClick={()=>{setDark(prevDark => !prevDark)}}>Change Theme</button>
    <div style={themes}>{doubleNumber}</div>
    </>
  );

}


function slowFunction(num) {
  for(let i = 0; i <= 1000000000; i++){}
  return num*2
}

export default App;
