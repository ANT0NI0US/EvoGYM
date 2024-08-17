import { useState } from "react";
import { classes } from "@/shared/types";
import SliderDotted from "../components/SliderDotted";
import SliderContent from "../components/SliderContent";

const slides: Array<classes> = [
  {
    name: "Weight Training Classes",
    url: "https://i.ibb.co/LNPr6Xp/image1.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Yoga Classes",
    url: "https://i.ibb.co/njKcyrk/image2.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Ab Core Classes",
    url: "https://i.ibb.co/SQS5Fw9/image3.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Adventure Classes",
    url: "https://i.ibb.co/pPddd4j/image4.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Fitness Classes",
    url: "https://i.ibb.co/stmkWgw/image5.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Training Classes",
    url: "https://i.ibb.co/bzHFCF1/image6.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export default function Slider() {
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
    <div className="max-w-full mt-8 md:mt-10 w-full relative h-[calc(100vh-80px)]">
      <div className="absolute w-full h-full left-0 top-0 bg-[#00000099] z-10"></div>
      <div
        style={{
          backgroundImage: `url(${slides[currentIndex].url})`,
        }}
        className={`w-full h-full bg-center bg-cover relative bg-no-repeat`}
      >
        {/* CONTENT */}
        <SliderContent
          currentIndex={currentIndex}
          slides={slides}
          nextImage={nextImage}
          prevImage={prevImage}
        />

        {/* DOTTES */}
        <SliderDotted
          currentIndex={currentIndex}
          goToImage={goToImage}
          slides={slides}
        />
      </div>
    </div>
  );
}
