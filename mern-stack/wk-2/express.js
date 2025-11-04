const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let books = [
	{ id: 1, title: 'The Hobbit', author: 'Mercy'},
	{ id: 2, title: 'Harry Potter', author: 'JK Rowling'}
];

app.post('/books', (req, res) => {
	const newBooks = {
	id: books.length + 1,
	title: req.body.title,
	author: req.body.author
	};
	books.push(newBooks);
	res.status(201).json(newBooks);
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
