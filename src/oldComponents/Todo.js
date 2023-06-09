import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Todo =({ todo, toggleTask, removeTask }) => {

  return (
    <div key={todo.id} className="item-todo">
      <span 
        className={todo.complete ? "item-text strike" : "item-text"}
        onClick={() => toggleTask(todo.id)}
      >
        {todo.task}
      </span>
      <FontAwesomeIcon icon={faTrash} className="item-delete" onClick={() => removeTask(todo.id)} />
    </div>
  );
}

export default Todo;