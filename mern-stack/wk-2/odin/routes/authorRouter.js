const { Router } = require('express');
const { getAuthorById } = require('../controllers/authorController');

const authorRouter = Router();

authorRouter.get('/', (req, res) => {res.send("All authors!")});
authorRouter.get('/:authorId', (req, res) => {
	const { authorId } = req.params;
	res.send(`THe Author ID : ${authorId}`);
});
authorRouter.get('/:authorId', getAuthorById);

module.exports = authorRouter;
