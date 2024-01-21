import { Outlet } from 'react-router-dom';
import Footer from 'shared/features/footer/pages';
import Navbar from '../components/Navbar';
import SignUpBar from '../components/SignUpBar';

function HomePage() {
  return (
    <div>
      <SignUpBar />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default HomePage;
