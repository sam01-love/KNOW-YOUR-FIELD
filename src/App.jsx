import { Routes, Route, Navigate } from 'react-router-dom'
import PublicLayout from './components/PublicLayout.jsx'
import AppShell from './components/AppShell.jsx'
import Landing from './pages/Landing.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import ExploreFields from './pages/ExploreFields.jsx'
import FieldDetails from './pages/FieldDetails.jsx'
import Universities from './pages/Universities.jsx'
import Skills from './pages/Skills.jsx'
import Roadmap from './pages/Roadmap.jsx'
import News from './pages/News.jsx'
import Opportunities from './pages/Opportunities.jsx'
import Profile from './pages/Profile.jsx'
import Settings from './pages/Settings.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}><Route path="/" element={<Landing />} /></Route>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route element={<AppShell />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/fields" element={<ExploreFields />} />
        <Route path="/fields/:id" element={<FieldDetails />} />
        <Route path="/universities" element={<Universities />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/news" element={<News />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
