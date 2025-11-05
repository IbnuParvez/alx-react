const db = require('../db');
const CustomNotFoundError = require('../errors/customNotFoundError');

async function getAuthorById(req, res) {
	const { authorId } = req.params;
	
	try {
	const author = await db.getAuthorbyId(parseInt(authorId));

	if (!author) {
	res.status(404).json({"THe author is not found"});
	return;
	}

	res.send(`Author Name: ${author.name}`);
	} catch (error) {
		console.error("Error retrieving author: ", error);
		res.status(500).json({"Internal Server Error});
	}
};

module.exports = { getAuthorById };
