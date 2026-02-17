"use client";
import Link from "next/link";
import Image from "next/image";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import { IMAGES } from "@/assets/images"; // Ensure path is correct

const SERVICE_ITEMS = [
  {
    id: 1,
    link: "/services/#pharmacovigilance-and-clinical-services",
    img: IMAGES.PHARMACOVIGILANCE,
    icon: IMAGES.PHARMACOVIGILANCEICON,
    title: "PHARMACOVIGILANCE & CLINICAL SERVICES",
    desc: "We protect patients and ensure your studies remain compliant and reliable."
  },
  {
    id: 2,
    link: "/services/#manufacturing-and-supply-chain",
    img: IMAGES.MANUFACTURINGIMG,
    icon: IMAGES.MANUFACTURINGICON,
    title: "DIGITAL MANUFACTURING & SUPPLY CHAIN AUTOMATION",
    desc: "We optimise supply chains to keep your products moving with consistency and speed."
  },
  {
    id: 3,
    link: "/services/#quality-and-compliance",
    img: IMAGES.QUALITY,
    icon: IMAGES.QUALITYICON,
    title: "QUALITY & COMPLIANCE",
    desc: "We help you meet global standards with confidence and operational discipline."
  },
  {
    id: 4,
    link: "/services/#commercialization",
    img: IMAGES.COMMERCIALIZATIONIMG,
    icon: IMAGES.COMMERCIALIZATIONICON,
    title: "COMMERCIALIZATION",
    desc: "We turn innovation into measurable commercial success."
  },
  {
    id: 5,
    link: "/services/#human-capital",
    img: IMAGES.HUMAN,
    icon: IMAGES.HUMANICON,
    title: "HUMAN CAPITAL",
    desc: "We elevate workforce performance to drive organisational impact."
  },
];

const serviceSliderSettings = {
  dots: false,
  infinite: true,
  speed: 1200,
  autoplay: false,
  autoplaySpeed: 3000,
  slidesToShow: 5,
  slidesToScroll: 1,
  pauseOnHover: false,
  arrows: false,
  draggable: false,
  responsive: [
    {
      breakpoint: 991, 
      settings: {
        draggable: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "100px",
        autoplay: true,
      },
    },
    {
      breakpoint: 768, 
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "60px",
      },
    },
  ],
};

export default function ServicesSection() {
  return (
    <div className="grey pad80 pb-0">
      <Container>
        <h2 className="h4 text-center" data-aos="fade-up">OUR DEEP-DOMAIN <br /><span>LIFE SCIENCE OFFERINGS</span></h2>
        <p className="text-center col-md-8 m-auto" data-aos="fade-up">
          We span the full spectrum of the life sciences value chain, from discovery to delivery. Shaped by decades of domain expertise and powered by modern technology, our solutions, consulting, and managed services are designed to meet your needs at every stage.
        </p>
      </Container>

      <div className="container-fluid p-0 mt-5">
        <Slider {...serviceSliderSettings} className="service-slider">
          {SERVICE_ITEMS.map((service) => (
            <div className="slide-mb" key={service.id}>
              <Link href={service.link} scroll={true} className="services-box position-relative">
                <div className="card bg-dark text-white border-0">
                  <Image src={service.img} className="card-img" alt={service.title} />
                  <div className="card-img-overlay d-flex flex-column justify-content-end text-center">
                    <h6 dangerouslySetInnerHTML={{ __html: service.title.replace(' & ', ' & <br />') }}></h6>
                    <p className="product-para">{service.desc}</p>
                    <span className="rounded-circle mt-2 d-flex align-items-center justify-content-center">+</span>
                  </div>
                </div>
                <div className="hovediv d-flex align-items-center justify-content-center">
                  <Image src={service.icon} className="card-img" alt="" />
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}