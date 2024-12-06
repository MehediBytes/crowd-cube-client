import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    console.log(user);
    const [showTooltip, setShowTooltip] = useState(false);

    // Handle Logout
    const handleLogout = () => {
        logout()
            .then(() => {
                toast.success('Logged out successfully!');
            })
            .catch((error) => {
                toast.error('Logout failed. Please try again!', error);
            });
    };

    return (
        <div className="navbar bg-gradient-to-r from-teal-500 to-teal-700 p-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li><NavLink to={"/all-campaigns"}>All Campaigns</NavLink></li>
                        <li><NavLink to={"/new-campaign"}>Add New Campaign</NavLink></li>
                        <li><NavLink to={"/my-campaign"}>My Campaign</NavLink></li>
                        <li><NavLink to={"/my-donations"}>My Donations</NavLink></li>
                    </ul>
                </div>
                <div>
                    <Link to={"/"}>
                        <h1 className='text-white text-xl md:text-3xl font-extrabold'>Crowd-Cube</h1>
                    </Link>
                </div>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white">
                    <li><NavLink to={"/"}>Home</NavLink></li>
                    <li><NavLink to={"/all-campaigns"}>All Campaigns</NavLink></li>
                    <li><NavLink to={"/new-campaign"}>Add New Campaign</NavLink></li>
                    <li><NavLink to={"/my-campaign"}>My Campaign</NavLink></li>
                    <li><NavLink to={"/my-donations"}>My Donations</NavLink></li>
                </ul>
            </div>

            <div className="navbar-end">
                {user && user?.email ? (
                    <div className="flex items-center gap-4 relative">
                        {/* User Photo */}
                        <div
                            className="relative group"
                            onMouseEnter={() => setShowTooltip(true)}
                            onMouseLeave={() => setShowTooltip(false)}
                        >
                            <img
                                className="w-10 h-10 rounded-full cursor-pointer"
                                src={user?.photoURL || "None"}
                                alt={user?.displayName || 'User'}
                            />
                            {/* Display Name Tooltip */}
                            {showTooltip && (
                                <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm rounded-md px-3 py-1">
                                    {user?.displayName || 'No Name'}
                                </div>
                            )}
                        </div>

                        {/* Logout Button */}
                        <button
                            onClick={handleLogout}
                            className="btn btn-outline text-white">
                            Log Out
                        </button>
                    </div>
                ) : (
                    <div className='flex flex-col md:flex-row justify-center items-center gap-2'>
                        <Link to={"/auth/login"}>
                            <button className='btn btn-outline text-white w-20'>Log-In</button>
                        </Link>
                        <Link to={"/auth/register"}>
                            <button className='btn btn-outline text-white w-20'>Register</button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
