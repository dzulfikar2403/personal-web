import { useState } from "react";


const Navbar = () => {
  const [isActive, setIsActive] = useState  ("/");

  return (
    <nav
        data-aos="fade-down"
        className="px-8 py-4 flex justify-between items-end sticky top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-md"
      >
        <span className="font-semibold">Dzulfikar2403</span>
        <div className="flex gap-4 items-center text-sm">
          <a
            href={"#hero"}
            className={
              isActive === "/" || isActive === "#hero"
                ? "underline underline-offset-4 transition-all"
                : ""
            }
            onClick={() => setIsActive("#hero")}
          >
            Home
          </a>
          <a
            href={"#about"}
            className={
              isActive === "#about"
                ? "underline underline-offset-4 transition-all"
                : ""
            }
            onClick={() => setIsActive("#about")}
          >
            About
          </a>
          <a
            href={"#tech"}
            className={
              isActive === "#tech"
                ? "underline underline-offset-4 transition-all"
                : ""
            }
            onClick={() => setIsActive("#tech")}
          >
            Tech
          </a>
          <a
            href={"#project"}
            className={
              isActive === "#project"
                ? "underline underline-offset-4 transition-all"
                : ""
            }
            onClick={() => setIsActive("#project")}
          >
            Project
          </a>
        </div>
        <span>Hire</span>
      </nav>
  )
}

export default Navbar