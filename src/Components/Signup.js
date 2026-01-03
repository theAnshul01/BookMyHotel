import { Link } from "react-router-dom"


const Signup = () => {
    return (

        <div className="card card-text p-4 mt-4 mb-4 rounded-4 shadow" style={{ maxWidth: "500px", margin: "auto" }}>
            <div className="card-body">
                <h2 className=" card-title text-center mt-4">Create Account</h2>
                <form className="container mt-5" style={{ maxWidth: "500px" }} onSubmit={(e) => e.preventDefault()}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter your full name" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password" required />
                        {/* You can add password match validation message here */}
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={() => {
                        alert(`Signup facility not implemented yet`)
                    }}>Sign up</button>
                    <Link to="/login" className="btn btn-link">Already have an account? Login</Link>
                </form>
            </div>
        </div>
    )
}

export default Signup
