import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import { Helmet } from 'react-helmet-async';

const MyDonation = () => {
    const { user } = useContext(AuthContext);

    const donationData = useLoaderData();

    // Filter donations to only show those made by the current user
    const userDonations = donationData.filter(donation => donation.email === user.email);

    return (
        <div className="pb-8 px-5 min-h-screen">
            <Helmet>
                <title>My-Donations | Crowd-Cube</title>
            </Helmet>
            <h2 className="text-3xl font-bold text-center mb-5 text-teal-600">
                <Typewriter
                    words={['My Donations']}
                    loop={false}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={70}
                />
            </h2>
            <hr className='border-teal-600 w-1/3 mx-auto mb-10' />
            {userDonations.length === 0 ? (
                <p className="text-center">You haven't donated to any campaigns yet.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {userDonations.map((donation) => (
                        <div key={donation._id} className="border p-5 flex flex-col flex-grow justify-between gap-2 rounded-lg shadow-xl bg-base-100 transition-transform transform hover:scale-105">
                            <h3 className="text-2xl font-bold text-teal-600">{donation.title}</h3>
                            <h3><strong>Founder Name: </strong> {donation.OwnerName || "N/A"}</h3>
                            <h3><strong>Founder Email: </strong> 
                            <a className='text-blue-500' href={`mailto:${donation.OwnerMail}`} rel="noopener noreferrer">{donation.OwnerMail || "N/A"}</a></h3>
                            <p className="text-gray-400"><strong>Amount Donated:</strong> ${donation.amount}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyDonation;
