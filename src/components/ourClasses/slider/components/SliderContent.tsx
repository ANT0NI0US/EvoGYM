import { classes } from "@/shared/types";
import SliderLeftArrow from "./SliderLeftArrow";
import SliderRightArrow from "./SliderRightArrow";

interface Props {
  currentIndex: number;
  slides: classes[];
  prevImage: () => void;
  nextImage: () => void;
}

const SliderContent = ({
  currentIndex,
  slides,
  nextImage,
  prevImage,
}: Props) => {
  return (
    <div className="absolute left-1/2 top-1/2 transform translate-x-[-50%] translate-y-[-50%] py-5 text-center sm:text-left px-1 sm:px-3 z-20 text-white w-full flexCenter gap-[3px] sm:gap-10 ">
      {/* LEFT ARROW */}
      <SliderLeftArrow prevImage={prevImage} />
      {/* CONTENT */}
      <div className="flexCenter flex-col text-center flex-1">
        <h3 className="font-bold text-xl">{slides[currentIndex].name}</h3>
        <p className="text-sm">{slides[currentIndex].description}</p>
      </div>
      {/* RIGHT ARROW */}
      <SliderRightArrow nextImage={nextImage} />
    </div>
  );
};

export default SliderContent;
