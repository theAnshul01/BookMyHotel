
import { useParams } from "react-router-dom"

const BookingPage = ({ hotelList, checkinDate, setCheckinDate, checkoutDate, setCheckoutDate, guestCount, setGuestCount}) => {
    const { id } = useParams();
    const hotel = hotelList.find(hotel => hotel.id === parseInt(id));
    const today = new Date().toISOString().split("T")[0];
    if (!hotel) {
        return (
            <div>
                <h2 className="text-center mt-4">Hotel not found</h2>
            </div>
        )
    }else {
        return (
            <div className="container mt-4 p-3 border rounded bg-warning bg-opacity-10">
                <div className="row mt-4 p-3 justify-content-center text-center">
                    <h4 className="text-center mb-3">Booking Details for {hotel.name}</h4>
                    <p className="card-text col-sm-4 col-md-3">Location: {hotel.location}</p>
                    <p className="card-text col-sm-5 col-md-5">Price per night: ₹{hotel.pricePerNight}</p>
                    <p className="card-text col-sm-3 col-md-3">Rating: {hotel.rating}</p>
                </div>
                <h1 className="mt-4 text-center"> Enter Booking Details</h1>
                <form className="row g-3 mt-2" onSubmit={e => e.preventDefault()}>
                    <div className="col-md-4 col-sm-6">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="firstName" placeholder="First Name" required/>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="lastName" placeholder="Last Name"/>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Your Email address" required/>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <label htmlFor="phone" className="form-label">Phone Number</label>
                        <input type="tel" className="form-control" id="phone" placeholder="Your Phone Number" required/>
                    </div>
                    <div>
                        <label htmlFor="guestCount" className="form-label">Number of Guests (adults only)</label>
                        <input type="number" className="form-control" id="guestCount" value={guestCount} onChange={e => setGuestCount(parseInt(e.target.value))} min={1} />
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <label htmlFor="checkInDate" className="form-label">Check-in Date</label>
                        <input type="date" className="form-control" id="checkInDate" value={checkinDate} min={today} onChange={e => setCheckinDate(e.target.value)}/>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <label htmlFor="checkOutDate" className="form-label">Check-out Date</label>
                        <input type="date" className="form-control" id="checkOutDate" value={checkoutDate} min={checkinDate} onChange={e => setCheckoutDate(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Confirm Booking</button>
                </form>
            </div>
        )
    }
}
export default BookingPage
