import React, {useState} from "react";
function App() {

  //1.useState must be invoked in the same order
  //2.useState's first argument is the default vlaue
  //3.useState always return an array.
  //4.Use Destructuring
  
  //Use function in useState() when you just want to run once
  const [count, setCount] = useState(4)

  function increament() {
    //Always use function and prev when you want to inherit the last value
    setCount(prevCount => prevCount + 1)
  }
  function decreament() {
    setCount(prevCount => prevCount - 1)
  }

  /*--------------------------------------*/

  const [state, setState] = useState({number: 4, theme: 'blue'})
  const number = state.number
  const theme = state.theme

  function decreamentState() {
    setState(prevState => {
      return {number: prevState.number - 1}
    })
  }

  function increamentState() {
    setState(prevState => {
      return {number: prevState.number + 1}
    })
  }

  /*---------------------------------------*/

  const [number1, setNumber1] = useState(5)
  const [theme1, setTheme1] = useState('blue')

  function decrease() {
    setNumber1(prevNumber1 => prevNumber1 - 1)
    setTheme1('red')
  }
  function increase() {
    setNumber1(prevNumber1 => prevNumber1 + 1)
    setTheme1('green')
  }
  return (
    <>
      <button onClick={decrease}>-</button>
      <span>{number1}</span>
      <span>{theme1}</span>
      <button onClick={increase}>+</button>
    </>
  )
}

export default App;
