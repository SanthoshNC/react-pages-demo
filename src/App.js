import logo from './logo.svg';
import './App.css';

function App() {
  const student = {
    name: 'John Doe',
    age: 21,
    bio: 'A computer science student who loves coding and open-source contributions.'
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Student Details</h1>
        <div className="student-info">
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Age:</strong> {student.age}</p>
          <p><strong>Bio:</strong> {student.bio}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
