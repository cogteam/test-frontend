"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
// import Header from "@/components/Header/page";
// import Footer from "@/components/Footer/page";
import Commonfrom from "@/components/Productfrom/Commonfrom/page";

import { IMAGES } from "@/assets/images/index.js"; 

export default function TalentAcquisitionClient() {


  const [key, setKey] = useState('vms');
  
  const scrollToForm = (e) => {
    e.preventDefault(); // Prevent default link behavior
    const section = document.getElementById("expert-driven");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
   <>
   {/* <Header/> */}

     <div className='inner-head inner-head-products product-wrapper talent-acquisition-banner' style={{ backgroundImage: `url(${IMAGES.TrackTraceBanner.src})` }}>
            <div className="banner-inner">
                <Container className='d-flex align-items-center h-100 '>
                <div>
                <h1 className='h4' data-aos="fade-up">Talent Acquisition <br/> <span>Services </span></h1>
                    <p data-aos="fade-up" className="col-md-7 mb-0"> Designed to connect life science organisations with exceptional talent through a seamless, data-driven, and industry-aligned recruitment process, ensuring the right people power every stage of innovation and growth.</p>
                </div>
            </Container>
            </div>
        </div>

    <div className="grey pad80 challenges-wrapper service-value">
        <Container>
            <h2 className="h4 text-center" data-aos="fade-up">OUR VALUE PROPOSITION</h2>
            <Row className="mt-5">
                <Col md={6} lg={4} className="mb-dflex">
                    <div className="challenges-box h-100" data-aos="fade-up">
                        <Image src={IMAGES.Talent_Strategic} className="ComplexRegulations" alt="" />
                         <Image src={IMAGES.Talent_StrategicIcon} className="white-icon" alt="" />
                        <h6>Strategic Hiring Expertise</h6>
                        <p>  Extensive experience in recruiting senior leadership and global positions within the life sciences and allied sectors, supported by deep industry insights.</p>
                    </div>
                </Col>
                
                <Col md={6} lg={4} className="mb-dflex mt-2 mt-md-0">
                    <div className="challenges-box h-100" data-aos="fade-up">
                        <Image src={IMAGES.Talent_Comprehensive} className="ComplexRegulations" alt="" />
                        <Image src={IMAGES.Talent_ComprehensiveIcon} className="white-icon" alt="" />
                        <h6>Comprehensive Recruitment Solutions</h6>
                        <p> End-to-end hiring support from requisition to onboarding, powered by automation and a vast repository of over 100,000 profiles across diverse functional areas.</p>
                    </div>                   
                </Col>

                 <Col md={6} lg={4} className="mb-dflex mt-2 mt-md-0">
                    <div className="challenges-box h-100" data-aos="fade-up">
                        <Image src={IMAGES.Talent_Cultural} className="ComplexRegulations" alt="" />
                        <Image src={IMAGES.Talent_CulturalIcon} className="white-icon" alt="" />
                        <h6>Cultural & Industry Alignment</h6>
                        <p>  Unbiased recommendations tailored to each organisation’s culture, mission, and operational needs, ensuring long-term talent retention.</p>
                    </div>
                </Col>
                
                <Col md={6} lg={4} className="mb-dflex mt-2 mt-md-4">
                    <div className="challenges-box h-100" data-aos="fade-up">
                        <Image src={IMAGES.Talent_Efficiency} className="ComplexRegulations" alt="" />
                        <Image src={IMAGES.Talent_EfficiencyIcon} className="white-icon" alt="" />
                        <h6>Efficiency & Transparency</h6>
                        <p>A controlled, data-backed search process with no upfront retainer fees, optimising recruitment timelines and resource allocation.</p>
                    </div>                   
                </Col>

                 <Col md={6} lg={4} className="mb-dflex mt-2 mt-md-4">
                    <div className="challenges-box h-100" data-aos="fade-up">
                        <Image src={IMAGES.Talent_EmployerBranding} className="ComplexRegulations" alt="" />
                        <Image src={IMAGES.Talent_EmployerBrandingIcon} className="white-icon" alt="" />
                        <h6>Employer Branding Support</h6>
                        <p>Enhancing talent engagement through employer brand positioning, campus outreach, and targeted social media visibility.</p>
                    </div>                   
                </Col>
            </Row>
        </Container>
    </div>

    <div className="grey2 pad80 sr-services">
        <Container>
            <h2 className="h4 text-center mb-4 mb-md-5" data-aos="fade-up">Our Services</h2>
           <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3 justify-content-center border-0 sr-tabs"
                >
                <Tab eventKey="vms" title="Leadership & Senior-Level Hiring " className="col7">
                        <div className="sr-tabs-dtls">
                            <Row>
                                <Col md={12} lg={6}>
                                    <div className="overflow-hidden">
                                        <Image src={IMAGES.Talent_Leadership} className="w-100" alt="srtabs" />
                                    </div>
                                </Col>
                                <Col md={12} lg={6}>
                                    <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                                        <div>
                                            <h3>Leadership & Senior-Level <br className="d-none d-md-block"/> Hiring (Global)</h3>
                                        <p className="pt-md-2">  Executive search solutions designed to identify and attract transformative leaders for global and regional roles.</p>                                                                
                                        </div>   
                                        <a href="#expert-driven" onClick={scrollToForm} className="sr-btn mt-4 d-inline-block" style={{cursor: 'pointer'}}>
                                            <span>Connect with us</span>
                                        </a>            
                                    </div>
                                </Col>
                            </Row>
                        </div>
                </Tab>

                <Tab eventKey="dms" title="Middle & Junior-Level Hiring" className="col7">
                      <Row>
                                <Col md={12} lg={6}>
                                    <div className="overflow-hidden">
                                        <Image src={IMAGES.Talent_Middle} className="w-100" alt="srtabs" />
                                    </div>
                                </Col>
                                <Col md={12} lg={6}>
                                    <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                                        <div>
                                            <h3>Middle & Junior-Level <br className="d-none d-md-block"/> Hiring (India & Global)</h3>
                                        <p className="pt-md-2">Scalable hiring programs for operational and specialist <br className="d-none d-md-block"/>roles across markets, tailored to organisational goals and <br className="d-none d-md-block"/>compliance standards.</p>                                                               
                                        </div>   
                                        <a href="#expert-driven" onClick={scrollToForm} className="sr-btn mt-4 d-inline-block" style={{cursor: 'pointer'}}>
                                            <span>Connect with us</span>
                                        </a>            
                                    </div>
                                </Col>
                            </Row>
                </Tab>

                <Tab eventKey="tms" title="Campus Hiring"  className="col7">
                     <Row>
                                <Col md={12} lg={6}>
                                    <div className="overflow-hidden">
                                        <Image src={IMAGES.Talent_Campus} className="w-100" alt="srtabs" />
                                    </div>
                                </Col>
                                <Col md={12} lg={6}>
                                    <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                                        <div>
                                           <h3>Campus Hiring</h3>
                                        <p className="pt-md-2"> Strategic partnerships with academic institutions <br className="d-none d-md-block"/> to build a robust early-career talent pipeline for the future.</p>                                                               
                                        </div>   
                                        <a href="#expert-driven" onClick={scrollToForm} className="sr-btn mt-4 d-inline-block" style={{cursor: 'pointer'}}>
                                            <span>Connect with us</span>
                                        </a>            
                                    </div>
                                </Col>
                            </Row>
                </Tab>

                <Tab eventKey="rm" title="Talent Acquisition Analytics"  className="col7">
                    <Row>
                                <Col md={12} lg={6}>
                                    <div className="overflow-hidden">
                                        <Image src={IMAGES.Talent_Talent} className="w-100" alt="srtabs" />
                                    </div>
                                </Col>
                                <Col md={12} lg={6}>
                                   <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                                        <div>
                                          <h3>Talent Acquisition <br className="d-none d-md-block"/> Analytics</h3>
                                        <p className="pt-md-2">Data-driven insights and metrics to optimise recruitment<br className="d-none d-md-block"/> performance and forecast hiring needs.</p>                                                           
                                        </div>   
                                        <a href="#expert-driven" onClick={scrollToForm} className="sr-btn mt-4 d-inline-block" style={{cursor: 'pointer'}}>
                                            <span>Connect with us</span>
                                        </a>            
                                    </div>
                                </Col>
                            </Row>
                </Tab>

                <Tab eventKey="pv" title="Employer Branding " className="col7">
                     <Row>
                                <Col md={12} lg={6}>
                                    <div className="overflow-hidden">
                                        <Image src={IMAGES.Talent_Employer} className="w-100" alt="srtabs" />
                                    </div>
                                </Col>
                                <Col md={12} lg={6}>
                                   <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                                        <div>
                                          <h3>Employer Branding & Social<br className="d-none d-md-block"/> Media Recruitment</h3>
                                        <p className="pt-md-2"> Curated campaigns and digital outreach initiatives that strengthen brand presence and attract high-potential candidates.</p>                                                          
                                        </div>   
                                        <a href="#expert-driven" onClick={scrollToForm} className="sr-btn mt-4 d-inline-block" style={{cursor: 'pointer'}}>
                                            <span>Connect with us</span>
                                        </a>            
                                    </div>
                                </Col>
                            </Row>
                </Tab>

                <Tab eventKey="sd" title="Process Excellence"  className="col7">
                     <Row>
                                <Col md={12} lg={6}>
                                    <div className="overflow-hidden">
                                        <Image src={IMAGES.Talent_Process} className="w-100" alt="srtabs" />
                                    </div>
                                </Col>
                                <Col md={12} lg={6}>
                                    <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                                        <div>
                                          <h3>Process Excellence &<br className="d-none d-md-block"/> Market Intelligence</h3>
                                        <p className="pt-md-2">Benchmarking best practices, analysing industry trends,<br className="d-none d-md-block"/> and ensuring continuous improvement across talent acquisition functions.</p>                                                     
                                        </div>   
                                        <a href="#expert-driven" onClick={scrollToForm} className="sr-btn mt-4 d-inline-block" style={{cursor: 'pointer'}}>
                                            <span>Connect with us</span>
                                        </a>            
                                    </div>
                                </Col>
                            </Row>
                </Tab>
                </Tabs>
        </Container>
    </div>

    <div className="pad80 grey discover-from" id="expert-driven">
               <Container>
                   <h2 className="h4 text-center"  data-aos="fade-up">EXPERT-DRIVEN PHARMACOVIGILANCE SOLUTIONS FOR GLOBAL SAFETY</h2>
   
                   <Row className="mt-5">
                       <Col md={12} lg={6}>
                           <Image src={IMAGES.Fromimg} alt="fromimg" className="w-100 h-100 pe-5"  data-aos="fade-up" />
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