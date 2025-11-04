const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let users = [
	{ id: 1, name: 'Abu', age: 21},
	{ id: 2, name: 'Swabrina', age: 17}
];

app.get('/users', (req, res) => { 
	res.json(users);
});

app.get('/users/:id', (req, res) => {
	const user = users.find(u => u.id === parseInt(req.params.id));
	if(!user) return res.status(404).json({message: 'User not found'});
	res.json(user);
});

app.post('/users', (req, res) => {
	const newUser = {
	id: users.length + 1,
	name: req.body.name,
	age: req.body.age
	};
	users.push(newUser);
	res.status(201).json(newUser);
});

app.put('/users/:id', (req, res) => {
	const user = users.find(u => u.id === parseInt(req.params.id));
	if(!user) return res.status(404).json({message: 'Not updated succesfully'});
	Object.assign(user, req.body);
	res.json(user);

});

app.delete('/users/:id', (req, res) => {
	users = users.filter(u => u.id !== parseInt(req.params.id));
	res.status(200).json({message: 'Deleted succesfully'});
});

app.listen(PORT, () => { 
 	console.log(`Server is working on http://localhost:${PORT}`);
});
