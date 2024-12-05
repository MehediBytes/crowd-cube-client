import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';
import Home from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';
import AllCampaign from '../pages/AllCampaign';
import NewCampaign from '../pages/NewCampaign';
import MyCampaign from '../pages/MyCampaign';
import MyDonation from '../pages/MyDonation';
import AuthLayout from '../layouts/AuthLayout';
import LogIn from '../pages/LogIn';
import Register from '../pages/Register';
import CampaignDetails from '../pages/CampaignDetails';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=> fetch('http://localhost:5000/campaigns'),
            },
            {
                path: "/all-campaigns",
                element: <AllCampaign></AllCampaign>,
                loader: ()=> fetch('http://localhost:5000/campaigns'),
            },
            {
                path: "/new-campaign",
                element: <PrivateRoute> <NewCampaign></NewCampaign> </PrivateRoute>,
            },
            {
                path: "/my-campaign",
                element: <PrivateRoute> <MyCampaign></MyCampaign> </PrivateRoute>,
            },
            {
                path: "/my-donations",
                element: <PrivateRoute> <MyDonation></MyDonation> </PrivateRoute>,
                loader: ()=> fetch('http://localhost:5000/donations'),
            },
            {
                path: "/campaign-details/:id",
                element: <PrivateRoute> <CampaignDetails></CampaignDetails> </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/campaigns/${params.id}`),
            },
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <LogIn></LogIn>,
            },
            {
                path: "/auth/register",
                element: <Register></Register>,
            }
        ]
    }
]);

export default router;