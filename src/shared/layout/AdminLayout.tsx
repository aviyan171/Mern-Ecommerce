import AdminNavbar from 'features/admin/shared/components/AdminNavbar';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Drawer from 'shared/components/Drawer';

export const AdminLayout = () => {
  const [collapsible, setCollapsible] = useState(false);

  const calculateCollapsible = () => {
    return collapsible
      ? `fixed w-[calc(100%-75px-28px)] top-0`
      : `fixed w-[calc(100%-280px-28px)] top-0`;
  };
  return (
    <div className="">
      <Drawer
        collapsible={collapsible}
        handleCollapsible={() => setCollapsible(!collapsible)}
      >
        hi
      </Drawer>
      <div
        className={` ${
          collapsible ? `ml-COLLAPSIBLE_DRAWER_WIDTH` : `ml-DRAWER_WIDTH`
        } transition-[margin-left] duration-500 ease-in-out`}
      >
        <div className="px-7 py-4">
          <AdminNavbar
            collapsibleWidth={calculateCollapsible()}
            key={calculateCollapsible()}
          />
          <Outlet />
        </div>
      </div>
    </div>
  );
};
