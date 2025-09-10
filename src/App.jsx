import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ModeProvider } from './context/ModeContext';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import FeedPage from './pages/FeedPage_new';
import ProfilePage from './pages/ProfilePage';
import RoadmapPage from './pages/RoadmapPage';

import QuizPage from './pages/QuizPage';
import ResearchPage from './pages/ResearchPage';
import CareerPage from './pages/CareerPage_new';
import DashboardPage from './pages/DashboardPage';
import AIToolsPage from './pages/AIToolsPage';
import CompilerPage from './pages/CompilerPage';
import GamifiedPage from './pages/GamifiedPage';
import StudyPage from './pages/StudyPage';
import IdeasPage from './pages/IdeasPage';
import ATSResumeBuilder from './pages/ATSResumeBuilder';
import InternshipPage from './pages/InternshipPage_new';
import HackathonPage from './pages/HackathonPage';
import HelpSupportPage from './pages/HelpSupportPage';

// Protected Route component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-800 font-medium">Loading...</p>
        </div>
      </div>
    );
  }
  
  return isAuthenticated ? children : <Navigate to="/auth" replace />;
};

function AppContent() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/roadmap" element={<RoadmapPage />} />
            <Route path="/quiz" element={<QuizPage />} />
            
            {/* Protected Routes */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            } />
            <Route path="/library" element={
              <ProtectedRoute>
                <StudyPage />
              </ProtectedRoute>
            } />
            <Route path="/ai-tools" element={
              <ProtectedRoute>
                <AIToolsPage />
              </ProtectedRoute>
            } />
            <Route path="/ideas" element={
              <ProtectedRoute>
                <IdeasPage />
              </ProtectedRoute>
            } />
            <Route path="/compiler" element={
              <ProtectedRoute>
                <CompilerPage />
              </ProtectedRoute>
            } />
            <Route path="/gamified" element={
              <ProtectedRoute>
                <GamifiedPage />
              </ProtectedRoute>
            } />
            <Route path="/feed" element={
              <ProtectedRoute>
                <FeedPage />
              </ProtectedRoute>
            } />
            <Route path="/internships" element={
              <ProtectedRoute>
                <InternshipPage />
              </ProtectedRoute>
            } />
            <Route path="/hackathons" element={
              <ProtectedRoute>
                <HackathonPage />
              </ProtectedRoute>
            } />
            <Route path="/profile" element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            } />
            
            <Route path="/research" element={
              <ProtectedRoute>
                <ResearchPage />
              </ProtectedRoute>
            } />
            <Route path="/career" element={
              <ProtectedRoute>
                <CareerPage />
              </ProtectedRoute>
            } />
            
            {/* Resume Builder route */}
            <Route path="/resume-builder" element={
              <ProtectedRoute>
                <ATSResumeBuilder />
              </ProtectedRoute>
            } />

            {/* Help & Support route */}
            <Route path="/help-support" element={
              <ProtectedRoute>
                <HelpSupportPage />
              </ProtectedRoute>
            } />

            {/* Fallback route - Redirect to home instead of causing 404 */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function App() {
  return (
    <AuthProvider>
      <ModeProvider>
        <AppContent />
      </ModeProvider>
    </AuthProvider>
  );
}

export default App;
