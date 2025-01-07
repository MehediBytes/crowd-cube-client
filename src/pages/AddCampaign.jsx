import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../provider/AuthProvider';
import { Helmet } from 'react-helmet-async';

const AddCampaign = () => {

    const { user } = useContext(AuthContext);

    const handleAddCampaign = e => {
        e.preventDefault();

        const image = e.target.image.value;
        const title = e.target.title.value;
        const campaignType = e.target.campaignType.value;
        const description = e.target.description.value;
        const minDonation = e.target.minDonation.value;
        const deadline = e.target.deadline.value;
        const userEmail = user?.email;
        const userName = user?.displayName;

        const newCampaign = { image, title, campaignType, description, minDonation, deadline, userEmail, userName };

        // send data to the server
        fetch('https://crowd-cube-server.vercel.app/campaigns', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newCampaign),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Campaign added successfully!');
                    e.target.reset();
                }
            })
            .catch(error => {
                toast.error('Something went wrong. Please try again.', error)
            });
    };

    return (
        <div className="max-w-6xl mx-auto pt-28 pb-8 px-5 min-h-screen">
            <Helmet>
                <title>Add-Campaign | Crowd-Cube</title>
            </Helmet>
            <div className="text-center space-y-2 mb-5">
                <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold">Add New Campaign</h1>
                <p className="">
                    Fill out the form below to add a new campaign.
                </p>
            </div>
            <div className="card bg-base-100 shadow-2xl">
                <form onSubmit={handleAddCampaign} className="card-body">
                    {/* Form Fields */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Campaign Thumbnail</span>
                        </label>
                        <input type="text" name="image" placeholder="Image URL" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Campaign Title</span>
                        </label>
                        <input type="text" name="title" placeholder="Campaign Title" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Campaign Type</span>
                        </label>
                        <select name="campaignType" className="input input-bordered" required>
                            <option value="personal issue">Personal Issue</option>
                            <option value="startup">Startup</option>
                            <option value="business">Business</option>
                            <option value="creative ideas">Creative Ideas</option>
                        </select>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea name="description" placeholder="Campaign Description" className="input input-bordered" required></textarea>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Minimum Donation Amount</span>
                        </label>
                        <input type="number" name="minDonation" placeholder="Minimum Donation" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Deadline</span>
                        </label>
                        <input type="date" name="deadline" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">User Email (Read-Only)</span>
                        </label>
                        <input type="email" name="userEmail" value={user?.email || ""} className="input input-bordered" readOnly />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">User Name (Read-Only)</span>
                        </label>
                        <input type="text" name="userName" value={user?.displayName || ""} className="input input-bordered" readOnly />
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn bg-teal-600 hover:bg-teal-800 text-base-100">Add Campaign</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCampaign;
