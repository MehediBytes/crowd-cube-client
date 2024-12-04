import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllCampaign = () => {

    const campaigns = useLoaderData();
    console.log(campaigns);

    const [sortedCampaigns, setSortedCampaigns] = useState(campaigns);
    const [isAscending, setIsAscending] = useState(true);

    // Handle sorting based on minDonation
    const handleSort = () => {
        const sorted = [...sortedCampaigns].sort((a, b) => {
            if (isAscending) {
                return a.minDonation - b.minDonation; // Ascending order
            } else {
                return b.minDonation - a.minDonation; // Descending order
            }
        });
        setSortedCampaigns(sorted);
        setIsAscending(!isAscending); // Toggle sorting order
    };

    return (
        <div>
            <div className="max-w-5xl mx-auto my-10">
                <h2 className="text-3xl font-bold text-center mb-8">All Campaigns</h2>
                {/* Sort Button */}
                <hr className='border-black w-1/4 mx-auto mb-10' />
                <button
                    onClick={handleSort}
                    className="btn bg-teal-600 text-white mb-6"
                >
                    Sort by {isAscending ? "(Ascending)" : "(Descending)"}
                </button>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {sortedCampaigns.map((campaign) => (
                        <div key={campaign._id} className="card bg-white shadow-md rounded-lg p-4">
                            <img
                                src={campaign.image}
                                alt={campaign.title}
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">{campaign.title}</h3>
                            <p className="text-gray-500 mb-2">Campaign type: {campaign.campaignType}</p>
                            <p className="text-gray-700 mb-2">Min Donation: ${campaign.minDonation}</p>
                            <p className="text-gray-500 mb-4">Deadline: {campaign.deadline}</p>

                            <Link to={"/campaign-details"}><button className="btn bg-teal-600 text-white w-full">See more</button></Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllCampaign;