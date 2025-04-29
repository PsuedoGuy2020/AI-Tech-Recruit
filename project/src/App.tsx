import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Dashboard from './pages/Dashboard';
import JobsPage from './pages/JobsPage';
import CandidatesPage from './pages/CandidatesPage';
import InterviewsPage from './pages/InterviewsPage';
import SettingsPage from './pages/SettingsPage';
import { UserProvider } from './context/UserContext';
import ProtectedRoute from './components/common/ProtectedRoute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route 
            path="/login" 
            element={
              <LoginPage onLogin={handleLogin} />
            } 
          />
          <Route path="/signup" element={<SignupPage />} />

          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Dashboard onLogout={handleLogout} />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/jobs" 
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <JobsPage onLogout={handleLogout} />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/candidates" 
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <CandidatesPage onLogout={handleLogout} />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/interviews" 
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <InterviewsPage onLogout={handleLogout} />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/settings" 
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <SettingsPage onLogout={handleLogout} />
              </ProtectedRoute>
            } 
          />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;