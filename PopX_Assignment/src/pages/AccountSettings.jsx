import { useLocation, useNavigate } from 'react-router-dom';
import './AccountSettings.css';

export default function AccountSettings() {
  const location = useLocation();
  const navigate  = useNavigate();
  const name  = location.state?.name  || 'Marry Doe';
  const email = location.state?.email || 'Marry@Gmail.Com';

  const handleLogout = () => {
    navigate('/', { replace: true });
  };

  return (
    <div className="account-screen">
      <div className="account-header">
        <span className="account-header-title">Account Settings</span>
        <button className="logout-btn" onClick={handleLogout}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
            <polyline points="16 17 21 12 16 7"/>
            <line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
          Logout
        </button>
      </div>

      <div className="profile-section">
        <div className="avatar-wrapper">
          <img className="avatar-img" src="https://i.pravatar.cc/150?img=47" alt="Profile" />
          <button className="camera-btn" aria-label="Change photo">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
              <circle cx="12" cy="13" r="4"/>
            </svg>
          </button>
        </div>
        <div className="profile-info">
          <p className="profile-name">{name}</p>
          <p className="profile-email">{email}</p>
        </div>
      </div>

      <div className="divider" />

      <div className="bio-section">
        <p className="bio-text">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing
          Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut
          Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>

      <div className="divider" />
    </div>
  );
}