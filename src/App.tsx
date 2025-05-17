import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { EmotionProvider } from './contexts/EmotionContext';
import Layout from './components/layout/Layout';
import ChatPage from './pages/ChatPage';
import ProfilePage from './pages/ProfilePage';
import LearnPage from './pages/LearnPage';
import TherapyPage from './pages/TherapyPage';
import SettingsPage from './pages/SettingsPage';
import HomePage from './pages/HomePage';
import './styles/global.css';

function App() {
  return (
    <Router>
      <EmotionProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/learn" element={<LearnPage />} />
            <Route path="/therapy" element={<TherapyPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </Layout>
      </EmotionProvider>
    </Router>
  );
}

export default App;