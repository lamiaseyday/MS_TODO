import React, {Component} from 'react';
import {Container} from 'reactstrap';
import Demo from './ui/demo';
import TodoList from './components/TodoList';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faEllipsisH } from '@fortawesome/free-solid-svg-icons'

export default class App extends Component {

    constructor() {
        super();
        this.state = {todos: [], todo: null, isCheck: false};
        this.onSubmitForm = this.onSubmitForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }



    componentDidMount() {
        this.getTodos();
    }

    getTodos = () => {
        let url = 'http://localhost:3333/todos';
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const newTodos = data.map(c => {
                    return {
                        id: c.id,
                        note: c.note,
                    };
                });

                // create a new "state" object without mutating
                // the original state object.
                const newState = Object.assign({}, this.state, {
                    todos: newTodos
                });

                // store the new state object in the component's state
                this.setState(newState);
            })
            .catch(error => console.log(error));
    };

    post = async newTodoStr => {
        const newTodo = {note: newTodoStr};
        const options = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(newTodo)
        };
        const response = await fetch('http://localhost:3333/todos', options);
        if (response.ok) {
            const d = await response.json();

            this.setState(oldState => ({
                todo: '',
                todos: oldState.todos.concat([d])
            }));
        } 
        else {
            throw new Error('Something went wrong ...');
        }
    };
    handleChange(changeObject) {
        this.setState(changeObject);
    }
    
    onSubmitForm() {
        if(this.state.todo === null){
          alert("lütfen boş bırakmayınız");
        }else{
          this.post(this.state.todo);
        }
        
        //console.log(this.input.value);
    }

    render() {
        return (
            <Container>
                <Demo />
                <div className="dayTask">
                    <div className="todo-list dayTaskContent">
                        <div className="todos-content">
                        <h3 className="todo-title">Görevler</h3>
                        <FontAwesomeIcon style={{color:'#0F053C'}} className="fa-2x" icon={faEllipsisH} />
                        </div>
                        <TodoList todos={this.state.todos} />
                    </div>
                    <div></div>
                    <div className="submitData">
                    <div className="btnSubmitDiv">
                            <button class="btn-submit" onClick={this.onSubmitForm}><FontAwesomeIcon className="submitIcon fa-2x" icon={faPlus} /></button>
                        </div>
                        <div className="inputNotDiv">
                            <input id="inputNote" class="inputNot" type="text" placeholder="Add To Do" value={this.state.todo} onChange={e => this.handleChange({todo: e.target.value})} />
                        </div>
                        
                    </div>
                </div>
            </Container>
        );
    }
}
