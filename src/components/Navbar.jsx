"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import { CgMenuRightAlt } from "react-icons/cg";

const Navbar = () => {
  const pathName = usePathname();

  const [highlightStyle, setHighlightStyle] = useState(null);
  const [openSideBar, setOpenSideBar] = useState(false);

  const navLinksRef = useRef([]);
  const sideOverlayRef = useRef();

  const getActiveIndex = () =>
    navItems.findIndex((item) => item.href === pathName);

  const handleHighlight = () => {
    const activeIndex = getActiveIndex();
    const currentElement = navLinksRef.current[activeIndex];
    if (currentElement) {
      const { offsetWidth, offsetLeft } = currentElement;
      setHighlightStyle({
        width: `${offsetWidth}px`,
        transform: `translateX(${offsetLeft}px)`,
      });
    }
  };

  useEffect(() => {
    if (navLinksRef.current.length > 0) {
      handleHighlight();
    }
    const handleResize = () => handleHighlight();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [pathName]);

  useEffect(() => {
    const closeSideBar = (e) => {
      if (e.target === sideOverlayRef.current) setOpenSideBar(false);
    };
    window.addEventListener("click", closeSideBar);
    return () => window.removeEventListener("resize", closeSideBar);
  }, []);

  const navItems = [
    { label: "Accueil", href: "/" },
    { label: "A propos", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="flex justify-between items-center px-2 py-4 container">
      <Link href={"/"} className="font-bold text-xl flex items-center gap-2">
        <Image src={"/logo.svg"} width={30} height={30} alt="Logo" />
        <span>DoopDrex</span>
      </Link>
      <button
        onClick={() => setOpenSideBar(true)}
        type="button"
        className="md:hidden text-accent p-2 text-3xl relative"
      >
        <span className="sr-only">Open sidebar</span>
        <CgMenuRightAlt />
      </button>
      <div className="max-md:hidden inline-flex gap-2 font-medium relative">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            ref={(el) => (navLinksRef.current[index] = el)}
            className={`p-1 transition-[font-weight] duration-500 ${
              pathName === item.href ? "font-bold" : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
        {highlightStyle && (
          <span
            className="absolute bottom-0 h-0.5 bg-accent transition-all duration-500"
            style={highlightStyle}
          ></span>
        )}
      </div>
      <div
        ref={sideOverlayRef}
        className={`md:hidden fixed top-0 left-0 h-full w-full bg-secondary/20 z-50 ${
          openSideBar ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div
          className={`bg-background w-[80%] h-full p-6 flex flex-col gap-4 ${
            openSideBar ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-700`}
        >
          <div className="flex w-full justify-between items-center mb-4">
            <Link
              href={"/"}
              className="font-bold text-xl flex items-center gap-2"
            >
              <Image src={"/logo.svg"} width={30} height={30} alt="Logo" />
              <span>DoopDrex</span>
            </Link>
            <button
              type="button"
              onClick={() => setOpenSideBar(false)}
              className="text-accent p-2 text-2xl border border-accent rounded-lg relative"
            >
              <span className="sr-only">Close sidebar</span>
              <RxCross1 />
            </button>
          </div>
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`p-1 ${
                pathName === item.href ? "font-bold text-accent" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
