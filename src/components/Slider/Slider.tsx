import React, { useState, useRef } from 'react';

const Slider = ({ 
  slides, 
  autoplayInterval = 5000,
  containerClassName = "", 
  slideDuration = 500,
  renderSlide,
  renderControls,
  backgroundImage = null,
  autoplay = false
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  

  React.useEffect(() => {

    if (autoplay) {
      const interval = setInterval(() => {
        nextSlide();
      }, autoplayInterval);
      
      return () => {
        clearInterval(interval);
      };
    }
  }, [currentSlide, autoplayInterval, autoplay]);
  
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const defaultRenderControls = () => (
    <div className="flex flex-col items-center">
      <div className="flex justify-center space-x-7 mb-4">
        <button 
          className="bg-gray-300 hover:bg-gray-300 border text-white border-gray-300 rounded-lg p-2 focus:outline-none w-10 h-10 flex items-center justify-center"
          onClick={prevSlide}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg p-2 focus:outline-none w-10 h-10 flex items-center justify-center"
          onClick={nextSlide}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
  
      <div className="flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button 
            key={index}
            className={`h-3 w-3 rounded-full cursor-pointer ${currentSlide === index ? 'bg-yellow-500' : 'bg-gray-300'}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );

  const DesktopSlider = () => (
    <div className="hidden lg:block ipad-pro:hidden w-full">
      <div className="w-full"
        style={backgroundImage ? { 
            backgroundImage: `url(${backgroundImage})`, 
            backgroundRepeat: "no-repeat", 
            backgroundSize: "contain", 
            backgroundPosition: "center" 
          } : {}}
        >
        <div className="relative overflow-hidden px-16 py-8">
          <div 
            ref={sliderRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(calc(-${currentSlide * 60}%))` }}
          >
            {slides.map((slide, index) => (
              <div 
                key={slide.id}
                className="w-4/6 flex-shrink-0 px-2 flex justify-center items-center"
              >
                <div 
                  className={`
                    ${currentSlide === index ? 'scale-100 ' : 
                      index === (currentSlide + 1) % slides.length ? 'scale-95 ' : 
                      'scale-85 '}
                    transition-all duration-500 
                  `}
                >
                  {renderSlide ? renderSlide(slide, index, currentSlide) : (
                    <img 
                      src={slide.image} 
                      alt={slide.alt} 
                      className="w-full h-auto" 
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const TabletSlider = () => (
    <div className="hidden md:block ipad-pro:block lg:hidden w-full">
      <div className="w-full overflow-hidden"
        style={backgroundImage ? { 
            backgroundImage: `url(${backgroundImage})`, 
            backgroundRepeat: "no-repeat", 
            backgroundSize: "contain", 
            backgroundPosition: "center" 
          } : {}}
        >
        <div className="relative pl-4 pr-1 py-6">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 95}%)` }}
          >
            {slides.map((slide, index) => (
              <div 
                key={slide.id}
                className="w-[97%] flex-shrink-0 px-3 flex justify-center items-center"
              >
                <div 
                  className={`
                    ${currentSlide === index ? 'scale-100 ' : 
                      index === (currentSlide + 1) % slides.length ? 'scale-85 ' : 
                      'scale-100 '}
                    transition-all duration-500 w-full
                  `}
                >
                  {renderSlide ? renderSlide(slide, index, currentSlide) : (
                    <img 
                      src={slide.image} 
                      alt={slide.alt} 
                      className="w-full h-auto" 
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const MobileSlider = () => (
    <div className="block md:hidden w-full pt-7">
      <div className="relative overflow-hidden py-4">
        <div 
          className="flex transition-transform duration-500 ease-in-out" 
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div 
              key={slide.id}
              className="w-full flex-shrink-0 px-2"
            >
              <div className="p-4">
                {renderSlide ? renderSlide(slide, 0, currentSlide) : (
                  <img 
                    src={slide.image} 
                    alt={slide.alt} 
                    className="w-full h-auto" 
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className={containerClassName}>
      <DesktopSlider />
      <TabletSlider />
      <MobileSlider />
      
      {renderControls ? renderControls({ currentSlide, nextSlide, prevSlide, goToSlide }) : defaultRenderControls()}
    </div>
  );
};

export default Slider;