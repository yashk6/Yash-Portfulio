import { useNavigate } from 'react-router-dom';
import './Welcome.css';

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-screen">
      <div className="welcome-content">
        <h1 className="welcome-title">Welcome to PopX</h1>
        <p className="welcome-subtitle">
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit,
        </p>
        <button className="btn btn-primary" onClick={() => navigate('/register')}>
          Create Account
        </button>
        <button className="btn btn-secondary" onClick={() => navigate('/login')}>
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}