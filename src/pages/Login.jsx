import { useNavigate, Link } from 'react-router-dom'
import AuthShell from '../components/AuthShell.jsx'
export default function Login() {
  const go = useNavigate()
  return (
    <AuthShell title="Welcome back" sub="Sign in to continue your journey" aside="Pick up where you left off.">
      <form className="form" onSubmit={e => { e.preventDefault(); go('/dashboard') }}>
        <label>Email address<input required type="email" placeholder="you@example.com" /></label>
        <label>Password<input required type="password" placeholder="Enter your password" /></label>
        <div className="row between"><label className="check"><input type="checkbox" defaultChecked /> Remember me</label><a href="#forgot">Forgot password?</a></div>
        <button className="btn block">Sign in</button>
        <p className="center">New here? <Link to="/register">Create account</Link></p>
      </form>
    </AuthShell>
  )
}
