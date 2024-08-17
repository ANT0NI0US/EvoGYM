import Header from "@/shared/Header";
import { selectedPageNum, setSelectedPageProps } from "@/shared/types";
import { motion } from "framer-motion";
import Slider from "./slider/page/Slider";

export default function OurClasses({ setSelectedPage }: setSelectedPageProps) {
  return (
    <div
      className="pt-20 min-h-fit bg-gray-20 flexBetween flex-col"
      id="ourclasses"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(selectedPageNum.OurClasses)}
        className={`w-5/6 mx-auto relative`}
      >
        {/*HEADER*/}
        <Header
          textHead="OUR CLASSES"
          desc="Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
          tellus quam porttitor. Mauris velit euismod elementum arcu neque
          facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim
          mattis odio in risus nunc."
        />
      </motion.div>
      <Slider />
    </div>
  );
}
