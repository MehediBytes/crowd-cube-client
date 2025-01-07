import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

const RunningCampaigns = ({ campaigns }) => {
    const [runningCampaigns, setRunningCampaigns] = useState([]);

    useEffect(() => {
        // Filter running campaigns
        const now = new Date();
        const activeCampaigns = campaigns.filter(
            (campaign) => new Date(campaign.deadline) > now
        );

        // Limit to 6 running campaigns
        setRunningCampaigns(activeCampaigns.slice(0, 8));
    }, [campaigns]);

    return (
        <div className="my-8 p-5">
            <h2 className="text-3xl font-bold text-center mb-5">
                <Typewriter
                    words={['Running Campaigns']}
                    loop={false}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={70}
                />
            </h2>
            <hr className="border-black w-1/3 mx-auto mb-5" />

            {/* Check if there are running campaigns */}
            {runningCampaigns.length === 0 ? (
                <p className="text-center">No active campaigns at the moment.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {runningCampaigns.map((campaign) => (
                        <div
                            key={campaign._id}
                            className="card bg-base-100 shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105"
                        >
                            <div>
                                <img
                                    src={campaign.image}
                                    alt={campaign.title}
                                    className="w-full h-32 object-cover rounded-lg mb-4"
                                />
                            </div>
                            <div className='flex flex-col flex-grow justify-between gap-1'>
                                <h3 className="text-xl font-semibold">{campaign.title}</h3>
                                <p className="text-gray-400">
                                    {campaign.campaignType}
                                </p>
                                <p className="text-gray-500">
                                    Deadline: {campaign.deadline}
                                </p>
                                <Link to={`/campaign-details/${campaign._id}`}>
                                    <button className="btn bg-teal-600 text-base-100 hover:bg-teal-800 w-full mt-4">
                                        See more
                                    </button>
                                </Link>
                            </div>

                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default RunningCampaigns;
