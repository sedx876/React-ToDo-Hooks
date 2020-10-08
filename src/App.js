import React, { useState } from 'react';
import './styles/App.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList';
import Typography from '@material-ui/core/Typography';

function App() {
  const [ todos, setTodos ] = useState([])
  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>
      <TodoForm saveTodo={(todoText) => {
        const trimmedText = todoText.trim()
        if (trimmedText.length > 0) {
          setTodos([...todos, trimmedText])
        }
      }} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
