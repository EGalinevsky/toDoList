import React, {useContext} from "react";
import s from "./Todolist.module.css";
import PropTypes from "prop-types";
import Context from './../../../../context/context'

const TodoItem = (props) => {

    const {clickBtn} = useContext(Context)
 
  const classes =[]
  if(props.todo.completed){
      classes.push(`${s.done}`)
  }

  return (
    <div>
      <ul className={s.item}>
        <li className={classes.join(' ')} >
          <span >
            <input type="checkbox" checked={props.todo.completed} onChange={()=> props.toggleTodo(props.todo.id)}/>
          </span>
          {props.index + 1} {props.todo.title}
        </li>
        <button onClick={()=> clickBtn(props.todo.id)}>&times;</button>
      </ul>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  clickBtn: PropTypes.func.isRequired
};

export default TodoItem;
