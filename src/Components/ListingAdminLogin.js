import React from 'react'

const ListingAdminLogin = () => {
  return (
    <div className="card card-text p-4 mt-4 mb-4 rounded-4 shadow" style={{ maxWidth: "500px", margin: "auto" }}>
      <div className="card-body">
        <h2 className=" card-title text-center mt-4">Login as Listing Admin</h2>
        <form className="container mt-5" style={{ maxWidth: "500px" }} onSubmit={(e) => e.preventDefault()}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn btn-primary" onClick={() => {
            alert("Listing Admin login functionality is not implemented yet.");
          }}>Login</button>
        </form>

        <div className='container mt-3'>For registering yourself as listing admin, drop an email with relevant proposals on <em>listingadmin@bookmyhotel.com</em>. Our team will get back to you soon.</div>
      </div>
    </div>
  )
}

export default ListingAdminLogin
