import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import navcss from "./navbar.module.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <nav
      className={`${navcss.nav} navcss.nav top-0 fixed z-30 left-0 right-0  text-white md:px-24 px-10 py-6`}
    >
      <div className="flex justify-between items-center w-full">
        <h1>
          <NavLink className="md:text-3xl text-2xl font-bold uppercase" to={""}>
            Start Framework
          </NavLink>
        </h1>
        <div className="hidden lg:block">
          <ul className="flex ">
            <li className="mr-4 text-base font-bold uppercase">
              <NavLink className="p-2 rounded-lg" to="/about">
                about
              </NavLink>
            </li>
            <li className="mr-4 text-base font-bold uppercase">
              <NavLink className="p-2 rounded-lg" to="/portfolio">
                portfolio
              </NavLink>
            </li>
            <li className="mr-4 text-base font-bold uppercase">
              <NavLink className="p-2 rounded-lg" to="/contact">
                contact
              </NavLink>
            </li>
          </ul>
        </div>
        <FontAwesomeIcon
          icon={faBars}
          className="lg:hidden py-2 px-3 border text-xl rounded-md cursor-pointer"
          onClick={() => setShow(!show)}
        />
      </div>
      <div
        className={`lg:hidden mt-4 transition-all duration-500 overflow-hidden ${
          show ? "h-36" : "h-0"
        } `}
      >
        <ul>
          <li className="my-5 text-base font-bold uppercase">
            <NavLink className="p-2 rounded-lg" to="/about">
              about
            </NavLink>
          </li>
          <li className="my-5 text-base font-bold uppercase">
            <NavLink className="p-2 rounded-lg" to="/portfolio">
              portfolio
            </NavLink>
          </li>
          <li className="my-5 text-base font-bold uppercase">
            <NavLink className="p-2 rounded-lg" to="/contact">
              contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
