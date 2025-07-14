import clsx from "clsx";
import { Cpu, Folders, Home, Info, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState("/");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav
        data-aos="fade-down"
        className="px-4 md:px-8 py-4 sticky top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-md"
      >
        {/* mobile view */}
        <div className="relative flex justify-between items-center md:hidden ">
          <span className="font-semibold">Dzulfikar2403</span>
          <Menu
            size={20}
            className="transition-all hover:scale-105 active:scale-95 cursor-pointer"
            onClick={() => setIsOpen((prev) => !prev)}
          />
        </div>

        {/* desktop view */}
        <div
          id="dektop"
          className="hidden relative md:flex md:justify-between md:items-center "
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
        </div>
      </nav>

      {isOpen && (
        <div className="fixed z-50 inset-0 backdrop-blur-md bg-white/60" onClick={() => setIsOpen(prev => !prev)}>
          <div
            className={clsx("bg-white ml-auto p-4 h-full transition-all", {
              "w-0 opacity-0 -translate-x-10": !isOpen,
              "w-1/2 opacity-100 translate-x-0": isOpen,
            })}
            onClick={(e) => e.stopPropagation()}
          >
            <X
              size={20}
              onClick={() => setIsOpen((prev) => !prev)}
              className="ml-auto transition-all hover:scale-105 active:scale-95 cursor-pointer"
            />
            <h1 className="font-semibold py-4">Dzulfikar2403</h1>
            <div className="space-y-4 flex flex-col">
              <a
                href={"#hero"}
                className={clsx("flex gap-1.5 items-center text-sm ", {
                  "underline underline-offset-4 transition-all":
                    isActive === "/" || isActive === "#hero",
                })}
                onClick={() => setIsActive("#hero")}
              >
                <Home size={16} />
                <p>Home</p>
              </a>
              <a
                href={"#about"}
                className={clsx("flex gap-1.5 items-center text-sm", {
                  "underline underline-offset-4 transition-all":
                    isActive === "#about",
                })}
                onClick={() => setIsActive("#about")}
              >
                <Info size={16} />
                <p>About</p>
              </a>
              <a
                href={"#tech"}
                className={clsx("flex gap-1.5 items-center text-sm", {
                  "underline underline-offset-4 transition-all":
                    isActive === "#tech",
                })}
                onClick={() => setIsActive("#tech")}
              >
                <Cpu size={16} />
                <p>Tech</p>
              </a>
              <a
                href={"#project"}
                className={clsx("flex gap-1.5 items-center text-sm", {
                  "underline underline-offset-4 transition-all":
                    isActive === "#project",
                })}
                onClick={() => setIsActive("#project")}
              >
                <Folders size={16} />
                <p>Project</p>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
