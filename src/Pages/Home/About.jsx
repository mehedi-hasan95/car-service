import React from 'react';
import person from '../../assets/images/about_us/person.jpg';
import person2 from '../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero my-12 bg-base-200 mb-10">
            <div className="hero-content flex-col md:flex-row">
                <div className='md:w-1/2 relative'>
                    <img src={person} alt='' className="max-w-sm rounded-lg w-full shadow-2xl" />
                    <img src={person2} alt='' className="max-w-sm rounded-lg w-full shadow-2xl absolute top-1/2 md:left-1/4" />
                </div>
                <div className='md:w-1/2'>
                    <h4 className='text-[#FF3811] font-bold text-xl'>About Us</h4>
                    <h2 className="text-5xl font-bold md:w-2/3 py-5">We are qualified & of experience in this field</h2>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

                    <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn bg-[#FF3811]">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;