import { NavLink } from "react-router-dom"


const HotelPage = ({hotelList, sortOption}) => {
    const sortedResults = [...hotelList];
    if (sortOption === "priceLowHigh") {
        sortedResults.sort((a, b) => a.pricePerNight - b.pricePerNight);
    }

    if (sortOption === "priceHighLow") {
        sortedResults.sort((a, b) => b.pricePerNight - a.pricePerNight);
    }

    if (sortOption === "rating") {
        sortedResults.sort((a, b) => b.rating - a.rating);
    }

    if (sortOption === "name") {
        sortedResults.sort((a, b) => a.name.localeCompare(b.name));
    }


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
                {sortedResults.map((hotel) => (
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
