import ServicesContent from "./ServicesContent";

export const metadata = {
  title: "Services | Life Science Innovation Center",
  description: "Specialised services that strengthen performance, streamline compliance, and unlock lasting operational excellence for Life Sciences.",
  openGraph: {
    title: "Services | Arcolab",
    description: "Discover our solutions in Quality & Compliance, Digital Manufacturing, Pharmacovigilance, Commercialization, and Human Capital.",
    // Ensure this path matches the image you want to show on social media
    images: ["/assets/images/services/services-banner.webp"], 
    url: "",
    type: "website",
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}