import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from "react-router";

const TodoPage = () => {
  const location = useLocation();
  const { state } = location;
  console.log(state);
  return (
    <div>
      <NavLink to='/'>Back</NavLink>
      <div>
        {state.todo.text}
      </div>
      <div>
        {state.todo.id}
      </div>
    </div>
  );
};

export default TodoPage;