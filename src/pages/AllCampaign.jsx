import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllCampaign = () => {
    // Fetch campaigns from loader data
    const campaigns = useLoaderData();

    // State for sorted campaigns and sorting order
    const [sortedCampaigns, setSortedCampaigns] = useState(campaigns);
    const [isAscending, setIsAscending] = useState(true);

    // Sort campaigns by minimum donation
    const handleSort = () => {
        const sorted = [...sortedCampaigns].sort((a, b) => {
            return isAscending ? a.minDonation - b.minDonation : b.minDonation - a.minDonation;
        });
        setSortedCampaigns(sorted);
        setIsAscending(!isAscending); // Toggle sorting order
    };

    return (
        <div className="max-w-5xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-center mb-8">All Campaigns</h2>
            <hr className="border-gray-400 w-1/4 mx-auto mb-8" />

            {/* Sort Button */}
            <div className="text-center mb-6">
                <button
                    onClick={handleSort}
                    className="btn bg-teal-600 text-white px-6 py-2 rounded-md shadow-sm hover:bg-teal-700 transition"
                >
                    Sort by {isAscending ? "(Ascending)" : "(Descending)"}
                </button>
            </div>

            {/* Campaign Table */}
            <div className="overflow-x-auto rounded-lg">
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 px-4 py-2">Image</th>
                            <th className="border border-gray-300 px-4 py-2">Title</th>
                            <th className="border border-gray-300 px-4 py-2">Type</th>
                            <th className="border border-gray-300 px-4 py-2">Min Donation</th>
                            <th className="border border-gray-300 px-4 py-2">Deadline</th>
                            <th className="border border-gray-300 px-4 py-2">Owner</th>
                            <th className="border border-gray-300 px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedCampaigns.map((campaign) => (
                            <tr key={campaign._id} className="hover:bg-gray-100">
                                <td className="border border-gray-300 px-4 py-2">
                                    <img
                                        src={campaign.image}
                                        alt={campaign.title}
                                        className="w-20 h-20 object-cover rounded-lg"
                                    />
                                </td>
                                <td className="border border-gray-300 px-4 py-2">{campaign.title}</td>
                                <td className="border border-gray-300 px-4 py-2">{campaign.campaignType}</td>
                                <td className="border border-gray-300 px-4 py-2">${campaign.minDonation}</td>
                                <td className="border border-gray-300 px-4 py-2">{campaign.deadline}</td>
                                <td className="border border-gray-300 px-4 py-2">{campaign.userName}</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">
                                    <Link to={`/campaign-details/${campaign._id}`}>
                                        <button className="btn bg-teal-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-teal-700 transition">
                                            See More
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllCampaign;
