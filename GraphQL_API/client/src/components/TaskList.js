import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import { getTasksQuery } from '../queries/queries';
import TaskDetails from './TaskDetails';

function TaskList(props) {
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  function displayTasks() {
    const data = props.data;

    if (data.loading) {
      return <div>Loading tasks...</div>;
    } else {
      return data.tasks.map(task => {
        return (
          <li key={task.id} onClick={() => setSelectedTaskId(task.id)}>
            {task.title}
          </li>
        );
      });
    }
  }

  return (
    <div>
      <ul>
        {displayTasks()}
      </ul>
      <TaskDetails taskId={selectedTaskId} />
    </div>
  );
}

export default graphql(getTasksQuery)(TaskList);
