import React from "react";

const CTAButton = ({ children, type = "button" }) => {
  return (
    <button
      type={type}
      className="relative inline-block p-px font-semibold leading-6 no-underline bg-secondary shadow-2xl cursor-pointer group rounded-xl shadow-foreground/45"
    >
      <span className="absolute inset-0 overflow-hidden rounded-xl">
        <span className="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(29,188,194,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
      </span>
      <div className="relative z-10 flex items-center px-6 py-3 space-x-2 rounded-xl bg-gray-950/50 ring-1 ring-foreground/10 ">
        {children}
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-gray-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
    </button>
  );
};

export default CTAButton;
