import React, { useState } from 'react';
import './styles/App.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList';
import Typography from '@material-ui/core/Typography';
import useTodoState from './components/useTodoState';

const App = () => {
  const { todos, addTodo, deleteTodo } = useTodoState([]);

  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>

      <TodoForm
        saveTodo={(todoText) => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            addTodo(trimmedText);
          }
        }}
      />

      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
