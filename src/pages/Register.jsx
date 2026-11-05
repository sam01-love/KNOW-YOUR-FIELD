import { useNavigate, Link } from 'react-router-dom'
import AuthShell from '../components/AuthShell.jsx'
export default function Register() {
  const go = useNavigate()
  return (
    <AuthShell title="Create account" sub="Start your journey today" aside="Your future starts here!">
      <form className="form" onSubmit={e => { e.preventDefault(); go('/dashboard') }}>
        <label>Full name<input required placeholder="Enter your full name" /></label>
        <label>Email address<input required type="email" placeholder="you@example.com" /></label>
        <label>Password<input required type="password" minLength={6} placeholder="Create a password" /></label>
        <label>Education level<select defaultValue=""><option value="" disabled>Select level</option><option>Secondary school</option><option>University student</option><option>Graduate</option></select></label>
        <label>Interested field<select defaultValue=""><option value="" disabled>Select field</option><option>Engineering</option><option>Health</option><option>Business</option><option>Technology</option></select></label>
        <button className="btn block">Create account</button>
        <p className="center">Already have an account? <Link to="/login">Sign in</Link></p>
      </form>
    </AuthShell>
  )
}
