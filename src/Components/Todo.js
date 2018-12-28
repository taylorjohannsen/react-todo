import React, { Component } from 'react';

class Todo extends Component {

  deleteTodo (id) {
    this.props.onDelete(id);
  }


  render() {
    let priority;

    if(this.props.project.priority === true) {
      priority = 'Important';
    }
    return (
      <div className="todoBox">
        <strong className='padRightTitle'>{this.props.project.title}</strong>
        <div className='padRight'>due: {this.props.project.duedate}</div>
        <button className='padRightSub' onClick={this.deleteTodo.bind(this, this.props.project.id)}>Delete</button>
        <div className="smallStar">{priority}</div>
      </div>
    );
  }
}

export default Todo;
