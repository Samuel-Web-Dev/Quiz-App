
import React,{ useState } from 'react'
import Todo from './components/Todo'

import './App.css'


const App = () => {

  const [todos, setTodos] = useState([])

  const [text, setText] = useState('')
  const [dueDate, setDueDate] = useState('')

   
 //  Add Todo list to the todo Array
   function addTodo(e){
    // Check if the text and dueDate are not empty
      if(text.trim() !== '' && dueDate !== ''){
        // add them to the todos Array
      setTodos([...todos, {text, dueDate}])
      setText('')
      setDueDate('')
     } else {
       confirm('Please fill the credentials')
     }
   }
 
    function deleteTodo(index){
      let newArr = [...todos]
      newArr.splice(index, 1)
      setTodos(newArr)
    }

    function getCurrentDate(){
      let now = new Date();
      let year = String(now.getFullYear())
      let month = String(now.getMonth() + 1).padStart(2, '0')
      let date = String(now.getDate()).padStart(2, '0')

      return `${year}-${month}-${date}`
    }


  return (
    <div>
      <div className='todo-app'>
       <div className="input-field">
         <input type="text" placeholder='Add new task' name='text' value={text} onChange={(e) => setText(e.target.value)} />

         <input type="date" className='session-date' name='date' max={getCurrentDate()} value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
       </div>

        <div className="btn">
           <button onClick={addTodo} className='addTodo-btn'>Add</button>
        </div>
        </div>

        <Todo deleteTodo={deleteTodo} todos={todos} text={text} dueDate={dueDate} />
       
    </div>
  )
}

export default App