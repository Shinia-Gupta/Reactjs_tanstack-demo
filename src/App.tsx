
import { useQuery } from '@tanstack/react-query'
import './App.css'

function App() {

  //useQuery is a function that takes in one primary argument that is an object. This object needs 2 properties to work properly.
  // The first property is a query key which is going to be an array. It is used for refetching data and caching data. It needs to be unique so that we know which query we are referencing. If it is not unique, lets say another query uses the exact same key, then queryclient will bot be able to distinguish between the 2 of them
// The second property of this useQuery is a query Function denoted as queryFn. This is the function that will run whenever we run the query with this key. This is the function where we would put our API call 

const {data, isPending,refetch}=useQuery({
  queryKey:['todos'],
  queryFn:getTodos

})
  return (
    <>
    
    <div>{isPending?"Loading data":JSON.stringify(data.slice(0,10))}</div>

    {/* Refresh the query whenever we click it */}
    <button onClick={()=>refetch()}>Refetch</button>
    </>
  )
}

const getTodos=async()=>{
  const response=await fetch("https://jsonplaceholder.typicode.com/todos")
  return await response.json()
}
export default App
