import { FaHandsHelping, FaRegCreditCard, FaHandshake, FaCheckCircle } from 'react-icons/fa';

const HowItWorks = () => {
    return (
        <section className="mb-8 p-5 rounded-xl">
            <div className="text-center">
                <h2 className="lg:text-3xl text-xl font-bold mb-5 text-teal-600">How It Works</h2>
                <hr className="border-teal-600 w-1/3 mx-auto mb-5" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Step 1 */}
                    <div className="bg-base-100 p-6 rounded-lg shadow-lg flex justify-between flex-grow items-center flex-col gap-3 transition-transform transform hover:scale-105">
                        <div className="text-4xl text-teal-600 mb-4">
                            <FaHandsHelping />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-teal-600 mb-2">Create a Campaign</h3>
                            <p className="text-gray-400">Start by creating a campaign for your idea or startup. Set your funding goal and duration.</p>
                        </div>
                    </div>
                    {/* Step 2 */}
                    <div className="bg-base-100 p-6 rounded-lg shadow-lg flex justify-between flex-grow items-center flex-col gap-3 transition-transform transform hover:scale-105">
                        <div className="text-4xl text-teal-600 mb-4">
                            <FaRegCreditCard />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-teal-600 mb-2">Contribute Funds</h3>
                            <p className="text-gray-400">Once your campaign is live, people can contribute funds to support your cause through secure payment methods.</p>
                        </div>
                    </div>
                    {/* Step 3 */}
                    <div className="bg-base-100 p-6 rounded-lg shadow-lg flex justify-between flex-grow items-center flex-col gap-3 transition-transform transform hover:scale-105">
                        <div className="text-4xl text-teal-600 mb-4">
                            <FaHandshake />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-teal-600 mb-2">Collaborate & Engage</h3>
                            <p className="text-gray-400">Engage with backers, share updates, and build a community around your project to ensure success.</p>
                        </div>
                    </div>
                    {/* Step 4 */}
                    <div className="bg-base-100 p-6 rounded-lg shadow-lg flex justify-between flex-grow items-center flex-col gap-3 transition-transform transform hover:scale-105">
                        <div className="text-4xl text-teal-600 mb-4">
                            <FaCheckCircle />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-teal-600 mb-2">Achieve Your Goal</h3>
                            <p className="text-gray-400">Once your funding goal is reached, you’ll be able to bring your project to life with the help of your backers.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;
