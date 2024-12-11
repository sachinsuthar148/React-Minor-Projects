function LoadingSpinner(){
    return <div className="d-flex justify-content-center spinner ">
    <div className="spinner-border " role="status" style={{width: "6rem", height: "6rem"}}>
      <span className="visually-hidden spinner">Loading...</span>
    </div>
  </div>
}

export default LoadingSpinner;