import { useState, useEffect, useCallback } from "react";
import SliderDotted from "../components/SliderDotted";
import SliderContent from "../components/SliderContent";
import slides from "../components/AllSliders";

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const prevImage = useCallback((): void => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const nextImage = useCallback((): void => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const goToImage = useCallback((index: number): void => {
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextImage, 8000);

    return () => {
      clearInterval(interval);
    };
  }, [nextImage]);

  return (
    <div className="max-w-full mt-8 md:mt-10 w-full relative h-[calc(100vh-80px)]">
      <div className="absolute w-full h-full left-0 top-0 bg-[#00000099] z-10"></div>
      <div className="w-full h-full relative">
        <img
          src={slides[currentIndex].url}
          alt="image"
          className="object-center object-cover w-full h-full transition-all duration-1000 ease-in-out"
        />
        {/* CONTENT */}
        <SliderContent
          currentIndex={currentIndex}
          slides={slides}
          nextImage={nextImage}
          prevImage={prevImage}
        />

        {/* DOTS */}
        <SliderDotted
          currentIndex={currentIndex}
          goToImage={goToImage}
          slides={slides}
        />
      </div>
    </div>
  );
}
