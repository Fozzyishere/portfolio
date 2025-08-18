import React, { useEffect } from "react";
import { useNavbarStore } from "@/store/navbarStore";

const Navbar = () => {
  const { isVisible, handleScroll } = useNavbarStore();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [handleScroll]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-10 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="bg-gruvbox-bg0 text-gruvbox-fg4 flex flex-wrap items-center mx-auto p-4 drop-shadow-md">
        <ul className="ml-auto flex flex-row">
          <li className="mr-6 hover:text-gruvbox-fg2">
            <a href="#about-me" onClick={e => { e.preventDefault(); scrollToSection("about-me"); }}>
              About Me
            </a>
          </li>
          <li className="mr-6 hover:text-gruvbox-fg2">
            <a href="#projects" onClick={e => { e.preventDefault(); scrollToSection("projects"); }}>
              Projects
            </a>
          </li>
          <li className="mr-6 hover:text-gruvbox-fg2">
            <a href="#contact" onClick={e => { e.preventDefault(); scrollToSection("contact"); }}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;