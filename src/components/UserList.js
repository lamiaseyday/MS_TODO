import React from "react";

// import the Contact component
import User from "./User";
import "../App.css"

function UserList(props) {
  return (
    <div>
    <div>{props.users.map(c => <User id={c.id} user={c.user} 
      
    
    />)}</div>
    </div>
  );
}


export default UserList;