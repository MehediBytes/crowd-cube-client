import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { Fade, Slide } from "react-awesome-reveal";
import { ThemeContext } from "../provider/ThemeProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [showTooltip, setShowTooltip] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      setTimeout(() => {
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        }
      }, 100);
    }
  }, [location]);


  // Handle Logout
  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("Logged out successfully!");
      })
      .catch((error) => {
        toast.error("Logout failed. Please try again!", error);
      });
  };

  return (
    <div className="navbar fixed z-10 bg-teal-600 px-4 text-base-100">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-[1] bg-teal-400 mt-3 w-52 p-2 shadow"
            >
              {user?.email ?
                <Fade cascade>
                  <li>
                    <NavLink to={"/"}>Home</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/all-campaigns"}>All Campaigns</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/add-campaign"}>Add New Campaign</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/my-campaign"}>My Campaign</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/my-donations"}>My Donations</NavLink>
                  </li>
                  <li>
                    <Link to={"/#about"}>About Us</Link>
                  </li>
                  <li>
                    <Link to={"/#contact-us"}>Contact Us</Link>
                  </li>
                </Fade> :
                <Fade cascade>
                  <li>
                    <NavLink to={"/"}>Home</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/all-campaigns"}>All Campaigns</NavLink>
                  </li>
                  <li>
                    <Link to={"/#about"}>About Us</Link>
                  </li>
                  <li>
                    <Link to={"/#contact-us"}>Contact Us</Link>
                  </li>
                </Fade>}
            </ul>
          </div>
          <div>
            <Slide direction="left">
              <Link to={"/"}>
                <h1 className="text-base-100 text-xl md:text-3xl font-extrabold">
                  Crowd-Cube
                </h1>
              </Link>
            </Slide>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          {user?.email ?
            <Fade cascade>
              <ul className="menu menu-horizontal px-1">
                <li>
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/all-campaigns"}>All Campaigns</NavLink>
                </li>
                <li>
                  <NavLink to={"/add-campaign"}>Add New Campaign</NavLink>
                </li>
                <li>
                  <NavLink to={"/my-campaign"}>My Campaign</NavLink>
                </li>
                <li>
                  <NavLink to={"/my-donations"}>My Donations</NavLink>
                </li>
                <li>
                  <Link to={"/#about"}>About Us</Link>
                </li>
                <li>
                  <Link to={"/#contact-us"}>Contact Us</Link>
                </li>
              </ul>
            </Fade> :
            <Fade cascade>
              <ul className="menu menu-horizontal px-1">
                <li>
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/all-campaigns"}>All Campaigns</NavLink>
                </li>
                <li>
                  <Link to={"/#about"}>About Us</Link>
                </li>
                <li>
                  <Link to={"/#contact-us"}>Contact Us</Link>
                </li>
              </ul>
            </Fade>}
        </div>

        <div className="navbar-end flex items-center gap-4">
          {/* Theme Toggle */}
          <div className="flex items-center">
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                className="toggle"
                checked={theme === "dark"}
                onChange={toggleTheme}
              />
            </label>
          </div>

          <div>
            {user && user?.email ? (
              <div className="flex items-center gap-4 relative">
                {/* User Photo */}
                <div
                  className="relative group"
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                >
                  <Slide direction="down">
                    <img
                      className="w-10 h-10 rounded-full cursor-pointer"
                      referrerPolicy="no-referrer"
                      src={user?.photoURL || "None"}
                      alt={user?.displayName || "User"}
                    />
                  </Slide>
                  {/* Display Name Tooltip */}
                  {showTooltip && (
                    <Fade>
                      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm rounded-md px-3 py-1">
                        {user?.displayName || "No Name"}
                      </div>
                    </Fade>
                  )}
                </div>

                {/* Logout Button */}
                <Fade>
                  <button
                    onClick={handleLogout}
                    className="btn btn-outline text-base-100"
                  >
                    Log Out
                  </button>
                </Fade>
              </div>
            ) : (
              <div>
                <Fade cascade>
                  <Link to={"/auth/login"}>
                    <button className="btn btn-outline text-base-100 w-20">
                      Log-In
                    </button>
                  </Link>
                </Fade>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;