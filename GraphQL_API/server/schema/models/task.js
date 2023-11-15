// Require mongoose
const mongoose = require('mongoose');

// Define a Schema
const Schema = mongoose.Schema;

// Create a Task schema
const taskSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    status: {
        type: String,
        required: true,
        enum: ['pending', 'in progress', 'completed']
    },
    dueDate: {
        type: Date,
        required: false
    }
});

// Export the Task model
module.exports = mongoose.model('Task', taskSchema);
