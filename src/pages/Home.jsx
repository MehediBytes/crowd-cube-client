import React, { useContext } from 'react';
import Banner from '../components/Banner';
import SuccessStories from '../components/SuccessStories';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import RunningCampaigns from '../components/RunningCampaigns';
import { useLoaderData } from 'react-router-dom';
import { ThemeContext } from '../provider/ThemeProvider';

const Home = () => {

    const campaigns = useLoaderData();
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div>
            <div className='text-right'>
                <button className="btn btn-outline my-5 mr-5" onClick={toggleTheme}>
                    {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
                </button>
            </div>
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