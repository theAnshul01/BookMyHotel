// components imports
import Navbar from "./Components/Navbar";
import Home from "./Components/HomePage";
import AboutPage from "./Components/AboutPage";
import HotelPage from "./Components/HotelPage";
import HotelDetail from "./Components/HotelDetail";
import Footer from "./Components/Footer";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import ListingAdminLogin from "./Components/ListingAdminLogin";
import BookingPage from "./Components/BookingPage";
import Loader from "./Components/Loader";
import AddHotel from "./Components/AddHotel";

// utility imports
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ScrollToTop from "./utils/ScrollToTop";

function App() {

  // mock hotel data
  const [hotelList, setHotelList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchHotels = async() => {
      try {
        const response = await fetch("http://localhost:3500/hotels");
        const data = await response.json();
        if(!response.ok){
          throw new Error(data.message || "Failed to fetch hotel data");
        }
        setHotelList(data);
        
      } catch (error) {
        console.log("Error fetching hotel data:", error);
        setError(error.message);
      }finally{
        setLoading(false);
      }
    }

    fetchHotels();
  },[]);

  const [searchResults, setSearchResults] = useState([]);
  // initialize as empty string so input is controlled and .toLowerCase() is safe
  const [searchVal, setSearchVal] = useState("");

  // state for home page filters - search form
  const [guestCount, setGuestCount] = useState(1);
  const [checkinDate, setCheckinDate] = useState(new Date().toISOString().split("T")[0]);
  const [checkoutDate, setCheckoutDate] = useState(new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split("T")[0]);

  // state for sorting option
  const [sortOption, setSortOption] = useState("Relevance");

  // filter hotel list based on search value
  useEffect(() => {
    const results = hotelList.filter((hotel) => (
      hotel.name.toLowerCase().includes(searchVal.toLowerCase()) ||
      hotel.location.toLowerCase().includes(searchVal.toLowerCase())
    ));
    setSearchResults(results);
  }, [searchVal, hotelList])

  return (
    <div className="App">
      <ScrollToTop />
      <Navbar hotelList={hotelList}
        searchVal={searchVal}
        setSearchVal={setSearchVal}
        searchResults={searchResults}
        setSearchResults={setSearchResults} 
        sortOption={sortOption}
        setSortOption={setSortOption}/>
      <Routes>
        {loading && <Route path="*" element={<Loader />} />}
        {!loading && error && <Route path="/hotels" element={<div className="alert alert-danger alert-dismissible mt-3 container">Some Error Occurred : {error}</div>} />}
        {!loading && <Route path="/" element={<Home guestCount={guestCount} setGuestCount={setGuestCount}
          checkinDate={checkinDate} setCheckinDate={setCheckinDate}
          checkoutDate={checkoutDate} setCheckoutDate={setCheckoutDate} />} />}
        {!loading && <Route path="/hotels" element={<HotelPage hotelList={searchResults} sortOption={sortOption} />} />}
        <Route path="/hotels/:id" element={<HotelDetail hotelList={hotelList} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/listingadminlogin" element={<ListingAdminLogin />} />
        <Route path="/booking/:id" element={<BookingPage hotelList={hotelList} checkinDate={checkinDate} setCheckinDate={setCheckinDate} checkoutDate={checkoutDate} setCheckoutDate={setCheckoutDate} guestCount={guestCount} setGuestCount={setGuestCount} />} />
        <Route path="/addhotel" element={<AddHotel />} />
        <Route path="*" element={<Home />} /> //? fallback to home page for unknown routes
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
