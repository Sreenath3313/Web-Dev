import { useState, useEffect } from "react";
import axios from "axios";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";
import './assets/css/style.css'; 

const API_URL = "http://localhost:8080/students";

function App() {
  const [students, setStudents] = useState([]);

  // Fetch all students
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const res = await axios.get(API_URL);
    setStudents(res.data);
  };

  const addStudent = async (student) => {
    await axios.post(API_URL, student);
    fetchStudents();
  };

  const updateStudent = async (id, updatedStudent) => {
    await axios.put(`${API_URL}/${id}`, updatedStudent);
    fetchStudents();
  };

  const deleteStudent = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchStudents();
  };

  return (
    <div className="app-container">
      <h1>Student Management</h1>
      <StudentForm onAdd={addStudent} />
      <StudentList
        students={students}
        onUpdate={updateStudent}
        onDelete={deleteStudent}
      />
    </div>
  );
}

export default App;
