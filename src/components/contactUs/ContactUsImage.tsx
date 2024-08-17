import MotionDivContactUs from "@/ui/MotionDivContactUs";

export default function ContactUsImage() {
  return (
    <MotionDivContactUs
      tailwindClass="mt-16 basis-2/5 md:mt-0"
      y={50}
      delay={0.3}
    >
      <div className="w-full">
        <img
          className="w-full"
          alt="contact-us-page-graphic"
          src="https://i.ibb.co/dKtjV3s/Contact-Us-Page-Graphic.webp"
        />
      </div>
    </MotionDivContactUs>
  );
}
