

const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-30 mt-3 gap-3 flex-wrap">
          <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-border text-secondary" role="status">
              <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-border text-success" role="status">
              <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-border text-danger" role="status">
              <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-border text-warning" role="status">
              <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-border text-info" role="status">
              <span className="visually-hidden">Loading...</span>
          </div>
          {/* <div className="spinner-border text-light" role="status">
              <span className="visually-hidden">Loading...</span>
          </div> */}
          <div className="spinner-border text-dark" role="status">
              <span className="visually-hidden">Loading...</span>
          </div>
    </div>
  )
}

export default Loader
