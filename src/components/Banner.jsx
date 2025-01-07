import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from '../assets/banner-1.jpg';
import banner2 from '../assets/banner-2.jpg';
import banner3 from '../assets/banner-3.jpg';
import banner4 from '../assets/banner-4.jpg';

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    const banners = [
        {
            img: banner1,
            title: "Food for everyone",
            description: "Supporting the poor and homeless with ongoing food assistance through crowdfunding."
        },
        {
            img: banner2,
            title: "Rural water",
            description: "Collecting funds to provide consistent access to clean water in rural areas."
        },
        {
            img: banner3,
            title: "Support new startup",
            description: "Raise funds for innovative ideas and startups to generate employment opportunities."
        },
        {
            img: banner4,
            title: "Healing Hands",
            description: "Aims to provide essential medical support and care to those in need, fostering hope and well-being in underserved communities."
        },
    ];

    return (
        <div className="w-full pt-28 px-5">
            <Slider {...settings}>
                {banners.map((banner, index) => (
                    <div key={index} className="relative">
                        <img src={banner.img} alt={banner.title} className="w-full h-96 object-cover" />
                        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-40 text-white p-4">
                            <h3 className="text-lg font-bold">{banner.title}</h3>
                            <p className="text-sm">{banner.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Banner;
