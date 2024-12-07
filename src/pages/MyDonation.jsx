import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

const MyDonation = () => {
    const { user } = useContext(AuthContext);

    const donationData = useLoaderData();

    // Filter donations to only show those made by the current user
    const userDonations = donationData.filter(donation => donation.email === user.email);
    console.log(userDonations);

    return (
        <div className="max-w-5xl mx-auto py-10">
            <h2 className="text-3xl font-bold text-center mb-5">
                <Typewriter
                    words={['My Donations']}
                    loop={false}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={70}
                />
            </h2>
            <hr className='border-black w-1/3 mx-auto mb-10' />
            {userDonations.length === 0 ? (
                <p className="text-center">You haven't donated to any campaigns yet.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {userDonations.map((donation) => (
                        <div key={donation._id} className="border p-5 space-y-5 rounded-lg shadow-xl bg-base-100 mb-5 text-center transition-transform transform hover:scale-105">
                            <h3 className="text-2xl font-bold text-teal-600">{donation.title}</h3>
                            <p className="text-gray-400"><strong>Amount Donated:</strong> ${donation.amount}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyDonation;
