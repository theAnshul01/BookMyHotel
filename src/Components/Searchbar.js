
const Searchbar = ({ searchVal, setSearchVal}) => {
   
  return (
    <form className="d-flex" role="search" onSubmit={(e)=> e.preventDefault()}>
          <input
              className="form-control me-2 mb-2 mb-md-0"
              type="search"
              placeholder="Search hotels"
              aria-label="Search"
              value={searchVal}
              onChange={(e)=>setSearchVal(e.target.value)}
              // disabled={window.location.pathname !== '/hotels'}
          />
          
    </form>
  )
}

export default Searchbar
