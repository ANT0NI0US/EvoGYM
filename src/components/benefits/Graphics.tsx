import GraphicsContent from "./GraphicsContent";
import { setSelectedPageProps } from "@/shared/types";

export default function Graphics({ setSelectedPage }: setSelectedPageProps) {
  return (
    <div
      className={`flex-col md:flex-row md:h-5/6 mx-auto flexBetween gap-12 mt-10`}
    >
      {/* IMAGE */}
      <img
        className="basis-3/5"
        src="https://i.ibb.co/mXMtFwY/Benefits.png"
        alt="Benefits-Page-Graphic"
      />

      {/* CONTENT */}
      <GraphicsContent setSelectedPage={setSelectedPage} />
    </div>
  );
}
