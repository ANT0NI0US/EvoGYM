import HeadText from "@/shared/HeadText";
import MotionDiv from "@/shared/MotionDiv";

const ContactHeader = () => {
  return (
    <MotionDiv tailwindClass="text-center sm:text-start mx-4 sm:mx-0" x={-50}>
      <HeadText>
        <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
      </HeadText>
      <p className="my-5 text-sm text-balance">
        Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
        sapien vel rhoncus. Placerat at in enim pellentesque. Nulla adipiscing
        leo egestas nisi elit risus sit. Nunc cursus sagittis.
      </p>
    </MotionDiv>
  );
};

export default ContactHeader;
