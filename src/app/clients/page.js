import ClientsView from "./ClientsView"; // Adjust the path to where you saved the code above

export const metadata = {
  title: "Our Clients | Arcolab Innovation Center",
  description: "Arcolab partners with leading global life science organizations to deliver transformative solutions and drive success.",
  keywords: ["Life Science Partners", "Arcolab Clients", "Pharmaceutical Solutions"],
  openGraph: {
    title: "Our Clients | Arcolab",
    description: "Partnering with global leaders to drive life science innovation.",
    url: "https://arcolab.com/clients",
    images: [
      {
        url: "/assets/images/client-banner.webp", // Replace with your actual public path
        width: 1200,
        height: 630,
        alt: "Arcolab Clients",
      },
    ],
  },
};

export default function ClientsPage() {
  return <ClientsView />;
}