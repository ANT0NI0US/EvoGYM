import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";

interface Props {
  nextImage: () => void;
}

const SliderRightArrow = ({ nextImage }: Props) => {
  return (
    <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ">
      <ChevronDoubleRightIcon onClick={nextImage} className="w-5 h-5" />
    </div>
  );
};

export default SliderRightArrow;
