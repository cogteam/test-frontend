import AboutUs from "./AboutUs";

export const metadata = {
  //metadataBase: new URL('http://localhost:3000/about'), 
  title: "About Us | Life Science Innovation Center",
  description: "Arcolab is a center of excellence offering a wide range of life science services, delivering holistic business solutions.",
  // Add OpenGraph for better social sharing
  openGraph: {
    title: "About Us | Arcolab",
    description: "Building the Future of Life Sciences, Together.",
    images: ['/assets/images/about-us-banner.webp'], // Replace with actual public URL
  },
};

export default function AboutPage() {
  return <AboutUs />;
}