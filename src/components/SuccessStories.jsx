import { FaWater, FaHamburger, FaGraduationCap } from 'react-icons/fa';

const SuccessStories = () => {
    return (
        <section className="bg-teal-400 text-base-100 py-10 px-5 rounded-xl">
            <div className="container mx-auto text-center">
                <h2 className="lg:text-3xl text-xl font-bold mb-8">Transforming Dreams into Reality</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {/* Success Story Card 1 */}
                    <div className="bg-teal-600 shadow-lg rounded-lg p-6 flex justify-center items-center flex-col gap-3 transition-transform transform hover:scale-105">
                        <div className="text-4xl text-teal-200">
                            <FaWater />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Campaign for Clean Water</h3>
                            <p className="text-gray-200">This campaign helped provide clean water to rural communities, bringing life-saving resources to thousands.</p>
                        </div>
                    </div>
                    {/* Success Story Card 2 */}
                    <div className="bg-teal-600 shadow-lg rounded-lg p-6 flex justify-center items-center flex-col gap-3 transition-transform transform hover:scale-105">
                        <div className="text-4xl text-teal-200">
                            <FaHamburger />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Feeding the Hungry</h3>
                            <p className="text-gray-200">Thanks to our supporters, this campaign provided thousands of meals to homeless families across the city.</p>
                        </div>
                    </div>
                    {/* Success Story Card 3 */}
                    <div className="bg-teal-600 shadow-lg rounded-lg p-6 flex justify-center items-center flex-col gap-3 transition-transform transform hover:scale-105">
                        <div className="text-4xl text-teal-200">
                            <FaGraduationCap />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Education for All</h3>
                            <p className="text-gray-200">This campaign helped provide scholarships to underprivileged students, giving them the chance to achieve their dreams.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SuccessStories;
