
import NovaVigilClient from "./NovaVigilClient";


export const metadata = {
  title: "NovaVigil - AI Pharmacovigilance Platform | DetectPharmaIQ",
  description: "NovaVigil automates literature screening and case detection in pharmacovigilance using AI. Accelerate processing, enhance compliance, and improve safety.",
  openGraph: {
    title: "NovaVigil - AI Pharmacovigilance Platform | DetectPharmaIQ",
    description: "An intelligent literature monitoring platform enhancing pharmacovigilance efficiency and patient safety.",
    images: [
      {
        url: "/assets/images/Novavigil-banner.webp", // Adjust based on your actual public path
        width: 1200,
        height: 630,
        alt: "NovaVigil Platform",
      },
    ],
  },
};

export default function NovaVigilPage() {
  return <NovaVigilClient />;
}