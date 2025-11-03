const { mongoose } = require('../db');
const { Schema } = mongoose;

const taskSchema = new Schema({
	title: String,
	status: {type: String, enum: ["to do", "in progress", "done"], default: "to do"},
}, { timestamps: true });

const Task = mongoose.model('Task', taskSchema);
module.exports = { Task };
