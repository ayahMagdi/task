import './App.css';
import Content from './components/Content';
import LeftContent from './components/LeftContent';
import Sidebar from './components/Sidebar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import TasksContent from './components/TasksContent';
import Login from './pages/Login';
import StatisticsPage from './pages/StatisticsPage';
import DailyTasksPage from './pages/DailyTasksPage';

function App() {
  return (
    <div className="App">
      <Router>
            <div className='flex'>
                <Sidebar />
                  <Routes>
                     <Route exact path="/" element={<Content />} />
                     <Route path="/tasks" element={<TasksContent />} />
                     <Route path="/statistics" element={<StatisticsPage />} />
                     <Route path="/dailytasks" element={<DailyTasksPage />} />
                     <Route path="/login" element={<Login />} />
                  </Routes>
                <LeftContent />
            </div>
      </Router>
    </div>
  );
}

export default App;
