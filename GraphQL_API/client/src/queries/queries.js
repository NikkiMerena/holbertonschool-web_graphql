import { gql } from 'apollo-boost';

const getTasksQuery = gql`
  {
    tasks {
      id
      title
    }
  }
`;

const getProjectsQuery = gql`
  {
    projects {
      id
      title
    }
  }
`;

const addTaskMutation = gql`
  mutation AddTask($title: String!, $weight: Int!, $description: String!) {
    addTask(title: $title, weight: $weight, description: $description) {
      id
      title
    }
  }
`;

const addProjectMutation = gql`
  mutation AddProject($title: String!, $weight: Int!, $description: String!) {
    addProject(title: $title, weight: $weight, description: $description) {
      id
      title
    }
  }
`;

export { getTasksQuery, getProjectsQuery, addTaskMutation, addProjectMutation };
