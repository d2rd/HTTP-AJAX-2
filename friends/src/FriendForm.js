import React from 'react';

class FriendForm extends React.Component {
  // method 1: put state in class component but outside render
  state = {
    friend: {
      name: '',
      age: '',
      email: ''
    }
  }
  
  render() {  //'render' MUST be lower case to be recognized by React!!!!
    return (
      <form>
      <label>Name</label>
      <input type="text"/>

      <label>Age</label>
     <input type="number"/>    {/* Making type a 'number' will not convert it from string coming back from the form*/}

      <label>Email</label>
      <input type="email"/>  {/* changing type to email gets help from browser */}

      <button type="submit">Save Friends</button>
       {/* everything you grab from the server will be a string.  The server will typically handle the conversion of age to a number. */}
      </form>
    );
  }
}
export default FriendForm;
// React recommends getting value from controlled components.  It's called controlled because the value comes from state into the component.  The 'value' property sets the the value of the attribute.