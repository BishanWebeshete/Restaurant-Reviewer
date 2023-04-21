function AddRestaurant () {
  return (
      <div className="mb-4 d-flex justify-content-center">
        <form className="row row-col-4 g-4 form-inline">
          <div className="col-3">
            <input type="text" className="form-control" placeholder="Name" />
          </div>
          <div className="col-3">
            <input type="password" className="form-control" placeholder="Password" />
          </div>
          <div className="col-3 add-restaurant-select-container">
            <select className="custom-select my-1 mr-sm-2 add-restaurant-select">
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <div className="col-3 add-restaurant-button">
            <button type="submit" className="btn btn-primary mb-3">Submit</button>
          </div>
        </form>
      </div>
  )
}
export default AddRestaurant;
