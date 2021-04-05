import React, { useState } from "react";
import s from "./Todolist.module.css";
import PropTypes from "prop-types";

export const TodoAdd = (props) => {
  const [value, setValue] = useState("");
  function submitHandler(event) {
    event.preventDefault();

    if (value.trim()) {
      props.onCreate(value);
      setValue("");
    }
  }

  return (
    <form action="" onSubmit={submitHandler}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">add todo</button>
    </form>
  );
};

TodoAdd.propTypes = {
  onCreate: PropTypes.func.isRequired,
};
