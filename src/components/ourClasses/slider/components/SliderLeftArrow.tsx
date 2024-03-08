import { ChevronDoubleLeftIcon } from "@heroicons/react/24/solid";

interface Props {
  prevImage: () => void;
}

const SliderLeftArrow = ({ prevImage }: Props) => {
  return (
    <div className="text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer z-20">
      <ChevronDoubleLeftIcon onClick={prevImage} className="w-5 h-5" />
    </div>
  );
};

export default SliderLeftArrow;
