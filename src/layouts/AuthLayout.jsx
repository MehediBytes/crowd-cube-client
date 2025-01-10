import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const AuthLayout = () => {
    return (
        <div>
            {/* Navbar */}
            <nav>
                <Navbar></Navbar>
            </nav>

            {/* Outlet */}
            <div className='max-w-6xl mx-auto pt-32 min-h-screen'>
                <Outlet></Outlet>
            </div>

            {/* Footer */}
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AuthLayout;