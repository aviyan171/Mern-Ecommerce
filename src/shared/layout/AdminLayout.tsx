import { Outlet } from 'react-router-dom';
import Drawer from 'shared/components/Drawer';

export const AdminLayout = () => {
  return (
    <div className="group">
      <Drawer>hi</Drawer>
      <div
        className={` ml-COLLAPSIBLE_DRAWER_WIDTH group-hover:ml-DRAWER_WIDTH transition-[margin-left] duration-500 ease-in-out`}
      >
        <div className="px-7 py-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
