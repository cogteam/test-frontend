import IntellectualPropertyClient from "./IntellectualPropertyClient";

export const metadata = {
  title: "Intellectual Property Consulting | DetectPharmaIQ",
  description: "Strategic IP consulting services: Patent landscaping, portfolio management, litigation support, and commercialisation strategies for the pharma industry.",
  openGraph: {
    title: "Intellectual Property Consulting | DetectPharmaIQ",
    description: "Simplifying IP management and reducing risks from idea to market launch with our expert consulting services.",
    images: [
      {
        url: "/assets/images/services/intellectual/banner.webp", // Adjust to a relevant public image path
        width: 1200,
        height: 630,
        alt: "IP Consulting Services",
      },
    ],
  },
};

export default function IntellectualPropertyPage() {
  return <IntellectualPropertyClient />;
}