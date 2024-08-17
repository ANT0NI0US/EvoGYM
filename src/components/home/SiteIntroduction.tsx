import MotionDiv from "@/shared/MotionDiv";

export default function SiteIntroduction() {
  return (
    <MotionDiv x={-50}>
      <div className="block md:flex">
        <div className="relative flexCenter md:justify-start md:items-start">
          <img
            className="absolute hidden md:block top-[-28px] left-[-14px]"
            src="https://i.ibb.co/Bc6qhLv/Evolve-Text.webp"
            alt="evolveText"
          />

          <img
            className="ml-[25px] md:ml-0 z-10 relative"
            src="https://i.ibb.co/cJT6cd4/Home-Page-Text.webp"
            alt="homePageText"
          />
        </div>
      </div>
      <p className="text-center md:text-left my-5 w-full md:w-[70%] ">
        Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
        Studios to get the Body Shapes That you Dream of Get Your Dream Body
        Now.
      </p>
    </MotionDiv>
  );
}
