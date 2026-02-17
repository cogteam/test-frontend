"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
// import Aos from "aos";
// import Header from "@/components/Header/page";
// import Footer from "@/components/Footer/page";
import Commonfrom from "@/components/Productfrom/Commonfrom/page";
import NextPage from "@/components/NextPage/page";

import { IMAGES } from "@/assets/images/index.js"; 

export default function TrackAndTraceClient() {

  const [key, setKey] = useState('vms');

    const scrollToForm = (e) => {
    e.preventDefault(); // Prevent default link behavior
    const section = document.getElementById("expert-driven");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
 const iconStyle = {
    width: '50px',
    height: '50px',
    color: '#ffffff', // Replace with your brand color variable if needed
  };

  return (
   <>

   {/* <Header/> */}

    <div className='inner-head inner-head-products product-wrapper tracktrace-banner'>
        <div className="banner-inner">
            <Container className='d-flex align-items-center h-100 '>
            <div>
            <h1 className='h4' data-aos="fade-up">Track and Trace <br/><span>Solutions </span></h1>
                <p data-aos="fade-up" className=" col-md-8">Through our end-to-end Track & Trace and Supply Chain Digitalisation solutions powered by TraceLink, we help global life sciences organisations strengthen patient safety, ensure market compliance, and drive operational efficiency.

</p>

<p className="mb-0 col-md-8" data-aos="fade-up">
    TraceLink connects every participant in the life sciences supply chain from manufacturers to dispensers, enabling real-time visibility, seamless collaboration, and actionable intelligence to better serve patients across 50+ countries, 291,000 members, and 1,600+ customers.
</p>
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
                        <Image src={IMAGES.Track_Comprehensive} className="ComplexRegulations" alt="" />
                        <Image src={IMAGES.Track_Comprehensiveicon} className="white-icon" alt="" />
                        <h6>Comprehensive Compliance Coverage</h6>
                        <p> Expert guidance and execution across global serialisation regulations, including EUMDR, DSCSA, Russia, Uzbekistan, Brazil, China, South Korea, and the Gulf & Near East.</p>
                    </div>
                </Col>
                
                <Col md={6} lg={4} className="mb-dflex mt-2 mt-md-0">
                    <div className="challenges-box h-100" data-aos="fade-up">
                        <Image src={IMAGES.Track_Proven} className="ComplexRegulations" alt="" />
                        <Image src={IMAGES.Track_Provenicon} className="white-icon" alt="" />
                        <h6>Proven Project Governance</h6>
                        <p> Established project management methodologies that ensure efficient monitoring, cost optimisation, and timely delivery across all serialisation and compliance initiatives.</p>
                    </div>                   
                </Col>

                 <Col md={6} lg={4} className="mb-dflex mt-2 mt-md-0">
                    <div className="challenges-box h-100" data-aos="fade-up">
                        <Image src={IMAGES.Track_Data} className="ComplexRegulations" alt="" />
                        <Image src={IMAGES.Track_Dataicon} className="white-icon" alt="" />
                        <h6>Data Accuracy and Integrity</h6>
                        <p> Robust master data management and governance practices that guarantee a single version of truth, ensuring serialisation data security and integrity.</p>
                    </div>
                </Col>
                
                <Col md={6} lg={4} className="mb-dflex mt-2 mt-md-4">
                    <div className="challenges-box h-100" data-aos="fade-up">
                        <Image src={IMAGES.Track_Expert} className="ComplexRegulations" alt="" />
                        <Image src={IMAGES.Track_Experticon} className="white-icon" alt="" />
                        <h6>Expert-Led Implementation</h6>
                        <p> Specialised professionals offering deep domain knowledge in TraceLink configuration, vendor assessment, validation, and technical consulting.</p>
                    </div>                   
                </Col>

                 <Col md={6} lg={4} className="mb-dflex mt-2 mt-md-4">
                    <div className="challenges-box h-100" data-aos="fade-up">
                        <Image src={IMAGES.Track_Flexible} className="ComplexRegulations" alt="" />
                        <Image src={IMAGES.Track_Flexibleicon} className="white-icon" alt="" />
                        <h6>Flexible Managed Services</h6>
                        <p> Cost-effective, scalable outsourcing options to maintain serialised operations efficiently while focusing on core business functions.</p>
                    </div>
                </Col>
                
                <Col md={6} lg={4} className="mb-dflex mt-2 mt-md-4">
                    <div className="challenges-box h-100" data-aos="fade-up">
                        <Image src={IMAGES.Track_Actionable} className="ComplexRegulations" alt="" />
                        <Image src={IMAGES.Track_Actionableicon} className="white-icon" alt="" />
                        <h6>Actionable Insights and Alert Resolution</h6>
                        <p> End-to-end alert management services that deliver proactive analysis, clear reporting, and market-specific compliance across global NMVS and NCA frameworks.</p>
                    </div>                   
                </Col>
            </Row>
        </Container>
    </div>

    <div className="grey2 pad80 sr-services">
        <Container>
            <h2 className="h4 text-center" data-aos="fade-up">Our Services</h2>
            <p className="text-center mb-4 mb-md-5" data-aos="fade-up">
          Comprehensive, Flexible, and Scalable Alert Management Service
        </p>
          
          <Tabs
    id="controlled-tab-example"
    activeKey={key}
    onSelect={(k) => setKey(k)}
    className="mb-3 justify-content-center border-0 sr-tabs"
>
    <Tab eventKey="vms" title="Cost-Effective Solutions" className="col7">
        <div className="sr-tabs-dtls">
            <Row>
                <Col md={12} lg={6}>
                    <div className="overflow-hidden">
                        <Image src={IMAGES.Track_Cost} className="w-100" alt="srtabs" />
                    </div>
                </Col>
                <Col md={12} lg={6}>
                    <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                        <div>
                            <h3>Cost-Effective <br className="d-none d-md-block"/> Solutions</h3>
                            <p className="pt-md-2"> Competitive pricing with flexible pay-as-you-go options <br className="d-none d-md-block"/>and no long-term commitments.</p>
                        </div>
                        <a href="#expert-driven" onClick={scrollToForm} className="sr-btn mt-4 d-inline-block" style={{ cursor: 'pointer' }}>
                            <span>Connect with us</span>
                        </a>
                    </div>
                </Col>
            </Row>
        </div>
    </Tab>

    <Tab eventKey="dms" title="Experienced Execution" className="col7">
        <Row>
            <Col md={12} lg={6}>
                <div className="overflow-hidden">
                    <Image src={IMAGES.Track_Experienced} className="w-100" alt="srtabs" />
                </div>
            </Col>
            <Col md={12} lg={6}>
                <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                    <div>
                        <h3>Experienced and <br className="d-none d-md-block"/>Efficient Execution</h3>
                        <p className="pt-md-2">Dedicated experts managing diverse alert variants with<br className="d-none d-md-block"/> speed and accuracy.</p>
                    </div>
                    <a href="#expert-driven" onClick={scrollToForm} className="sr-btn mt-4 d-inline-block" style={{ cursor: 'pointer' }}>
                        <span>Connect with us</span>
                    </a>
                </div>
            </Col>
        </Row>
    </Tab>

    <Tab eventKey="tms" title="Proactive Resolution" className="col7">
        <Row>
            <Col md={12} lg={6}>
                <div className="overflow-hidden">
                    <Image src={IMAGES.Track_Proactive} className="w-100" alt="srtabs" />
                </div>
            </Col>
            <Col md={12} lg={6}>
                <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                    <div>
                        <h3>Proactive Resolution</h3>
                        <p className="pt-md-2"> Recurring issues are identified early, with actionable solutions implemented to prevent recurrence.</p>
                    </div>
                    <a href="#expert-driven" onClick={scrollToForm} className="sr-btn mt-4 d-inline-block" style={{ cursor: 'pointer' }}>
                        <span>Connect with us</span>
                    </a>
                </div>
            </Col>
        </Row>
    </Tab>

    <Tab eventKey="rm" title="Transparent Reporting" className="col7">
        <Row>
            <Col md={12} lg={6}>
                <div className="overflow-hidden">
                    <Image src={IMAGES.Track_Transparent} className="w-100" alt="srtabs" />
                </div>
            </Col>
            <Col md={12} lg={6}>
                <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                    <div>
                        <h3>Transparent Reporting</h3>
                        <p className="pt-md-2">Detailed daily, weekly, and monthly reports capturing analysis, resolution, and system performance metrics.</p>
                    </div>
                    <a href="#expert-driven" onClick={scrollToForm} className="sr-btn mt-4 d-inline-block" style={{ cursor: 'pointer' }}>
                        <span>Connect with us</span>
                    </a>
                </div>
            </Col>
        </Row>
    </Tab>

    <Tab eventKey="pv" title="Market-Specific Compliance" className="col7">
        <Row>
            <Col md={12} lg={6}>
                <div className="overflow-hidden">
                    <Image src={IMAGES.Track_Market} className="w-100" alt="srtabs" />
                </div>
            </Col>
            <Col md={12} lg={6}>
                <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                    <div>
                        <h3>Market-Specific<br className="d-none d-md-block"/> Compliance</h3>
                        <p className="pt-md-2"> Each alert is managed in strict accordance with local <br className="d-none d-md-block"/>NMVO and NCA requirements, using detailed<br className="d-none d-md-block"/> compliance checklists.</p>
                    </div>
                    <a href="#expert-driven" onClick={scrollToForm} className="sr-btn mt-4 d-inline-block" style={{ cursor: 'pointer' }}>
                        <span>Connect with us</span>
                    </a>
                </div>
            </Col>
        </Row>
    </Tab>

    <Tab eventKey="sd" title="Customized Handling" className="col7">
        <Row>
            <Col md={12} lg={6}>
                <div className="overflow-hidden">
                    <Image src={IMAGES.Track_Customized} className="w-100" alt="srtabs" />
                </div>
            </Col>
            <Col md={12} lg={6}>
                <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                    <div>
                        <h3>Customized Handling</h3>
                        <p className="pt-md-2"> Every alert is assigned to a dedicated Arcolab executive for <br className="d-none d-md-block"/>market-specific oversight and resolution.</p>
                    </div>
                    <a href="#expert-driven" onClick={scrollToForm} className="sr-btn mt-4 d-inline-block" style={{ cursor: 'pointer' }}>
                        <span>Connect with us</span>
                    </a>
                </div>
            </Col>
        </Row>
    </Tab>

    <Tab eventKey="psmf" title="Timely Response" className="col7">
        <Row>
            <Col md={12} lg={6}>
                <div className="overflow-hidden">
                    <Image src={IMAGES.Track_Timely} className="w-100" alt="srtabs" />
                </div>
            </Col>
            <Col md={12} lg={6}>
                <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                    <div>
                        <h3>Timely Response and<br className="d-none d-md-block"/> Root Cause Analysis</h3>
                        <p className="pt-md-2">Alerts are analysed, categorised, and resolved within <br className="d-none d-md-block"/>defined SLAs, with comprehensive root cause tracking and documentation.</p>
                    </div>
                    <a href="#expert-driven" onClick={scrollToForm} className="sr-btn mt-4 d-inline-block" style={{ cursor: 'pointer' }}>
                        <span>Connect with us</span>
                    </a>
                </div>
            </Col>
        </Row>
    </Tab>
</Tabs>
        </Container>
    </div>


      <div className="grey pad80 pb-0 choose-wrapper">
      <Container>
        <h2 className="h4 text-center" data-aos="fade-up">Track & Trace Workflow</h2>

        <Row className="mt-4 mt-md-5 justify-content-center">
          
          {/* 1. Partner Onboarding */}
          <Col md={6} lg={3} className="mb-4">
            <div className="choose-box h-100">
              <div className="choose-icon text-center" data-aos="fade-up">
                {/* Icon: User Group / Add Partner */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={iconStyle}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                </svg>
              </div>
              <div className="choose-data" data-aos="fade-up">
                <h6>Partner Onboarding</h6>
                <p className="mb-0">End-to-end onboarding of new business partners (CMO, MAH, Distributor) for all markets implementing serialisation.</p>
              </div>
            </div>
          </Col>

          {/* 2. Country Compliance Support */}
          <Col md={6} lg={3} className="mb-4">
            <div className="choose-box h-100">
              <div className="choose-icon text-center" data-aos="fade-up">
                {/* Icon: Globe / World */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={iconStyle}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>
              <div className="choose-data" data-aos="fade-up">
                <h6>Country Compliance Support</h6>
                <p className="mb-0">Full support for multi-country regulatory compliance, including EUMDR, DSCSA, and other market-specific serialisation mandates.</p>
              </div>
            </div>
          </Col>

          {/* 3. Serialisation Vendor Selection */}
          <Col md={6} lg={3} className="mb-4">
            <div className="choose-box h-100">
              <div className="choose-icon text-center" data-aos="fade-up">
                {/* Icon: Magnifying Glass / Selection */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={iconStyle}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <div className="choose-data" data-aos="fade-up">
                <h6>Serialisation Vendor Selection Assessment</h6>
                <p className="mb-0">Assistance in vendor evaluation, requirement finalisation, procurement, and performance assessment to ensure optimal vendor alignment.</p>
              </div>
            </div>
          </Col>

          {/* 4. Alert Management */}
          <Col md={6} lg={3} className="mb-4">
            <div className="choose-box h-100">
              <div className="choose-icon text-center" data-aos="fade-up">
                {/* Icon: Bell / Alert */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={iconStyle}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                </svg>
              </div>
              <div className="choose-data" data-aos="fade-up">
                <h6>Alert Management & Resolution</h6>
                <p className="mb-0">Comprehensive management of EMVS/NMVS alerts to detect, categorise, and resolve potential falsified medicine issues promptly and compliantly.</p>
              </div>
            </div>
          </Col>

          {/* 5. SOP Development */}
          <Col md={6} lg={3} className="mb-4">
            <div className="choose-box h-100">
              <div className="choose-icon text-center" data-aos="fade-up">
                {/* Icon: Document / Clipboard */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={iconStyle}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <div className="choose-data" data-aos="fade-up">
                <h6>SOP Development</h6>
                <p className="mb-0">Preparation and implementation of detailed Serialisation Process SOPs and supporting documentation to ensure operational consistency.</p>
              </div>
            </div>
          </Col>

          {/* 6. Project Management */}
          <Col md={6} lg={3} className="mb-4">
            <div className="choose-box h-100">
              <div className="choose-icon text-center" data-aos="fade-up">
                {/* Icon: Briefcase / Strategy */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={iconStyle}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                </svg>
              </div>
              <div className="choose-data" data-aos="fade-up">
                <h6>Project Management & Consulting</h6>
                <p className="mb-0">Application of proven methodologies for governance, monitoring, cost control, and system optimisation throughout the project lifecycle.</p>
              </div>
            </div>
          </Col>

          {/* 7. Master Data Management */}
          <Col md={6} lg={3} className="mb-4">
            <div className="choose-box h-100">
              <div className="choose-icon text-center" data-aos="fade-up">
                {/* Icon: Database / Server */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={iconStyle}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                </svg>
              </div>
              <div className="choose-data" data-aos="fade-up">
                <h6>Master Data Management</h6>
                <p className="mb-0">Centralised framework to define, capture, transfer, and manage accurate data sets aligned with serialisation and compliance standards.</p>
              </div>
            </div>
          </Col>

          {/* 8. Level 4 System Configuration */}
          <Col md={6} lg={3} className="mb-4">
            <div className="choose-box h-100">
              <div className="choose-icon text-center" data-aos="fade-up">
                {/* Icon: Computer Chip / Configuration */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={iconStyle}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <div className="choose-data" data-aos="fade-up">
                <h6>Level 4 System Configuration</h6>
                <p className="mb-0">End-to-end guidance and technical support for TraceLink configuration and implementation.</p>
              </div>
            </div>
          </Col>

          {/* 9. Managed Services */}
          <Col md={6} lg={3} className="mb-4">
            <div className="choose-box h-100">
              <div className="choose-icon text-center" data-aos="fade-up">
                {/* Icon: Lifebuoy / Support */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={iconStyle}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.702.127 1.597.946 3.295 1.743 5.051 2.366 1.196.424 1.487 1.931.542 2.768L18.73 20.6m-4.254-2.852l4.896 4.896M10.74 8.93c.27.163.561.288.868.368 2.053.535 4.06.335 5.862-1.288 1.446-1.302 1.34-3.468-.13-4.792a18.36 18.36 0 00-6.108-3.047 1.41 1.41 0 00-1.746.852l-1.028 3.56M10.74 8.93l-4.39 5.333M7.5 20.25a2.25 2.25 0 002.25-2.25M7.5 20.25c-2.43 0-4.665-.96-6.3-2.543a2.25 2.25 0 013.106-3.078M7.5 20.25A17.96 17.96 0 0015 20.25" />
                </svg>
              </div>
              <div className="choose-data" data-aos="fade-up">
                <h6>Managed Services</h6>
                <p className="mb-0">Outsource serialisation maintenance functions to reduce costs, improve uptime, and ensure consistent compliance.</p>
              </div>
            </div>
          </Col>

          {/* 10. Testing and Validation */}
          <Col md={6} lg={3} className="mb-4">
            <div className="choose-box h-100">
              <div className="choose-icon text-center" data-aos="fade-up">
                {/* Icon: Clipboard Check / Validation */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={iconStyle}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
                </svg>
              </div>
              <div className="choose-data" data-aos="fade-up">
                <h6>Testing and Validation</h6>
                <p className="mb-0">Comprehensive validation plans, processes, and execution strategies to establish and maintain serialisation capabilities.</p>
              </div>
            </div>
          </Col>

        </Row>
      </Container>
    </div>

    

 {/* <NextPage 
              heading={<>Clinical <span>Operations</span></>}
              para="Delivering comprehensive clinical solutions with scientific expertise, regulatory compliance, and operational excellence."
              link="/services/clinical-operations"
              image={IMAGES.CLINICALOPERATIONS} 
            /> */}

    <div className="pad80 grey discover-from" id="expert-driven">
               <Container>
                   <h2 className="h4 text-center"  data-aos="fade-up">EXPERT-DRIVEN PHARMACOVIGILANCE <span>SOLUTIONS FOR GLOBAL SAFETY</span></h2>
   
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