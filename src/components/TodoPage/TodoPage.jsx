import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from "react-router";
import s from './TodoPage.module.css';
import TodoItem from '../TodoItem/TodoItem';

const TodoPage = () => {
  const location = useLocation();
  const { state } = location;
  console.log(state);
  return (
    <div className={s.container}>
      <NavLink className={s.navLink} to='/'>Back to Main Page</NavLink>
      <TodoItem todo={state.todo} />
      {/* <div className={s.contentContainer}>
        <span>Todo: {state.todo.text}</span>
        <span>Todo id:{state.todo.id}</span>
      </div> */}
    </div>
  );
};

export default TodoPage;