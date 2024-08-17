import { ChevronDoubleLeftIcon , ChevronDoubleRightIcon } from "@heroicons/react/24/solid";

interface Props {
  movement: () => void;
  isLeft: boolean;
}

export default function SliderMovements({ movement, isLeft }: Props) {
  return (
    <div className="text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer z-20">
      {isLeft ? (
        <ChevronDoubleLeftIcon onClick={movement} className="w-5 h-5" />
      ) : (
        <ChevronDoubleRightIcon onClick={movement} className="w-5 h-5" />
      )}
    </div>
  );
}
