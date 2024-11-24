import React from "react";

const MorphGlass = ({ title, children }) => {
  return (
    <div className="p-6 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
      <h2 className="text-xl font-bold text-tertiary">{title}</h2>
      <p className="mt-2 leading-relaxed">{children}</p>
    </div>
  );
};

export default MorphGlass;
