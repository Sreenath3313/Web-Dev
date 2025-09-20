/*import { useState } from "react";

function StudentForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Student Registered!\nName: ${formData.name}\nEmail: ${formData.email}\nCourse: ${formData.course}`);
    setFormData({ name: "", email: "", course: "" });
  };

  return (
    <div>
      <h2>Student Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <label>Course: </label>
          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default StudentForm;*/
import { useState } from "react";

function StudentForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    background: "", // new field
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Student Registered!\nName: ${formData.name}\nEmail: ${formData.email}\nCourse: ${formData.course}\nBackground: ${formData.background}`
    );
    setFormData({ name: "", email: "", course: "", background: "" });
  };

  return (
    <div>
      <h2>Student Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Course: </label>
          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Background: </label><br />
          <label>
            <input
              type="radio"
              name="background"
              value="Intermediate"
              checked={formData.background === "Intermediate"}
              onChange={handleChange}
              required
            />
            Intermediate
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="background"
              value="Diploma"
              checked={formData.background === "Diploma"}
              onChange={handleChange}
            />
            Diploma
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="background"
              value="Other"
              checked={formData.background === "Other"}
              onChange={handleChange}
            />
            Other
          </label>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default StudentForm;

