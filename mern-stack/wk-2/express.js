const express = require('express');
const swaggerDocs = require('./swaggerConfig');
const app = express();
const PORT = 3000;

const userRoutes = require('./routes');

app.use(express.json());
//initialize swagger
swaggerDocs(app);

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
	console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});
