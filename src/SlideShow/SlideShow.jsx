import './slides.css';
import ssdImage from '../assets/ssd.png';
import longSleeve from '../assets/longsleeve.png';
import diamondRing from '../assets/diamondring.png';

import { Link } from 'react-router-dom';
import { useState } from 'react';

// children is paragraph
const SlideBubble = ({ image, color, alt }) => {
  return (
    <div className='slide-container' style={{ backgroundColor: color }}>
      <img className='slide-image' src={image} alt={alt} />
    </div>
  );
};

const SlideContainer = ({
  title,
  paragraph,
  buttonText,
  secondaryColor,
  primaryColor,
  to,
}) => {
  return (
    <div className='slide-container-2'>
      <div className='slide-subcontainer'>
        <h1 className='slide-title' style={{ color: secondaryColor }}>
          {' '}
          {title}
        </h1>
        <p className='slide-paragraph' style={{ color: secondaryColor }}>
          {paragraph}
        </p>

        <Link to={to}>
          <button
            className='slide-button'
            href='#'
            style={{ backgroundColor: secondaryColor, color: primaryColor }}
          >
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
};

// children is paragraph
const Slide = ({
  title,
  isSwitched,
  buttonText,
  image,
  alt,
  primaryColor,
  secondaryColor,
  children,
  to,
}) => {
  return (
    <div className='slide' style={{ backgroundColor: primaryColor }}>
      {isSwitched ? (
        <>
          <SlideContainer
            title={title}
            paragraph={children}
            buttonText={buttonText}
            secondaryColor={secondaryColor}
            primaryColor={primaryColor}
            to={to}
          />

          <SlideBubble image={image} alt={alt} color={secondaryColor} />
        </>
      ) : (
        <>
          <SlideBubble image={image} alt={alt} color={secondaryColor} />
          <SlideContainer
            title={title}
            paragraph={children}
            buttonText={buttonText}
            secondaryColor={secondaryColor}
            primaryColor={primaryColor}
            to={to}
          />
        </>
      )}
    </div>
  );
};

const Arrow = ({ isLeft, onClick }) => {
  const directionClass = isLeft ? 'arrow-button-left' : '';

  return (
    <div className='arrow'>
      <button
        className={`arrow-button ${directionClass}`}
        onClick={onClick}
      ></button>
    </div>
  );
};

const slidesArray = [
  {
    title: 'Save 50%',
    buttonText: 'Save Big Today!',
    image: ssdImage,
    primaryColor: '#4F759B',
    secondaryColor: '#9DFFF9',
    description: 'when you buy your first SSD!',
    alt: 'An image of a solid-state drive (SSD)',
    isSwitched: false,
    path: 'product/10',
  },
  {
    title: 'Save Big on Long Tees',
    buttonText: 'Shop now today!',
    image: longSleeve,
    primaryColor: '#ed7300',
    secondaryColor: '#2f1505',
    description: 'When you enter code "SAVE 20" on check out!',
    alt: 'An image of a long sleeve t-shirt',
    isSwitched: true,
    path: 'product/4',
  },
  {
    title: 'Free Diamond Ring!',
    buttonText: 'Buy Now!',
    image: diamondRing,
    primaryColor: '#DADDD8',
    secondaryColor: '#001427',
    description:
      'We will get you a free diamond ring when you buy your first one today!',
    alt: 'An image of a diamond ring',
    isSwitched: false,
    path: 'product/7',
  },
];

const SlideShow = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const lastSlideIndex = slidesArray.length - 1;

  const handleIncrementSlideIndex = () => {
    console.log(slideIndex, 'the current slide index');

    if (slideIndex >= lastSlideIndex) return setSlideIndex(0);
    return setSlideIndex((index) => index + 1);
  };

  const handleDecrementSlideIndex = () => {
    if (slideIndex <= 0) return setSlideIndex(2);
    return setSlideIndex((index) => index - 1);
  };

  const slide = slidesArray[slideIndex];

  return (
    <>
      <div
        className='slide-show'
        style={{
          background: slide.primaryColor,
        }}
      >
        <Arrow isLeft={true} onClick={handleDecrementSlideIndex} />

        <div className='slide-content'>
          <Slide
            title={slide.title}
            buttonText={slide.buttonText}
            primaryColor={slide.primaryColor}
            secondaryColor={slide.secondaryColor}
            isSwitched={slide.isSwitched}
            image={slide.image}
            to={slide.path}
          >
            {slide.description}
          </Slide>

          <div className='dots-container'>
            <div className='dots'>
              <button
                className={slideIndex === 0 ? 'dot dot-selected' : 'dot'}
                key='1'
              ></button>
              <button
                className={slideIndex === 1 ? 'dot dot-selected' : 'dot'}
                key='2'
              ></button>
              <button
                className={slideIndex === 2 ? 'dot dot-selected' : 'dot'}
                key='3'
              ></button>
            </div>
          </div>
        </div>
        <Arrow onClick={handleIncrementSlideIndex} />
      </div>
    </>
  );
};

export default SlideShow;
