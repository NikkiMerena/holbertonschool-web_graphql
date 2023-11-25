const express = require('express');
const cors = require('cors');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');


const app = express();

// Enable CORS for all routes
app.use(cors());

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: true, // Enable GraphiQL
}));

mongoose.connect('mongodb+srv://5527:eRO1lb4T81qNMxFV@cluster0.4swzhhh.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('conneced to database');
});


app.listen(4000,()=>{
  console.log('now listening for request on port 4000');
});
