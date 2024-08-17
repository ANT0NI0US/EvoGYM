import { setSelectedPageProps } from "@/shared/types";
import ActionButton from "@/ui/ActionButton";
import LearnMore from "@/ui/LearnMore";
import MotionDiv from "@/ui/MotionDiv";

export default function Actions({ setSelectedPage }: setSelectedPageProps) {
  return (
    <MotionDiv
      tailwindClass="flexCenter md:justify-start gap-5 md:gap-10 flex-col xs:flex-row"
      delay={0.3}
      x={-50}
    >
      <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
      <LearnMore setSelectedPage={setSelectedPage} />
    </MotionDiv>
  );
}
