// const estilos = {
//   backgroundColor: 'red'
// };
import './TodoCounter.css';

function TodoCounter({total, completed}) {  

  return(
      // <h1 style={estilos}>
      <h1> 
        Has completado {completed} de {total} ToDos
      </h1>
    );
  }
//   export default TodoCounter;
export {TodoCounter}; 