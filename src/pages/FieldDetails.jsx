import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { fields } from '../data.js'
export default function FieldDetails() {
  const { id } = useParams(); const f = fields.find(x => x.id === id)
  const [tab, setTab] = useState('Overview'); const [saved, setSaved] = useState(false)
  if (!f) return <><h1>Field not found</h1><Link to="/fields">Back to fields</Link></>
  const tabs = { Overview: [f.about], Skills: f.skills, Careers: f.careers }
  return (
    <>
      <Link to="/fields">← Back to fields</Link>
      <div className="banner"><div><h1 style={{ color: '#fff' }}>{f.name}</h1><p>{f.tag}</p><span className="chip">{f.demand}</span></div>
        <button className="btn gold" onClick={() => setSaved(!saved)}>{saved ? 'Saved ✓' : 'Add to my fields'}</button></div>
      <div className="pills">{Object.keys(tabs).map(t => <button key={t} className={'pill' + (t === tab ? ' on' : '')} onClick={() => setTab(t)}>{t}</button>)}</div>
      <div className="card">{tab === 'Overview' ? <p>{f.about}</p> : <ul className="ticks">{tabs[tab].map(s => <li key={s}>{s}</li>)}</ul>}</div>
      <p><Link className="btn" to="/universities">See universities</Link></p>
    </>
  )
}
