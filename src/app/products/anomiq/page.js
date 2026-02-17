import AnomIQClient from "./AnomIQClient";

export const metadata = {
  title: "AnomIQ - Anomaly Detection Platform | DetectPharmaIQ",
  description: "AnomIQ provides AI-driven anomaly detection and compliance management for life sciences. Ensure data integrity, reduce risk, and automate oversight.",
  openGraph: {
    title: "AnomIQ - Anomaly Detection Platform | DetectPharmaIQ",
    description: "Reimagining Quality Oversight for Life Sciences with Intelligent Early Warnings and Confident Compliance.",
    images: [
      {
        url: "/assets/images/noteIq-logo.svg", // Replace with appropriate banner image URL
        width: 1200,
        height: 630,
        alt: "AnomIQ Platform",
      },
    ],
  },
};

export default function AnomIQPage() {
  return <AnomIQClient />;
}