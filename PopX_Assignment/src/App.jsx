import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Welcome         from './pages/Welcome';
import Login           from './pages/Login';
import Register        from './pages/Register';
import ForgotPassword  from './pages/ForgotPassword';
import AccountSettings from './pages/AccountSettings';

export default function App() {
  return (
    <BrowserRouter>
      <div className="mobile-shell">
        <Routes>
          <Route path="/"                element={<Welcome />} />
          <Route path="/login"           element={<Login />} />
          <Route path="/register"        element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/account"         element={<AccountSettings />} />
          <Route path="*"                element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
