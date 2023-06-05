import React from 'react';
import s from './TopSection.module.css';

const TopSection = ({ todos, inputValue, setInputValue, handleSave }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  }

  return (
    <div className={s.container}>
      <h1 className={s.headerContainer}>Todo List: {todos.length}</h1>
      <div className={s.actionContainer}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter Todo"
          className={s.input}
        />
        <button className={s.saveButton} onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default TopSection;