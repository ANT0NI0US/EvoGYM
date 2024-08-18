import { selectedProps } from "@/shared/types";
import Links from "./Links";
import { IoClose } from "react-icons/io5";
import { useOutsideClick } from "@/hooks/useOutsideClick";

interface samllLinkProps extends selectedProps {
  closeSidebar: () => void;
  showSidebar: boolean;
}

export default function LinksSmallScreen({
  selectedPage,
  setSelectedPage,
  closeSidebar,
  showSidebar,
}: samllLinkProps) {
  const ref = useOutsideClick(closeSidebar);
  return (
    <>
      <aside
        ref={ref}
        className="fixed block md:hidden right-0 bottom-0 h-full shadow-md drop-shadow-xl z-40 w-[180px] sm:w-[300px]   bg-primary-100 p-10"
      >
        <button
          aria-label="Close-icon"
          onClick={closeSidebar}
          className="absolute top-3 right-3 bg-red-700 rounded-full p-1"
        >
          <IoClose className="h-5 w-5 text-white" />
        </button>

        <div className="flex flex-col gap-5">
          <Links
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            closeSidebar={closeSidebar}
          />
        </div>
      </aside>
      <div
        className={`fixed left-0 top-0 w-full z-30 md:hidden ${showSidebar ? "h-screen" : "h-0"} bg-[#00000080]`}
      />
    </>
  );
}
