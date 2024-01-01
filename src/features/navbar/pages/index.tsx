import Navbar from 'features/navbar/components/Navbar';
import SignUpBar from 'features/navbar/components/SignUpBar';
import { Outlet } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <SignUpBar />
      <Navbar />
      <Outlet />
    </div>
  );
}

export default HomePage;
