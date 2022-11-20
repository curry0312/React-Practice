import React, { useState, useReducer } from 'react'

const ACTION = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement'
}

function reducer(state, action/*What is going to pass into the dispatch function below*/) {
  switch(action.type){
    case ACTION.INCREMENT:
      return {count: state.count + 1}
    case ACTION.DECREMENT:
      return {count: state.count - 1}

  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {count: 0})
  const [count, setCount] = useState(0)

  function increment() {
    dispatch({type: ACTION.INCREMENT})
    // setCount(current => current + 1)
  }

  function decrement() {
    dispatch({type: ACTION.DECREMENT})
    // setCount(current => current - 1)
  }
  return (
    <>
    <button onClick={decrement}>-</button>
    <span>{state.count}</span>
    <button onClick={increment}>+</button>
    </>
  );
}

export default App;
