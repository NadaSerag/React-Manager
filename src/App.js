 import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
 import ProjectsPage from './pages/ProjectsPage';
 import TasksPage from './pages/TasksPage';


function App() {
  return (
   <div className="App">
      {/* Navigation Bar */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/projects">Projects</Link>
      </nav>
      <header className="App-header">
        {/* Route Configuration */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
