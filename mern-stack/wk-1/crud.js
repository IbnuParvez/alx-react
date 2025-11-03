const { connectDB, mongoose } = require('./db');
const { User } = require('./models/user');
const { Task } = require('./models/task');

async function main(){
	await connectDB();

	const john = await User.create({ name: "John onyango", email: "john,plp"});
	console.log("Created", john);

	const users = await User.find().select("name email");
	console.log("Users", users);
	console.log("All users are ok");

	await mongoose.disconnect();
}

main();
