import React from 'react'
import TodoItem from './TodoItem'

export default function Todos({todos, onDelete}) {
    return (
        <div className="container">
            <h3 className="text-center my-3">TODOs List</h3>
            {todos.length===0 ? "No TODOs to display!" : todos.map((todos)=>{
                return <TodoItem todos={todos} key={todos.sno} onDelete={onDelete}/>
            })}
        </div>
    )
}
