import { useState } from "react";

function StudentList({ students, onUpdate, onDelete }) {
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editCourse, setEditCourse] = useState("");

  const startEdit = (student) => {
    setEditingId(student.id);
    setEditName(student.name);
    setEditCourse(student.course);
  };

  const saveEdit = (id) => {
    onUpdate(id, { name: editName, course: editCourse });
    setEditingId(null);
  };

  return (
    <div>
      <h2>Student List</h2>
      {students.map((student) => (
        <div key={student.id} style={{ marginBottom: "10px" }}>
          {editingId === student.id ? (
            <>
              <input
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              />
              <input
                value={editCourse}
                onChange={(e) => setEditCourse(e.target.value)}
              />
              <button onClick={() => saveEdit(student.id)}>Save</button>
              <button onClick={() => setEditingId(null)}>Cancel</button>
            </>
          ) : (
            <>
              {student.name} - {student.course}
              <button onClick={() => startEdit(student)}>Edit</button>
              <button onClick={() => onDelete(student.id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default StudentList;
