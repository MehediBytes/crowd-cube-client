import React from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="md:flex md:justify-between bg-teal-600 text-base-100 md:items-center p-4">
                <div className="">
                    <h1 className='text-base-100 text-xl md:text-3xl font-extrabold'>Crowd-Cube</h1>
                </div>
                <p className='text-base-100'>Copyright © {new Date().getFullYear()} - All right reserved</p>
                <div className="text-base-100">
                    <div className='flex items-center mt-2 gap-3 text-2xl'>
                        <a href='https://www.facebook.com' target='_blank'><FaFacebookF /></a>
                        <a href='https://www.instagram.com' target='_blank'><FaInstagram /></a>
                        <a href='https://x.com' target='_blank'><BsTwitterX /></a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;