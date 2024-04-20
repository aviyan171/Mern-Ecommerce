import { Outlet } from 'react-router-dom';
import Footer from 'shared/features/footer/pages';
import Navbar from '../features/navbar/components/Navbar';
import SignUpBar from '../features/navbar/components/SignUpBar';

function HomePageLayout() {
  return (
    <div className="m-0 p-0 min-h-screen flex flex-col">
      <SignUpBar />
      <Navbar />
      <div className="flex-1 ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default HomePageLayout;
