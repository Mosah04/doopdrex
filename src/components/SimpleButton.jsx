import React from "react";

const SimpleButton = ({ children, type = "button" }) => {
  return (
    <button
      className="px-6 py-3 border-2 border-foreground font-semibold rounded-lg text-sm inline-block"
      type={type}
    >
      {children}
    </button>
  );
};

export default SimpleButton;
