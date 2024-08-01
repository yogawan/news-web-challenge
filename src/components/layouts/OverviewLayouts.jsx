import React from 'react';
import CarouselFragments from '../fragments/CarouselFragments';

const OverviewLayouts = () => {
    const images = [
        './overview.png',
        'https://via.placeholder.com/600x400.png?text=Slide+2',
        'https://via.placeholder.com/600x400.png?text=Slide+3',
    ];

    return (
        <div className="overview" id='screenshot'>
            <h2 className='black'>CHECK OUR APP INTERFACE LOOK</h2>
            <p className='semi-black'>Lihat sekilas antarmuka aplikasi UTY Creative Hub yang dirancang khusus untuk memudahkan pengalaman Anda dalam membooking ruangan. Dengan desain yang kreatif dan user-friendly, aplikasi ini memastikan bahwa setiap langkah, mulai dari pencarian hingga pembookingan, menjadi lebih cepat dan mudah. Mari jelajahi tampilan antarmuka yang menarik dan intuitif ini!</p>
            <CarouselFragments images={images} />
        </div>
    );
};

export default OverviewLayouts;
