import React from 'react';
import Banner from '../components/Banner';
import SuccessStories from '../components/SuccessStories';
import HowItWorks from '../components/HowItWorks';

const Home = () => {
    return (
        <div>
            {/* Banner/Slider section */}
            <header className='max-w-5xl mx-auto my-10 rounded-xl'>
                <Banner></Banner>
            </header>

            {/* Running campaign section  */}
            <section className='max-w-5xl mx-auto my-10'>
                <SuccessStories></SuccessStories>
            </section>

            {/* Extra section-1 */}
            <section className='max-w-5xl mx-auto my-10'>
                <HowItWorks></HowItWorks>
            </section>

            {/* Extra section-2 */}
            <section>

            </section>

            {/* Extra section-3 */}
            <section>

            </section>
        </div>
    );
};

export default Home;