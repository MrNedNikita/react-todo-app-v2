import React, { useState } from 'react';
import s from './TodoPage.module.css';
import TodoItem from '../TodoItem/TodoItem.jsx';
import TopSection from '../TopSection/TopSection';
import Popup from '../Popup/Popup';
import Filter from '../Filter/Filter';

const TodoPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [filterMode, setFilterMode] = useState(false);

  const handleSave = () => {
    if (inputValue) {
      const newTodo = {
        id: new Date().getTime(),
        text: inputValue,
        editMode: false,
      }
      setTodos([newTodo, ...todos])
      setInputValue('');
    }
    console.log(todos);
  }

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleEdit = (id) => {
    console.log('edit', id);
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.editMode = !todo.editMode;
        todo.text = inputValue;
      }
      return todo;
    }))
  }

  const handleSaveEdit = (id, editValue) => {
    if (!editValue) {
      return;
    }
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.editMode = !todo.editMode;
        todo.text = editValue;
      }
      return todo;
    }))
  }

  return (
    <div className={s.app}>
      <TopSection
        todos={todos}
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleSave={handleSave}
      />
      <Filter 
        setFilterMode={setFilterMode} 
      />
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            handleSaveEdit={handleSaveEdit}
          />
        )
      }
      )}
      <Popup />
    </div>
  );
};

export default TodoPage;