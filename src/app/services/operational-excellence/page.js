import OperationalExcellenceClient from "./OperationalExcellenceClient";

export const metadata = {
  title: "Operational Excellence | DetectPharmaIQ",
  description: "Drive transformation with our Operational Excellence solutions. Enhancing productivity, reducing waste, and ensuring sustainable growth for manufacturing and R&D.",
  openGraph: {
    title: "Operational Excellence | DetectPharmaIQ",
    description: "Empowering organizations with Lean methodologies, digital transformation, and capability building for global operational excellence.",
    images: [
      {
        url: "/assets/images/services/operational/banner.webp",
        width: 1200,
        height: 630,
        alt: "Operational Excellence Banner",
      },
    ],
  },
};

export default function OperationalExcellencePage() {
  return <OperationalExcellenceClient />;
}