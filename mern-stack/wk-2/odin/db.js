const authors = [
	{ id: 1, name: "Abu"},
	{ id: 2, name: "Ali"},
	{ id: 3, name: "Habibi"]
];

async function getAuthorById(authorId) {
	return authors.find(author => author.id === authorId);
};

module.exports = {getAuthorById}
