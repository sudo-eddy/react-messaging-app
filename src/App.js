import React, { Component } from 'react';
import './App.css';
import MessageList from './messages/message-list';


class App extends Component {
  render(){
    return (
      <MessageList />
    )
  }
}


export default App;

//Things I learned
//import react Component first
//import external css if any
//then extend component with new class App
//then render() the JSX block (styles too)
//return() as content in the view (must be enclosed)
//finally export as default App class and import it in index.js
