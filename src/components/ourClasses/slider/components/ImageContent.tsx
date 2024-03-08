import { classes } from "@/shared/types";

interface Props {
  currentIndex: number;
  slides: classes[];
}

const ImageContent = ({ slides, currentIndex }: Props) => {
  return (
    <div className="flexCenter flex-col text-center flex-1 gap-2">
      <h3 className="font-bold text-xl xs:text-[1.75rem]">
        {slides[currentIndex].name}
      </h3>
      <p className="text-sm xs:text-[1rem]">
        {slides[currentIndex].description}
      </p>
    </div>
  );
};

export default ImageContent;
