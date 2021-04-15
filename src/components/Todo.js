import React, {useState} from "react";
import { BsCircle } from 'react-icons/bs'
import { AiOutlineStar } from 'react-icons/ai'
import '../App.css';

function Todo(props) {

  return (
    <div className="todo-row">
      <input type="checkbox"
        checked={props.isCheck} />
      <div className="todo-row-item"><span key={props.id}>{props.note}</span></div>
      <div className="favorite-todo-row"><AiOutlineStar/></div>
    </div>
  );
}


export default Todo;