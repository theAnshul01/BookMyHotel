import { NavLink } from "react-router-dom"

const Home = () => {
    return (
        <div className="container mt-4">
            {/* Hero / Jumbotron */}
            <div className="p-5 mb-4 bg-light rounded-3 shadow-sm">
                <div className="container-fluid py-3">
                    <div className="row align-items-center">
                        <div className="col-md-7">
                            <h1 className="display-5 fw-bold">Welcome to BookMyHotel</h1>
                            <p className="col-md-10 fs-5 text-muted">Discover and book the best hotels across India. Great deals, verified reviews, and easy booking.</p>
                            <div className="d-flex gap-2 mt-3">
                                <NavLink className="btn btn-primary btn-lg" to="/hotels" role="button">Browse Hotels</NavLink>
                                <NavLink className="btn btn-outline-secondary btn-lg" to="/about" role="button">Learn More</NavLink>
                            </div>
                        </div>
                        <div className="col-md-5 text-center mt-3 mt-md-0">
                            <img src="https://placeholder.pagebee.io/api/random/400/250" className="img-fluid rounded shadow-sm" alt="hotel" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Search form */}
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <form className="row g-2 align-items-end">
                        <div className="col-sm-6 col-md-5">
                            <label className="form-label">Destination</label>
                            <input type="text" className="form-control" placeholder="Enter city or hotel name"/>
                        </div>
                        <div className="col-sm-3 col-md-2">
                            <label htmlFor="checkin" className="form-label">Check-in</label>
                            <input type="date" className="form-control" id="checkin" />
                        </div>
                        <div className="col-sm-3 col-md-2">
                            <label htmlFor="checkout" className="form-label">Check-out</label>
                            <input type="date" className="form-control" id="checkout" />
                        </div>
                        <div className="col-sm-12 col-md-3 d-grid">
                            <button type="button" className="btn btn-success btn-block" disabled>Search Hotels</button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Featured Hotels */}
            <div className="mb-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                        <h2 className="h4 mb-0">Featured Hotels</h2>
                        <small className="text-muted">Hand-picked stays and top-rated properties</small>
                    </div>
                    <NavLink to="/hotels" className="text-decoration-none">View all &rarr;</NavLink>
                </div>

                <div className="row">
                    <div className="col-md-4 mb-3">
                        <div className="card h-100 shadow-sm">
                            <img src="https://placeholder.pagebee.io/api/random/300/180" className="card-img-top" alt="featured 1" />
                            <div className="card-body">
                                <h5 className="card-title">Grand Palace Hotel</h5>
                                <p className="card-text text-muted">Delhi • ⭐ 4.5</p>
                                <p className="card-text fw-bold">Starting ₹3200 / night</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="card h-100 shadow-sm">
                            <img src="https://placeholder.pagebee.io/api/random/300/180" className="card-img-top" alt="featured 2" />
                            <div className="card-body">
                                <h5 className="card-title">Sea View Resort</h5>
                                <p className="card-text text-muted">Goa • ⭐ 4.7</p>
                                <p className="card-text fw-bold">Starting ₹5400 / night</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="card h-100 shadow-sm">
                            <img src="https://placeholder.pagebee.io/api/random/300/180" className="card-img-top" alt="featured 3" />
                            <div className="card-body">
                                <h5 className="card-title">Hilltop Inn</h5>
                                <p className="card-text text-muted">Manali • ⭐ 4.2</p>
                                <p className="card-text fw-bold">Starting ₹2800 / night</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
