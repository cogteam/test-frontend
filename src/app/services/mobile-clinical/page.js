import MobileClinicalClient from "./MobileClinicalClient";

export const metadata = {
  title: "Mobile Clinical Services | DetectPharmaIQ",
  description: "Nationwide mobile clinical services in India, ensuring patient convenience, protocol adherence, and high-quality care with 80+ specially trained nurses.",
  openGraph: {
    title: "Mobile Clinical Services | DetectPharmaIQ",
    description: "From patient consent to on-site visits and reporting, we provide end-to-end mobile clinical solutions.",
    images: [
      {
        url: "/assets/images/services/mobile/banner.webp", // Adjust to a relevant public image path
        width: 1200,
        height: 630,
        alt: "Mobile Clinical Services",
      },
    ],
  },
};

export default function MobileClinicalPage() {
  return <MobileClinicalClient />;
}