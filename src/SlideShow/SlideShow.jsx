import './slides.css';
import ssdImage from '../assets/ssd.png';
import longSleeve from '../assets/longsleeve.png';
import diamondRing from '../assets/diamondring.png';

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

        <button
          className='slide-button'
          href='#'
          style={{ backgroundColor: secondaryColor, color: primaryColor }}
        >
          {buttonText}
        </button>
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
          />
        </>
      )}
    </div>
  );
};

const Arrow = ({ isRight }) => {
  const directionClass = isRight ? 'arrow-button-right' : '';

  return (
    <div className='arrow'>
      <button className={`arrow-button ${directionClass}`}> </button>
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
    children: 'when you buy your first SSD!',
    alt: 'An image of a solid-state drive (SSD)',
    isSwitched: false,
  },
  {
    title: 'Save Big on Long Tees',
    buttonText: 'Shop now today!',
    image: longSleeve,
    primaryColor: '#ed7300',
    secondaryColor: '#2f1505',
    children: 'When you enter code "SAVE 20" on check out!',
    alt: 'An image of a long sleeve t-shirt',
    isSwitched: true,
  },
  {
    title: 'Free Diamond Ring!',
    buttonText: 'Buy Now!',
    image: diamondRing,
    primaryColor: '#DADDD8',
    secondaryColor: '#001427',
    children:
      'We will get you a free diamond ring when you buy your first one today!',
    alt: 'An image of a diamond ring',
    isSwitched: false,
  },
];

const SlideShow = () => {
  return (
    <>
      <div
        className='slide-show'
        style={{
          background: 'rgb(218, 221, 216)',
        }}
      >
        <Arrow isRight={true} />

        <div className='slide-content'>
          {/* <Slide
            title='Save 50%'
            buttonText='Save Big Today!'
            image={ssdImage}
            primaryColor='#4F759B'
            secondaryColor='#9DFFF9'
          >
            when you buy your first SSD!
          </Slide> */}

          <Slide
            title='Free Diamond Ring!'
            buttonText='Buy Now!'
            primaryColor='#DADDD8'
            secondaryColor='#001427'
            isSwitched={true}
            image={diamondRing}
          >
            We will get you a free diamond ring when you buy your first one
            today!
          </Slide>

          <div className='dots-container'>
            <div className='dots'>
              <button className='dot' key='1'></button>
              <button className='dot dot-selected' key='2'></button>
              <button className='dot' key='3'></button>
            </div>
          </div>
        </div>
        <Arrow />
      </div>
    </>
  );
};

export default SlideShow;
