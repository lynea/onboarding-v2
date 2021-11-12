import React, { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

type IconButtonProps = {
  onClick: () => void;
};

const IconButton: FunctionComponent<IconButtonProps> = ({}) => (
  <button className="flex justify-center px-3 py-1 text-purple-900">
    <FontAwesomeIcon icon={faCoffee} />
  </button>
);

export default IconButton;
