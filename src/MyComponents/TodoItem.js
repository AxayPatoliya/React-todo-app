import React from 'react'

export default function TodoItem({todos, onDelete}) {
    return (
        <div>
            <h4>{todos.title}</h4>
            <p>{todos.desc}</p>
            <button className="btn btn-danger btn-sm" onClick={() => {onDelete(todos)}}>Delete</button>
            {/* we given onDelete function inside an arrow function because if we directly give the function then it wll executed once page being loaded, passing this inside an arrow function will prevent this */}
            <hr />
        </div>
    )
}
