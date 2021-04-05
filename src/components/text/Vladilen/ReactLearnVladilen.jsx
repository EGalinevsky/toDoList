import React from "react";
import s from './ReactLearnVladilen.module.css'
import TodoItem from "./todo/TodoItem";
import PropTypes from 'prop-types'


const ReactLearnVladilen = (props) => {

  return (
    <div  className={s.wrapper} >
      
      {props.todos.map((todo, index) =>{
          return <TodoItem key={todo.id} todo={todo} index={index} toggleTodo={props.toggleTodo} clickBtn={props.clickBtn} />
      })}
    </div>
  );
};

ReactLearnVladilen.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired,
    clickBtn: PropTypes.func.isRequired
}

export default ReactLearnVladilen
