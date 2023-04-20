function RestaurantList() {
  return(
    <div className="list-group">
      <table className="table text-white">
        <thead className="bg-primary">
          <tr>
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Expense</th>
            <th scope="col">Satisfaction</th>
            <th scope="col">Update</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody className="bg-dark">
          <tr>
            <td>Mcdonalds</td>
            <td>New York</td>
            <td>$$</td>
            <td>Rating</td>
            <td><button className="btn btn-warning">Edit</button></td>
            <td><button className="btn btn-danger">Remove</button></td>
          </tr>
          <tr>
            <td>Mcdonalds</td>
            <td>New York</td>
            <td>$$</td>
            <td>Rating</td>
            <td><button className="btn btn-warning">Edit</button></td>
            <td><button className="btn btn-danger">Remove</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default RestaurantList;
