import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthProvider from './context/AuthContext';
import RecipiesProvidier from './context/RecipiesContext';
import { MatchProvider } from './context/MatchContext';

import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import RecipiesFormPage from './pages/RecipiesFormPage'
import HomePage from './pages/HomePage'
import InitialPage from './pages/InitialPage';
import ProfilePage from './pages/ProfilePage';
import UserRecipiesPage from './pages/UserRecipiesPage';
import UniqueRecipiePage from './pages/UniqueRecipiePage';
import MessageHomePage from './pages/MessagesHomePage';
import MessagesChatPage from './pages/MessagesChatPage';

function App() {

  return (
    <AuthProvider>
      <RecipiesProvidier>
        <MatchProvider>
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
              <Route path="/messages" element={<MessageHomePage />} />
              <Route path="/messages-chat/:receiverId" element={<MessagesChatPage />} />
            </Routes>
          </BrowserRouter>
        </MatchProvider>
      </RecipiesProvidier>
    </AuthProvider>
  )
}

export default App
