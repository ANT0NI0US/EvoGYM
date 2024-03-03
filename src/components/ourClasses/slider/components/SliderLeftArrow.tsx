import { ChevronDoubleLeftIcon } from "@heroicons/react/24/solid";

interface Props {
  prevImage: () => void;
}

const SliderLeftArrow = ({ prevImage }: Props) => {
  return (
    <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
      <ChevronDoubleLeftIcon onClick={prevImage} className="w-5 h-5" />
    </div>
  );
};

export default SliderLeftArrow;
