import { queryOptions } from "@tanstack/react-query";

export function createTodoQueryOptions(){
    return queryOptions({
  queryKey:['todos'],
  queryFn:getTodos,
    }
)
}

const getTodos=async():Promise<Todo[]>=>{
  const response=await fetch("https://jsonplaceholder.typicode.com/todos")
  return await response.json()
}

type Todo={
userId:number,
id:number,
title:string,
completed:boolean
}
