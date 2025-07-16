"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation"; 

import { FiChevronDown, FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { links } from "./Mylinks";

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const menuRef = useRef(null);
  const timeoutRef = useRef(null);
  const pathname = usePathname();

  const toggleMobileMenu = useCallback(() => {
    setMobileMenu((prev) => !prev);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", mobileMenu);
  }, [mobileMenu]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMobileMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDropdownHover = useCallback((index) => {
    clearTimeout(timeoutRef.current);
    setActiveDropdown(index);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 200);
  }, []);

  const handleDropdownToggle = useCallback((index) => {
    setActiveDropdown((prev) => (prev === index ? null : index));
  }, []);

  return (
    <header className="bg-white text-primary shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8 py-2 md:py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/images/logo.webp" alt="Logo of the SIPGo Website" width={36} height={36} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex lg:space-x-6 pr-5">
            {links.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => handleDropdownHover(index)}
                onMouseLeave={handleDropdownLeave}
              >
                <Link
                  href={item.link || "#"}
                  className={`flex items-center px-3 py-2 text-[15px] rounded-md transition-colors
                    ${
                      pathname === item.link
                        ? "text-indigo-600 bg-indigo-50 font-medium hover:font-medium"
                        : "hover:bg-indigo-50 hover:text-indigo-600"
                    }`}
                >
                  {item.name}
                  {item.submenu && (
                    <FiChevronDown
                      className={`ml-1 transition-transform ${
                        activeDropdown === index ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.submenu && (
                  <div
                    className={`absolute left-0 mt-1 py-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg transition-all 
                    ${
                      activeDropdown === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-2 pointer-events-none"
                    }`}
                  >
                    {item.sublinks.map((sublink, subIndex) => (
                      <Link
                        key={subIndex}
                        href={sublink.link}
                        className={`block px-4 py-2 text-sm transition-colors ${
                          pathname === sublink.link
                            ? "bg-indigo-50 text-indigo-600"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            aria-label={mobileMenu ? "Close menu" : "Open menu"}
          >
            {mobileMenu ? <AiOutlineClose className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`md:hidden fixed inset-y-0 right-0 w-full bg-white shadow-xl z-50 transform transition-transform
        ${mobileMenu ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="px-4 sm:px-6 lg:px-8 py-2 border-b border-gray-100 flex justify-between items-center">
          <Image src="/images/logo.webp" alt="Logo" width={32} height={32} />
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-lg hover:bg-gray-100"
            aria-label="Close menu"
          >
            <AiOutlineClose className="w-6 h-6" />
          </button>
        </div>

        <nav className="p-4 overflow-y-auto">
          {links.map((item, index) => (
            <div key={index} className="mb-2">
              {!item.submenu ? (
                <Link
                  href={item.link}
                  onClick={() => setMobileMenu(false)}
                  className={`w-full block px-4 py-3 rounded-lg ${
                    pathname === item.link
                      ? "bg-indigo-50 text-indigo-600"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {item.name}
                </Link>
              ) : (
                <>
                  <button
                    onClick={() => handleDropdownToggle(index)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg ${
                      activeDropdown === index
                        ? "bg-indigo-50 text-indigo-600"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <span>{item.name}</span>
                    <FiChevronDown
                      className={`transform transition-transform ${
                        activeDropdown === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeDropdown === index && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.sublinks.map((sublink, subIndex) => (
                        <Link
                          key={subIndex}
                          href={sublink.link}
                          onClick={() => setMobileMenu(false)}
                          className={`block px-4 py-2 text-sm rounded-lg ${
                            pathname === sublink.link
                              ? "bg-indigo-50 text-indigo-600"
                              : "hover:bg-gray-100"
                          }`}
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
