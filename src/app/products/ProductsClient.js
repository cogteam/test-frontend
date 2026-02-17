"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
// import Header from "@/components/Header/page";
// import Footer from "@/components/Footer/page";
import { IMAGES } from "@/assets/images/index.js";

// --- Data Configuration ---
const productsData = [
  {
    id: "noteiq",
    title: "NoteIQ",
    desc: "Automating GxP compliance with intelligence and precision.",
    image: IMAGES.NOTEIQLISTING,
    link: "/products/noteiq",
  },
  {
    id: "novavigil",
    title: "NovaVigil",
    desc: "AI-driven vigilance for faster, accurate safety insights.",
    image: IMAGES.NOVAVIGILLISTING,
    link: "/products/novavigil",
  },
  {
    id: "golanzar",
    title: "GoLanzar",
    desc: "Powering faster, smarter pharmaceutical launches.",
    image: IMAGES.GOLANZARLISTING,
    link: "/products/golanzar",
  },
  {
    id: "inlumin",
    title: "InLumin",
    desc: "Procurement made clear, compliant, and effortless.",
    image: IMAGES.INLUMINLISTING,
    link: "/products/inlumin",
  },
  {
    id: "anomiq",
    title: "AnomIQ",
    desc: "Proactive anomaly detection for confident compliance.",
    image: IMAGES.ANOMIQLISTING,
    link: "/products/anomiq",
  },
];

// --- Sub-Components ---

const Arrow = () => (
  <div className="d-flex align-items-center">
    <span className="arrow d-flex justify-content-center align-items-center">
      <svg
        width="13"
        height="12"
        viewBox="0 0 13 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M10.0052 6.88623H0.909912V5.76123H10.0052L5.73298 1.48904L6.53491 0.69873L12.1599 6.32373L6.53491 11.9487L5.73298 11.1584L10.0052 6.88623Z"
          fill="#38ad66"
        />
      </svg>
    </span>
  </div>
);

const ProductCard = ({ title, desc, image, link }) => (
  <Col lg={4} md={6} className="mb-4" data-aos="fade-up">
    <Link href={link} className="blog-list d-block h-100">
      <div className="overflow-hidden mb-3">
        <Image
          src={image}
          width={500}
          height={300}
          alt={title}
          className="w-100 h-auto"
          style={{ objectFit: "cover" }}
        />
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <Arrow />
    </Link>
  </Col>
);

// --- Main Component ---

export default function ProductsClient() {
 

  return (
    <>
      {/* <Header /> */}

      {/* Hero Section */}
      <div
        className="inner-head grey product-wrapper position-relative"
        style={{ backgroundColor: "#1a1a1a" }}
      >
        <div
          className="position-absolute w-100 h-100 top-0 start-0"
          style={{ zIndex: 0 }}
        >
          <Image
            src={IMAGES.Products}
            alt="Arcolab Innovation Center"
            fill
            priority
            placeholder="blur"
            sizes="100vw"
            style={{ objectFit: "cover", opacity: 0.6 }} // Added opacity for better text readability
          />
        </div>

        <Container
          className="d-flex align-items-center h-100 position-relative"
          style={{ zIndex: 1 }}
        >
          <div>
            <h1 className="h4 mt-0 text-white" data-aos="fade-up">
              products
            </h1>
            <p
              className="text-white"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Discover a suite of future-ready solutions built to empower your{" "}
              <br className="d-none d-md-block" />
              growth and deliver measurable results.
            </p>
          </div>
        </Container>
      </div>

      {/* Product Grid */}
      <main className="pad80 product-page">
        <Container>
          <Row>
            {productsData.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                desc={product.desc}
                image={product.image}
                link={product.link}
              />
            ))}
          </Row>
        </Container>
      </main>

      {/* <Footer /> */}
    </>
  );
}