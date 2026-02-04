import { useState } from "react"
import { Link } from "react-router-dom"
import { apiFetch } from "../utils/api"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setMessage("")
        setError("")
        setLoading(true)
        try {
            const data = await apiFetch("/auth/login", {
                method: "POST",
                body: { email, password }
            })
            localStorage.setItem("bm_token", data.token)
            localStorage.setItem("bm_user", JSON.stringify(data.user))
            setMessage("Logged in successfully.")
        } catch (err) {
            setError(err.message || "Login failed.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="card card-text p-4 mt-4 mb-4 rounded-4 shadow" style={{ maxWidth: "500px", margin: "auto" }}>
            <div className="card-body">
                <h2 className=" card-title text-center mt-4">Login</h2>
                <form className="container mt-5" style={{ maxWidth: "500px" }} onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <div className="alert alert-danger" role="alert">{error}</div>}
                    {message && <div className="alert alert-success" role="alert">{message}</div>}
                    <button type="submit" className="btn btn-primary" disabled={loading}>
                        {loading ? "Logging in..." : "Login"}
                    </button>
                    <Link to="/signup" className="btn btn-link">Don't have an account? Sign up</Link>
                </form>
            </div>
        </div>
    )
}

export default Login
