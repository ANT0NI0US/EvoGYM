import { SponsorsProps } from "@/shared/types";

const allSponsors: Array<SponsorsProps> = [
  { photo: "https://i.ibb.co/3FX93hV/Sponsor-Fortune.webp", name: "fortune" },
  { photo: "https://i.ibb.co/mRz0x9q/Sponsor-Red-Bull.webp", name: "redBull" },
  { photo: "https://i.ibb.co/VM30rKN/Sponsor-Forbes.webp", name: "forbes" },
];

export default function Sponsors() {
  return (
    <div className="w-full hidden md:block bg-primary-100 py-5">
      <div className="flexEvenly">
        {allSponsors.map((sponsor) => (
          <img key={sponsor.name} src={sponsor.photo} alt={sponsor.name} />
        ))}
      </div>
    </div>
  );
}
