import React, {useEffect, useRef, useState} from 'react'
import TodoList from './TodoList'

// localStorage.clear()

function App() {
  const LOCAL_STORGE_KEY = 'todoList'

  const [todos, setTodos] = useState([])
  const inputValue = useRef()

  useEffect(()=> {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORGE_KEY))
    if(!storedTodos){
      console.log('storedTodos:',storedTodos, 'Type: ',typeof storedTodos)
      console.log("There's no todos in localStorge")
    }
    else {
      setTodos(storedTodos)
      console.log(storedTodos, "Use localstorge")
    }
  },[])
  
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORGE_KEY, JSON.stringify(todos))
    console.log('todos have been stored in local')
  },[todos])
  

  function AddTodo() {
    const newTodo = inputValue.current.value
    if(newTodo === "") return
    setTodos(prevTodo => [...prevTodo, {
      name: newTodo,
      id: new Date().getTime(),
      completed: false,
    }])
    inputValue.current.value = ""
  }

  function ClearTodo() {
    const temp_todos = [...todos]
    const filtered_temp_todos = temp_todos.filter( todo => todo.completed === false )
    setTodos(filtered_temp_todos)
  }

  function ToggleTodo(target_id) {
    //Create an copy array of todos
    const temp_todos = [...todos]

    //Find the todo which we have checked the checkox
    const checkedTodo = temp_todos.find(todo => todo.id === target_id)
    checkedTodo.completed = !checkedTodo.completed

    setTodos(temp_todos)
  }

  return (
    <>
      <input ref={inputValue} type="text" />
      <button onClick={AddTodo}>Add Todo</button>
      <button onClick={ClearTodo}>Clear Todo</button>
      {todos ? <TodoList todos={todos}  ToggleTodo={ToggleTodo}/> : null}
    </>
  );
}

export default App;
