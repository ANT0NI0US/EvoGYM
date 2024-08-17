import { Fragment, useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "./Link";
import { selectedProps } from "@/shared/types";
import useMediaQuery from "@/hooks/UseMediaQuery";
import ActionButton from "@/ui/ActionButton";

interface navbarProps extends selectedProps {
  isTopOfPage: boolean;
}

const Navbar = ({
  selectedPage,
  setSelectedPage,
  isTopOfPage,
}: navbarProps) => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  useEffect(() => {
    if (!isAboveMediumScreens) {
      setToggleMenu(false);
    }
  }, [isAboveMediumScreens]);

  return (
    <Fragment>
      <div
        className={`${navbarBackground} h-[80px] fixed top-0 w-full py-6 shadow-[0_0_1.5px] shadow-gray-800 z-30`}
      >
        <div className="flexBetween mx-auto w-5/6 gap-10">
          <div className="w-[110px]">
            <img
              src="https://i.ibb.co/Q6wfcrX/Logo.webp"
              alt="logo"
              className="max-w-full max-h-full"
            />
          </div>

          {isAboveMediumScreens ? (
            <div className="flexBetween flex-1">
              <div>
                <div className="flexCenter gap-10">
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
              </div>
              <div className="flexCenter gap-5 flex-row">
                <div>Sign In</div>
                <div>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>
              </div>
            </div>
          ) : (
            <button
              aria-label="Toogle-menu"
              onClick={() => setToggleMenu((prev) => !prev)}
              className="rounded-full bg-secondary-500 p-2"
            >
              <Bars3Icon className="text-white h-6 w-6" />
            </button>
          )}
        </div>
      </div>
      {!isAboveMediumScreens && toggleMenu && (
        <div className="fixed right-0 bottom-0 h-full shadow-md drop-shadow-xl z-40 w-[180px] sm:w-[300px]   bg-primary-100 p-10">
          <button
            aria-label="Close-icon"
            onClick={() => setToggleMenu(false)}
            className="absolute top-3 right-3 bg-red-700 rounded-full p-1"
          >
            <XMarkIcon className="h-5 w-5 text-white" />
          </button>

          <div className="flex flex-col gap-5">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Navbar;
