import React from "react";

const SimpleButton = ({ children, type = "button" }) => {
  return (
    <button
      className="px-6 py-3 border-2 border-foreground font-semibold rounded-lg text-sm inline-block relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-lg before:-z-40 before:border-2 before:border-transparent hover:before:border-foreground hover:before:scale-150 hover:before:opacity-0 smoothFade"
      type={type}
    >
      {children}
    </button>
  );
};

export default SimpleButton;
