import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
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
                <div className=''>
                    <Link to={"/"}><h1 className='text-white text-xl md:text-3xl font-extrabold'>Crowd-Cube</h1></Link>
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
            <div className="navbar-end flex flex-col md:flex-row justify-center items-center gap-2">
                <Link to={"/auth/login"}><button className='btn btn-outline text-white w-20'>Log-In</button></Link>
                <Link to={"/auth/register"}><button className='btn btn-outline text-white w-20'>Register</button></Link>
            </div>
        </div>
    );
};

export default Navbar;