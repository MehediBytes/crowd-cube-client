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

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/all-campaigns",
                element: <AllCampaign></AllCampaign>,
            },
            {
                path: "/new-campaign",
                element: <NewCampaign></NewCampaign>,
            },
            {
                path: "/my-campaign",
                element: <MyCampaign></MyCampaign>,
            },
            {
                path: "/my-donations",
                element: <MyDonation></MyDonation>,
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