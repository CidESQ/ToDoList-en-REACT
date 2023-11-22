import '../styles/TodoCounter.css'

function TodoCounter({total, completed}) {  

  return(
      <>
        <div className='titulo-container'>
          <span className='titulo-1'>Todo</span>
          <span className='titulo-2'>List</span>
          <h1 className='completed'> 
            Has completado {completed} de {total} ToDos
          </h1>
        </div>
      </>
    );
  }
export {TodoCounter}; 