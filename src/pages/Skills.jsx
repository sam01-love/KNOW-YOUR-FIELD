import { useState } from 'react'
import { skills } from '../data.js'
export default function Skills() {
  const [f, setF] = useState('All'); const [started, setStarted] = useState([])
  const cats = ['All', ...new Set(skills.map(s => s.level))]
  const pct = Math.round(started.length / skills.length * 100)
  return (
    <>
      <h1>Build your skills</h1><p className="muted">Learn essential skills to stay ahead.</p>
      <div className="card"><b>Your progress: {pct}%</b><div className="bar"><i style={{ width: pct + '%' }} /></div></div>
      <div className="pills">{cats.map(c => <button key={c} className={'pill' + (c === f ? ' on' : '')} onClick={() => setF(c)}>{c}</button>)}</div>
      <div className="grid">{skills.filter(s => f === 'All' || s.level === f).map(s => (
        <div key={s.id} className="card feat"><span className="ico">{s.icon}</span><h3>{s.name}</h3>
          <button className="btn ghost" onClick={() => setStarted(a => a.includes(s.id) ? a : [...a, s.id])}>{started.includes(s.id) ? 'Started ✓' : 'Start course'}</button></div>))}</div>
    </>
  )
}
