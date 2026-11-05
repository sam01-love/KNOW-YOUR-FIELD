import { useState } from 'react'
import { Link } from 'react-router-dom'
import { fields } from '../data.js'
export default function ExploreFields() {
  const [q, setQ] = useState(''); const [area, setArea] = useState('All')
  const areas = ['All', ...new Set(fields.map(f => f.area))]
  const list = fields.filter(f => (area === 'All' || f.area === area) && f.name.toLowerCase().includes(q.toLowerCase()))
  return (
    <>
      <h1>Explore career fields</h1><p className="muted">Find fields that match your interests and strengths.</p>
      <input className="search" value={q} onChange={e => setQ(e.target.value)} placeholder="Search for a field…" aria-label="Search fields" />
      <div className="pills">{areas.map(a => <button key={a} className={'pill' + (a === area ? ' on' : '')} onClick={() => setArea(a)}>{a}</button>)}</div>
      <div className="grid">{list.map(f => <Link key={f.id} to={'/fields/' + f.id} className="card feat"><span className="ico">{f.icon}</span><h3>{f.name}</h3><small>{f.tag}</small></Link>)}</div>
      {!list.length && <p className="muted">No fields match. Try a different search.</p>}
    </>
  )
}
