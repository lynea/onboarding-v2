import React, { FunctionComponent } from "react";

type TextBoxProps = {
  className?: string;
};

const TextBox: FunctionComponent<TextBoxProps> = ({ children, className }) => (
  <div
    className={`${className} flex justify-center flex-col bg-purple-800 text-indigo-50 rounded p-1 text-center`}
  >
    {children}
  </div>
);

export default TextBox;
