import AnchorLink from "react-anchor-link-smooth-scroll";
import { selectedPageNum, setSelectedPageProps } from "./types";

const LearnMore = ({ setSelectedPage }: setSelectedPageProps) => {
  return (
    <AnchorLink
      onClick={() => setSelectedPage(selectedPageNum.ContactUs)}
      href={`#${selectedPageNum.ContactUs}`}
      className=" text-sm font-bold text-primary-500 underline hover:text-secondary-500"
    >
      Learn More
    </AnchorLink>
  );
};

export default LearnMore;
