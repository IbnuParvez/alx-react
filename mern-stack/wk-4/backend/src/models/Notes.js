const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  userID: { type: String, index: true},
  Title: { type: String, required: true, trim: true},
  content: { type: String, default: ""}
} , {timestamps: true});

noteSchema.index({ userId: 1, createdAt: -1 });

const note = mongoose.model("Note" ,noteSchema);

module.exports = note;