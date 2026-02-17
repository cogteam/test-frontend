import NoteIQClient from "./NoteIQClient";

export const metadata = {
  title: "NoteIQ - GxP Compliance Platform | DetectPharmaIQ",
  description: "NoteIQ is an integrated GxP platform for validation, documentation, and training compliance in life sciences. Automate workflows and reduce risks.",
  openGraph: {
    title: "NoteIQ - GxP Compliance Platform | DetectPharmaIQ",
    description: "Reimagining compliance for life sciences with a next-gen platform that delivers precision, efficiency, and productivity.",
    images: [
      {
        url: "/assets/images/banner/noteiq-white-new.svg", // Adjust based on your actual public path
        width: 1200,
        height: 630,
        alt: "NoteIQ Platform",
      },
    ],
  },
};

export default function NoteIQPage() {
  return <NoteIQClient />;
}