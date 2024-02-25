import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Drawer from 'shared/components/Drawer';
import { MAX_WIDTH } from 'shared/constants';

export const AdminLayout = () => {
  const [collapsible, setCollapsibile] = useState(false);
  const { DRAWER_WIDTH, COLLAPSIBLE_DRAWER_WIDTH } = MAX_WIDTH;
  return (
    <div className="">
      <Drawer
        collapsible={collapsible}
        handleCollapsile={() => setCollapsibile(!collapsible)}
      >
        hi
      </Drawer>
      <div
        className={` ${
          collapsible
            ? `ml-[${COLLAPSIBLE_DRAWER_WIDTH}]`
            : `ml-[${DRAWER_WIDTH}]`
        } transition-[margin-left] duration-500 ease-in-out`}
      >
        <div className="px-7 py-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
