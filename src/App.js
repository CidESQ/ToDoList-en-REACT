import React from 'react';
import './styles/estilos.css'
import {TodoCounter, TodoSearch, TodoList, TodoItem, CreateTodoButton} from './components/index.js';

const defaultTodos = [
  {text: 'Cortar cebolla', completed: false},
  {text: 'Cortar manzana', completed: true},
  {text: 'Cortar arandano', completed: true},
  {text: 'Cortar mandarina', completed: false},
  {text: 'Cortar pepino', completed: false},
]

function App() {
  return (
    <>

      <TodoCounter completed={16} total = {23}/> 

      <TodoSearch/>
      
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}/>
        ))}
      </TodoList>  

      <CreateTodoButton/>

    </>
  );
}


export default App;