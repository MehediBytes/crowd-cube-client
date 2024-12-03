import React from 'react';
import banner1 from '../assets/banner-1.jpg'
import banner2 from '../assets/banner-2.jpg'
import banner3 from '../assets/banner-3.jpg'
import banner4 from '../assets/banner-4.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-96 rounded-xl">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src={banner1}
                    className="w-full" />

                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
                    <h3 className="text-lg font-bold">Food for everyone</h3>
                    <p className="text-sm">Supporting the poor and homeless with ongoing food assistance through crowdfunding.</p>
                </div>

                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src={banner2}
                    className="w-full" />

                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
                    <h3 className="text-lg font-bold">Rural water</h3>
                    <p className="text-sm">Collecting funds to provide consistent access to clean water in rural areas.</p>
                </div>

                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src={banner3}
                    className="w-full" />

                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
                    <h3 className="text-lg font-bold">Support new startup</h3>
                    <p className="text-sm">Raise funds for innovative ideas and startups to generate employment opportunities.</p>
                </div>

                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img
                    src={banner4}
                    className="w-full" />

                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
                    <h3 className="text-lg font-bold">Healing Hands</h3>
                    <p className="text-sm">Aims to provide essential medical support and care to those in need, fostering hope and well-being in underserved communities.</p>
                </div>

                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;