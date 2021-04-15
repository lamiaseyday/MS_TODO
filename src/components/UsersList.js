import React, { Component } from 'react'
import UserList from "./UserList";

export default class UsersList extends Component {

    state = {
        users: [],
    
      };
    
      componentDidMount() {
        this.getUsers();
      }

      getUsers = () => {
  
        let url = "http://localhost:3333/users";
          fetch(url)
            .then((response) => response.json())
            .then((data) => {
              const newUsers = data.map((c) => {
                return {
                  id: c.id,
                  user: c.user,
                  
                };
              });
              // create a new "state" object without mutating
              // the original state object.
              const newState = Object.assign({}, this.state, {
                users: newUsers,
              });
    
              // store the new state object in the component's state
              this.setState(newState);
            })
            .catch((error) => console.log(error));
      }
    render() {
        return (
            <div>
                <UserList users={this.state.users}   
                />
            </div>
        )
    }
}
