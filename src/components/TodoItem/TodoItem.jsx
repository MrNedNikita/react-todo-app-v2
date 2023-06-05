import React from 'react';
import s from './TodoItem.module.css';

const TodoItem = ({ todo, handleDelete, handleEdit, editMode }) => {
  return (
    <div className={s.container}>
      {todo.editMode
        ? 
        <>
          <input type="text" value={todo.text} />
          <div>
            <button
              className={s.saveButton}
            >
              Save
            </button>
          </div>
        </>
        :
        <>
          <span className={s.text}>{todo.text}</span>
          <div>
            <button
              className={s.editButton}
              onClick={() => handleEdit(todo.id)}
            >
              Ed
            </button>
            <button
              className={s.deleteButton}
              onClick={() => handleDelete(todo.id)}
            >
              Del
            </button>
          </div>
        </>
      }
    </div>
  );
};

export default TodoItem;