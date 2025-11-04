const express = require('express');
const app = express();
app.use(express.json());

let users = [
	{ id: 1, name: 'Abu', age: 21},
	{ id: 2, name: 'Swabrina', age: 17}
];

app.get('/users', (req, res) => { 
	res.json(users);
});

app.get('/users:id', (req, res) => {
	const user = users.find(u => u.id === parseInt(req.params.id));
	if(!user) return res.status(404).json({message: 'User not found'});
	res.json(user);
});

app.listen(PORT, (req, res) => { 
 	console.log(`Server is working on http://localhost:${PORT}`);
});
