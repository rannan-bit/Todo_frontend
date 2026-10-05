import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Todo from './pages/Todo'
import Addtodo from './pages/Addtodo'
import Edittodo from './pages/Edittodo'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/todos' element={<Todo/>}/>
      <Route path='/add-todo' element={<Addtodo/>}/>
      <Route path='/edit-todo/:id' element={<Edittodo/>}/>
    </Routes>
      
    </>
  )
}

export default App
