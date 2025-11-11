import { useState } from 'react';

export default function StudentCard({ student, onEdit, onDelete}){
	const [edit, setEdit] = useState(false);
	const [draft, setDraft] = useState(student);

	return(
	<div className="rounded-xl border bg-white p-4 shadow-sm">
		{!edit ? (
		<>
		<div className="justify-between">
		<h3 className="text-lg font-semibold">{student.name}</h3>
		<p className="text-slate-600 text-sm">{student.email}</p>
		<p className="text-slate-600 text-sm">Age: {student.age}</p>
		</div>
		<div className="flex gap-2">
		<button onClick={() => setEdit(true)} className="border px-3 py-1 rounded-lg text-sm">Edit</button>
		<button onClick={() => onDelete(student._id)} className="bg-red-600 text-white border px-3 py-1 rounded-lg text-sm">Delete</button>
		</div>
		</>
		):(
		<form>
			<input 
			className="border rounded-lg px-3 py-1 w-full mb-2"
			value={draft.name}
			onChange={e => setDraft({ ...draft, name:e.target.value})}/>
			<input className="border rounded-lg px-3 py-1 w-full mb-2"
                        value={draft.email}
                        onChange={e => setDraft({ ...draft, email:e.target.value})}/>
			<input className="border rounded-lg px-3 py-1 w-full mb-2"
                        value={draft.age}
                        onChange={e => setDraft({ ...draft, age:Number(e.target.value)})}/>

			<div className="flex gap-2 mt-2">
			<button type="button" onClick={() => { onEdit(draft); setEdit(false); }} className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm">Save</button>
			<button type="button" onClick={() => setEdit(false)} className="border px-3 py-1 rounded-lg text-sm">Cancel</button>
			</div>
		</form>
		)}
	</div>
	);
}
