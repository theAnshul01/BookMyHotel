import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div className="border p-4 mt-4 mb-4 rounded" style={{ maxWidth: "500px", margin: "auto" }}>
            <h2 className="text-center mt-4">Login</h2>
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
                <button type="submit" className="btn btn-primary">Login</button>
                <Link to="/signup" className="btn btn-link">Don't have an account? Sign up</Link>
            </form>
        </div>
    )
}

export default Login
