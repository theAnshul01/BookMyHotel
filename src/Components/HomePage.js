import { useEffect, useState } from "react";
import { getFeaturedHotels } from "../utils/localDb";
import { Link, NavLink, useNavigate } from "react-router-dom"
import Loader from "./Loader";

const Home = ({
    guestCount, setGuestCount, checkinDate, setCheckinDate, checkoutDate, setCheckoutDate }) => {
    const navigate = useNavigate();

    // calculate max date for checkout (90 days from today)
    const today = new Date();
    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 90); // 90 days from today
    const maxDateString = maxDate.toISOString().split("T")[0];
    const [featuredHotels, setFeaturedHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchFeaturedHotels = async () => {
            try {
                const data = await getFeaturedHotels();
                setFeaturedHotels(data);
            } catch (error) {
                console.log("Error fetching featured hotels:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchFeaturedHotels();
    }, [])

    return (
        <div className="container mt-4">
            {/* Hero / Jumbotron */}
            <div className="p-5 bg-light rounded-3 shadow-sm">
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
                        <div className="col-sm-6 col-md-3">
                            <label className="form-label">Destination</label>
                            <input type="text" className="form-control" placeholder="Enter city or hotel name" />
                        </div>
                        <div className="col-sm-3 col-md-2">
                            <label htmlFor="checkin" className="form-label">Check-in</label>
                            <input type="date" className="form-control" id="checkin"
                                min={new Date().toISOString().split("T")[0]}
                                value={checkinDate} onChange={(e) => setCheckinDate(e.target.value)} />
                        </div>
                        <div className="col-sm-3 col-md-2">
                            <label htmlFor="checkout" className="form-label">Check-out</label>
                            <input type="date" className="form-control" id="checkout"
                                min={checkinDate} max={maxDateString}
                                value={checkoutDate} onChange={(e) => setCheckoutDate(e.target.value)} />
                        </div>
                        <div className="col-sm-12 col-md-2">
                            <label htmlFor="guestcount" className="form-label">Guest-count</label>
                            <input type="number" className="form-control" id="guestcount"
                                value={guestCount} onChange={(e) => setGuestCount(parseInt(e.target.value))} />
                        </div>
                        <div className="col-sm-12 col-md-3 d-grid">
                            <button
                                type="button"
                                className="btn btn-success btn-block"
                                onClick={() => navigate("/hotels")}
                            >
                                Search Hotels
                            </button>
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
                {loading && <Loader />}
                {!loading && error && <div className="alert alert-danger alert-dismissible" role="alert">
                    Some Error Occurred: {error}
                </div>}
                {!loading && <div className="row">
                    {featuredHotels.map(hotel => (
                        <Link to={`/hotels/${hotel.id}`} key={hotel.id} className="col-md-4 mb-3 text-decoration-none">
                            <div className="card h-100 shadow-sm">
                                <img src="https://placeholder.pagebee.io/api/random/300/180" className="card-img-top" alt="featured 1" />
                                <div className="card-body">
                                    <h5 className="card-title">{hotel.name}</h5>
                                    <p className="card-text text-muted">{hotel.location} • ⭐ {hotel.rating}</p>
                                    <p className="card-text fw-bold">Starting ₹{hotel.pricePerNight} / night</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>}
            </div>
        </div>
    )
}

export default Home
