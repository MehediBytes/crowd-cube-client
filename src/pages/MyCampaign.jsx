import React, { useState, useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const MyCampaign = () => {
    const AllCampaigns = useLoaderData();
    const { user } = useContext(AuthContext);
    const [campaignData, setCampaignData] = useState(AllCampaigns);

    // Filter campaigns for the current user
    const userCampaigns = campaignData.filter(campaign => campaign.userEmail === user.email);

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "Are you want to delete this campaign or not?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/campaigns/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire("Deleted!", "Your campaign has been deleted.", "success");

                            // Update state to remove the deleted campaign
                            const updatedCampaigns = campaignData.filter(campaign => campaign._id !== _id);
                            setCampaignData(updatedCampaigns);
                        }
                    })
                    .catch(error => toast.error("Error deleting campaign:", error));
            }
        });
    };

    return (
        <div className="max-w-5xl mx-auto py-10">
            <h2 className="text-3xl font-bold mb-6 text-center">My Campaigns</h2>
            <hr className="border-black w-1/3 mx-auto mb-10" />

            {userCampaigns.length === 0 ? (
                <p className='text-center'>You have not created any campaigns yet.</p>
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
                                <tr key={campaign._id} className='hover:bg-base-100'>
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
                                    <td className="border border-gray-300 px-4 py-2 space-x-5">
                                        <Link to={`/update-campaign/${campaign._id}`}><button className="btn btn-info text-base-100 rounded-full">Update</button></Link>
                                        <button
                                            onClick={() => handleDelete(campaign._id)}
                                            className="btn btn-error text-base-100 rounded-full"
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
