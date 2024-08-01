import React, { useState } from 'react';

const CarouselFragments = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="carousel">
            <button onClick={handlePrev}><img src="./left.png" alt="img" /></button>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
            <button onClick={handleNext}><img src="./right.png" alt="img" /></button>
        </div>
    );
};

export default CarouselFragments;
