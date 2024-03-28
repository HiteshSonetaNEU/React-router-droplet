import { useState } from 'react'
import './App.css'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Home from './Components/Home'
import Analytics from './Components/Analytics'
import Overview from './Components/Overview'
import Statistics from './Components/Statistics'
import Reports from './Components/Reports'
import Settings from './Components/Settings'
import History from './Components/History'
import UserProfile from './Components/UserProfile';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
          <div>
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home/> } />
              <Route path="/analytics" element={<Analytics/> } >
              <Route path="" element={<Overview/> } />
              <Route path="statistics" element={<Statistics/> } />
                </Route>
              <Route path="/reports" element={<Reports/> } />
              <Route path="/settings" element={<Settings/> } />
              <Route path="/user/:userId" element={
              <ProtectedRoute isAuthenticated={true} >
                <UserProfile />
              </ProtectedRoute>
              
            }
          />
          <Route path="/history" element={<History/> } />
            </Routes>
          </div>
        </Router>
    )
}

export default App
