import React, { useState } from "react";
// import the Contact component
import Todo from "./Todo";
import "../App.css";

function TodoList(props) {
  return (
    <div>
      {props.todos.map((c) => (
        <Todo id={c.id} note={c.note} key={c.id} checked={c.isCheck} />
      ))}
    </div>
  );
}
export default TodoList;
