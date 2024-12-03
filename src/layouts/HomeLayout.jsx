import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
    return (
        <div className="max-w-6xl mx-auto">
            {/* Navbar section */}
            <nav>
                <Navbar></Navbar>
            </nav>

            {/* outlet */}
            <Outlet></Outlet>

            {/* Footer */}
            <footer>
                
            </footer>
        </div>
    );
};

export default HomeLayout;