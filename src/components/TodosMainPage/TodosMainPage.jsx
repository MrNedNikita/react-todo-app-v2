import React, { useState } from 'react';
import s from './TodosMainPage.module.css';
import TodoItem from '../TodoItem/TodoItem.jsx';
import TopSection from '../TopSection/TopSection';
import Modal from '../Modal/Modal';

const TodosMainPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [filterMode, setFilterMode] = useState(false);
  const [isModal, setModal] = useState(false);

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

  const filteredTodos = todos.filter(todo => todo.text.includes(searchValue));

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

  const changeFilterMode = () => {
    console.log(filterMode);
    setFilterMode(!filterMode);
  }

  return (
    <div className={s.app}>
      <TopSection
        todos={todos}
        inputValue={inputValue}
        setInputValue={setInputValue}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleSave={handleSave}
        changeFilterMode={changeFilterMode}
        filterMode={filterMode}
      />
      {filterMode ? (filteredTodos.map((todo) => {
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
      )) : (todos.map((todo) => {
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
      ))
      }
      <button onClick={() => setModal(true)}>Open Modal</button>
      <Modal
        isVisible={isModal}
        title="Todo Modal"
        content={<p>Add your content here</p>}
        onClose={() => setModal(false)}

      />
    </div>
  );
};

export default TodosMainPage;