import { classes } from "@/shared/types";

interface Props {
  goToImage: (index: number) => void;
  currentIndex: number;
  slides: classes[];
}

const SliderDotted = ({ goToImage, currentIndex, slides }: Props) => {
  return (
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center gap-3 py-2 z-20">
      {slides.map((slide: classes, slideIndex) => (
        <div
          onClick={() => goToImage(slideIndex)}
          key={`${slide.name} - ${slideIndex}`}
          className={`text-2xl cursor-pointer`}
        >
          <span
            className={`block w-3 h-3 bg-white rounded-full duration-500 ${
              slideIndex === currentIndex ? "active-stop-icon" : ""
            }`}
          ></span>
        </div>
      ))}
    </div>
  );
};

export default SliderDotted;
