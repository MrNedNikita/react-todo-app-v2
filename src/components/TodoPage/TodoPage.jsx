import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from "react-router";
import s from './TodoPage.module.css';
import TodoItem from '../TodoItem/TodoItem';

const TodoPage = () => {
  const location = useLocation();
  const { state } = location;

  return (
    <div className={s.container}>
      <NavLink className={s.navLink} to='/'>Back to Main Page</NavLink>
      <TodoItem todo={state.todo} pageMode={true}/>
    </div>
  );
};

export default TodoPage;