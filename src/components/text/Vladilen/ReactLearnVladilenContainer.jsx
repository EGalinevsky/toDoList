import React, { useState, useEffect } from "react";
import s from "./ReactLearnVladilen.module.css";
import ReactLearnVladilen from "./ReactLearnVladilen";
import { TodoAdd } from "./todo/TodoAdd";
import Context from "./../../../context/context";
import Loader from './../../../loading'
import Modal from "./modal/modal";

export const ReactLearnVladilenContainer = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading ] = useState(true)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then(todos => {{setTodos(todos)} {setLoading(false)}});
  }, []);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function clickBtn(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function onCreate(title) {
    setTodos(
      todos.concat([
        {
          title: title,
          id: Date.now(),
          completed: false,
        },
      ])
    );
  }

  return (
    <Context.Provider value={{ clickBtn: clickBtn }}>
      <div className={s.wrapper}>
        <h1>React tutorial</h1>
        <Modal />
        <TodoAdd onCreate={onCreate} />
        {loading && <Loader/>}
        {todos.length ? (
          <ReactLearnVladilen todos={todos} toggleTodo={toggleTodo} />
        ) : 
          loading ? null :(<p>no todos!</p>)
        }
      </div>
    </Context.Provider>
  );
};
