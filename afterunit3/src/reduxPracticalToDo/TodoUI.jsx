import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addtodo, deletetodo } from './TdoSlicer'

const TodoUI = () => {
  const [todoValue, settodoValue] = useState("")
  const todos = useSelector(state => state.todoReducer?.todoitem || [])
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!todoValue.trim()) return
    dispatch(addtodo(todoValue))
    settodoValue("")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="border-2 border-black"
          value={todoValue}
          onChange={(e) => settodoValue(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>

      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => dispatch(deletetodo(item.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoUI
