import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

import {
  BenefitProps,
  selectedPageNum,
  setSelectedPageProps,
} from "@/shared/types";

import { motion } from "framer-motion";
import Benefit from "./Benefit";

import Graphics from "./Graphics";
import Header from "@/shared/Header";

const allBenefits: Array<BenefitProps> = [
  {
    icon: <HomeModernIcon className="h-7 w-7" />,
    title: "State of the Art Facilities",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
  },
  {
    icon: <UserGroupIcon className="h-7 w-7" />,
    title: "100's of Diverse Classes",
    description:
      "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
  },
  {
    icon: <AcademicCapIcon className="h-7 w-7" />,
    title: "Expert and Pro Trainers",
    description:
      "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
  },
];

const Benefits = ({ setSelectedPage }: setSelectedPageProps) => {
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };
  return (
    <div
      className="my-10 py-20 sm:min-h-full md:min-h-fit bg-white"
      id="benefits"
    >
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
        {/* Beneifts*/}
        <motion.div
          variants={container}
          className="flexCenter gap-8 flex-col sm:flex-row mt-8 md:mt-10"
        >
          {allBenefits.map((benefit: BenefitProps) => {
            return (
              <Benefit
                key={benefit.title}
                icon={benefit.icon}
                description={benefit.description}
                title={benefit.title}
                setSelectedPage={setSelectedPage}
              />
            );
          })}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <Graphics setSelectedPage={setSelectedPage} />
      </motion.div>
    </div>
  );
};

export default Benefits;
