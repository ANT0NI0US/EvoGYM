import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";

interface Props {
  nextImage: () => void;
}

const SliderRightArrow = ({ nextImage }: Props) => {
  return (
    <div className="text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer z-20">
      <ChevronDoubleRightIcon onClick={nextImage} className="w-5 h-5" />
    </div>
  );
};

export default SliderRightArrow;
