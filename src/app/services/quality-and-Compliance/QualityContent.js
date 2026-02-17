"use client"; // Keep this here
import React, { useState } from "react";
import Image from "next/image";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
// import Aos from "aos";
// import Header from "@/components/Header/page";
// import Footer from "@/components/Footer/page";
import Commonfrom from "@/components/Productfrom/Commonfrom/page";
import { IMAGES } from "@/assets/images/index.js"; 
import { VALUE_PROPOSITIONS, SERVICES_TABS } from "./qualityData"; 
import NextPage from "@/components/NextPage/page";


export default function QualityContent() {
  const [key, setKey] = useState('vms');

  // useEffect(() => {
  //   Aos.init({
  //     duration: 1000, 
  //     once: true,    
  //   });
  // }, []);

  const scrollToForm = (e) => {
    e.preventDefault(); 
    const section = document.getElementById("expert-driven");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* <Header/> */}

      {/* --- BANNER SECTION --- */}
      <div className='inner-head inner-head-products product-wrapper quality-and-compliance-banner'>
        <div className="banner-inner">
          <Container className='d-flex align-items-center h-100'>
            <div>
              <h1 className='h4' data-aos="fade-up">Quality &   <span>Compliance</span></h1>
              <p data-aos="fade-up" className="col-md-7">
                Designed to ensure continuous adherence to industry standards, strengthen audit readiness, and build robust quality management frameworks that support long-term compliance excellence.
              </p>
            </div>
          </Container>
        </div>
      </div>

      {/* --- VALUE PROPOSITION SECTION --- */}
      <div className="grey pad80 challenges-wrapper service-value">
        <Container>
          <h2 className="h4 text-center" data-aos="fade-up">OUR VALUE PROPOSITION</h2>
          <Row className="mt-5">
            {VALUE_PROPOSITIONS.map((item, index) => (
              <Col md={6} lg={4} className={`mb-dflex ${index > 2 ? 'mt-2 mt-md-4' : 'mt-2 mt-md-0'}`} key={index}>
                <div className="challenges-box h-100" data-aos="fade-up" data-aos-delay={index * 100}>
                  <Image src={item.img} className="ComplexRegulations" alt={item.title} />
                  <Image src={item.icon} className="white-icon" alt="" />
                  <h6>{item.title}</h6>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* --- SERVICES TABS SECTION --- */}
      <div className="grey2 pad80 sr-services">
        <Container>
          <h2 className="h4 text-center" data-aos="fade-up">Our services</h2>
          <p className="text-center mb-4 mb-md-5" data-aos="fade-up">
            Comprehensive validation and compliance solutions that ensure system reliability,<br /> audit readiness, and digital transformation.
          </p>

          <Tabs
            id="services-tab"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3 justify-content-center border-0 sr-tabs"
          >
            {SERVICES_TABS.map((tab) => (
              <Tab className="col7" eventKey={tab.key} title={tab.title} key={tab.key}>
                <div className="sr-tabs-dtls">
                  <Row>
                    <Col md={12} lg={6}>
                      <div className="overflow-hidden position-relative w-100 h-100" style={{ minHeight: '300px' }}>
                        <Image 
                          src={tab.img} 
                          className="w-100 h-100 object-fit-cover" 
                          alt={tab.title} 
                          width={600}
                          height={400}
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    </Col>
                    <Col md={12} lg={6}>
                      <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                        <div>
                          <h3>{tab.heading}</h3>
                          <div className="pt-md-2 p-tag-style">{tab.desc}</div>
                        </div>
                        <a 
                          href="#expert-driven" 
                          onClick={scrollToForm} 
                          className="sr-btn mt-4 d-inline-block" 
                          style={{ cursor: 'pointer' }}
                        >
                          <span>Connect with us</span>
                        </a>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Tab>
            ))}
          </Tabs>
        </Container>
      </div>
   

    <NextPage 
            heading={<>Smarter CSV, 


     <span> Powered by NoteIQ
    </span></>}
            para="Pivot Path's NoteIQ, the next generation compliance platform, streamlines the entire CSV lifecycle from URS to PQ by automating validation workflows, documentation, and approvals, ensuring accuracy, traceability, and continuous audit readiness. By unifying validation, document control, and training within a single secure cloud native platform, NoteIQ reduces manual effort, minimises compliance risk, and enables teams to scale confidently while meeting global regulatory standards such as 21 CFR Part 11 and Annex 11.

"
            link="/products/noteiq"
            image={IMAGES.NOTEIQBANNER} 
          />

      {/* --- FORM SECTION --- */}
      <div className="pad80 grey discover-from" id="expert-driven">
        <Container>
          <h2 className="h4 text-center" data-aos="fade-up">
            Reinforce Quality Systems & <br/> <span> Inspection Readiness</span>
          </h2>
          <Row className="mt-5">
            <Col md={12} lg={6}>
              <div className="position-relative w-100 h-100" style={{ minHeight: '400px' }}>
                 <Image 
                   src={IMAGES.Quality} 
                   alt="Expert Driven Solutions" 
                   className="w-100 h-100 pe-lg-5 object-fit-cover" 
                   data-aos="fade-up"
                   width={600}
                   height={600}
                 />
              </div>
            </Col>
            <Col md={12} lg={6}>
              <Commonfrom />
            </Col>
          </Row>
        </Container>
      </div>

      {/* <Footer/> */}
    </>
  );
}