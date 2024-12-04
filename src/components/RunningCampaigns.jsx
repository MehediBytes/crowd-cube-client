import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RunningCampaigns = ({campaigns }) => {
    // console.log(campaigns );

    const [runningCampaigns, setRunningCampaigns] = useState([]);

    useEffect(() => {
        // Filter running campaigns
        const now = new Date();
        const activeCampaigns = campaigns.filter(
            (campaign) => new Date(campaign.deadline) > now
        );

        // Limit to 6 running campaigns
        setRunningCampaigns(activeCampaigns.slice(0, 6));
    }, [campaigns]);

    return (
        <div className="max-w-6xl mx-auto my-10">
            <h2 className="text-3xl font-bold text-center mb-8">Running Campaigns</h2>
            <hr className='border-black w-1/3 mx-auto mb-10'/>

            {/* Check if there are running campaigns */}
            {runningCampaigns .length === 0 ? (
                <p className="text-center text-gray-500">No active campaigns at the moment.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {runningCampaigns .map((campaign) => (
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

                            <Link to={`/campaign-details/${campaign._id}`}><button className="btn bg-teal-600 text-white w-full">See more</button></Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default RunningCampaigns;
