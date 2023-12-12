import React from 'react';
import './App.css';
import TodoList from './TodoList';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
        <TodoList />
      </header>
    </div>
  );
}

export default App;
