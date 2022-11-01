import React, { useEffect, useState } from 'react';
import SingleService from './SingleService';


const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='mb-10'>
            <h2>Mehedi {services.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <SingleService
                        key={service._id}
                        ss={service}
                    ></SingleService>)
                }
            </div>
        </div>
    );
};

export default Services;