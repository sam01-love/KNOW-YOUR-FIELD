import { news } from '../data.js'
export default function News() {
  return (
    <>
      <h1>Industry news &amp; insights</h1><p className="muted">Stay updated with the latest trends.</p>
      <div className="stack">{news.map(n => <article key={n.id} className="card"><small>{n.cat} · {n.date}</small><h3>{n.title}</h3></article>)}</div>
    </>
  )
}
