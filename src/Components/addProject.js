import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {
  constructor() {
    super();
    this.state = {
      newProject: {}
    }
  }

  handleSubmit(e) {
    this.setState({newProject: {
      id: uuid.v4(),
      title: this.refs.title.value,
      duedate: this.refs.duedate.value,
      priority: this.refs.priority.checked
    }},
    function() {
      this.props.addProject(this.state.newProject);
    });

    e.preventDefault();
    this.refs.title.value = '';
    this.refs.duedate.value = '';
    this.refs.priority.checked = false;
  }

  render() {
    return (
      <div>
        <h3>Add New Todo:</h3>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
              <label>Title</label><br></br>
              <input type="text" ref="title" required/>
              <br></br>
              <label>Due Date</label><br></br>
              <input type="date" ref="duedate" required/>
              <br></br>
              <label>Important</label><br></br>
              <input type="checkbox" ref="priority"/>
            </div>
            <input type="Submit" placeholder="Submit" />
          </form>
      </div>
    );
  }
}

export default AddProject;