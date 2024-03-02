import React from 'react';

const Tooltip = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <div className="relative group">
      {children}
      <div className="bg-gray-700 text-white p-1 rounded-xl absolute top-8 left-[-20px] hidden group-hover:block">
        <p className="text-xs">{title}</p>
      </div>
    </div>
  );
};

export default Tooltip;
