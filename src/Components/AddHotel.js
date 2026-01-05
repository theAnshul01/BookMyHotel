import { useState } from "react";
import { addHotel } from "../utils/localDb";

const AddHotel = () => {
    const [successMessage, setSuccessMessage] = useState(false);
    const [hotelData, setHotelData] = useState({
        name: "",
        location: "",
        pricePerNight: "",
        rating: "",
        image: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;

        setHotelData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const listHotel = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                ...hotelData,
                pricePerNight: Number(hotelData.pricePerNight),
                rating: Number(hotelData.rating)
            };

            const data = await addHotel(payload);
            console.log("Hotel listed successfully:", data);
            setHotelData({
                name: "",
                location: "",
                pricePerNight: "",
                rating: "",
                image: ""
            });
        } catch (error) {
            console.log("Error listing hotel:", error);
        } finally {
            setSuccessMessage(true);
        }
    }

    return (
        <div>
            {successMessage && (
                <div className="container mt-2 alert alert-success alert-dismissible text-center " role="alert">
                    <h4 className="alert-heading mb-0">Your hotel has been listed successfully!</h4>
                    <button type="button" className="btn-close" aria-label="Close" onClick={() => setSuccessMessage(false)}></button>
                </div>
            )}
            <form className="listingFormContainer card mt-4 p-5 container shadow" onSubmit={e => e.preventDefault()}>
                <h1 className="card-title text-center">List New Property</h1>
                <div className="card-body mt-1">
                    <label className="form-label" htmlFor="hotelName">Hotel Name</label>
                    <input type="text" className="form-control" id="hotelName" name="name" value={hotelData.name} onChange={handleChange} placeholder="Enter hotel name" required />
                </div>
                <div className="card-body mt-1">
                    <label className="form-label" htmlFor="Location">Location</label>
                    <input type="text" className="form-control" id="Location" name="location" value={hotelData.location} onChange={handleChange} placeholder="Enter location or locality" required />
                </div>
                <div className="card-body mt-1">
                    <label className="form-label" htmlFor="pricePerNight">Price Per Night</label>
                    <input type="text" className="form-control" id="pricePerNight" name="pricePerNight" value={hotelData.pricePerNight} onChange={handleChange} placeholder="Enter price per night" required />
                </div>
                <div className="card-body mt-1">
                    <label className="form-label" htmlFor="rating">Rating</label>
                    <input type="text" className="form-control" id="rating" name="rating" value={hotelData.rating} onChange={handleChange} placeholder="Enter rating" required />
                </div>
                <div className="card-body mt-1">
                    <label className="form-label" htmlFor="pictures">Pictures</label>
                    <input type="url" className="form-control" id="pictures" name="image" value={hotelData.image} onChange={handleChange} placeholder="Enter picture URLs" required />
                </div>
                <div className="d-flex justify-content-center p-3">
                    <button type="submit" className="btn btn-primary mt-4 w-100" onClick={listHotel}>Submit Listing</button>
                </div>
            </form>
        </div>
    )
}

export default AddHotel




