import { setSelectedPageProps } from "@/shared/types";

import Sponsors from "./Sponsors";
import MainContent from "./MainContent";

const Home = ({ setSelectedPage }: setSelectedPageProps) => {
  return (
    <div
      className="mt-[80px] pb-10 md:pb-0 md:h-[calc(100vh-80px)] bg-gray-20 flexBetween flex-col"
      id="home"
    >
      {/* HOME CONTENT */}
      <MainContent setSelectedPage={setSelectedPage} />
      {/* SPONSORS */}
      <Sponsors />
    </div>
  );
};

export default Home;
