import React from "react";
import axios from "axios";

export default class ProjectList extends React.Component {
  state = {
    projects: [],
  };

  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/api/projects/`).then((res) => {
      const projects = res.data;
      this.setState({ projects });
    });
  }

  render() {
    return (
      <ul>
        {this.state.projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>
    );
  }
}
