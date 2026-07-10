
function App() {
  const students = [
    {
      id: 1,
      name: "Manoj",
      age: 22,
      course: "React",
    },
    {
      id: 2,
      name: "Rahul",
      age: 21,
      course: "JavaScript",
    },
    {
      id: 3,
      name: "dhoni",
      age: 23,
      course: "HTML & CSS",
    },
  ];

  return (
    <div className="bg-yellow-300">
      <h1>Students List</h1>

      {students.map((student) => (
        <div key={student.id}>
          <h2>{student.name}</h2>
          <p>Age: {student.age}</p>
          <p>Course: {student.course}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;