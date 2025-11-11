const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;
const app = express();
const cors = require('cors');

dotenv.config();

app.use(express.json());
app.use(cors({origin: "http://localhost:5173",
		methods: ["GET", "POST", "PUT", "DELETE"],
		credentials: true
}));

connectDB();

app.use('/students', require('./routes/studentRoutes'));

app.get('/', (req, res) => { 
	res.send("Api server is up and running");
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
