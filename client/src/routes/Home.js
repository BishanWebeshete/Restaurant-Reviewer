import Header from '../components/Header';
import AddStore from '../components/AddStore';
import StoreList from '../components/StoreList';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <AddStore />
      <StoreList />
    </div>
  )
}
export default Home;
