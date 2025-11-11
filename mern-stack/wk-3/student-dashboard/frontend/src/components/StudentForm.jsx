import { useState, useEffect } from 'react';

export default function StudentForm({onSubmit}){

const [ form, setForm ] = useState({name:"", email:"", age:""});

const handleChange = e => {
	const { name,value } = e.target;
	setForm(f => ({ ...f, [name]: value }));
};

const handleSubmit = e => {
	 e.preventDefault();
	 if(!form.name || !form.email || !form.age) return;

	onSubmit({...form, age:Number(form.age)});
	setForm({name: "", email: "", age: ""});
};

	return(
		<form onSubmit={handleSubmit} className="rounded-xl border bg-white p-4 flex flex-wrap gap-2">
			<input 
			name="name"
			value={form.name} 
			onChange={handleChange} 
			placeholder="Name"	
			className="border rounded-lg px-3 py-2 flex-1"/>
			
			<input
			name="email"
			value={form.email}
			onChange={handleChange}
			placeholder="Email"
			className="border rounded-lg px-3 py-2 flex-1"/>

			<input
			name="age"
                        value={form.age}
                        onChange={handleChange}
                        placeholder="Age"
                        className="border rounded-lg px-3 py-2 w-24"/>

			<button className="bg-blue-600 text-white rounded-lg px-4 py-4 hover:bg-blue-700">Add</button>
		</form>
	);
}
