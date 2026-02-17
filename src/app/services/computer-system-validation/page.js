import ComputerValidationContent from "./ComputerValidationContent";

export const metadata = {
  title: "Computer System Validation Services (CSV) | Arcolab",
  description: "End-to-end Computer System Validation (CSV) services ensuring data integrity, regulatory compliance, and operational excellence for life sciences.",
  openGraph: {
    title: "Computer System Validation Services | Arcolab",
    description: "Expert validation services from CSV 1.0 to 4.0, including Audit Readiness, Risk Management, and Digital Process enablement.",
    // Ensure this path is correct for your banner image
    images: ["/assets/images/services/computer/banner.webp"], 
    url: "https://arcolab.com/services/computer-system-validation",
    type: "website",
  },
};

export default function Page() {
  return <ComputerValidationContent />;
}