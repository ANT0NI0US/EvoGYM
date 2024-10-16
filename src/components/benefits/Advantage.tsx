import { motion } from "framer-motion";
import { BenefitProps, setSelectedPageProps } from "@/shared/types";
import LearnMore from "@/ui/LearnMore";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

interface benefitProps extends BenefitProps, setSelectedPageProps {}

export default function Advantage({
  icon,
  description,
  title,
  setSelectedPage,
}: benefitProps) {
  return (
    <motion.div
      variants={childVariant}
      className="rounded border-4 border-gray-100 p-7 sm:py-10 sm:px-6 text-center"
    >
      <div className="rounded-full border-gray-100 bg-primary-100 flexCenter p-1 w-[50px] h-[50px] mx-auto">
        {icon || ""}
      </div>
      <h4 className="font-bold my-4">{title || ""}</h4>
      <p className="mb-4 sm:min-h-[100px]">{description || ""}</p>
      <LearnMore setSelectedPage={setSelectedPage} />
    </motion.div>
  );
}
