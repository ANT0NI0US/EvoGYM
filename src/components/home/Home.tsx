import { setSelectedPageProps } from "@/shared/types";

import Sponsors from "./Sponsors";
import MainContent from "./MainContent";

export default function Home({ setSelectedPage }: setSelectedPageProps) {
  return (
    <div
      className="pt-[80px] pb-10 md:pb-0 md:h-screen bg-gray-20 flexBetween flex-col"
      id="home"
    >
      {/* HOME CONTENT */}
      <MainContent setSelectedPage={setSelectedPage} />
      {/* SPONSORS */}
      <Sponsors />
    </div>
  );
}
