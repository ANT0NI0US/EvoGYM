import ActionButton from "@/ui/ActionButton";
import HeadText from "@/ui/HeadText";
import MotionDiv from "@/ui/MotionDiv";
import { setSelectedPageProps } from "@/shared/types";

export default function GraphicsContent({
  setSelectedPage,
}: setSelectedPageProps) {
  return (
    <div className="md:basis-3/5 text-center md:text-start relative before:content-abstractwaves before:absolute before:top-[-60px] before:left-[-15px] before:z-[1] after:sm:content-sparkles after:hidden after:sm:block after:sm:absolute after:sm:right-0 after:sm:bottom-[-74px]">
      {/* TITLE */}
      <MotionDiv x={50}>
        <HeadText>
          MILLIONS OF HAPPY MEMBERS GETTING
          <span className="text-primary-500"> FIT</span>.
        </HeadText>
      </MotionDiv>
      {/* DESCRIPTION */}
      <MotionDiv delay={0.3} x={50}>
        <p className="my-5">
          Nascetur aenean massa auctor tincidunt. Iaculis potenti amet egestas
          ultrices consectetur adipiscing ultricies enim. Pulvinar fames vitae
          vitae quis. Quis amet vulputate tincidunt at in nulla nec. Consequat
          sed facilisis dui sit egestas ultrices tellus. Ullamcorper arcu id
          pretium sapien proin integer nisl. Felis orci diam odio.
        </p>
        <p className="mb-5">
          Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
          tellus quam porttitor. Mauris velit euismod elementum arcu neque
          facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim
          mattis odio in risus nunc.
        </p>
      </MotionDiv>
      {/* ACTION BUTTON */}
      <MotionDiv delay={0.5} x={50}>
        <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
      </MotionDiv>
    </div>
  );
}
