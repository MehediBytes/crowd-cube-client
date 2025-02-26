import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center flex-col min-h-screen space-y-3 py-10">
            <Helmet>
                <title>Error-Page | Crowd-Cube</title>
            </Helmet>
            <h1 className="text-6xl font-bold text-red-500 mb-5">OPPS!</h1>
            <p className="text-xl font-bold">404 - Page Not Found</p>
            <p className="pb-3 text-md font-medium text-gray-500">The page you are looking for might have been removed <br />had its name changed or is temporarily unavailable.</p>
            <Link to='/'>
                <button className="btn rounded-full bg-teal-600 text-white">GO TO HOMEPAGE</button>
            </Link>
        </div>
    );
};

export default ErrorPage;