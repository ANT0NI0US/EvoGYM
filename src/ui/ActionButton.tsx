import AnchorLink from "react-anchor-link-smooth-scroll";
import { selectedPageNum } from "@/shared/types";

interface Props {
  children: React.ReactNode;
  setSelectedPage: (page: selectedPageNum) => void;
}

export default function ActionButton({ children, setSelectedPage }: Props) {
  return (
    <AnchorLink
      onClick={() => setSelectedPage(selectedPageNum.ContactUs)}
      href={`#${selectedPageNum.ContactUs}`}
      className="bg-secondary-500 hover:bg-primary-500 text-black hover:text-white font-bold py-2 px-10 rounded-3xl transition-all duration-300"
    >
      {children}
    </AnchorLink>
  );
}
