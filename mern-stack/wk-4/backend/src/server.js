const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { connectDB } = require('./config/db');
const noteRouter = require('./routes/notes');

dotenv.config();
const app = express();

app.use(cors({
  origin: process.env.ALLOWED_ORIGIN,
  methods: ["GET", "POST", "PUT", "DELETE"]
  }));

app.use(express.json());

app.get("/", (req, res) => res.send("NOTES API IS OK BOSS!"));

app.use('/api/notes', noteRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`The app is runnning on server at http://localhost:${PORT}`));