import React, { Component } from 'react';
import './App.css';
import uuid from 'uuid';
import Project from './Components/Project';
import AddProject from './Components/addProject';




class Main extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
    }
  }

  componentWillMount() {
    this.setState({projects: [
      {
        id: uuid.v4(),
        title: 'Wash Dishes',
        duedate: '2017-04-02',
        priority: false,
      },
      {
        id: uuid.v4(),
        title: 'Learn React.js',
        duedate: '2018-12-18',
        priority: true,
      },
      {
        id: uuid.v4(),
        title: 'Feed Cat',
        duedate: '2019-06-28',
        priority: false,
      },
    ]});

  }

  handleProject(todo) {
    let todos = this.state.projects;
    todos.push(todo);
    this.setState({projects: todos});
  }
  handleDelete(id) {
    let todos = this.state.projects;
    let todoIndex = todos.findIndex(x => x.id === id);
    todos.splice(todoIndex, 1);
    this.setState({projects: todos});
  } 
 
  render() {
    return (
      <div>
        <div className="fRight">
          <AddProject addProject={this.handleProject.bind(this)} />
        </div> 
        <Project onDelete={this.handleDelete.bind(this)} projects={this.state.projects} />
      </div>
    );
  }
}


export default Main;
