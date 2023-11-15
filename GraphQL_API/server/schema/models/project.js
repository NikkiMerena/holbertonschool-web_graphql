const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  weight: {
    type: Number,
    default: 0
  },
  description: String,
  projectId: {
    type: String,
    unique: true
  }
});

module.exports = mongoose.model('Project', projectSchema);
