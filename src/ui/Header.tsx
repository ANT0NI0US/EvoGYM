import HeadText from "./HeadText";
import MotionDiv from "./MotionDiv";

interface Props {
  textHead: string;
  desc: string;
}

export default function Header({ textHead, desc }: Props) {
  return (
    <MotionDiv tailwindClass="text-center sm:text-start mx-4 sm:mx-0" x={-50}>
      <HeadText>{textHead}</HeadText>
      <p className="my-5 text-sm text-balance">{desc}</p>
    </MotionDiv>
  );
}
