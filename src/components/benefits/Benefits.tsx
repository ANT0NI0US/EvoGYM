import { motion } from "framer-motion";

import { selectedPageNum, setSelectedPageProps } from "@/shared/types";
import Header from "@/shared/Header";

import Graphics from "./Graphics";
import Advantages from "./Advantages";

const Benefits = ({ setSelectedPage }: setSelectedPageProps) => {
  return (
    <div className="py-20 bg-white" id="benefits">
      <motion.div
        className="w-5/6 mx-auto"
        onViewportEnter={() => setSelectedPage(selectedPageNum.Benefits)}
      >
        {/* Header */}
        <Header
          textHead="MORE THAN JUST A GYM."
          desc="We provide world class fitness equipment, trainers and classes to get
        you to your ultimate fitness goals with ease. We provide true care into
        each and every member."
        />
        {/* ADVANTAGES*/}
        <Advantages setSelectedPage={setSelectedPage} />

        {/* GRAPHICS AND DESCRIPTION */}
        <Graphics setSelectedPage={setSelectedPage} />
      </motion.div>
    </div>
  );
};

export default Benefits;
