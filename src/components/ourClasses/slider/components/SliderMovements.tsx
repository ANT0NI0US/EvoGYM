import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

interface Props {
  movement: () => void;
  isLeft: boolean;
}

export default function SliderMovements({ movement, isLeft }: Props) {
  return (
    <div className="text-2xl rounded-full p-2 bg-black/20 transition-all hover:bg-black/40 text-white cursor-pointer z-20">
      {isLeft ? (
        <MdKeyboardDoubleArrowLeft onClick={movement} className="w-5 h-5" />
      ) : (
        <MdKeyboardDoubleArrowRight onClick={movement} className="w-5 h-5" />
      )}
    </div>
  );
}
