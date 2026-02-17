import TalentAcquisitionClient from "./TalentAcquisitionClient";

export const metadata = {
  title: "Talent Acquisition Services | DetectPharmaIQ",
  description: "Connecting life science organizations with exceptional talent. From leadership hiring to campus recruitment, we provide end-to-end solutions.",
  openGraph: {
    title: "Talent Acquisition Services | DetectPharmaIQ",
    description: "Seamless, data-driven recruitment aligned with industry standards to power innovation and growth.",
    images: [
      {
        url: "/assets/images/services/talent/banner.webp", // Adjust to a relevant public image path
        width: 1200,
        height: 630,
        alt: "Talent Acquisition Services",
      },
    ],
  },
};

export default function TalentAcquisitionPage() {
  return <TalentAcquisitionClient />;
}