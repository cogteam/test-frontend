import InLuminClient from "./InLuminClient";

export const metadata = {
  title: "InLumin - Procure-to-Pay Platform | DetectPharmaIQ",
  description: "Reimagine Procure-to-Pay for life sciences with InLumin. Streamline procurement, enhance financial governance, and connect teams seamlessly.",
  openGraph: {
    title: "InLumin - Procure-to-Pay Platform | DetectPharmaIQ",
    description: "A next-generation platform to automate workflows, improve accuracy, and maintain full visibility across the P2P cycle.",
    images: [
      {
        url: "/assets/images/services/talent/banner.webp", // Adjust to correct banner path
        width: 1200,
        height: 630,
        alt: "InLumin Platform",
      },
    ],
  },
};

export default function InLuminPage() {
  return <InLuminClient />;
}