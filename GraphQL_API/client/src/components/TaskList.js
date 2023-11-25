import React from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getTasksQuery = gql`
  {
    tasks {
      id
      title
    }
  }
`;

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
