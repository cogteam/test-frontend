"use client";
import Image from "next/image";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import { IMAGES } from "@/assets/images"; // Ensure path is correct

const PARTNER_LOGOS = [
  IMAGES.LOGO1, IMAGES.LOGO2, IMAGES.LOGO3, IMAGES.LOGO4, IMAGES.LOGO5,
  IMAGES.LOGO6, IMAGES.LOGO7, IMAGES.LOGO8, IMAGES.LOGO9, IMAGES.LOGO10,
  IMAGES.LOGO11, IMAGES.LOGO12, IMAGES.LOGO13, IMAGES.LOGO14, IMAGES.LOGO15,
  IMAGES.LOGO16, IMAGES.LOGO17, IMAGES.LOGO18, IMAGES.LOGO19, IMAGES.LOGO20, 
  IMAGES.LOGO21
];

const logoSliderSettings = {
  dots: false,
  rtl: true,
  arrows: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  slidesToShow: 7,
  slidesToScroll: 1,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3 }
    },
    {
      breakpoint: 767,
      settings: { slidesToShow: 2, slidesToScroll: 1 }
    }
  ]
};

export default function PartnersSection() {
  return (
    <div className="grey pad80 pt-0 partner-wrapper client-logos overflow-hidden">
      <Container>
        <h2 className="h4 text-center" data-aos="fade-up">TRUST THAT BUILDS <br /><span>PARTNERSHIPS</span></h2>
        <p className="text-center col-7 m-auto" data-aos="fade-up">
          Our clients are at the heart of everything we do. By truly understanding your needs, we craft tailored approaches that create lasting value and measurable impact.
        </p>
      </Container>
      
      <Slider {...logoSliderSettings} className="mt-5 home-marquee">
        {PARTNER_LOGOS.map((logo, index) => (
          <span className="partner-logo text-center" key={index}>
            <Image src={logo} alt={`Client logo ${index}`} className={index === 6 || index === 11 || index === 12 ? "logo7" : ""} />
          </span>
        ))}
      </Slider>
    </div>
  );
}