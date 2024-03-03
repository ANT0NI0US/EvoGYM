import { selectedPageNum, selectedProps } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

interface Props extends selectedProps {
  page: string;
}

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as selectedPageNum;
  return (
    <AnchorLink
      onClick={() => setSelectedPage(lowerCasePage)}
      href={`#${lowerCasePage}`}
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""} transation duration-500 hover:text-primary-300 list-none font-bold`}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
