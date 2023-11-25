import React from 'react';
import { graphql } from 'react-apollo';
import { getTasksQuery } from '../queries/queries';

function TaskList(props) {
  function displayTasks() {
    const data = props.data;

    if (data.loading) {
      return <div>Loading tasks...</div>;
    } else {
      return data.tasks.map(task => {
        return <li key={task.id}>{task.title}</li>;
      });
    }
  }

  return (
    <ul>
      {displayTasks()}
    </ul>
  );
}

export default graphql(getTasksQuery)(TaskList);
