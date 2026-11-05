import { useState } from 'react'
import { NavLink, Outlet, Link } from 'react-router-dom'
import Logo from './Logo.jsx'
const links = [['/dashboard', '🏠', 'Dashboard'], ['/fields', '🧭', 'Explore fields'], ['/universities', '🏛️', 'Universities'],
  ['/skills', '🛠️', 'Skills'], ['/roadmap', '🗺️', 'Career roadmap'], ['/news', '📰', 'Industry news'],
  ['/opportunities', '💼', 'Opportunities'], ['/profile', '👤', 'Profile'], ['/settings', '⚙️', 'Settings']]
export default function AppShell() {
  const [open, setOpen] = useState(false)
  return (
    <div className="shell">
      <aside className={'side' + (open ? ' open' : '')}>
        <Logo light />
        <nav onClick={() => setOpen(false)}>
          {links.map(([to, i, l]) => <NavLink key={to} to={to}><span>{i}</span>{l}</NavLink>)}
          <Link to="/login"><span>↩</span>Log out</Link>
        </nav>
      </aside>
      <div className="main">
        <div className="appbar">
          <button className="burger" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>☰</button>
          <input className="search" placeholder="Search fields, universities…" aria-label="Search" />
          <Link to="/profile" className="avatar" aria-label="Profile">AS</Link>
        </div>
        <main className="content"><Outlet /></main>
      </div>
    </div>
  )
}
