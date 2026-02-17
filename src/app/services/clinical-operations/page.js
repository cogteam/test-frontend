import ClinicalOperationsClient from "./ClinicalOperationsClient";

export const metadata = {
  title: "Clinical Operations | DetectPharmaIQ",
  description: "Comprehensive clinical solutions: Trial management, safety reporting, pre-clinical studies, and scientific advisory services.",
  openGraph: {
    title: "Clinical Operations | DetectPharmaIQ",
    description: "Expert clinical trial management, regulatory compliance, and scientific advisory to drive your product development forward.",
    images: [
      {
        url: "/assets/images/services/clinical/Clinical-Trial-Management.webp", // Adjust to a relevant public image path
        width: 1200,
        height: 630,
        alt: "Clinical Operations Services",
      },
    ],
  },
};

export default function ClinicalOperationsPage() {
  return <ClinicalOperationsClient />;
}