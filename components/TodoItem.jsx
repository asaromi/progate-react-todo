import React from 'react'

const styles = {
  todoItem: {
    border: '2px solid #f4f4f4',
    fontSize: '24px',
  },
}

const TodoItem = ({ title }) => {
  return (
    <div style={styles.todoItem}>
      <p>{title}</p>
    </div>
  )
}

export default TodoItem
