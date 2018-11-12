import React, { Component } from "react";

class TodoItem extends Component {
  render(){
    if(!this.props.todo){
      return null;
    }
    return (
      <div>
        <p>Title: {this.props.todo.title}</p>
        <p>Duration: About {this.props.todo.duration} minutes</p>
      </div>)
  }
}

export default TodoItem;