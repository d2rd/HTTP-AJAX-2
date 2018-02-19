import React from 'react';

class FriendForm extends React.Component {
  Render() {
    return (
      <form action="">
      <label>Name</label>
      <input type="text"/>
      <label>Age</label>
      <input type="text"/>
      <label>Email</label>
      <input type="text"/>
      <button type="submit">Save Friends</button>
      </form>
    )
  }
}