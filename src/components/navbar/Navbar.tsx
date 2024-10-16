import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { selectedProps } from "@/shared/types";
import LinksSmallScreen from "./LinksSmallScreen";
import Logo from "./Logo";
import LinksBigScreen from "./LinksBigScreen";
import useMediaQuery from "@/hooks/UseMediaQuery";

interface navbarProps extends selectedProps {
  isTopOfPage: boolean;
}

export default function Navbar({
  selectedPage,
  setSelectedPage,
  isTopOfPage,
}: navbarProps) {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const closeSidebar = () => setShowSidebar(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  useEffect(() => {
    if (!isAboveMediumScreens) {
      setShowSidebar(false);
    }
  }, [isAboveMediumScreens]);

  return (
    <>
      <div
        className={`${navbarBackground} h-[80px] fixed top-0 w-full py-6 shadow-[0_0_1.5px] shadow-gray-800 z-30`}
      >
        <div className="flexBetween mx-auto w-5/6 gap-10">
          <Logo />
          <LinksBigScreen
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />

          <button
            aria-label="Toogle-menu"
            onClick={() => setShowSidebar((prev) => !prev)}
            className="rounded-full bg-secondary-500 p-2 block md:hidden"
          >
            <AiOutlineMenu className="text-white h-6 w-6" />
          </button>
        </div>
      </div>
      {showSidebar && (
        <LinksSmallScreen
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          showSidebar={showSidebar}
          closeSidebar={closeSidebar}
        />
      )}
    </>
  );
}
