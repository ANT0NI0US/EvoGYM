import { motion } from "framer-motion";
import { FaHome, FaUsers } from "react-icons/fa";
import { PiGraduationCapFill } from "react-icons/pi";
import Advantage from "./Advantage";
import { BenefitProps, setSelectedPageProps } from "@/shared/types";

const iconStyle: string = "h-7 w-7";

const allBenefits: Array<BenefitProps> = [
  {
    icon: <FaHome className={`${iconStyle}`} />,
    title: "State of the Art Facilities",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
  },
  {
    icon: <FaUsers className={`${iconStyle}`} />,
    title: "100's of Diverse Classes",
    description:
      "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
  },
  {
    icon: <PiGraduationCapFill className={`${iconStyle}`} />,
    title: "Expert and Pro Trainers",
    description:
      "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
  },
];

export default function Advantages({ setSelectedPage }: setSelectedPageProps) {
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };
  return (
    <motion.div
      variants={container}
      className="flexCenter gap-5 flex-col sm:grid sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] mt-8 md:mt-10"
    >
      {allBenefits.map((benefit: BenefitProps) => {
        return (
          <Advantage
            key={benefit.title}
            icon={benefit.icon}
            description={benefit.description}
            title={benefit.title}
            setSelectedPage={setSelectedPage}
          />
        );
      })}
    </motion.div>
  );
}
