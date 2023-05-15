import UpdateStore from '../components/UpdateStore';
import Navbar from '../components/Navbar';

function UpdatePage () {
  return (
    <>
      <Navbar />
      <div>
        <h1 className="text-center mt-3">Update Store</h1>
        <UpdateStore />
      </div>
    </>
  )
}
export default UpdatePage;
