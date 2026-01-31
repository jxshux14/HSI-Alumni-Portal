import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import DashboardPage from './pages/DashboardPage'
import DirectoryPage from './pages/DirectoryPage'
import ViewProfile from './pages/directory/ViewProfile'
import CareerPage from './pages/CareerPage'
import TrainingPage from './pages/TrainingPage'
import AchievementsPage from './pages/AchievementsPage'
import EventsPage from './pages/EventsPage'
import AnnouncementsPage from './pages/AnnouncementsPage'
import CompanyNewsPage from './pages/announcements/CompanyNewsPage'
import PolicyChangesPage from './pages/announcements/PolicyChangesPage'
import PartnershipsPage from './pages/announcements/PartnershipsPage'
import AlumniStoriesPage from './pages/announcements/AlumniStoriesPage'
import MentorshipPage from './pages/MentorshipPage'
import DocumentsPage from './pages/DocumentsPage'
import ProfilePage from './pages/ProfilePage'
import { ChatProvider } from './context/ChatContext'
import ChatBox from './components/ChatBox'

export default function App() {
  return (
    <ChatProvider>
      <MainLayout>
        <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/directory" element={<DirectoryPage />} />
          <Route path="/directory/view-profile" element={<ViewProfile />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/announcements" element={<AnnouncementsPage />} />
          <Route path="/announcements/company-news" element={<CompanyNewsPage />} />
          <Route path="/announcements/policy-changes" element={<PolicyChangesPage />} />
          <Route path="/announcements/partnerships" element={<PartnershipsPage />} />
          <Route path="/announcements/alumni-stories" element={<AlumniStoriesPage />} />
          <Route path="/mentorship" element={<MentorshipPage />} />
          <Route path="/documents" element={<DocumentsPage />} />
          <Route path="/profile" element={<ProfilePage />} />

          <Route path="/" element={<Navigate to="/directory" replace />} />
          <Route path="*" element={<Navigate to="/directory" replace />} />
        </Routes>
      </MainLayout>
      <ChatBox />
    </ChatProvider>
  )
}
