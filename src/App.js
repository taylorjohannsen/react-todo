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
        duedate: '2018-12-18',
        priority: false,
      },
      {
        id: uuid.v4(),
        title: 'Book Title',
        duedate: '2018-12-18',
        priority: true,
      },
      {
        id: uuid.v4(),
        title: 'Feed Cat',
        duedate: '2018-12-18',
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
        <form className="displayForm">
            <div>
              <h3>Edit Todo:</h3><br></br>
              <label>Title</label><br></br>
              <input type="text" ref="title" required/>
              <br></br>
              <label>Due Date</label><br></br>
              <input type="date" ref="duedate" required/>
              <br></br>
              <input type="checkbox" ref="priority"/>
              <label>Important</label>
            </div>
          </form>
        <div className="fRight">
          <AddProject addProject={this.handleProject.bind(this)} />
        </div> 
        <Project onDelete={this.handleDelete.bind(this)} projects={this.state.projects} />
      </div>
    );
  }
}


export default Main;
