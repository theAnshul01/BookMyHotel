import { useParams, Link } from "react-router-dom"

const HotelDetail = ({ hotelList }) => {

    const { id } = useParams();
    return (
        <div className="container mt-3">
            {/* Hotel Name Jumbotron */}
            <div className="p-3 mb-3 bg-light rounded shadow-sm hotelName d-flex justify-content-between align-items-center">
                <div className="main-info">
                    <h1 className="display-5 fw-bold me-auto">{hotelList.find(hotel => hotel.id === parseInt(id))?.name}</h1> {/* either use parse int for the conversion of id from params to integer  or make the id to string using toString()*/}
                    <div className="mt-3">
                        <p className="fs-5 text-muted">Destination📍{hotelList.find(hotel => hotel.id === parseInt(id))?.location}</p>
                        <p className=" fs-5 text-muted">Ratings ⭐ {hotelList.find(hotel => hotel.id === parseInt(id))?.rating}</p>
                    </div>
                </div>

                <div className="price-info text-end">
                    <h3 className="fw-bold text-success">₹{hotelList.find(hotel => hotel.id === parseInt(id))?.pricePerNight} / Night</h3>
                    <Link to={`/booking/${id}`}>
                        <button className="btn btn-primary btn-lg mt-2">Book Now</button>
                    </Link>
                </div>
            </div>

            {/* Carousel */}
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://placeholder.pagebee.io/api/random/400/200" className="d-block w-100" alt="img 1" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://placeholder.pagebee.io/api/random/400/200" className="d-block w-100" alt="img 2" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://placeholder.pagebee.io/api/random/400/200" className="d-block w-100" alt="img 3" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* About Property Section */}
            <div className="row mt-4 me-auto">
                <div className="about-section col-md-9">
                    <h4 className="h4 mb-3">About this Property</h4>
                    <div>
                        <h5>Dining Experience</h5>
                        <p>Enjoy a delightful dining experience at our hotel's restaurant, where we serve a variety of delicious dishes made with fresh ingredients and traditional recipes. Our chefs are dedicated to providing an exceptional culinary journey for every guest.</p>
                        <h5>Amenities</h5>
                        <ul>
                            <li>Free Wi-Fi</li>
                            <li>Swimming Pool</li>
                            <li>Fitness Center</li>
                            <li>Spa and Wellness Center</li>
                            <li>24/7 Room Service</li>
                            <li>Conference Rooms</li>
                        </ul>
                        <h5>Location</h5>
                        <p>Located in the heart of the city, our hotel offers easy access to popular attractions, shopping centers, and business districts. Whether you're here for leisure or business, you'll find everything you need just a short distance away.</p>
                    </div>
                </div>

                <div className="property-highlights container col-md-3 text-white p-3 rounded mb-3">
                    <h4 className="h4">Property Highlights</h4>
                    <div>
                        <h6>Perfect for 2-night stay!</h6>
                        <p>Located in the heart of the city, this property has an excellent location score of 9.2!</p>
                        <h6>Free Cancellation</h6>
                        <p>You can cancel later, so lock in this great price today!</p>
                        <h6>Free Parking</h6>
                        <p>Enjoy complimentary parking during your stay!</p>
                        <Link to={`/booking/${id}`}>
                        <button className="btn btn-light">Book Now</button>
                        </Link>
                    </div>
                </div>
            </div>
            <hr />
            <div className="guest-reviews mt-5">
                <h3 className="h3 mb-3">Guest Reviews</h3>
                <div className="review mb-3">
                    <h5>Excellent Stay!</h5>
                </div>

            </div>
        </div>
    )
}

export default HotelDetail
