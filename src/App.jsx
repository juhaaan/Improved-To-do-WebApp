import { useState } from 'react'
import './styles/App.css'
import Header from './components/Header/Header'
import Form from './components/Form/Form'
import ToDoWindow from './components/toDoWindow/ToDoWindow'

function App() {
  const [ToDoArray, setToDoArray] = useState([])



  return (
    <>
      <Header></Header>
      <ToDoWindow ToDoArray={ToDoArray} setToDoArray={setToDoArray}></ToDoWindow>
      <Form ToDoArray={ToDoArray} setToDoArray={setToDoArray}></Form>
    </>
  )
}

export default App
