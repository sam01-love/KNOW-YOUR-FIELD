import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
export default function AuthShell({ title, sub, aside, children }) {
  return (
    <div className="auth">
      <section className="auth-side">
        <Logo light />
        <h2>{aside}</h2>
        <ul><li>Explore career paths</li><li>Get admission insights</li><li>Build skills</li><li>Find opportunities</li></ul>
      </section>
      <section className="auth-form">
        <h1>{title}</h1><p className="muted">{sub}</p>
        {children}
        <p className="center muted">or continue with</p>
        <div className="row"><button className="btn ghost" type="button">Google</button><button className="btn ghost" type="button">Facebook</button></div>
        <p className="center"><Link to="/">← Back to home</Link></p>
      </section>
    </div>
  )
}
