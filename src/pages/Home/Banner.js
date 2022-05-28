import React from 'react';

const Banner = () => {
    return (
        <div className="hero mb-12 pt-10 sm:mb-14 sm:pt-14">
            <div className="hero-content flex-col lg:flex-row-reverse p-1 sm:p-4 mb-4 sm:mb-0">
                <img src="https://i.ibb.co/FDJYjqz/TPQXZJIWOFCB5-OBKCA2-ZKYNKXE.jpgw=740" className="sm:max-w md:w-1/2 rounded-lg shadow-2xl" alt=''/>
                <div className='text-gray-900'>
                    <h1 className="text-5xl font-bold leading-tight text-secondary">Big Choice to Plumbing Tools</h1>
                    <p className="py-6 text-secondary mr-5">At Bymetal Tool Inc. we work with businesses throughout the East Coast and beyond to deliver exceptional metal stamping services.  Its member companies produce most of the nation’s plumbing products.</p>
                    <button type="button" className="btn btn-primary px-8 border-0 font-bold text-secondary">
                        GET STARED
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;