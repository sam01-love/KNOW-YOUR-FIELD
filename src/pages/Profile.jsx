export default function Profile() {
  return (
    <>
      <h1>My profile</h1><p className="muted">Manage your account information.</p>
      <div className="card"><div className="row"><div className="avatar big">AS</div><div><h3>Akinola Salami</h3><small>Student</small></div></div>
        <form className="form" onSubmit={e => e.preventDefault()}>
          <label>Email<input defaultValue="akinola@email.com" /></label>
          <label>Education level<input defaultValue="University student" /></label>
          <label>Interest field<input defaultValue="Computer Engineering" /></label>
          <button className="btn">Save changes</button></form></div>
    </>
  )
}
