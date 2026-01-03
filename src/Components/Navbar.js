import { Link, NavLink, useLocation } from 'react-router-dom'
import Searchbar from './Searchbar'
import SortBy from './SortBy'
import logo from '../utils/Logo.png'
const Navbar = ({ hotelList, searchVal, setSearchVal, searchResults, setSearchResults, sortOption, setSortOption }) => {
    const location = useLocation();
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container-fluid">

                {/* Brand */}
                <NavLink className="navbar-brand" to="/">
                    <img src={logo} alt="BMH Logo" height="30" className="me-2" />
                    BookMyHotel
                </NavLink>

                {/* Toggle button (for mobile view) */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                    aria-controls="navbarContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Collapsible content */}
                <div className="collapse navbar-collapse" id="navbarContent">

                    {/* Left side links */}
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <NavLink className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            } to="/">
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            } to="/hotels">
                                Hotels
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            } to="/about">
                                About
                            </NavLink>
                        </li>
                    </ul>
                    {
                        location.pathname === '/hotels' &&
                        <SortBy
                            sortOption={sortOption}
                            setSortOption={setSortOption} />
                    }
                    {location.pathname === '/hotels' &&
                        <Searchbar hotelList={hotelList}
                            searchVal={searchVal}
                            setSearchVal={setSearchVal}
                            
                        />}
                    {/* Right side buttons */}
                    <div className="d-flex gap-2 align-items-center ms-3">
                        <NavLink className='nav-link text-light' to='/listingadminlogin'>List your property</NavLink>
                        <Link to="/login">
                            <button className="btn btn-warning" type="button">
                                Login
                            </button>
                        </Link>
                        {/* <Link to="/signup">
                        <button className="btn btn-warning" type="button">
                            Sign Up
                        </button>
                        </Link> */}
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navbar
