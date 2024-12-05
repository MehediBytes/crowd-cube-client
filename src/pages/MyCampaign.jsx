import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const MyCampaign = () => {
    const campaignData = useLoaderData(); // Fetch campaigns from the loader
    const { user } = useContext(AuthContext); // Access user info from AuthContext

    const userCampaigns = campaignData.filter(campaign => campaign.userEmail === user.email);
    console.log(userCampaigns);

    return (
        <div className="max-w-5xl mx-auto py-10">
            <h2 className="text-3xl font-bold mb-6 text-center">My Campaigns</h2>
            <hr className='border-black w-1/3 mx-auto mb-10' />

            {userCampaigns.length === 0 ? (
                <p>You have not created any campaigns yet.</p>
            ) : (
                <div className="overflow-x-auto rounded-lg">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 px-4 py-2">Campaign Name</th>
                                <th className="border border-gray-300 px-4 py-2">Image</th>
                                <th className="border border-gray-300 px-4 py-2">Type</th>
                                <th className="border border-gray-300 px-4 py-2">Deadline</th>
                                <th className="border border-gray-300 px-4 py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userCampaigns.map((campaign) => (
                                <tr key={campaign._id}>
                                    <td className="border border-gray-300 px-4 py-2">{campaign.title}</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <img
                                            src={campaign.image}
                                            alt={campaign.title}
                                            className="w-20 h-20 object-cover rounded-lg"
                                        />
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">{campaign.campaignType}</td>
                                    <td className="border border-gray-300 px-4 py-2">{campaign.deadline}</td>
                                    <td className="border border-gray-300 px-4 py-2 space-x-2">
                                        <button
                                            className="btn btn-info rounded-full"
                                        >
                                            Update
                                        </button>
                                        <button
                                            className="btn btn-warning rounded-full"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default MyCampaign;
