import TrackAndTraceClient from "./TrackAndTraceClient";

export const metadata = {
  title: "Track & Trace Solutions | DetectPharmaIQ",
  description: "End-to-end Track & Trace and Supply Chain Digitalisation solutions powered by TraceLink. Strengthening patient safety and compliance globally.",
  openGraph: {
    title: "Track & Trace Solutions | DetectPharmaIQ",
    description: "Real-time visibility, seamless collaboration, and actionable intelligence for the life sciences supply chain.",
    images: [
      {
        url: "/assets/images/services/talent/banner.webp", // Adjust if needed
        width: 1200,
        height: 630,
        alt: "Track and Trace Solutions Banner",
      },
    ],
  },
};

export default function TrackAndTracePage() {
  return <TrackAndTraceClient />;
}