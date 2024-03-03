import AnchorLink from "react-anchor-link-smooth-scroll";
import { selectedPageNum } from "./types";

interface Props {
  children: React.ReactNode;
  setSelectedPage: (page: selectedPageNum) => void;
}

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      onClick={() => setSelectedPage(selectedPageNum.ContactUs)}
      href={`#${selectedPageNum.ContactUs}`}
      className="btn"
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
