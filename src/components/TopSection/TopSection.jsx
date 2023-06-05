import React from 'react';
import s from './TopSection.module.css';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

const TopSection = ({ todos, inputValue, setInputValue, handleSave, searchValue, setSearchValue, changeFilterMode, filterMode }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  }

  return (
    <div className={s.container}>
      <h1 className={s.headerContainer}>Todo List: {todos.length}</h1>
      <div className={s.actionContainer}>
        {filterMode ? (
          <>
            <Input
              value={searchValue}
              onChange={setSearchValue}
              onKeyDown={handleKeyDown}
              placeholder="Search Todo"
            />
          </>
        ) : (
          <>
            <Input
              value={inputValue}
              onChange={setInputValue}
              onKeyDown={handleKeyDown}
              placeholder="Enter Todo"
            />
            <Button
              className={s.saveButton}
              text="Add"
              onClick={handleSave}
            />
          </>
        )}


        <FontAwesomeIcon
          className={s.filterIcon}
          icon={faFilter}
          onClick={changeFilterMode}
        />
      </div>
    </div>
  );
};

export default TopSection;