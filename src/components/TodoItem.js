import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {BsFillTrashFill} from 'react-icons/bs';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#F4F4F4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
        }
    };

    render() {
        const { id, title, completed } = this.props.todo;
        return (
            <div  style={ this.getStyle() }>
                <p>
                    <input className="input-checkbox" type="checkbox" onChange={ this.props.markComplete.bind(this, id ) } checked={ completed ? 'checked': '' }/>{' '}
                  {title}
                    <button className="btn-del" onClick={this.props.delTodo.bind(this, id)} style={{ float: 'right' }}>
                        <BsFillTrashFill />
                    </button>
                </p>
                
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todos: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}


export default TodoItem;