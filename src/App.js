import Navbar from "./Components/Navbar";
import Home from "./Components/HomePage";
import AboutPage from "./Components/AboutPage";
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import HotelDetails from "./Components/HotelDetails";

function App() {

  const [hotelList] = useState([
    {
      id: 1,
      name: "Grand Palace Hotel",
      location: "Delhi",
      pricePerNight: 3200,
      rating: 4.5,
      image: "https://placeholder.pagebee.io/api/random/300/200",
    },
    {
      id: 2,
      name: "Sea View Resort",
      location: "Goa",
      pricePerNight: 5400,
      rating: 4.7,
      image: "https://placeholder.pagebee.io/api/random/300/200",
    },
    {
      id: 3,
      name: "Hilltop Inn",
      location: "Manali",
      pricePerNight: 2800,
      rating: 4.2,
      image: "https://placeholder.pagebee.io/api/random/300/200",
    },
    {
      id: 4,
      name: "City Comfort Stay",
      location: "Bangalore",
      pricePerNight: 4100,
      rating: 4.0,
      image: "https://placeholder.pagebee.io/api/random/300/200",
    },
    {
      id: 5,
      name: "Lakeside Retreat",
      location: "Udaipur",
      pricePerNight: 4500,
      rating: 4.6,
      image: "https://placeholder.pagebee.io/api/random/300/200",
    },
    {
      id: 6,
      name: "Desert Oasis",
      location: "Jaisalmer",
      pricePerNight: 3800,
      rating: 4.3,
      image: "https://placeholder.pagebee.io/api/random/300/200",
    },
    {
      id: 7,
      name: "Mountain Breeze",
      location: "Shimla",
      pricePerNight: 2950,
      rating: 4.1,
      image: "https://placeholder.pagebee.io/api/random/300/200",
    },
    {
      id: 8,
      name: "Coastal Breeze",
      location: "Pondicherry",
      pricePerNight: 3300,
      rating: 4.4,
      image: "https://placeholder.pagebee.io/api/random/300/200",
    },
    {
      id: 9,
      name: "Urban Elegance",
      location: "Mumbai",
      pricePerNight: 6200,
      rating: 4.8,
      image: "https://placeholder.pagebee.io/api/random/300/200",
    },
    {
      id: 10,
      name: "Garden View",
      location: "Kolkata",
      pricePerNight: 3000,
      rating: 3.9,
      image: "https://placeholder.pagebee.io/api/random/300/200",
    },
    {
      id: 11,
      name: "Riverside Lodge",
      location: "Rishikesh",
      pricePerNight: 2700,
      rating: 4.2,
      image: "https://placeholder.pagebee.io/api/random/300/200",
    },
    {
      id: 12,
      name: "Heritage Courtyard",
      location: "Jaipur",
      pricePerNight: 3600,
      rating: 4.5,
      image: "https://placeholder.pagebee.io/api/random/300/200",
    },
  ])

  const [searchResults, setSearchResults] = useState([]);
  // initialize as empty string so input is controlled and .toLowerCase() is safe
  const [searchVal, setSearchVal] = useState("");
  const [guestCount, setGuestCount] = useState(1);
  
  const [checkinDate, setCheckinDate] = useState(new Date().toISOString().split("T")[0]);
  const [checkoutDate, setCheckoutDate] = useState(new Date(new Date().setDate(new Date().getDate()+1)).toISOString().split("T")[0]);

  useEffect(() => {
    const results = hotelList.filter((hotel) => (
      hotel.name.toLowerCase().includes(searchVal.toLowerCase()) ||
      hotel.location.toLowerCase().includes(searchVal.toLowerCase())
    ));
    setSearchResults(results);
  }, [searchVal, hotelList])

  return (
    <div className="App">
      <Navbar hotelList={hotelList}
        searchVal={searchVal}
        setSearchVal={setSearchVal}
        searchResults={searchResults}
        setSearchResults={setSearchResults} />
      <Routes>
        <Route path="/" element={<Home guestCount={guestCount} setGuestCount={setGuestCount}
          checkinDate={checkinDate} setCheckinDate={setCheckinDate}
          checkoutDate={checkoutDate} setCheckoutDate={setCheckoutDate} />} />
        <Route path="/hotels" element={<HotelDetails hotelList={searchResults} />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>

  );
}

export default App;
