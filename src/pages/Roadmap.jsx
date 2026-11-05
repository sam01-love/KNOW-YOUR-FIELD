import { roadmap } from '../data.js'
export default function Roadmap() {
  return (
    <>
      <h1>Your career roadmap</h1><p className="muted">From secondary school to professional success.</p>
      <ol className="timeline">{roadmap.map(r => <li key={r.t}><h3>{r.t}</h3><p>{r.d}</p></li>)}</ol>
    </>
  )
}
