import GlobalPVContent from "./GlobalPVContent"

export const metadata = {
  title: "Global Pharmacovigilance Consulting | DetectPharmaIQ",
  description: "Expert pharmacovigilance consulting, ICSR case processing, signal management, and risk management solutions for global safety and compliance.",
  keywords: ["Pharmacovigilance", "PV Services", "ICSR", "Signal Management", "Drug Safety", "Medical Information"],
  openGraph: {
    title: "Global Pharmacovigilance Consulting | DetectPharmaIQ",
    description: "Driving global safety and compliance through expert pharmacovigilance consulting and tailored solutions.",
    images: [
      {
        url: "/assets/images/services/Global-Pharmacovigilanc.webp", // Update with your actual public URL
        width: 1200,
        height: 630,
        alt: "Global Pharmacovigilance",
      },
    ],
  },
};

export default function DetectPharmaIQPage() {
  return <GlobalPVContent />;
}