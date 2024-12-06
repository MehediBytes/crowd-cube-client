import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const MyDonation = () => {
    const { user } = useContext(AuthContext);

    const donationData = useLoaderData();

    // Filter donations to only show those made by the current user
    const userDonations = donationData.filter(donation => donation.email === user.email);

    return (
        <div className="max-w-5xl mx-auto py-10">
            <h2 className="text-3xl font-bold mb-6 text-center">My Donations</h2>
            <hr className='border-black w-1/3 mx-auto mb-10'/>
            {userDonations.length === 0 ? (
                <p className="text-center">You haven't donated to any campaigns yet.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {userDonations.map((donation) => (
                        <div key={donation._id} className="border p-4 rounded-lg shadow-md bg-white mb-5 space-y-2">
                            <h3 className="text-2xl font-bold text-teal-600">{donation.title}</h3>
                            <p className="text-gray-700"><strong>Amount Donated:</strong> ${donation.amount}</p>
                            <p className="text-gray-700"><strong>Founder Name:</strong> {donation.userName}</p>
                            <p className="text-gray-700"><strong>Founder Email:</strong> {donation.email}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyDonation;
