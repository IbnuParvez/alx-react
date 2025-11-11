import { useState, useEffect } from 'react';
import StudentCard from '../components/StudentCard';
import StudentForm from '../components/StudentForm';
import { fetchStudents, createStudents, updateStudents, deleteStudents} from  '../lib/api';

export default function Home () {
	const [students, setStudents] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	useEffect(() => {
	(async() => {
	try {
		setLoading(true);
		const data = await fetchStudents();
		setStudents(data);
	} catch (error) {
		setError(error.message);
			}
	finally{setLoading(false);}
		})();
	}, []);


	async function handleAdd(student) {
		const created = await createStudent(student);
		setStudents(prev => [created, ...prev]);
	}

	async function handleEdit(st) {
	const updated = await updateStudent(st._id, st);
	setStudents(prev=>prev.map(x=>x._id===st._id?updated:x));
	}

	async function handleDelete(id) {
	await deleteStudent(id);
	setStudents(prev=> prev.filter(x=>x._id!==id));
	}

	return(
		<main>
		<StudentForm onSubmit="handleAdd"/>
		{loading&& <p>Loading...</p>}
		{error&& <p className="text-red-600">{error}</p>}
		{students.map(s=>
		<StudentCard key={s._id} student={s} onEdit={handleEdit} onDelete={handleDelete} />
		)}
		</main>
	);
}
