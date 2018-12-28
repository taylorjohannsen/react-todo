import React, { Component } from 'react';

class Todo extends Component {

  deleteTodo (id) {
    this.props.onDelete(id);
  }


  render() {
    let priority;

    if(this.props.project.priority === true) {
      priority = '☆';
    }
    return (
      <div className="todoBox">
        <strong className='padRight'>{this.props.project.title}</strong>
        <div className='padRight'>{this.props.project.duedate}</div>
        <div className="smallStar">{priority}</div>
        <button className='padRight' onClick={this.deleteTodo.bind(this, this.props.project.id)}>Delete</button>
      </div>
    );
  }
}

export default Todo;
