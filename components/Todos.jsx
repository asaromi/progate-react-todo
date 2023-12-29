import React from 'react'
import TodoItem from './TodoItem'

const styles = {
  container: {
    width: '40%',
    margin: '0 auto',
  },
}

const Todos = ({ data }) => {
  return (
    <div style={styles.container}>
      {data.map((todo) => (
        <TodoItem key={todo.id} title={todo.title} />
      ))}
    </div>
  )
}

export default Todos
