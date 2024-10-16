import { motion } from "framer-motion";
import { selectedPageNum, setSelectedPageProps } from "@/shared/types";
import ContactHeader from "./ContactHeader";
import Form from "./Form";
import ContactUsImage from "./ContactUsImage";

export default function ContactUs({ setSelectedPage }: setSelectedPageProps) {
  return (
    <div className="py-10 min-h-fit flexBetween flex-col" id="contactUs">
      <motion.div
        onViewportEnter={() => setSelectedPage(selectedPageNum.ContactUs)}
        className={`w-5/6 mx-auto relative`}
      >
        {/*HEADER*/}
        <ContactHeader />

        {/*FORM AND IMAGE*/}
        <div className="mb-10 pb-10 justify-between gap-8 md:flex items-center">
          <Form />
          <ContactUsImage />
        </div>
      </motion.div>
    </div>
  );
}
