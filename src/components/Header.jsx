import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
    const navigate=useNavigate()
  return (
    <header className='todo-header'>
        <div className='todo-header-inner'>
            <Link to={'/todos'} className='todo-brand'>
                <span className='todo-brand-mark' aria-hidden='true'>✓</span>
                <span>to.do</span>
            </Link>
            <nav className='todo-nav' aria-label='Main navigation'>
                <Link to={'/todos'} className='todo-nav-link'>Home</Link>
                <Link to={'/add-todo'} className='todo-nav-link todo-nav-primary'><span aria-hidden='true'>＋</span> Add Todo</Link>
            </nav>
        </div>
    </header>
  )
}

export default Header
