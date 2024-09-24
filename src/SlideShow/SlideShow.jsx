import './slides.css';
import ssdImage from '../assets/ssd.png';

// children is paragraph
const Slide = ({ title, direction, children }) => {
  return (
    <div className='slide'>
      <div className='slide-container'>
        <img className='slide-image' src={ssdImage} />
      </div>

      <div className='slide-container-2'>
        <div className='slide-subcontainer'>
          <h1 className='slide-title'>{title}</h1>
          <p className='slide-paragrpah'>{children}</p>
          <a className='slide-button'></a>
        </div>
      </div>
    </div>
  );
};

const SlideShow = () => {
  return (
    <>
      <div className='slide-show'>
        <div className='arrow'>
          <button className='arrow-button'> {'<'}</button>
        </div>
        <div className='slide-content'>
          <div className='dots-container'>
            <div className='dots'>
              <button className='dot' key='1'></button>
              <button className='dot' key='2'></button>
              <button className='dot' key='3'></button>
            </div>
          </div>
        </div>

        <div className='arrow'>
          <button className='arrow-button'>{'>'}</button>
        </div>
      </div>
      <Slide title='Save 50%'>when you buy your first SSD!</Slide>
    </>
  );
};

export default SlideShow;
