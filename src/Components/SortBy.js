

const SortBy = ({sortOption, setSortOption}) => {
  return (
      <div className="d-flex justify-content-end text-align-center me-3">
          <select
              className="form-select w-auto"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
          >
              <option value="Relevance">Sort By</option>
              <option value="priceLowHigh">Price: Low to High</option>
              <option value="priceHighLow">Price: High to Low</option>
              <option value="rating">Rating: High to Low</option>
              <option value="name">Name (A–Z)</option>
          </select>
      </div>

  )
}

export default SortBy
