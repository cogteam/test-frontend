import QualityContent from "./QualityContent"; // Import the client component

export const metadata = {
  title: "Quality & Compliance Services | GxP Audits & QMS",
  description: "Ensure continuous adherence to industry standards with our End-to-End Compliance Support, Regulatory Expertise, and Quality Management System solutions.",
  openGraph: {
    title: "Quality & Compliance Services | Arcolab",
    description: "Expert-driven solutions for GxP Audits, Vendor Management, Inspection Readiness, and ISO Certification.",
    // Ensure this path is correct relative to your public folder
    images: ["/assets/images/services/quality/banner.webp"], 
    url: "https://arcolab.com/services/quality-and-compliance",
    type: "website",
  },
};

export default function Page() {
  return <QualityContent />;
}