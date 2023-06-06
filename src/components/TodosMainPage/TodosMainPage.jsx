import React, { useState } from 'react';
import s from './TodosMainPage.module.css';
import TodoItem from '../TodoItem/TodoItem.jsx';
import TopSection from '../TopSection/TopSection';
import Modal from '../Modal/Modal';
import ReactDOM from 'react-dom';

const TodosMainPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [filterMode, setFilterMode] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleSave = () => {
    if (inputValue) {
      const newTodo = {
        id: new Date().getTime(),
        text: inputValue,
        editMode: false,
      };
      setTodos([newTodo, ...todos]);
      setInputValue('');
    }
  };

  const filteredTodos = todos.filter(todo => todo.text.includes(searchValue));

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleEdit = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.editMode = !todo.editMode;
        todo.text = inputValue;
      }
      return todo;
    }));
  };

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
    }));
  };

  const changeFilterMode = () => {
    console.log(filterMode);
    setFilterMode(!filterMode);
  };

  const handleOpenModal = (content) => {
    setModalContent(content);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent(null);
  };

  const renderTodoItems = filterMode ? filteredTodos : todos;

  const todoItems = renderTodoItems.map((todo) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      handleDelete={handleDelete}
      handleEdit={handleEdit}
      handleSaveEdit={handleSaveEdit}
      openModal={() => handleOpenModal(<TodoItem todo={todo} pageMode={true} />)}
    />
  ));

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
      {todoItems}
      {isModalOpen && (
        ReactDOM.createPortal(
          <Modal
            isVisible={isModalOpen}
            title="Todo Modal"
            onClose={closeModal}
          >
            {modalContent}
          </Modal>,
          document.body
        )
      )}
    </div>
  );
};

export default TodosMainPage;
