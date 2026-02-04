import { useState } from "react"
import { Link } from "react-router-dom"
import { apiFetch } from "../utils/api"


const Signup = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setMessage("")
        setError("")
        if (password !== confirmPassword) {
            setError("Passwords do not match.")
            return
        }
        setLoading(true)
        try {
            const data = await apiFetch("/auth/register", {
                method: "POST",
                body: { name, email, password }
            })
            localStorage.setItem("bm_token", data.token)
            localStorage.setItem("bm_user", JSON.stringify(data.user))
            setMessage("Account created successfully.")
        } catch (err) {
            setError(err.message || "Signup failed.")
        } finally {
            setLoading(false)
        }
    }

    return (

        <div className="card card-text p-4 mt-4 mb-4 rounded-4 shadow" style={{ maxWidth: "500px", margin: "auto" }}>
            <div className="card-body">
                <h2 className=" card-title text-center mt-4">Create Account</h2>
                <form className="container mt-5" style={{ maxWidth: "500px" }} onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Enter your full name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
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
                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="confirmPassword"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <div className="alert alert-danger" role="alert">{error}</div>}
                    {message && <div className="alert alert-success" role="alert">{message}</div>}
                    <button type="submit" className="btn btn-primary" disabled={loading}>
                        {loading ? "Creating account..." : "Sign up"}
                    </button>
                    <Link to="/login" className="btn btn-link">Already have an account? Login</Link>
                </form>
            </div>
        </div>
    )
}

export default Signup
