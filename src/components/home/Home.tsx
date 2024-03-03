import ActionButton from "@/shared/ActionButton";
import { selectedPageNum, setSelectedPageProps } from "@/shared/types";
import useMediaQuery from "@/hooks/UseMediaQuery";
import { motion } from "framer-motion";
import LearnMore from "@/shared/LearnMore";
import MotionDiv from "@/shared/MotionDiv";

const Home = ({ setSelectedPage }: setSelectedPageProps) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <div
      className="pt-24 mb-10 pb-10 md:pb-0 md:h-full bg-gray-20 flexBetween flex-col"
      id="home"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(selectedPageNum.Home)}
        className={`${isAboveMediumScreens ? "flex-row" : "flex-col"} md:h-5/6 w-5/6 mx-auto flexBetween gap-12`}
      >
        <div className="md:basis-3/5">
          <MotionDiv x={-50}>
            <div className="block md:flex">
              <div className="relative flexCenter md:justify-start md:items-start">
                {isAboveMediumScreens && (
                  <img
                    className="absolute top-[-28px] left-[-14px]"
                    src="https://i.ibb.co/Bc6qhLv/Evolve-Text.webp"
                    alt="evolveText"
                  />
                )}
                <img
                  className="ml-[25px] md:ml-0 z-10 relative"
                  src="https://i.ibb.co/cJT6cd4/Home-Page-Text.webp"
                  alt="homePageText"
                />
              </div>
            </div>
            <p className="text-center md:text-left my-5 w-full md:w-[70%] ">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </MotionDiv>
          {/* ACTIONS */}
          <MotionDiv
            tailwindClass="flexCenter md:justify-start gap-5 md:gap-10 flex-col xs:flex-row"
            delay={0.3}
            x={-50}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <LearnMore setSelectedPage={setSelectedPage} />
          </MotionDiv>
        </div>

        {/* IMAGE */}
        <img
          className="basis-3/5"
          src="https://i.ibb.co/mNKFNc3/Home-Page-Graphic.webp"
          alt="homePagePhoto"
        />
      </motion.div>
      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <div className="w-full bg-primary-100 py-10">
          <div className="flexEvenly">
            <img
              src="https://i.ibb.co/3FX93hV/Sponsor-Fortune.webp"
              alt="fortune"
            />
            <img
              src="https://i.ibb.co/mRz0x9q/Sponsor-Red-Bull.webp"
              alt="redBull"
            />
            <img
              src="https://i.ibb.co/VM30rKN/Sponsor-Forbes.webp"
              alt="forbes"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
