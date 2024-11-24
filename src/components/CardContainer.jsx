"use client";
import React, { useRef } from "react";

const CardContainer = ({ children }) => {
  const containerRef = useRef();

  const handleMouseMove = (e) => {
    const children = containerRef.current.children;
    for (const card of children) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };
  return (
    <article
      onMouseMove={handleMouseMove}
      ref={containerRef}
      className="flex gap-4 justify-center flex-wrap cards"
    >
      {children}
    </article>
  );
};

export default CardContainer;
