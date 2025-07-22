import PropTypes from 'prop-types';
import { useState } from 'react';
import arrowRight from '../../assets/arrow_right.png';
import arrowLeft from '../../assets/arrow_left.png';
import './slider.scss';

const Slider = ({ images }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const goBack = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const goNext = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <div className="slider">
      <img
        src={images[currentSlideIndex]}
        className="slider__image"
        alt="slide image"
      />

      {images.length !== 1 && (
        <>
            <img src={arrowLeft} className='slider__arrow slider__arrow--left' alt="image de flèche pour naviguer" onClick={goNext} />
            <img src={arrowRight} className='slider__arrow slider__arrow--right' alt="image de flèche pour naviguer" onClick={goBack} />
        </>
      )}
    </div>
  );
};

Slider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slider;