import React, { Component } from 'react';
import Todo from './Todo';

class Project extends Component {

  deleteTodo(id) {
    this.props.onDelete(id);
  }
 

  render() {
    let newTodos;
    if(this.props.projects) {
      newTodos = this.props.projects.map(project => {
        return (
          <Todo onDelete={this.deleteTodo.bind(this)} key={project.id} project={project} />
        )
      })
    }
    return (
      <div>
        <div>{newTodos}</div>
      </div>
    );
  }
}

export default Project;
