import { useState } from 'react'
export default function Settings() {
  const [s, setS] = useState({ opp: true, news: true, remind: false })
  const rows = [['opp', 'New opportunities'], ['news', 'Industry news'], ['remind', 'Learning reminders']]
  return (
    <>
      <h1>Settings</h1><p className="muted">Customise your experience.</p>
      <div className="card"><h3>Preferred field</h3><select defaultValue="Computer Engineering"><option>Computer Engineering</option><option>Medicine &amp; Surgery</option><option>Data Science</option></select></div>
      <div className="card"><h3>Notifications</h3>{rows.map(([k, l]) => (
        <label key={k} className="row between toggle">{l}<input type="checkbox" checked={s[k]} onChange={() => setS({ ...s, [k]: !s[k] })} /></label>))}</div>
    </>
  )
}
