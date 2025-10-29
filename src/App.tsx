
import { useQuery } from '@tanstack/react-query'
import './App.css'
import { useState } from 'react'

function App() {

  const[id,setId]=useState(1);
  //useQuery is a function that takes in one primary argument that is an object. This object needs 2 properties to work properly.
  // The first property is a query key which is going to be an array. It is used for refetching data and caching data. It needs to be unique so that we know which query we are referencing. If it is not unique, lets say another query uses the exact same key, then queryclient will bot be able to distinguish between the 2 of them
// The second property of this useQuery is a query Function denoted as queryFn. This is the function that will run whenever we run the query with this key. This is the function where we would put our API call 

const {data, isPending,refetch, isFetching, error}=useQuery({
  queryKey:['posts',id],
  queryFn:()=>getPostsById(id)

})

if(error){
  alert("Something went wrong")
}

const getPostsById=async(id:number)=>{
  const response=await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
  return await response.json()
}
  return (
    <>
    
    <div>{isPending?"Loading data":JSON.stringify(data.slice(0,10))}</div>

    {/* Refresh the query whenever we click it */}
    <button onClick={()=>refetch()}>Refetch</button>
    <button onClick={()=>setId((prevState)=>prevState+1)}>Increment</button>
    </>
  )
}




export default App


