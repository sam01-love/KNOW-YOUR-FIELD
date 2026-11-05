import { useState } from 'react'
import { universities } from '../data.js'
export default function Universities() {
  const [t, setT] = useState('All'); const [open, setOpen] = useState(null)
  const list = universities.filter(u => t === 'All' || u.type === t)
  return (
    <>
      <h1>University admissions</h1><p className="muted">Admission requirements and cut-off marks.</p>
      <div className="pills">{['All', 'Federal', 'Private'].map(x => <button key={x} className={'pill' + (x === t ? ' on' : '')} onClick={() => setT(x)}>{x}</button>)}</div>
      <div className="stack">{list.map(u => (
        <div key={u.id} className="card">
          <div className="row between"><div><h3>{u.name}</h3><small>{u.course} · {u.state} · {u.type}</small></div>
            <button className="btn ghost" onClick={() => setOpen(open === u.id ? null : u.id)}>{open === u.id ? 'Hide' : 'View details'}</button></div>
          {open === u.id && <div className="detail"><ul className="ticks">{u.reqs.map(r => <li key={r}>{r}</li>)}<li>UTME score: {u.utme}</li></ul></div>}
        </div>))}</div>
    </>
  )
}
