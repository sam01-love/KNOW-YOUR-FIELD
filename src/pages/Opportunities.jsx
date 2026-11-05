import { jobs } from '../data.js'
export default function Opportunities() {
  return (
    <>
      <h1>Career opportunities</h1><p className="muted">Find internships and job openings.</p>
      <div className="stack">{jobs.map(j => (
        <div key={j.id} className="card row between"><div><h3>{j.role}</h3><small>{j.org} · {j.place} · {j.type}</small></div><button className="btn">Apply now</button></div>))}</div>
    </>
  )
}
