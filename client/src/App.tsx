import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthProvider from './context/AuthContext';

import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import RecipiesFormPage from './pages/RecipiesFormPage'
import HomePage from './pages/HomePage'
import InitialPage from './pages/InitialPage';
import ProfilePage from './pages/ProfilePage';
import UserRecipiesPage from './pages/UserRecipiesPage';
import UniqueRecipiePage from './pages/UniqueRecipiePage';


function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/initial" element={<InitialPage />} />
          <Route path="/recipies-form" element={<RecipiesFormPage />} />
          <Route path="/user-recipies" element={<UserRecipiesPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/unique-recipie/:recipieId" element={<UniqueRecipiePage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
