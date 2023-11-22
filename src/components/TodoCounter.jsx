// const estilos = {
//   backgroundColor: 'red'
// };
import '../styles/estilos.css';

function TodoCounter({total, completed}) {  

  return(
      // <h1 style={estilos}>
      <>
        <div>Todo</div>
        <div>Machine</div>
        <h1> 
          Has completado {completed} de {total} ToDos
        </h1>
      </>
    );
  }
//   export default TodoCounter;
export {TodoCounter}; 