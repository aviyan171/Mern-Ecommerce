import React from 'react';
import { BsList } from 'react-icons/bs';

const Drawer = ({
  children,
  collapsible = false,
  handleCollapsible,
}: {
  children: React.ReactNode;
  collapsible?: boolean;
  handleCollapsible?: VoidFunction;
}) => {
  return (
    <div className="relative">
      <div
        className={`h-full  ${
          !collapsible ? ' w-DRAWER_WIDTH' : 'w-COLLAPSIBLE_DRAWER_WIDTH'
        }  fixed left-0 bg-alabaster p-2 transition-[width] duration-500 ease-in-out mr-[300px]`}
      >
        <div
          className="bg-black h-[40px] w-[40px] absolute rounded-full right-[-16px] top-2 cursor-pointer "
          onClick={handleCollapsible}
        >
          <div className="text-white relative left-[30%] top-[30%] hover:rotate-6 ">
            <BsList />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Drawer;
