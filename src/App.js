import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {RiCalendarTodoLine} from "react-icons/ri";
import {AiOutlineStar} from "react-icons/ai";
import {CgCalendarDates} from "react-icons/cg";
import {BsFillPersonFill} from "react-icons/bs";
import {AiFillHome} from "react-icons/ai";
import {BiSearch} from "react-icons/bi";


// Importing Components
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import "./App.css";

class App extends Component {

  state = {
    todos: [],
  };

  componentDidMount() {
    this.getTodo();
  }

  //Api'den verilerin alınıp listelenmesi
  getTodo = () => {
    let url = "http://localhost:3333/todos";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const newTodos = data.map((c) => {
          return {
            id: c.id,
            title: c.title,
            completed: c.completed,
          };
        });
        // create a new "state" object without mutating
        // the original state object.
        const newState = Object.assign({}, this.state, {
          todos: newTodos,
        });
        // store the new state object in the component's state
        this.setState(newState);
      })
      .catch((error) => console.log(error));
  };
  // Tamamlanmış olan görevlerin completed değerlerinin
  //değiştirlmesi. false durumunda true durumuna.
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) todo.completed = !todo.completed;
        return todo;
      }),
    });
  };
  // Api'den veri silme işlemi
  delTodo = async (id) => {
    return await fetch("http://localhost:3333/todos/" + id, {
      method: "delete",
    }).then((response) =>
      this.setState({
        todos: [...this.state.todos.filter((todo) => todo.id !== id)],
      })
    );
  };
  //Api'ye yeni veri ekleme post etme işlemi
  addTodo = async (newTodoStr) => {
    const newTodo = { title: newTodoStr, completed: false };
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    };
    const response = await fetch("http://localhost:3333/todos", options);
    if (response.ok) {
      const d = await response.json();

      this.setState((oldState) => ({
        todo: "",
        todos: oldState.todos.concat([d]),
      }));
    } else {
      throw new Error("Something went wrong ...");
    }
  };
  render() {
    return (
      <Router>
        <div className="app">
          <div className="menu-content">
          <div className="btn-content-todo"> <button className="btn-todo btn-group"><RiCalendarTodoLine className="iconStyle" /></button></div><br/> 
           <div className="btn-content-fav"><button className="btn-favorite btn-group"><AiOutlineStar className="iconStyle"/></button></div><br/> 
           <div className="btn-content-date"><button className="btn-date btn-group"><CgCalendarDates className="iconStyle"/></button></div><br/> 
           <div className="btn-content-person"><button className="btn-person btn-group"><BsFillPersonFill className="iconStyle"/></button></div><br/> 
           <div className="btn-content-home"><button className="btn-home btn-group"><AiFillHome className="iconStyle"/></button></div>
          </div>
          <div className="content">
            <div className="search">
              <div className="search-icon"> <BiSearch size={20} color={"grey"} /></div>
             <input type="text" className="input-search" placeholder="Arama" /> 
            
            </div>
            <div className="notes">
              <Route
                exact
                path="/"
                render={(props) => (
                  <React.Fragment>
                    <Todos
                      todos={this.state.todos}
                      markComplete={this.markComplete}
                      delTodo={this.delTodo}
                    />
                  </React.Fragment>
                )}
              />
            </div>
            <div class="add-note">
              <AddTodo addTodo={this.addTodo} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
