import React from 'react';
import s from './App.module.css';
import TodoPage from './components/TodoPage/TodoPage';

const App = () => {
  return (
    <div>
      <TodoPage className={s.app} />
    </div>
  );
};

export default App;