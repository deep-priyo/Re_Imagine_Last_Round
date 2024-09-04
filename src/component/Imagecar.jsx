import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Imagecar = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const images = [
    'src/assets/images/image4.png',
    
    "src/assets/images/image6.png",
    "src/assets/images/image7.png",
    "src/assets/images/image8.png",
  ];

  return (
    <div className="mt-12"> {/* Reduce the margin from the top */}
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px" /* Add gap between images */
        sliderClass="px-2" /* Add this for padding between slides */
      >
        {images.map((image, index) => (
          <div key={index} className="px-2"> {/* Add padding between images */}
            <img src={image} alt={`Carousel ${index}`} style={{ width: '100%', height: 'auto' }} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Imagecar;
