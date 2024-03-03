import { classes } from "@/shared/types";

interface Props {
  currentIndex: number;
  slides: classes[];
}

const SliderContent = ({ currentIndex, slides }: Props) => {
  return (
    <div className="bg-white/70 absolute bottom-0 py-5 text-center sm:text-left w-full px-3">
      <h3 className="font-bold text-xl">{slides[currentIndex].name}</h3>
      <p className="text-sm">{slides[currentIndex].description}</p>
    </div>
  );
};

export default SliderContent;
