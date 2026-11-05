import { Link } from 'react-router-dom'
const feats = [['🧭', 'Explore fields', '/fields'], ['🏛️', 'Check universities', '/universities'], ['🛠️', 'Build skills', '/skills'], ['💼', 'Find opportunities', '/opportunities']]
export default function Landing() {
  return (
    <>
      <section className="hero">
        <div>
          <h1>Discover your ideal field. Plan your future.</h1>
          <p>Get the right guidance on university courses, career paths and opportunities in Nigeria and beyond.</p>
          <div className="row"><Link className="btn" to="/register">Get started</Link><Link className="btn ghost" to="/fields">Learn more</Link></div>
        </div>
        <div className="hero-art" aria-hidden="true"><div className="compass">🧭</div><span className="chip c1">Explore</span><span className="chip c2">Plan</span><span className="chip c3">Achieve</span></div>
      </section>
      <section className="section grid">
        {feats.map(([i, t, to]) => <Link key={t} to={to} className="card feat"><span className="ico">{i}</span><h3>{t}</h3></Link>)}
      </section>
    </>
  )
}
