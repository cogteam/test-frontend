import DigitalManufacturingClient from "./DigitalManufacturingClient";

export const metadata = {
  title: "Digital Manufacturing Solutions | DetectPharmaIQ",
  description: "Transform your manufacturing with AI-driven insights, enterprise-wide visibility, and scalable digital solutions for the pharmaceutical industry.",
  openGraph: {
    title: "Digital Manufacturing Solutions | DetectPharmaIQ",
    description: "Creating connected, intelligent, and future-ready ecosystems that drive agility, transparency, and growth in manufacturing.",
    images: [
      {
        url: "/assets/images/services/digital/banner.webp", // Update this path to where your public images are served
        width: 1200,
        height: 630,
        alt: "Digital Manufacturing Solutions",
      },
    ],
  },
};

export default function DigitalManufacturingPage() {
  return <DigitalManufacturingClient />;
}