import HumanCapitalClient from "./HumanCapitalClient";

export const metadata = {
  title: "Human Capital Consulting | DetectPharmaIQ",
  description: "Driving digital transformation in manufacturing through equipment connectivity, data analytics, and AI-driven insights for operational excellence.",
  openGraph: {
    title: "Human Capital Consulting | DetectPharmaIQ",
    description: "Creating connected, intelligent ecosystems to bridge gaps in data management and scalability for future-ready manufacturing.",
    images: [
      {
        url: "/assets/images/services/Human/banner.webp", // Adjust to a relevant public image path
        width: 1200,
        height: 630,
        alt: "Human Capital Consulting",
      },
    ],
  },
};

export default function HumanCapitalPage() {
  return <HumanCapitalClient />;
}