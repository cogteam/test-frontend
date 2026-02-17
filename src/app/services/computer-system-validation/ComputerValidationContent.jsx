"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";

// import Aos from "aos";
// import Header from "@/components/Header/page";
// import Footer from "@/components/Footer/page";
import Commonfrom from "@/components/Productfrom/Commonfrom/page";
import { IMAGES } from "@/assets/images/index.js"; 
import { VALUE_PROPOSITIONS, SERVICES_TABS } from "./computerData"; 
import NextPage from "@/components/NextPage/page";
import dots from "../../../assets/images/services/dots.svg";

export default function ComputerValidationContent() {
  const [key, setKey] = useState('vms');

  // useEffect(() => {
  //   Aos.init({ duration: 1000, once: true });
  // }, []);

  const scrollToForm = (e) => {
    e.preventDefault();
    const section = document.getElementById("expert-driven");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

const DotItem = ({ text }) => (
    <li className="w-100">
      <Image src={dots} alt="dots" /> {text}
    </li>
  );

  return (
    <>
      {/* <Header /> */}

      {/* --- BANNER SECTION --- */}
      <div className='inner-head inner-head-products product-wrapper computer-system-validation-banner'>
        <div className="banner-inner">
          <Container className='d-flex align-items-center h-100'>
            <div>
              <h1 className='h4' data-aos="fade-up">Computer System <br /> <span>Validation </span></h1>
              <p data-aos="fade-up" className="col-md-7">
               We provide end-to-end Computer System Validation (CSV) services that ensure data integrity, regulatory compliance, and operational excellence across pharmaceutical and life sciences environments.

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
        <h2 className="h4 text-center" data-aos="fade-up">Our Services</h2>
        <p className="text-center mb-4 mb-md-5" data-aos="fade-up">
          Comprehensive validation and compliance solutions that ensure system reliability,<br /> 
          audit readiness, and digital transformation.
        </p>

         <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3 justify-content-center border-0 sr-tabs"
        >
            <Tab className="col7" eventKey="vms" title="Maximise Compliance">
                <div className="sr-tabs-dtls">
                    <Row>
                        <Col md={12} lg={6}>
                            <div className="overflow-hidden">
                                <Image src={IMAGES.Enterprise} className="w-100" alt="srtabs" />
                            </div>
                        </Col>
                        <Col md={12} lg={6}>
                            <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                                <div>
                                    <h3>Managed Services</h3>
<div className="sr-tab-dtls-dta mt-4 border-0 p-0">
                        
                        <ul>
                          <DotItem text="Operations" />
                          <DotItem text="Enterprise Applications" />
                          <DotItem text="Analytical Instruments" />
                          <DotItem text="Shopfloor Equipment" />
                           <DotItem text="Network Qualification" />
                            <DotItem text="Middleware" />
                             <DotItem text="Hardware" />
                             <DotItem text="CSVMP, SOPs compliance" />
                             <DotItem text="Compliance Audits" />
                             <DotItem text="Training" />
                        </ul>
                      </div>

                                    

                                </div>
                                <a href="#expert-driven" onClick={scrollToForm} className="sr-btn  d-inline-block" style={{ cursor: 'pointer' }}>
                                    <span>Connect with us</span>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Tab>
        
            <Tab className="col7" eventKey="dms" title=" Consulting Services">
                <Row>
                    <Col md={12} lg={6}>
                        <div className="overflow-hidden">
                            <Image src={IMAGES.Diverse} className="w-100" alt="srtabs" />
                        </div>
                    </Col>
                    <Col md={12} lg={6}>
                        <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                            <div>
                                <h3>Consulting Services</h3>
<div className="sr-tab-dtls-dta mt-4 ">
  <ul>
    <DotItem text="Process Consulting" />
    <DotItem text="Audit Readiness, Participation & Observation Response" />
    <DotItem text="CSVMP and SOP Re-Design & Simplification" />
    <DotItem text="Digital Platform Management" />
    <DotItem text="Vendor Management" />
    <DotItem text="Core Domain Consulting" />
    <DotItem text="CSVMP Development" />
  </ul>
</div>


 <h3>Core Domain Consulting</h3>
<div className="sr-tab-dtls-dta mt-4 border-0 p-0">
  <ul>
    
   
    <DotItem text="CSVMP Development" />
  </ul>
</div>

                            </div>
                            <a href="#expert-driven" onClick={scrollToForm} className="sr-btn  d-inline-block" style={{ cursor: 'pointer' }}>
                                <span>Connect with us</span>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Tab>
        
            <Tab className="col7" eventKey="tms" title="Business Enabler">
                <Row>
                    <Col md={12} lg={6}>
                        <div className="overflow-hidden">
                            <Image src={IMAGES.Fast} className="w-100" alt="srtabs" />
                        </div>
                    </Col>
                    <Col md={12} lg={6}>
                        <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                            <div>
                               <h3>Transformation & Automation Services</h3>
                               <h5 className="mt-4">Strategic Validation</h5>
<div className="sr-tab-dtls-dta mt-4 border-0 p-0">
  <ul>
    
    <DotItem text="Adoption of New Tech – AI / ML / RPA" />
    <DotItem text="Unmanned Protocol Execution" />
    <DotItem text="200+ RPAs Validated" />
    <DotItem text="CSA – 10,000+ Documents" />
    <DotItem text="CSA – Risk-Based Approach" />
  </ul>
</div>

                            </div>
                            <a href="#expert-driven" onClick={scrollToForm} className="sr-btn  d-inline-block" style={{ cursor: 'pointer' }}>
                                <span>Connect with us</span>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Tab>
        
            <Tab className="col7" eventKey="rm" title="Business Accelerator
">
                <Row>
                    <Col md={12} lg={6}>
                        <div className="overflow-hidden">
                            <Image src={IMAGES.Optimisation} className="w-100" alt="srtabs" />
                        </div>
                    </Col>
                    <Col md={12} lg={6}>
                        <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                            <div>
                                <h3>Software Platform</h3>
                                                               <h5 className="mt-4">NoteIQ</h5>

<div className="sr-tab-dtls-dta mt-4 border-0 p-0">
  <ul>
    
    <DotItem text="Validation Management System" />
    <DotItem text="Documentation Management System" />
    <ul className="ms-3">
      <DotItem text="Developed In-House" />
      <DotItem text="Digitisation" />
      <DotItem text="Integrations" />
      <DotItem text="AI Enablement" />
    </ul>
   
  </ul>
</div>

                            </div>
                            <a href="#expert-driven" onClick={scrollToForm} className="sr-btn  d-inline-block" style={{ cursor: 'pointer' }}>
                                <span>Connect with us</span>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Tab>
        
            
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
            Validate Systems with <br/><span>Confidence & Compliance</span>

          </h2>
          <Row className="mt-5">
            <Col md={12} lg={6}>
              <div className="position-relative w-100 h-100" style={{ minHeight: '400px' }}>
                 <Image 
                   src={IMAGES.Computer} 
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

      {/* <Footer /> */}
    </>
  );
}