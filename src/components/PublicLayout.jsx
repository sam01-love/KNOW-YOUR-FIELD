import { useState } from 'react'
import { NavLink, Link, Outlet } from 'react-router-dom'
import Logo from './Logo.jsx'
export default function PublicLayout() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <header className="topbar">
        <Logo />
        <button className="burger" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>☰</button>
        <nav className={'topnav' + (open ? ' open' : '')} onClick={() => setOpen(false)}>
          <NavLink to="/">Home</NavLink><NavLink to="/fields">Fields</NavLink><NavLink to="/universities">Universities</NavLink>
          <NavLink to="/news">News</NavLink><NavLink to="/skills">Skills</NavLink>
          <Link className="btn ghost" to="/login">Sign in</Link><Link className="btn" to="/register">Register</Link>
        </nav>
      </header>
      <Outlet />
      <footer className="footer"><Logo light /><p>Your academic and career compass.</p></footer>
    </>
  )
}
