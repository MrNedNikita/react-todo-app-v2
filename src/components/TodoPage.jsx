import React, { useState } from 'react';

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

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  }

  return (
    <div>
      <h1>Todo Form</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter Todo"
      />
      <button onClick={handleSave}>Save</button>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>{todo.text}</div>
        )}
      )}
    </div>
  );
};

export default TodoPage;