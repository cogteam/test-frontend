"use client";
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Image from "next/image";
import { IMAGES } from "@/assets/images/index.js";

// Client logos list using IMAGES.LOGO1 ... LOGO21
const clientLogos = [
    { name: "Client 1", image: IMAGES.LOGO1, alt: "Client 1 Logo" },
    { name: "Client 2", image: IMAGES.LOGO2, alt: "Client 2 Logo" },
    { name: "Client 3", image: IMAGES.LOGO3, alt: "Client 3 Logo" },
    { name: "Client 4", image: IMAGES.LOGO4, alt: "Client 4 Logo" },
    { name: "Client 5", image: IMAGES.LOGO5, alt: "Client 5 Logo" },
    { name: "Client 6", image: IMAGES.LOGO6, alt: "Client 6 Logo" },
    { name: "Client 7", image: IMAGES.LOGO7, alt: "Client 7 Logo" },
    { name: "Client 8", image: IMAGES.LOGO8, alt: "Client 8 Logo" },
    { name: "Client 9", image: IMAGES.LOGO9, alt: "Client 9 Logo" },
    { name: "Client 10", image: IMAGES.LOGO10, alt: "Client 10 Logo" },
    { name: "Client 11", image: IMAGES.LOGO11, alt: "Client 11 Logo" },
    { name: "Client 12", image: IMAGES.LOGO12, alt: "Client 12 Logo" },
    { name: "Client 13", image: IMAGES.LOGO13, alt: "Client 13 Logo" },
    { name: "Client 14", image: IMAGES.LOGO14, alt: "Client 14 Logo" },
    { name: "Client 15", image: IMAGES.LOGO15, alt: "Client 15 Logo" },
    { name: "Client 16", image: IMAGES.LOGO16, alt: "Client 16 Logo" },
    { name: "Client 17", image: IMAGES.LOGO17, alt: "Client 17 Logo" },
    { name: "Client 18", image: IMAGES.LOGO18, alt: "Client 18 Logo" },
    { name: "Client 19", image: IMAGES.LOGO19, alt: "Client 19 Logo" },
    { name: "Client 20", image: IMAGES.LOGO20, alt: "Client 20 Logo" },
    { name: "Client 21", image: IMAGES.LOGO21, alt: "Client 21 Logo" },
];

export default function ClientsView() {
    return (
        <>
               {/* <Header /> */}
       
               <div className="inner-head grey product-wrapper position-relative clients-banner" style={{ backgroundColor: '#1a1a1a' }}>
                                  <div className="position-absolute w-100 h-100 top-0 start-0" style={{ zIndex: 0 }}>
                                       <Image 
                                          src={IMAGES.Client_Banner} 
                                          alt="Arcolab Innovation Center" 
                                          fill 
                                          priority // Keep priority for LCP
                                          placeholder="blur" // Adds a blur effect while loading (if imports are static)
                                          sizes="100vw"
                                          style={{ objectFit: 'cover' }}
                                       />
                                       {/* Dark overlay to ensure text readability if image is bright */}
                                  </div>
                                  
                                  <Container className="d-flex align-items-center h-100 position-relative" style={{ zIndex: 1 }}>
                                    <div>
                                      <h1 className="h4 mt-0 text-white" data-aos="fade-up">Clients</h1>
                                      <p className="text-white" data-aos="fade-up" data-aos-delay="100"> We partner with leading organizations globally to deliver
                               <br className='d-none d-md-block' />
                               transformative solutions and drive success.</p>
                                    </div>
                                  </Container>
                                </div>
       
                   
       
                   <main className='pad80 client-page'>
                       <Container>
                           <Row >
                               {clientLogos.map((client, index) => (
                                   <Col md={2} sm={4} xs={6} key={index} data-aos="fade-up" data-aos-delay={index * 100} className='mx-0 mb-4'>
                                       <div className='client-logo-item'>
                                           <div className="client-logo-img-wrapper">
                                               <Image
                                                   src={client.image}
                                                   width={150}
                                                   height={80}
                                                   alt={client.alt}
                                               />
                                           </div>
                               
                                       </div>
                                   </Col>
                               ))}
                           </Row>
                       </Container>
                   </main>
       
               {/* <Footer /> */}
               </>
    );
}