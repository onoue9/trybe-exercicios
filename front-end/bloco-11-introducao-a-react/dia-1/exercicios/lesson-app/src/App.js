import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const arrayTask = ['Tomar banho', 'Tomar Café', 'Estudar', 'Almoçar'];

function App() {
  return (    
    arrayTask.map((task) => Task(task))
  );
}

export default App;
