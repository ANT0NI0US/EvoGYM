import { useState } from "react";
import { classes } from "@/shared/types";
import SliderLeftArrow from "../components/SliderLeftArrow";
import SliderRightArrow from "../components/SliderRightArrow";
import SliderDotted from "../components/SliderDotted";
import SliderContent from "../components/SliderContent";

const slides: Array<classes> = [
  {
    url: "https://i.ibb.co/gPhB5b6/image1.webp",
    name: "Weight Training Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Yoga Classes",
    url: "https://i.ibb.co/f4TWR64/image2.webp",
  },
  {
    name: "Ab Core Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    url: "https://i.ibb.co/N7MyWMR/image3.webp",
  },
  {
    name: "Adventure Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    url: "https://i.ibb.co/N7FvkQw/image4.webp",
  },
  {
    name: "Fitness Classes",
    url: "https://i.ibb.co/C84P5sL/image5.webp",
  },
  {
    name: "Training Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    url: "https://i.ibb.co/ncwJncr/image6.webp",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const prevImage = (): void => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextImage = (): void => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToImage = (index: number): void => {
    setCurrentIndex(index);
  };
  return (
    <div className="max-w-[1400px] h-[700px] w-full sm:w-3/4 md:w-3/5 mx-auto pb-16 px-4 relative group mt-8 md:mt-10">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-1000 relative"
      >
        {/* LEFT ARROW */}
        <SliderLeftArrow prevImage={prevImage} />
        {/* RIGHT ARROW */}
        <SliderRightArrow nextImage={nextImage} />
        {/* DOTTES */}
        <SliderDotted
          currentIndex={currentIndex}
          goToImage={goToImage}
          slides={slides}
        />
        {/* CONTENT */}
        <SliderContent currentIndex={currentIndex} slides={slides} />
      </div>
    </div>
  );
};

export default Slider;
