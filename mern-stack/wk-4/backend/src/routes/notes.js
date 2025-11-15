const express = require('express');
const Note = require('../models/Notes');
const router = express.Router();

router.get('/', async(req, res) => {
  try {
    const { userId } = req.query;
    const filter = userId ? { userId } : {};
    const notes = await Note.find(filter).sort({ createdAt: -1});
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, content, userId} = req.body;
    if (!title) return res.status(400).json({message: "Title not provided! "});
    
    const note = await Note.create({ title, content, userId });
    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/:id' , async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const updated = await Note.findByIdAndUpdate(
      id,
      {$set: {title, content}},
      {new: true}
    );

    if(!updated) return res.status(404).json({message: "Note not found!"});
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Note.deleteOne({ _id: id });
    
    if (deleted.deletedCount === 0) return res.status(404).json({message: "Note not found!"});
    res.json({ok: true});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;