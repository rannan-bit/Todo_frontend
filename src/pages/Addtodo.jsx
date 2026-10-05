import React, { useState } from 'react'
import {addTodoAPI} from '../services/allAPI'

function Addtodo() {
    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([])
    const handleChange = (e) => {
        setTodo(e.target.value)
    }
    const handleAdd = async (e) => {
        e.preventDefault()
        if (!todo.trim()) return
        const newTodo = {
            text: todo,
            completed: false
        };

        try {
            const response = await addTodoAPI(newTodo)

            setTodos([...todos, response.data])

            setTodo("")
        } catch (error) {
            console.log(error)
        }

    }


    return (
        <main className="add-todo-page">
            <section className="add-todo-card">
                <div className="add-todo-icon" aria-hidden="true">＋</div>
                <p className="todo-eyebrow">MAKE ROOM FOR WHAT MATTERS</p>
                <h1>Add a task<span>.</span></h1>
                <p className="add-todo-description">What would you like to get done?</p>
                <div className="add-todo-controls">
                    <input
                        type="text"
                        value={todo}
                        className="add-todo-input"
                        placeholder="Enter your task..."
                        onChange={handleChange}
                    />

                    <button onClick={handleAdd} className="add-todo-button">
                        Add task <span aria-hidden="true">→</span>
                    </button>
                </div>
                <p className="add-todo-hint">One step at a time. You’ve got this.</p>
            </section>
        </main>
    )
}

export default Addtodo
