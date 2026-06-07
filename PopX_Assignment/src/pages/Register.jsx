import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthForm.css';

function getMissingRules(pwd) {
  const missing = [];
  if (!pwd || pwd.length < 8) missing.push('At least 8 characters');
  if (!pwd || !/[A-Z]/.test(pwd)) missing.push('One uppercase letter');
  if (!pwd || !/[0-9]/.test(pwd)) missing.push('One number');
  if (!pwd || !/[^A-Za-z0-9]/.test(pwd)) missing.push('One special character');
  return missing;
}

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ fullName: '', phone: '', email: '', password: '', company: '', isAgency: '' });
  const [showPass, setShowPass] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const missing = getMissingRules(form.password);
  const showHints = submitted && missing.length > 0;

  const handleChange = (e) => {
    if (e.target.name === 'phone') {
      const digits = e.target.value.replace(/\D/g, '').slice(0, 10);
      setForm({ ...form, phone: digits });
      if (errors.phone) setErrors({ ...errors, phone: '' });
      return;
    }
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = 'Full name is required.';
    if (!form.phone.trim()) e.phone = 'Phone number is required.';
    else if (form.phone.length !== 10) e.phone = 'Enter a valid 10-digit phone number.';
    if (!form.email.trim()) e.email = 'Email address is required.';
    if (missing.length > 0) e.password = 'Password does not meet requirements.';
    if (!form.isAgency) e.isAgency = 'Please select an option.';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    navigate('/account', { state: { name: form.fullName, email: form.email } });
  };

  return (
    <div className="auth-screen">
      <div className="auth-header">
        <h1 className="auth-title">Create your<br />PopX account</h1>
      </div>

      <form className="auth-form" onSubmit={handleSubmit}>

        <div className="field-group">
          <label className="field-label required">Full Name</label>
          <input className={`field-input ${errors.fullName ? 'has-error' : ''}`} type="text" name="fullName" placeholder="Marry Doe" value={form.fullName} onChange={handleChange} />
          {errors.fullName && <span className="field-error">{errors.fullName}</span>}
        </div>

        <div className="field-group">
          <label className="field-label required">Phone number</label>
          <input className={`field-input ${errors.phone ? 'has-error' : ''}`} type="tel" name="phone" placeholder="10-digit number" value={form.phone} onChange={handleChange} maxLength={10} />
          {errors.phone && <span className="field-error">{errors.phone}</span>}
        </div>

        <div className="field-group">
          <label className="field-label required">Email address</label>
          <input className={`field-input ${errors.email ? 'has-error' : ''}`} type="email" name="email" placeholder="example@email.com" value={form.email} onChange={handleChange} />
          {errors.email && <span className="field-error">{errors.email}</span>}
        </div>

        <div className="field-group">
          <label className="field-label required">Password</label>
          <div className="input-wrapper">
            <input
              className={`field-input ${errors.password ? 'has-error' : ''}`}
              type={showPass ? 'text' : 'password'}
              name="password"
              placeholder="Enter password"
              value={form.password}
              onChange={handleChange}
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
          {showHints && (
            <ul className="pwd-hints">
              {missing.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
          )}
          {errors.password && <span className="field-error">{errors.password}</span>}
        </div>

        <div className="field-group">
          <label className="field-label">Company name</label>
          <input className="field-input" type="text" name="company" placeholder="Your company" value={form.company} onChange={handleChange} />
        </div>

        <div className="field-group">
          <label className="field-label required">Are you an Agency?</label>
          <div className="radio-group">
            {['yes', 'no'].map((val) => (
              <label key={val} className="radio-option">
                <input type="radio" name="isAgency" value={val} checked={form.isAgency === val} onChange={handleChange} />
                <span className="radio-custom" />
                {val.charAt(0).toUpperCase() + val.slice(1)}
              </label>
            ))}
          </div>
          {errors.isAgency && <span className="field-error">{errors.isAgency}</span>}
        </div>

        <div className="submit-area">
          <button type="submit" className="submit-btn active">Create Account</button>
        </div>

      </form>
    </div>
  );
}