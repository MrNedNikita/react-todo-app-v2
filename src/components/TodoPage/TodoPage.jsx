import React, { useState } from 'react';
import s from './TodoPage.module.css';
import TodoItem from '../TodoItem/TodoItem.jsx';

const TodoPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  const handleSave = () => {
    if (inputValue) {
      const newTodo = {
        id: new Date().getTime(),
        text: inputValue,
      }
      setTodos([newTodo, ...todos])
      setInputValue('');
    }
    console.log(todos);
  }

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  }

  return (
    <div className={s.app}>
      <h1 className={s.header}>Todo List: {todos.length}</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter Todo"
        className='todo__input'
      />
      <button onClick={handleSave}>Save</button>
      {todos.map((todo) => {
        return (
          <TodoItem 
            key={todo.id}
            todo={todo} 
            handleDelete={handleDelete} 
          />
        )}
      )}
    </div>
  );
};

export default TodoPage;