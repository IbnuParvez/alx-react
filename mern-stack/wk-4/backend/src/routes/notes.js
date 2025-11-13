const express = require('express');
const Note = require('../models/Notes');
const router = express.Router();

router.get('/', async(req, res) => {
  const { userId } = req.query;
  const filter = userId ? { userId } : {};
  const notes = await Note.find(filter).sort({ createdAt: -1});
  res.json(notes);
});

router.post('/', async (req, res) => {
  const { title, content, userId} = req.body;
  if (!title) return res.status(404).json({message: "Title not provided! "});
  
  const note = await Note.create({ title, content, userId });
  res.status(201).json(note)
});

router.put('/:id' , async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const updated = await Note.findByIdAndUpdate(
    id,
    {$set: {title, content}},
    {new: true}
  );

  if(!updated) return res.status(404).json({message: "you didnt update well boss!"});
  res.json(updated);
});

router.delete('/:id', async (params) => {
  const { id } = req.params;
  const deleted = await Note.deleteOne(
  { id : _id});
  if (result.deleteOne == 0) return res.status(404).json({message: "Nothing to delete hello!"});
  res.json({ok: true});
});

module.exports = router;