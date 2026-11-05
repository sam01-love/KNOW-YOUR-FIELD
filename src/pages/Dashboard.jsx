import { Link } from 'react-router-dom'
import { fields } from '../data.js'
const stats = [['Fields explored', 3], ['Saved universities', 2], ['Profile complete', '75%'], ['Skill courses', 5]]
export default function Dashboard() {
  return (
    <>
      <h1>Good morning, Akinola 👋</h1><p className="muted">Your future is bright. Keep exploring!</p>
      <div className="grid stats">{stats.map(([l, v]) => <div key={l} className="card stat"><b>{v}</b><span>{l}</span></div>)}</div>
      <div className="banner"><div><h2>Next step: explore Computer Engineering</h2><p>Discover requirements, skills and careers.</p></div><Link className="btn gold" to="/fields/computer-engineering">Continue</Link></div>
      <h2>Recommended for you</h2>
      <div className="grid">{fields.map(f => <Link key={f.id} to={'/fields/' + f.id} className="card feat"><span className="ico">{f.icon}</span><h3>{f.name}</h3><small>Explore</small></Link>)}</div>
    </>
  )
}
