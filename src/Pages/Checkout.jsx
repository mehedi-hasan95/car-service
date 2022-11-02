import React from 'react';
import { useLoaderData } from 'react-router-dom';
import bannar from '../assets/images/checkout/checkout.png'

const Checkout = () => {
    const { title, _id, price } = useLoaderData();

    const handleCheckout = e => {
        e.preventDefault();
        const form = e.target;
        const name = `${form.fname.value} ${form.lname.value}`;
        const phone = form.phone.value;
        const email = form.email.value;
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            customar: name,
            email,
            phone,
            message,
            price,
        }

        // Send Order data to DB 
        fetch('http://localhost:5000/orders', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order),
        })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged) {
                    alert('Thanks for buy')
                    form.reset();
                }
            })
            .catch((err) => {
                console.error('Error:', err);
            });
    }
    return (
        <div>
            <div className=' relative'>
                <div className="img-gradient">
                    <img src={bannar} alt="" />
                </div>
                <h2 className='px-5 absolute top-1/2 text-3xl text-white'>Checkout Now</h2>
            </div>
            <form onSubmit={handleCheckout} className='bg-[#F3F3F3] p-10 my-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <input className='px-5 py-2 border border-purple-300 rounded' type="text" name="fname" id="" required />
                    <input className='px-5 py-2 border border-purple-300 rounded' type="text" name="lname" id="" required />
                    <input className='px-5 py-2 border border-purple-300 rounded' type="tel" name="phone" id="" required />
                    <input className='px-5 py-2 border border-purple-300 rounded' type="email" name="email" id="" />
                </div>
                <textarea className='w-full my-5 border border-purple-300 rounded' name="message" id="" cols="30" rows="10"></textarea>
                <input className='bg-[#FF3811] text-center py-2 w-full rounded text-white font-semibold' type="submit" value="Order Confirm" />
            </form>
        </div>
    );
};

export default Checkout;