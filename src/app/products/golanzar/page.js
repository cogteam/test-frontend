import GoLanzarClient from "./GoLanzarClient";


export const metadata = {
  title: "Golanzar - AI Pharmacovigilance Platform | DetectPharmaIQ",
  description: "Golanzar automates literature screening and case detection in pharmacovigilance using AI. Accelerate processing, enhance compliance, and improve safety.",
  openGraph: {
    title: "Golanzar - AI Pharmacovigilance Platform | DetectPharmaIQ",
    description: "An intelligent literature monitoring platform enhancing pharmacovigilance efficiency and patient safety.",
    images: [
      {
        url: "/assets/images/Novavigil-banner.webp", // Adjust based on your actual public path
        width: 1200,
        height: 630,
        alt: "Golanzar Platform",
      },
    ],
  },
};

export default function GoLanzarPage() {
  return <GoLanzarClient />;
}