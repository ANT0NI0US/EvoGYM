import Links from "./Links";
import { selectedProps } from "@/shared/types";
import ActionButton from "@/ui/ActionButton";

export default function LinksBigScreen({
  selectedPage,
  setSelectedPage,
}: selectedProps) {
  return (
    <div className="md:flex md:items-center md:justify-between hidden md:flex-1">
      <div>
        <div className="flexCenter gap-10">
          <Links
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
  );
}
