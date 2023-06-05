import React from 'react';

const TodoItem = ({ todo, handleDelete }) => {
  return (
    <div className='todo__item-container'>
      <span className='todo__item-text'>{todo.text}</span>
      <button
        className='todo__item-delete'
        onClick={() => handleDelete(todo.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;