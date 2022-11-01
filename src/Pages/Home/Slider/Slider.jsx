import React from 'react';
import './Slider.css'

const Slider = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full mb-10">

            <div className='img-gradient'>
                <img src={image} alt='' className="w-full rounded-xl" />
            </div>

            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-5 right-5 top-1/4 w-1/3">
                <h2 className='text-6xl text-white font-bold leading-[70px]'>Affordable Price For Car Servicing</h2>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-5 right-5 top-2/4 text-white w-1/2">
                <p className=' text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-5 right-5 top-3/4 text-white w-1/2">
                <button className="btn mr-5 bg-orange-600">Discover More</button>
                <button className="btn outline bg-transparent outline-orange-600">Latest Project</button>
            </div>
        </div>
    );
};

export default Slider;