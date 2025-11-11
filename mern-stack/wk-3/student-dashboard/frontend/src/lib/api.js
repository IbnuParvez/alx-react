const API = import.meta.env.VITE_API_URL;

export async function fetchStudents() {
	const res=await fetch(`${API}/students`);
	if(!res.ok)throw new Error("Failed to fetch");
	return res.json();
}

export async function createStudents(studentData) {
  const res = await fetch(`${API}/students`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(studentData),
  });

  if (!res.ok) {
    throw new Error(`Failed to create student: ${res.status}`);
  }

  return res.json();
}

export async function updateStudents(id, updatedData) {
  const res = await fetch(`${API}/students/${id}`, {
    method: "PUT", // or PATCH, depending on your backend
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData),
  });

  if (!res.ok) {
    throw new Error(`Failed to update student: ${res.status}`);
  }

  return res.json();
}

export async function deleteStudents(id) {
  const res = await fetch(`${API}/students/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error(`Failed to delete student: ${res.status}`);
  }

  return res.json();
}
