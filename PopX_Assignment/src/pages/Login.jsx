import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './AuthForm.css';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [error, setError]       = useState('');

  const isActive = email.trim() && password.trim();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    if (password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }
    navigate('/account', { state: { email } });
  };

  return (
    <div className="auth-screen">
      <div className="auth-header">
        <h1 className="auth-title">Signin to your<br />PopX account</h1>
        <p className="auth-subtitle">
          Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
        </p>
      </div>

      <form className="auth-form" onSubmit={handleLogin}>
        <div className="field-group">
          <label className="field-label">Email Address</label>
          <input
            className="field-input"
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="field-group">
          <label className="field-label">Password</label>
          <div className="input-wrapper">
            <input
              className="field-input"
              type={showPass ? 'text' : 'password'}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="button" className="eye-btn" onClick={() => setShowPass(!showPass)}>
              {showPass ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                  <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                  <line x1="1" y1="1" x2="23" y2="23"/>
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              )}
            </button>
          </div>
        </div>

        {error && <p className="error-msg">{error}</p>}

        <div className="forgot-row">
          <Link to="/forgot-password" className="forgot-link">Forgot Password?</Link>
        </div>

        <div className="submit-area">
          <button type="submit" className={`submit-btn ${isActive ? 'active' : ''}`} disabled={!isActive}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}