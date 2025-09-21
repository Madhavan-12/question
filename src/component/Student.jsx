import { useState } from "react";

const Student = () => {
  const [student, setStudent] = useState({
    name: "Sudhan",
    course: "MERN",
  });

  const handleChange = (e) => {
    setStudent({ ...student, name: e.target.value });
  };

  return (
    <div>
      <h2>Student Details</h2>
      <input
        type="text"
        placeholder="Enter student name"
        value={student.name}
        onChange={handleChange}
      />
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Course:</strong> {student.course}</p>
    </div>
  );
};

export default Student;
