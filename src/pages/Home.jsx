import React from 'react';
import Banner from '../components/Banner';
import SuccessStories from '../components/SuccessStories';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import RunningCampaigns from '../components/RunningCampaigns';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ContactUs from '../components/ContactUs';

const Home = () => {

    const campaigns = useLoaderData();
    return (
        <div className='max-w-6xl mx-auto min-h-screen'>
            <Helmet>
                <title>Crowd-Cube</title>
            </Helmet>
            {/* Banner/Slider section */}
            <header>
                <Banner></Banner>
            </header>

            {/* Running campaign section  */}
            <section>
                <RunningCampaigns campaigns={campaigns}></RunningCampaigns>
            </section>

            {/* Extra section-1 */}
            <section>
                <SuccessStories></SuccessStories>
            </section>

            {/* Extra section-2 */}
            <section>
                <HowItWorks></HowItWorks>
            </section>

            {/* Extra section-3 */}
            <section>
                <WhyChooseUs></WhyChooseUs>
            </section>

            {/* Contact us section */}
            <section>
                <ContactUs></ContactUs>
            </section>
        </div>
    );
};

export default Home;