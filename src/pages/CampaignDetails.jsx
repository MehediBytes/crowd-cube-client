import React, { useContext, useState, useEffect } from 'react';
import { Link, Navigate, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const CampaignDetails = () => {
    const campaign = useLoaderData();
    console.log(campaign);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [donationAmount, setDonationAmount] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isDeadlinePassed, setIsDeadlinePassed] = useState(false);

    useEffect(() => {
        const currentDate = new Date();
        const campaignDeadline = new Date(campaign.deadline);

        if (currentDate > campaignDeadline) {
            setIsDeadlinePassed(true);
        }
    }, [campaign.deadline]);

    const handleDonate = async () => {
        // Parse donationAmount to a number and validate it
        const parsedAmount = parseFloat(donationAmount);
        if (isNaN(parsedAmount) || parsedAmount <= 0) {
            toast.error('Please enter a valid donation amount.');
            return;
        }

        if(!user?.email){
            toast.error("Please Log in first!")
            navigate("/auth/login")
        }

        // This is the check to allow donation if it's greater than or equal to the minimum donation
        if (parsedAmount >= campaign.minDonation) {
            const donationData = {
                campaignId: campaign._id,
                title: campaign.title,
                userName: user.displayName,
                email: user.email,
                amount: parsedAmount,
                OwnerName: campaign.userName,
                OwnerMail: campaign.userEmail,
            };

            try {
                setIsLoading(true);
                const response = await fetch('https://crowd-cube-server.vercel.app/donations', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(donationData),
                });

                if (response.ok) {
                    toast.success('Donation successful!');
                    setDonationAmount('');
                } else {
                    const errorData = await response.json();
                    toast.error(errorData.message || 'Failed to complete the donation.');
                }
            } catch (error) {
                toast.error('Failed to complete the donation. Please try again.', error);
            } finally {
                setIsLoading(false);
            }
        } else {
            toast.error(`Donation must be at least $${campaign.minDonation}.`);
        }
    };

    return (
        <div className="max-w-6xl mx-auto pt-28 pb-8 px-5 min-h-screen">
            <Helmet>
                <title>Campaign-Details | Crowd-Cube</title>
            </Helmet>
            <h2 className="text-3xl font-bold mb-5 md:text-center">{campaign.title}</h2>
            <div className='md:flex md:justify-between md:gap-5 md:flex-grow'>
                <div className='md:w-1/2'>
                    <img
                        src={campaign.image}
                        alt={campaign.title}
                        className="w-full md:h-full h-96 object-cover rounded-lg mb-6"
                    />

                </div>
                <div className='md:w-1/2 space-y-2 md:flex md:flex-col md:justify-between md:flex-grow'>
                    <p>
                        <strong>Description:</strong> {campaign.description}
                    </p>
                    <p>
                        <strong>Type:</strong> {campaign.campaignType}
                    </p>
                    <p>
                        <strong>Minimum Donation:</strong> ${campaign.minDonation}
                    </p>
                    <p>
                        <strong>Deadline:</strong> {campaign.deadline}
                    </p>
                    <p>
                        <strong>Founder Name:</strong> {campaign.userName}
                    </p>
                    <p>
                        <strong>Founder Email:</strong> {campaign.userEmail}
                    </p>

                    {/* Display message if deadline has passed */}
                    {isDeadlinePassed && (
                        <div className="bg-red-200 p-4 mb-6 rounded-md text-red-600">
                            <strong>The deadline for this campaign has passed. Donations are no longer accepted.</strong>
                        </div>
                    )}

                    {/* Donation Input */}
                    {!isDeadlinePassed && (
                        <div className="flex gap-3 items-center">
                            <label htmlFor="donationAmount" className="block mb-2 text-gray-700">
                                <strong>Enter Donation Amount:</strong>
                            </label>
                            <input
                                type="number"
                                id="donationAmount"
                                value={donationAmount}
                                onChange={(e) => setDonationAmount(e.target.value)}
                                className="border border-gray-300 rounded-md px-4 py-2"
                                placeholder={`Minimum $${campaign.minDonation}`}
                            />
                        </div>
                    )}

                    {/* Donate Button */}
                    <button
                        onClick={handleDonate}
                        className="btn bg-teal-600 text-white px-6 py-2 rounded-md shadow-sm hover:bg-teal-700 transition"
                        disabled={isLoading || isDeadlinePassed}
                    >
                        {isLoading ? 'Processing...' : isDeadlinePassed ? 'Deadline Passed' : 'Donate Now'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CampaignDetails;
