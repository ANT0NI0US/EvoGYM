import AnchorLink from "react-anchor-link-smooth-scroll";
import { selectedPageNum, setSelectedPageProps } from "@/shared/types";

export default function LearnMore({ setSelectedPage }: setSelectedPageProps) {
  return (
    <AnchorLink
      onClick={() => setSelectedPage(selectedPageNum.ContactUs)}
      href={`#${selectedPageNum.ContactUs}`}
      className="text-sm font-bold text-primary-500 underline hover:text-secondary-500 transition-all duration-200"
    >
      Learn More
    </AnchorLink>
  );
}
