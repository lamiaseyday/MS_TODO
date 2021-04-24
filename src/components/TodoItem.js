import React, { Component } from "react";
import PropTypes from "prop-types";
import { BsFillTrashFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import Checkbox from "./Checkbox";
import * as Icon from "react-icons/fi";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#F4F4F4",
      padding: "20px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  render() {
    const { id, title, completed } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <Checkbox
            icon={
              <div
                style={{
                  display: "flex",
                  flex: 1,
                  backgroundColor: "#0F053C",
                  borderRadius:20,
                }}
              >
                <Icon.FiCheck color="#fff" size={20} />
              </div>
            }
            className="check-label"
            name="my-input"
            checked={completed ? "checked" : ""}
            onChange={this.props.markComplete.bind(this, id)}
            borderColor="#0F053C"
            borderRadius={20}
            style={{ cursor: "pointer" }}
            labelStyle={{ marginLeft: 5, userSelect: "none" }}
            label={title}
          />

          <button
            className="btn-del"
            onClick={this.props.delTodo.bind(this, id)}
          >
            <BsFillTrashFill size={17} color={"#0F053C"}/>
          </button>
          <button
            className="btn-edt"
            onClick={this.props.edtTodo.bind(this, id, title)}
          >
            <MdEdit size={17} color={"#0F053C"}/>
          </button>
        </p>
      </div>
    );
  }
}
// PropTypes
TodoItem.propTypes = {
  todos: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  edtTodo: PropTypes.func.isRequired,
};

export default TodoItem;
