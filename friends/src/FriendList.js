import React from 'react';
import axios from 'axios';  // axios library is in server node_modules folder

class FriendList extends React.Component {

state={
    friends:[]
  }
  render() {
    return (
      <ul>
        {this.state.friends.map((friend)=> {
          return(
          <li key={friend.id}>
            {friend.name}
          </li>
        );
        })}
      </ul>
      );
  }


// Coding convention: Place your helper methods (lifecycle hooks) after render().  These are things that the render() needs but do not have to execute before render().  This is a stylistic choice.

//Helpers
  componentDidMount() {
    axios.get('http://localhost:5000/friends').then((response)=>{
      this.setState({friends: response.data})
    } ).catch(()=>{
      console.error('error getting data') //use 'console.error' to show red icon and color in return
    }) //always include .then and .catch so that you don't forget to included them.
  }
}

export default FriendList;

//http://localhost:5000/friends