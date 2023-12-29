import React from 'react'
import TodoItem from './TodoItem'

const Todos = ({ data }) => {
  return (
    <div>
      {data.map((todo) => (
        <TodoItem key={todo.id} title={todo.title} />
      ))}
    </div>
  )
}

export default Todos
