const { Router } = require('express');
const authorRouter = Router();

authorRouter.get('/author', (req, res) => {res.send("All authors!")});
authorRouter.get('/:authorId', (req, res) => {
	const { authorId } = req.params;
	res/send(`THe Author ID : ${authorId}`);
});

module.exports = authorRouter;
