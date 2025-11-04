//connection file

const mongoose = require('mongoose');
require('dotenv').config();

async function connectDB(){
	await mongoose.connect(process.env.MONGODBATLAS_URI);
	console.log("Connected to MOngoDb");
}

module.exports = { connectDB, mongoose};

