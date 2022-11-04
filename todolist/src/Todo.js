import React, { useEffect, useRef } from 'react'

/*Each todo part*/
export default function Todo({todo, ToggleTodo}) {

    const checkbox = useRef()

    useEffect(()=>{
        if(todo.completed === true){
            checkbox.current.checked = true
        }
    },[])
   
    function handleToggle() {
        // todo.completed = !todo.completed (This is not correct, we shouldn't directly change the state)
        ToggleTodo(todo.id)
        console.log(todo)
    }

    return (
        <div>
            <input ref={checkbox} type="checkbox" onChange={handleToggle}/>
            {todo.name}
        </div>
    )
}
