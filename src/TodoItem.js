function TodoItem(props) {
    return (
      <li>
        <span>√ {props.completed}</span>
        <p>{props.text}</p>
        <span>x</span>
      </li>
    );
  }
  export {TodoItem};