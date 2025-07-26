 import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
 import ProjectsPage from './pages/ProjectsPage';
 import TasksPage from './pages/TasksPage';
 import { ThemeProvider } from '@mui/material';
import { useSelector } from 'react-redux';
import lightTheme from './theme/lightTheme';
import darkTheme from './theme/darkTheme';
import { useDispatch } from 'react-redux';
import { toggleTheme } from './features/themes/themeSlice';


function App() {
  const theme = useSelector((state) => state.themes.theme);
  const dispatch = useDispatch();
  const themeState = useSelector((state) => state.themes);

  return (
   <div className="App">
      {/* Navigation Bar */}
      <ThemeProvider theme={theme === "Light" ? darkTheme:lightTheme}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/projects">Projects</Link>
      </nav>
      <button onClick = {dispatch(toggleTheme(themeState))}>Switch to {theme === 'Light' ? 'Dark': 'Light'} Theme</button>

      <header className="App-header">
        {/* Route Configuration */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </header>
      </ThemeProvider>
    </div>
  );
}

export default App;
