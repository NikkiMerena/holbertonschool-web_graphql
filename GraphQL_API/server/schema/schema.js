const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = require('graphql');

// Dummie data 
// Create an array of tasks
// const tasks = [
// {
//  id: '1',
//  title: 'Create your first webpage',
//  weight: 1,
//  description: 'Create your first HTML file 0-index.html with: -Add the doctype on the first line (with out any comment) -After the doctype, open and close an html tag. Open your file in your browser (the page should be blank)',
// },
// {
//  id: id: '2',
//  title: 'Structure your webpage',
//  weight: 1,
//  description: 'Copy the content of 0-index.html into 1-index.html. Create the head and body sections inside the html tag, create the head and body tags (empty) in this order',
// },
// ];

// Define a TaskType
const TaskType = new GraphQLObjectType({
  name: 'Task',
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    weight: { type: GraphQLInt },
    description: { type: GraphQLString },
  })
});

// Define the RootQueryType
const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    task: {
      type: TaskType,
      args: {
        id: { type: GraphQLString }, // Define the argument 'id' of type GraphQLString
      },
      resolve(parent, args) {
        // Use lodash to find the task with the specified id
        const task = _.find(tasks, { id: args.id });
        return task;
      },
    },
  },
});

// Export your GraphQLSchema with RootQuery
module.exports = new GraphQLSchema({
  query: RootQueryType,
});
