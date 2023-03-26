import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from 'react';

export default function Banner() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        'https://png.pngtree.com/thumb_back/fw800/background/20190223/ourmid/pngtree-minimalistic-coffee-shop-cartoon-background-shopexteriorgreen-leafcartoonbackgroundstreet-image_66943.jpg',
        'https://png.pngtree.com/thumb_back/fw800/background/20190223/ourmid/pngtree-coffee-shop-pink-cartoon-background-shoppinkthe-guestswaitertreeshousescartoonbackground-image_64508.jpg',
        'https://img.lovepik.com/original_origin_pic/18/11/12/77098668ce4e3e348e564b6d126f8edc.jpg_wh860.jpg',
        'https://images.vexels.com/content/170945/preview/modern-coffee-shop-illustration-774bbd.png',
    ];

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 3 : (pre) => pre - 1);
    };
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 3 ? 0 : (pre) => pre + 1);
    };
    return (
        <div className="w-full h-auto overflow-x-hidden">
            <div className="w-screen h-[650px] relative">
                <div
                    style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
                    className="w-400vw h-full flex transition-transform duration-300"
                >
                    <img className="w-screen h-full object-cover" src={data[0]} alt="banner" loading="priority" />
                    <img className="w-screen h-full object-cover" src={data[1]} alt="banner" loading="priority" />
                    <img className="w-screen h-full object-cover" src={data[2]} alt="banner" loading="priority" />
                    <img className="w-screen h-full object-cover" src={data[3]} alt="banner" loading="priority" />
                </div>
                <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
                    <div className="w-14 h-12 flex bg-slate-800 text-white items-center justify-center border-[1px] border-gray-700 hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300">
                        <FontAwesomeIcon onClick={prevSlide} icon={faArrowLeft} />
                    </div>
                    <div className="w-14 h-12 flex bg-slate-800 text-white items-center justify-center border-[1px] border-gray-700 hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300">
                        <FontAwesomeIcon onClick={nextSlide} icon={faArrowRight} />
                    </div>
                </div>
            </div>
        </div>
    );
}
