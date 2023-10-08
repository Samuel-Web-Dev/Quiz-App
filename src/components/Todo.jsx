import React from 'react'

const Todo = ({ deleteTodo, todos, text, dueDate }) => {
     
  return (
    <div>
       <ul>
           {todos.map((todo, index) => {
            return (
              <div key={index} className="list-container">
                 <li className='firstchild-list'>
                  <span>{todo.text}</span>
                </li>

                <div>
                  <li className='secondlist-item'>
                    {todo.dueDate}
                  </li>
                  
                   <button onClick={() => deleteTodo(index)} className='delete-btn'>Delete</button>
                 </div>
              </div>
            )
           })}
       </ul>
    </div>
  )
}

export default Todo