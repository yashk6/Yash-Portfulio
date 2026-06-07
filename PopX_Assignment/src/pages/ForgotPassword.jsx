import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthForm.css';

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="auth-screen" style={{ justifyContent: 'center', alignItems: 'center', gap: 16 }}>
        <div style={{ fontSize: 52, textAlign: 'center' }}>✉️</div>
        <h2 className="auth-title" style={{ textAlign: 'center' }}>Link Sent</h2>
        <p className="auth-subtitle" style={{ textAlign: 'center', marginBottom: 32 }}>
          If <strong>{email}</strong> is registered, a reset link has been sent. Please check your inbox.
        </p>
        <button className="submit-btn active" style={{ width: '100%' }} onClick={() => navigate('/login')}>
          Back to Login
        </button>
      </div>
    );
  }

  return (
    <div className="auth-screen">
      <button className="back-btn" onClick={() => navigate(-1)}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <div className="auth-header" style={{ marginTop: 12 }}>
        <h1 className="auth-title">Forgot<br />Password?</h1>
        <p className="auth-subtitle">
          Enter your registered email and we'll send you a reset link if the account exists.
        </p>
      </div>

      <form className="auth-form" onSubmit={handleSubmit}>
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
        <div className="submit-area" style={{ marginTop: 180 }}>
          <button type="submit" className={`submit-btn ${email.trim() ? 'active' : ''}`} disabled={!email.trim()}>
            Send Reset Link
          </button>
        </div>
      </form>
    </div>
  );
}