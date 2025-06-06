import { useEffect, useState } from "react";
import Navbar from "@/components/navbar/Navbar.tsx";
import Home from "@/components/home/Home";
import Benefits from "@/components/benefits/Benefits";
import OurClasses from "@/components/ourClasses/OurClasses";
import ContactUs from "@/components/contactUs/ContactUs";
import Footer from "@/components/footer/Footer";
import { selectedPageNum } from "@/shared/types";

export default function App() {
  const [selectedPage, setSelectedPage] = useState<selectedPageNum>(
    selectedPageNum.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}
