import React, {useEffect, useState} from "react";
import ShowDetail from './ShowDetail'

function App() {
  const [resourceType, setResourceType] = useState('posts')
  //Set an empty array when you don't want to set anything first
  const [items, setItems] = useState([])

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    .then(response => response.json())
    .then(json => setItems(json))
    console.log('123')
  },[resourceType])
/*--------------------------------------*/
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  // function handleResize() {
  //   setWindowWidth(window.innerWidth)
  // }
  // useEffect(()=>{
  //   window.addEventListener('resize', handleResize)
  //   console.log('warning')

  //   //return in useEffect will clear up
  //   return ()=>{
  //     window.removeEventListener('resize', handleResize)
  //     console.log('remove warning')
  //   }
  // })

/*---------------------------------------*/
  return (
   <>
    <div>
      <button onClick={()=>{setResourceType('posts')}}>Posts</button>
      <button onClick={()=>{setResourceType('users')}}>Users</button>
      <button onClick={()=>{setResourceType('comments')}}>Comments</button>
    </div>
    <h1>{resourceType}</h1>
    <ShowDetail items={items}/>
    {/* <div>{windowWidth}</div> */}
   </>
  )
}

export default App;
