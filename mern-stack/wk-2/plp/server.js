const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 3000;
const app = express();

dotenv.config();

app.use(express.json());

connectDB();

app.use('/students', require('./routes/studentRoutes'));

app.get('/', (req, res) => { 
	res.send("Api server is up and running");
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
