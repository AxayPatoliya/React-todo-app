import React from 'react'
import { useState } from 'react'

export default function About() {
    return (
        <div className='container'>
            Build by <span><h1 className="text-success">Axay Patoliya</h1></span>
            Technology used - <b className="text-info">React.js</b>
            <hr />
            <p>Find source code <a href="https://github.com/AxayPatoliya/React-todo-app">here</a></p>
        </div>
    )
}
