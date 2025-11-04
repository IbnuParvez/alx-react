const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
	res.send('Hello, Express Js!');
});

app.get('/about', (req, res) => {
	res.send('About us page');
});

app.get('/user/:id', (req, res) => {
	res.send(`User ID: ${req.params.id}`);
});

app.get('/search', (req, res) => {
	const query = req.query.q;
	res.send(`Search results for: ${query}`);
});

app.listen(PORT, () => {
	console.log(`server is running on http://localhost:${PORT}`);
});
