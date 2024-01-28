import { Outlet } from 'react-router-dom';
import Footer from 'shared/features/footer/pages';
import Navbar from '../components/Navbar';
import SignUpBar from '../components/SignUpBar';

function HomePage() {
  return (
    <div className="m-0 p-0 min-h-[100vh] flex flex-col">
      <SignUpBar />
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
