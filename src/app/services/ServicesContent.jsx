"use client"; // This handles Animations and Scroll
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; 
import { Col, Container, Row } from "react-bootstrap";
import { IMAGES } from "@/assets/images/index.js"; 
// import Header from "@/components/Header/page";
// import Footer from "@/components/Footer/page";

export default function ServicesContent() {
  
  useEffect(() => {   

    // 2. Hash Scroll Logic
    const handleScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
            window.history.replaceState(null, "", window.location.pathname);
          }, 600);
        }
      }
    };

    handleScroll();
  }, []);

  return (
    <>
      {/* <Header /> */}

      {/* --- BANNER SECTION --- */}
      <div className="inner-head grey product-wrapper position-relative" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="position-absolute w-100 h-100 top-0 start-0" style={{ zIndex: 0 }}>
          <Image 
            src={IMAGES.Services} 
            alt="Arcolab Services" 
            fill 
            priority={true} 
            placeholder="blur" 
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)' }}></div>
        </div>
        
        <Container className="d-flex align-items-center h-100 position-relative" style={{ zIndex: 1 }}>
          <div>
            <h1 className="h4 mt-0 text-white" data-aos="fade-up">Services</h1>
            <p className="text-white" data-aos="fade-up" data-aos-delay="100">
              Specialised services that strengthen performance, streamline compliance,<br/> 
              and unlock lasting operational excellence.
            </p>
          </div>
        </Container>
      </div>

      <main className="pad80 product-page">
        <Container>
          <Row className="justify-content-center">

            {/* CATEGORY: DIGITAL MANUFACTURING */}
            <Col lg={12} className="text-center  mb-4" data-aos="fade-up" id="drug-safety-and-intelligence">
              <h2 className="h4">Drug Safety & <span>Intelligence</span></h2>
            </Col>

            <Col lg={4} md={6} data-aos="fade-up">
              <Link href="/services/global-pharmacovigilance" className="blog-list d-block">
                <div className="overflow-hidden">
                  <Image
                    src={IMAGES.GLOBALPHARMACOVILL}
                    width={500}
                    height={300}
                    alt="Global Pharmacovigilance"
                    className="w-100 h-auto"
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3>Global <br/> Pharmacovigilance</h3>
                <p>Ensuring global drug safety with timely, compliant vigilance.</p>
                <Arrow />
              </Link>
            </Col>


            {/* CATEGORY: PHARMACOVIGILANCE */}
            <Col lg={12} className="text-center mt-5 mb-4" data-aos="fade-up" id="drug-research-and-development">
              <h2 className="h4">Drug Research & <span>Development</span></h2>
            </Col>


            <Col lg={4} md={6} data-aos="fade-up">
              <Link href="/services/clinical-operations" className="blog-list d-block">
                <div className="overflow-hidden">
                  <Image
                    src={IMAGES.CLINICALOPERATIONS}
                    width={500}
                    height={300}
                    alt="Clinical Operations"
                    className="w-100 h-auto"
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3>Clinical <br/> Operations</h3>
                <p>Driving seamless, efficient clinical trials from start to finish.</p>
                <Arrow />
              </Link>
            </Col>


              <Col lg={4} md={6} data-aos="fade-up">
              <Link href="/services/intellectual-property-consulting" className="blog-list d-block">
                <div className="overflow-hidden">
                  <Image
                    src={IMAGES.INTELLECTUALPROPERTY}
                    width={500}
                    height={300}
                    alt="Intellectual Property Consulting"
                    className="w-100 h-auto"
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3>Intellectual Property <br/> Consulting</h3>
                <p>Protecting and maximising the value of your intellectual assets.</p>
                <Arrow />
              </Link>
            </Col>




            {/* CATEGORY: QUALITY & COMPLIANCE */}
            <Col lg={12} className="text-center mt-5 mb-4" data-aos="fade-up" id="quality-and-compliance">
              <h2 className="h4">Quality & <span>Compliance</span></h2>
            </Col>

            <Col lg={4} md={6} data-aos="fade-up">
              <Link href="/services/computer-system-validation" className="blog-list d-block">
                <div className="overflow-hidden">
                  <Image
                    src={IMAGES.COMPUTERSYSTEM}
                    width={500}
                    height={300}
                    alt="Computer System Validation"
                    className="w-100 h-auto"
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3>Computer System <br/> Validation</h3>
                <p>Delivering compliant, audit-ready validation for every system.</p>
                <Arrow />
              </Link>
            </Col>

            <Col lg={4} md={6} data-aos="fade-up">
              <Link href="/services/quality-and-compliance" className="blog-list d-block">
                <div className="overflow-hidden">
                  <Image
                    src={IMAGES.QUALITYANDCOMPLIANCE} 
                    width={500}
                    height={300}
                    alt="Quality & Compliance Services"
                    className="w-100 h-auto"
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3>Quality & Compliance <br/> Services</h3>
                <p>Strengthening quality systems with expert, end-to-end compliance support.</p>
                <Arrow />
              </Link>
            </Col>

            

             <Col lg={4} md={6} data-aos="fade-up">
              <Link href="/services/operational-excellence" className="blog-list d-block">
                <div className="overflow-hidden">
                  <Image
                    src={IMAGES.OPERATIONALEXCELLENCE}
                    width={500}
                    height={300}
                    alt="Operational Excellence"
                    className="w-100 h-auto"
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3>Operational<br/> Excellence</h3>
                <p>Unlocking peak performance with continuous process improvement.</p>
                <Arrow />
              </Link>
            </Col>

            {/* CATEGORY: DIGITAL MANUFACTURING */}
            <Col lg={12} className="text-center mt-5 mb-4" data-aos="fade-up" id="digital-innovation-and-transformation">
              <h2 className="h4">Digital Innovation  <span>& Transformation</span></h2>
            </Col>

              <Col lg={4} md={6} data-aos="fade-up">
              <Link href="/services/digital-manufacturing" className="blog-list d-block">
                <div className="overflow-hidden">
                  <Image
                    src={IMAGES.DIGITALMANUFACTURING}
                    width={500}
                    height={300}
                    alt="Digital Manufacturing"
                    className="w-100 h-auto"
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3>Digital <br/>Manufacturing</h3>
                <p>Enabling smarter manufacturing through automation and innovation.</p>
                <Arrow />
              </Link>
            </Col>

           <Col lg={4} md={6} data-aos="fade-up">
              <Link href="/services/track-and-trace-solutions" className="blog-list d-block">
                <div className="overflow-hidden">
                  <Image
                    src={IMAGES.TRACKANDTRACE}
                    width={500}
                    height={300}
                    alt="Track and Trace Solutions"
                    className="w-100 h-auto"
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3>Track and Trace<br/> Solutions</h3>
                <p>Delivering secure, compliant traceability across the supply chain.</p>
                <Arrow />
              </Link>
            </Col>

          

  <Col lg={4} md={6} data-aos="fade-up">
              <Link href="/services/mobile-clinical" className="blog-list d-block">
                <div className="overflow-hidden">
                  <Image
                    src={IMAGES.MOBILECLINICAL}
                    width={500}
                    height={300}
                    alt="Mobile Clinical Services"
                    className="w-100 h-auto"
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3>Mobile Clinical <br/>Services</h3>
                <p>Bringing clinical trial care directly to patients, anywhere.</p>
                <Arrow />
              </Link>
            </Col>
           

            {/* CATEGORY: PHARMACOVIGILANCE */}
            {/* <Col lg={12} className="text-center mt-5 mb-4" data-aos="fade-up" id="pharmacovigilance-and-clinical-services">
              <h2 className="h4">Drug Research & <span>Development</span></h2>
            </Col> */}

           

            {/* <Col lg={4} md={6} data-aos="fade-up">
              <Link href="/services/clinical-operations" className="blog-list d-block">
                <div className="overflow-hidden">
                  <Image
                    src={IMAGES.CLINICALOPERATIONS}
                    width={500}
                    height={300}
                    alt="Clinical Operations"
                    className="w-100 h-auto"
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3>Clinical <br/> Operations</h3>
                <p>Driving seamless, efficient clinical trials from start to finish.</p>
                <Arrow />
              </Link>
            </Col> */}

           

            {/* CATEGORY: COMMERCIALIZATION */}
            {/* <Col lg={12} className="text-center mt-5 mb-4" data-aos="fade-up" id="commercialization">
              <h2 className="h4">Commercialization</h2>
            </Col> */}

            {/* <Col lg={4} md={6} data-aos="fade-up">
              <Link href="/services/intellectual-property-consulting" className="blog-list d-block">
                <div className="overflow-hidden">
                  <Image
                    src={IMAGES.INTELLECTUALPROPERTY}
                    width={500}
                    height={300}
                    alt="Intellectual Property Consulting"
                    className="w-100 h-auto"
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3>Intellectual Property <br/> Consulting</h3>
                <p>Protecting and maximising the value of your intellectual assets.</p>
                <Arrow />
              </Link>
            </Col> */}

            {/* CATEGORY: HUMAN CAPITAL */}
            <Col lg={12} className="text-center mt-5 mb-4" data-aos="fade-up" id="human-capital">
              <h2 className="h4">Human <span>Capital</span></h2>
            </Col>

            <Col lg={4} md={6} data-aos="fade-up">
              <Link href="/services/human-capital-consulting" className="blog-list d-block">
                <div className="overflow-hidden">
                  <Image
                    src={IMAGES.HUMANCAPITAL}
                    width={500}
                    height={300}
                    alt="Human Capital Consulting"
                    className="w-100 h-auto"
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3>Human Capital <br/> Consulting</h3>
                <p>Transforming people strategies to build stronger, future-ready teams.</p>
                <Arrow />
              </Link>
            </Col>
             <Col lg={4} md={6} data-aos="fade-up">
              <Link href="/services/human-capital-digitisation" className="blog-list d-block">
                <div className="overflow-hidden">
                  <Image
                    src={IMAGES.HUMANCAPITALDIGITISATION}
                    width={500}
                    height={300}
                    alt="Human Capital Digitisation"
                    className="w-100 h-auto"
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3>Human Capital <br/> Digitisation</h3>
                <p>Digitising HR workflows for smarter, faster workforce management.</p>
                <Arrow />
              </Link>
            </Col>

            <Col lg={4} md={6} data-aos="fade-up">
              <Link href="/services/talent-acquisition" className="blog-list d-block">
                <div className="overflow-hidden">
                  <Image
                    src={IMAGES.TALENTACQUISITION}
                    width={500}
                    height={300}
                    alt="Talent Acquisition Services"
                    className="w-100 h-auto"
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3>Talent Acquisition<br/> Services</h3>
                <p>Connecting you with specialised talent to power your growth.</p>
                <Arrow />
              </Link>
            </Col>

           

          </Row>
        </Container>
      </main>

      {/* <Footer /> */}
    </>
  );
}

function Arrow() {
  return (
    <div className="d-flex align-items-center">
      <span className="arrow d-flex justify-content-center align-items-center">
        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.0052 6.88623H0.909912V5.76123H10.0052L5.73298 1.48904L6.53491 0.69873L12.1599 6.32373L6.53491 11.9487L5.73298 11.1584L10.0052 6.88623Z" fill="#38ad66"></path>
        </svg>
      </span>
    </div>
  );
}