import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLoaderData } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

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
        setIsAscending(!isAscending);
    };

    return (
        <div className="max-w-6xl mx-auto pt-28 pb-8 px-5 min-h-screen">
            <Helmet>
                <title>All-Campaigns | Crowd-Cube</title>
            </Helmet>
            <h2 className="text-3xl font-bold text-center mb-5">
                <Typewriter
                    words={['All Campaigns']}
                    loop={false}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={70}
                />
            </h2>
            <hr className="border-black w-1/4 mx-auto mb-3" />

            {/* Sort Button */}
            <div className="text-center mb-6">
                <button
                    onClick={handleSort}
                    className="btn bg-teal-600 text-base-100 px-6 py-2 rounded-md shadow-sm hover:bg-teal-700 transition"
                >
                    Sort by {isAscending ? "(Ascending)" : "(Descending)"}
                </button>
            </div>

            {/* Campaigns card */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {sortedCampaigns.map((campaign) => (
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
        </div>
    );
};

export default AllCampaign;
