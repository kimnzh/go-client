"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  const isLandingPage = pathname === "/";

  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="navbar">
      <Link href="/" className="navbar-logo">
        GoExplore Indonesia
      </Link>
      <div className="navbar-nav">
        {isLandingPage && (
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("destination");
            }}
          >
            Destinations
          </a>
        )}
        <Link href="/book-a-tour">Book a Tour</Link>
      </div>
    </nav>
  );
}

export default Navbar;
