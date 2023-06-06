import React from 'react';
import s from './App.module.css';
import TodosMainPage from './components/TodosMainPage/TodosMainPage';

const App = () => {
  return (
    <div>
      <TodosMainPage className={s.app} />
    </div>
  );
};

export default App;