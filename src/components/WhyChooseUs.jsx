import { FaLock, FaChartLine, FaUsers } from 'react-icons/fa';

const WhyChooseUs = () => {
    return (
        <section className="bg-teal-600 text-white py-10 px-5 rounded-xl">
            <div className="container mx-auto text-center">
                <h2 className="lg:text-3xl text-xl font-bold mb-8">Why Crowdcube?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {/* Feature 1 */}
                    <div className="bg-teal-700 p-6 rounded-lg shadow-lg flex justify-center items-center flex-col gap-3">
                        <div className="text-4xl text-teal-200">
                            <FaLock />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Safe & Secure</h3>
                            <p className="text-gray-200">Our platform ensures secure transactions, giving contributors and campaign creators peace of mind.</p>
                        </div>
                    </div>
                    {/* Feature 2 */}
                    <div className="bg-teal-700 p-6 rounded-lg shadow-lg flex justify-center items-center flex-col gap-3">
                        <div className="text-4xl text-teal-200">
                            <FaChartLine />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Transparent Tracking</h3>
                            <p className="text-gray-200">You can track the progress of your campaign and contributions, ensuring full transparency every step of the way.</p>
                        </div>
                    </div>
                    {/* Feature 3 */}
                    <div className="bg-teal-700 p-6 rounded-lg shadow-lg flex justify-center items-center flex-col gap-3">
                        <div className="text-4xl text-teal-200">
                            <FaUsers />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Proven Impact</h3>
                            <p className="text-gray-200">Join thousands of successful campaigns that have made a real difference in communities around the world.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
