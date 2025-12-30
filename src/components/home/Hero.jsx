import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  
  const slides = [
    '/hero1 (2).webp',
    '/hero2 (1).webp'
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 0.4;
      });
    }, 20);
    return () => clearInterval(progressTimer);
  }, [currentSlide]);

  return (
    <section className="relative w-full bg-gradient-to-b from-gray-50 to-white pt-0 pb-8 md:pb-12">
      {/* Container with proper spacing */}
      <div className="relative w-full max-w-7xl mx-auto px-4 md:px-8">
        {/* Slider Container with rounded corners and shadow */}
        <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
          {/* Slides */}
          {slides.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
                className="w-full h-full object-contain bg-gray-100"
                style={{ objectPosition: 'center' }}
              />
            </div>
          ))}

          {/* Gradient Border Glow Effect */}
          <div className="absolute inset-0 rounded-3xl ring-1 ring-red-500/20 pointer-events-none" />
          
          {/* Navigation Arrows - Red Gradient with Glow */}
          <button
            onClick={prevSlide}
            className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-10 group"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-red-500 to-red-700 flex items-center justify-center transition-all duration-300 shadow-lg shadow-red-500/50 hover:shadow-xl hover:shadow-red-500/80 hover:scale-110 hover:from-red-600 hover:to-red-800">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-10 group"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-red-500 to-red-700 flex items-center justify-center transition-all duration-300 shadow-lg shadow-red-500/50 hover:shadow-xl hover:shadow-red-500/80 hover:scale-110 hover:from-red-600 hover:to-red-800">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>

          {/* Enhanced Pagination */}
          <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10">
            {/* Dots with Gradient */}
            <div className="flex gap-2 md:gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                    setProgress(0);
                  }}
                  className={`transition-all duration-300 ${
                    index === currentSlide
                      ? 'w-10 md:w-12 h-3 bg-gradient-to-r from-red-500 to-red-700 rounded-full shadow-lg shadow-red-500/50'
                      : 'w-3 h-3 bg-white/80 hover:bg-white rounded-full hover:scale-110'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
