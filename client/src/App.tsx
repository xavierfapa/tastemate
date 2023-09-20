import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthProvider from './context/AuthContext';

import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import RecipiesPage from './pages/RecipiesPage'
import HomePage from './pages/HomePage'

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/recipies" element={<RecipiesPage />} />
          {/* <Route path="/add-recipie" element={<RecipieFormPage />} />
          <Route path="/profile" element={<ProfilePage />} /> */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
