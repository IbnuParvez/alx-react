const express = require('express');
const router = express.Router();
const Student = require('./models/student');

router.get('/', async (req, res) => {
	try {
		const students = await Student.find();
		res.json(students);
	} catch (error) {
		res.status(500).json( { message: error.message });
	}
});

router.post('/', async(req, res) => {
	const { name, age, email } = req.body;
	try {
		const student = new Student({ name. age, email});
		const saved = await student.save();
		res.status(201).json(saved);
	} catch (error) {
		res.status(400).json({ message: error.message }); 
	}
});

router.put('/:id', async(req, res) => {
	try {
		const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
		res.json(student);
	} catch (error) {
		res.status(400).json({ message: error.message});
	}
});

router.delete('/:id', async(req, res) =>  {
	try {
	await Student.findByIdAndDelete(req.params.id);
	res.json({ message: "Student Deleted"});
	} catch (error) {
		res.status(500).json({ message: error.message});
	}
});

module.exports = router;
