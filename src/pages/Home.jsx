import React, { useContext } from 'react';
import Banner from '../components/Banner';
import SuccessStories from '../components/SuccessStories';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import RunningCampaigns from '../components/RunningCampaigns';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const campaigns = useLoaderData();
    return (
        <div>
            {/* Banner/Slider section */}
            <header className='max-w-5xl mx-auto mb-10 rounded-xl'>
                <Banner></Banner>
            </header>

            {/* Running campaign section  */}
            <section className='max-w-5xl mx-auto my-10'>
                <RunningCampaigns campaigns={campaigns}></RunningCampaigns>
            </section>

            {/* Extra section-1 */}
            <section className='max-w-5xl mx-auto my-10'>
                <SuccessStories></SuccessStories>
            </section>

            {/* Extra section-2 */}
            <section className='max-w-5xl mx-auto my-10'>
                <HowItWorks></HowItWorks>
            </section>

            {/* Extra section-3 */}
            <section className='max-w-5xl mx-auto my-10'>
                <WhyChooseUs></WhyChooseUs>
            </section>
        </div>
    );
};

export default Home;