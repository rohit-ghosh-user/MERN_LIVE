import { useState } from 'react'
import './App.css'
import AppName from './Components/AppName'
import AddTodo from './Components/AddTodo'
import TodoItems from './Components/TodoItems'


function App() {
  
  return (
    <>
    
      <center>
        <AppName />
        <AddTodo />
        <TodoItems />
        
      </center>
    </>
  )
}

export default App
