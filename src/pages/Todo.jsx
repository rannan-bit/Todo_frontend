import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { updateTodoAPI, viewTodoAPI } from '../services/allAPI';

function Todo() {
    const [todos, setTodos] = useState([])
    const [updatingIds, setUpdatingIds] = useState([])
    const [updateError, setUpdateError] = useState('')

    useEffect(() => {
        getTodo()
    }, [])

    const getTodo = async () => {
        try {
            const response = await viewTodoAPI()
            setTodos(response.data)
        } catch (error) {
            console.log(error);

        }
    }

    const toggleCompleted = async (todo) => {
        setUpdateError('')
        setUpdatingIds((ids) => [...ids, todo.id])

        try {
            const response = await updateTodoAPI(todo.id, {
                ...todo,
                completed: !todo.completed
            })
            setTodos((currentTodos) => currentTodos.map((item) =>
                item.id === todo.id ? response.data : item
            ))
        } catch (error) {
            console.log(error)
            setUpdateError('Could not update the task. Please try again.')
        } finally {
            setUpdatingIds((ids) => ids.filter((id) => id !== todo.id))
        }
    }

    return (
        <main className='todo-page'>
            <div className='todo-content'>
                <div className='todo-page-heading'>
                    <div>
                        <p className='todo-eyebrow'>A LITTLE PROGRESS, EVERY DAY</p>
                        <h1>Your to-do list<span>.</span></h1>
                        <p className='todo-subtitle'>Keep track of the things you want to get done.</p>
                    </div>
                    <div className='todo-heading-decoration' aria-hidden='true'>✳</div>
                </div>
                <section className='todo-list-panel' aria-label='Your tasks'>
                    <div className='todo-list-heading'>
                        <h2>Your tasks</h2>
                        <span>{todos.length} {todos.length === 1 ? 'task' : 'tasks'}</span>
                    </div>
                    {updateError && <p className='todo-update-error' role='alert'>{updateError}</p>}
                    <div className='todo-list'>
                {
                    todos.map((a) => {

                        return (<Card className='todo-card' key={a.id}>
                            <ListGroup variant="flush">
                                <ListGroup.Item className='todo-card-content'>
                                    <input
                                        aria-label={`Mark "${a.text}" as ${a.completed ? 'pending' : 'completed'}`}
                                        checked={Boolean(a.completed)}
                                        className='todo-checkbox'
                                        disabled={updatingIds.includes(a.id)}
                                        onChange={() => toggleCompleted(a)}
                                        type='checkbox'
                                    />
                                    <span className={`todo-task-text${a.completed ? ' todo-task-completed' : ''}`}>{a.text}</span>
                                    <span className={`todo-status ${a.completed ? 'todo-status-complete' : 'todo-status-pending'}`}>
                                        <span className='todo-status-dot' aria-hidden='true' />
                                        {a.completed ? "completed" : "pending"}
                                    </span>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>)
                    })
                }
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Todo
