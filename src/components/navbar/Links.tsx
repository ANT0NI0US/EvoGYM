import AnchorLink from "react-anchor-link-smooth-scroll";
import { selectedPageNum, selectedProps } from "@/shared/types";

interface linksProps extends selectedProps {
  closeSidebar?: () => void;
}

const allLinks: Array<{ text: string }> = [
  { text: "Home" },
  { text: "Benefits" },
  { text: "Our Classes" },
  { text: "Contact Us" },
];

export default function Links({
  selectedPage,
  setSelectedPage,
  closeSidebar,
}: linksProps) {
  return allLinks.map((link) => {
    const lowerCasePage = link?.text
      ?.toLowerCase()
      .replace(/ /g, "") as selectedPageNum;
    return (
      <AnchorLink
        key={link?.text}
        onClick={() => {
          setSelectedPage(lowerCasePage);
          if (closeSidebar) {
            closeSidebar();
          }
        }}
        href={`#${lowerCasePage}`}
        className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""} transition-all duration-500 hover:text-primary-300 list-none font-bold`}
      >
        {link?.text}
      </AnchorLink>
    );
  });
}
