import React, { FunctionComponent, ReactNode } from 'react';

type IconButtonProps = {
  handleClick: () => void;
  icon: ReactNode;
};

const IconButton: FunctionComponent<IconButtonProps> = ({
  handleClick,
  icon
}) => (
  <button
    onClick={handleClick}
    className="flex justify-center items-center fixed top-0 right-0 z-10 text-8xl bg-white px-3 py-1 text-purple-900 h-14 w-14 rounded-full"
  >
    {icon}
  </button>
);

export default IconButton;
