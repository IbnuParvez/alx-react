const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const authorRouter = require('./routes/authorRouter');
const bookRouter = require('./routes/bookRouter');
const indexRouter = require('./routes/indexRouter');

app.use('/authors', authorRouter);
app.use('/books', bookRouter);
app.use('/', indexRouter);

app.listen(PORT, (error) => {
	if (error){
		throw error;
	}
	console.log(`Server is working at http://localhost:${PORT}`);
});
