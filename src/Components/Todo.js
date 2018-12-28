import React, { Component } from 'react';

class Todo extends Component {

  deleteTodo (id) {
    this.props.onDelete(id);
  }


  render() {
    return (
      <div className="todoBox">
        <strong>{this.props.project.title}</strong>
        <div>{this.props.project.duedate}</div>
        <div id='priority'></div>
        <button onClick={this.deleteTodo.bind(this, this.props.project.id)}>Delete</button>
      </div>
    );
  }
}

export default Todo;
