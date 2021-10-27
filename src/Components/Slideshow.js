import React, { useState } from 'react';
import SlideshowImages from "../assets/SlideshowImages";

function Slideshow() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const SlideImages = SlideshowImages;

    function goToPrevious() {
        if (currentSlide === 0) {
            setCurrentSlide(SlideImages.length - 1)
        }
        else {
            setCurrentSlide(currentSlide - 1)
        }
    }

    function goToNext() {
        if (currentSlide === SlideImages.length - 1) {
            setCurrentSlide(0)
        }
        else {
            setCurrentSlide(currentSlide + 1)
        }
    }

    return (
        <div id="carouselExampleControls" className="carousel slide h-100" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block mh-100 w-100" src={SlideImages[currentSlide].src} alt={SlideImages[currentSlide].txt} />
                </div>
            </div>
            <button className="carousel-control-prev" data-slide="prev" onClick={goToPrevious}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </button>
            <button className="carousel-control-next" data-slide="next" onClick={goToNext}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </button>
        </div>
    )
}

export default Slideshow