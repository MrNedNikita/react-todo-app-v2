import React, {useState} from 'react';
import s from './TodoItem.module.css';

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
          <input 
            type="text" 
            value={editValue} 
            className={s.editInput}
            onChange={(e) => setEditValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <div>
            <button
              className={s.saveButton}
              onClick={() => handleSaveEdit(todo.id, editValue)}
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