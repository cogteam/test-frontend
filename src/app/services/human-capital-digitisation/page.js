import HumanCapitalDigitisationClient from "./HumanCapitalDigitisationClient";

export const metadata = {
  title: "Human Capital Digitisation Services | DetectPharmaIQ",
  description: "Transform your HR operations with our digital human capital services. From employee data management to digital HR advisory and implementation.",
  openGraph: {
    title: "Human Capital Digitisation Services | DetectPharmaIQ",
    description: "Empowering organizations through next-generation digital HR transformation, intelligence, and automation.",
    images: [
      {
        url: "/assets/images/services/talent/banner.webp", // Adjust to a relevant public image path
        width: 1200,
        height: 630,
        alt: "Human Capital Digitisation Services",
      },
    ],
  },
};

export default function HumanCapitalDigitisationPage() {
  return <HumanCapitalDigitisationClient />;
}