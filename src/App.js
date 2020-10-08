import React from 'react';
import './styles/App.css';
import TodoForm from './components/TodoForm'
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>

      <TodoForm saveTodo={console.warn} />
    </div>
  );
}

export default App;
