import UpdateRestaurant from '../components/UpdateRestaurant';
import Navbar from '../components/Navbar';

function UpdatePage () {
  return (
    <>
      <Navbar />
      <div>
        <h1 className="text-center mt-3">Update Restaurant</h1>
        <UpdateRestaurant />
      </div>
    </>
  )
}
export default UpdatePage;
