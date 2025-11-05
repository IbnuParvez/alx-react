const express = require('express');
const path = require('node:path');
const app = express();
const PORT = 3000;

app.use(express.json());

const authorRouter = require('./routes/authorRouter');
const bookRouter = require('./routes/bookRouter');
const indexRouter = require('./routes/indexRouter');
const links = [
	{ href: "/", text: "Home"},
	{ href: "about", text: "About"},
];
const users = ["Rose", "Cake", "Biff"];

app.set('views', path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use('/authors', authorRouter);
app.use('/books', bookRouter);
app.use('/', indexRouter);
app.use((req, res, next) => {
  throw new Error("OH NO!");
});
app.get('/', (req, res) => {
	res.render('index', { links: links, users: users });
});
app.user((err, req, res, next) => {
	console.error(err);
	res.status(500).send(err);
});
app.listen(PORT, (error) => {
	if (error){
		throw error;
	}
	console.log(`Server is working at http://localhost:${PORT}`);
});
