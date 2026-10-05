import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { viewTodoAPI } from '../services/allAPI';

function Todo() {
    const [todos, setTodos] = useState([])
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
                    <div className='todo-list'>
                {
                    todos.map((a) => {

                        return (<Card className='todo-card'>
                            <ListGroup variant="flush">
                                <ListGroup.Item className='todo-card-content'>
                                    <span className='todo-task-text'>{a.text}</span>
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
