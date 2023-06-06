import React, { useState } from 'react';
import s from './TodoItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import Button from '../Button/Button';
import Input from '../Input/Input';
import { NavLink } from 'react-router-dom';
import TodoPage from '../TodoPage/TodoPage';
import { Route } from 'react-router-dom';

const TodoItem = ({ todo, handleDelete, handleEdit, handleSaveEdit }) => {
  const [editValue, setEditValue] = useState(todo.text);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSaveEdit(todo.id, editValue);
    }
  }

  return (
    <div className={s.container}>
      {todo.editMode
        ?
        <>
          <Input
            value={editValue}
            onChange={setEditValue}
            onKeyDown={handleKeyDown}
          />
          <Button
            text="Save"
            onClick={() => handleSaveEdit(todo.id, editValue)}
          />
        </>
        :
        <>
          <span className={s.text}>{todo.text}</span>
          <div>
            {/* <Route exact path='/todo/:id' render={() => <myComponent prop={todo} />}>
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className={s.linkIcon}
              />
            </Route> */}
            <NavLink to={`/todo/${todo.id}`} state={{todo}}>
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className={s.linkIcon}
              />
            </NavLink>
            <FontAwesomeIcon
              icon={faPenToSquare}
              className={s.editIcon}
              onClick={() => handleEdit(todo.id)}
            />
            <FontAwesomeIcon
              icon={faTrash}
              className={s.deleteIcon}
              onClick={() => handleDelete(todo.id)}
            />
          </div>
        </>
      }
    </div>
  );
};

export default TodoItem;