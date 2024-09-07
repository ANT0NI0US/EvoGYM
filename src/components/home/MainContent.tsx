import { motion } from "framer-motion";

import SiteIntroduction from "./SiteIntroduction";
import Actions from "./Actions";
import { selectedPageNum, setSelectedPageProps } from "@/shared/types";

export default function MainContent({ setSelectedPage }: setSelectedPageProps) {
  return (
    <motion.div
      onViewportEnter={() => setSelectedPage(selectedPageNum.Home)}
      className={`flex-col md:flex-row md:h-5/6 w-5/6 mx-auto flexBetween gap-12`}
    >
      <div className="md:basis-3/5">
        {/* Introduction Content */}
        <SiteIntroduction />
        {/* ACTIONS */}
        <Actions setSelectedPage={setSelectedPage} />
      </div>
      {/* HOME IMAGE */}
      <img
        className="basis-3/5"
        src="https://i.ibb.co/bdh28Rm/Home-Page-Graphic.webp"
        alt="Home-Page-Graphic"
      />
    </motion.div>
  );
}
