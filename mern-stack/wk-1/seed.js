const { connectDB, mongoose } = require('./db');
const { User } = require('./models/user');
const { Task } = require('./models/task');

async function main(){
 	await connectDB();

	await User.deleteMany({});
	await Task.deleteMany({});

	await User.insertMany([
		{ name: "Abu", email:"abu@gmail.com", role:"admin" },
		{ name: "ALi", email:"ali@gmail.com" }
	]);

	await Task.insertMany([
		{ title: "Write Proposal", status: "to do", owner: "Abu" },
		{ title: "Design Schema", status: "in progress", owner: "ALi" }
	]);

	console.log("Data populated");
	await mongoose.disconnect();
}

main();
