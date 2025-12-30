import { NavLink } from "react-router-dom"
const HotelPage = ({hotelList}) => {
    if (hotelList.length === 0) {
        return (
            <div className="container mt-4">
                <div className="alert alert-info text-center" role="alert">
                    <h3>No hotels found matching your search.</h3>
                    <p>Try different keywords or clear the search to see all hotels.</p>
                </div>
            </div>
        )
    }

    return (
        <div className='container mt-4'>
            
            <div className="row">
                {hotelList.map((hotel) => (
                    <NavLink className="col-md-4 mb-4 text-decoration-none" key={hotel.id} to={`/hotels/${hotel.id}`}>
                        <div className="card h-100">
                            <img src={hotel.image} className="card-img-top" alt={hotel.name} />
                            <div className="card-body">
                                <h5 className="card-title">{hotel.name}</h5>
                                <p className="card-text text-muted">{hotel.location}</p>
                                <p className="card-text">⭐ {hotel.rating}</p>
                                <p className="card-text fw-bold">₹{hotel.pricePerNight} / day</p>
                            </div>
                        </div>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default HotelPage
