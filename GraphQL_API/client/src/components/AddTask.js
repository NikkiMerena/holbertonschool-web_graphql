import React from 'react';
import { graphql } from 'react-apollo';
import { getProjectsQuery } from '../queries/queries';


function AddTask(props) {
  function displayProjects() {
    const data = props.data;

    if (data.loading) {
      return <option>Loading projects...</option>;
    } else {
      return data.projects.map(project => {
        return <option key={project.id} value={project.id}>{project.title}</option>;
      });
    }
  }

  return (
    <select>
      {displayProjects()}
    </select>
  );
}

export default graphql(getProjectsQuery)(AddTask);
