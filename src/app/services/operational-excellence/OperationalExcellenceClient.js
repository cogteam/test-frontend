"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
// import Aos from "aos";
// import Header from "@/components/Header/page";
// import Footer from "@/components/Footer/page";
import Commonfrom from "@/components/Productfrom/Commonfrom/page";

import { IMAGES } from "@/assets/images/index.js"; 
import NextPage from "@/components/NextPage/page";
import DetectPharmaIQbanner from "../../../assets/images/services/Global-Pharmacovigilanc.webp";


export default function OperationalExcellenceClient() {

//    useEffect(() => {
//       Aos.init({
//         duration: 1000, // animation duration
//         once: true,     // run animation only once
//       });
//     }, []);

const iconStyle = {
    width: '60px',
    height: '60px',
    color: '#ffffff', // Change this to your brand color (e.g., #primary)
  };


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

     <div className='inner-head inner-head-products product-wrapper operational-excellence-banner'>
                <div className="banner-inner">
                    <Container className='d-flex align-items-center h-100 '>
                    <div>
                    <h1 className='h4' data-aos="fade-up">Operational <span>Excellence
    </span></h1>
                        <p data-aos="fade-up" className=" col-md-8">Pivot Path’s Manufacturing Excellence Partner program drives transformation across global manufacturing and R&D sites, combining lean principles with 400+ experts and 20+ years of experience to improve productivity, reduce waste, and enable sustainable growth through technology and innovation.
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
                        <Image src={IMAGES.OpEx_Excellence} className="ComplexRegulations" alt="" />
                        <Image src={IMAGES.OpEx_Operationalicon} className="white-icon" alt="" />
                        <h6>Operational Excellence</h6>
                        <p> Decades of experience implementing Lean tools and methodologies that enhance productivity, reduce waste, and standardise processes.</p>
                    </div>
                </Col>
                
                <Col md={6} lg={4} className="mb-dflex mt-2 mt-md-0">
                    <div className="challenges-box h-100" data-aos="fade-up">
                        <Image src={IMAGES.OpEx_Continuous} className="ComplexRegulations" alt="" />
                         <Image src={IMAGES.OpEx_Continuousicon} className="white-icon" alt="" />
                        <h6>Continuous Improvement Culture</h6>
                        <p>Empowering teams through structured programs—5S, GEMBA, Ideation, and Daily Huddles, to foster engagement, accountability, and creativity.</p>
                    </div>                   
                </Col>

                 <Col md={6} lg={4} className="mb-dflex mt-2 mt-md-0">
                    <div className="challenges-box h-100" data-aos="fade-up">
                        <Image src={IMAGES.OpEx_Sustainability} className="ComplexRegulations" alt="" />
                           <Image src={IMAGES.OpEx_Sustainabilityicon} className="white-icon" alt="" />
                        <h6>Sustainability Leadership</h6>
                        <p>Comprehensive energy management and renewable transition projects that align with ESG goals, recognised with SEEM National Energy Management Awards.</p>
                    </div>
                </Col>
                
                <Col md={6} lg={4} className="mb-dflex mt-2 mt-md-4">
                    <div className="challenges-box h-100" data-aos="fade-up">
                        <Image src={IMAGES.OpEx_DigitalTransformation} className="ComplexRegulations" alt="" />
                        <Image src={IMAGES.OpEx_Digitalicon} className="white-icon" alt="" />
                        <h6>Digital Transformation</h6>
                        <p> Adoption of advanced analytics, dashboards, and the GEMBA application to improve visibility, identify root causes, and ensure consistent improvement.</p>
                    </div>                   
                </Col>

                 <Col md={6} lg={4} className="mb-dflex mt-2 mt-md-4">
                    <div className="challenges-box h-100" data-aos="fade-up">
                        <Image src={IMAGES.OpEx_CapabilityBuilding} className="ComplexRegulations" alt="" />
                         <Image src={IMAGES.OpEx_Capabilityicon} className="white-icon" alt="" />
                        <h6>Capability Building</h6>
                        <p>Training 1800+ employees and creating 900+ 5S champions across 650+ zones to drive self-sustained operational efficiency across manufacturing and R&D sites.</p>
                    </div>
                </Col>
                
                <Col md={6} lg={4} className="mb-dflex mt-2 mt-md-4">
                    <div className="challenges-box h-100" data-aos="fade-up">
                        <Image src={IMAGES.OpEx_Regulatory} className="ComplexRegulations" alt="" />
                        <Image src={IMAGES.OpEx_Regulatoryicon} className="white-icon" alt="" />
                        <h6>Regulatory and Quality Focus</h6>
                        <p>Supporting manufacturing units through critical audits, including USFDA, TGA, and WHO, while maintaining the highest global compliance standards.</p>
                    </div>                   
                </Col>
            </Row>
        </Container>
    </div>

    <div className="grey2 pad80 sr-services">
        <Container>
            <h2 className="h4 text-center" data-aos="fade-up">Our Services</h2>
            <p className="text-center mb-4 mb-md-5" data-aos="fade-up">Expert-driven manufacturing excellence solutions that transform processes,<br/>  enhance performance, and ensure sustainable growth.</p>

<div className="tab-scroll">
           <Tabs
    id="controlled-tab-example"
    activeKey={key}
    onSelect={(k) => setKey(k)}
    className="mb-3 justify-content-center border-0 sr-tabs sr-tabs-services-tabs"
>
    <Tab className="col7" eventKey="vms" title="Lean Foundation Programs">
        <div className="sr-tabs-dtls">
            <Row>
                <Col md={12} lg={6}>
                    <div className="overflow-hidden">
                        <Image src={IMAGES.OpEx_Lean} className="w-100" alt="srtabs" />
                    </div>
                </Col>
                <Col md={12} lg={6}>
                    <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                        <div>
                            <h3>Lean Foundation Programs</h3>
                            <p className="pt-md-2"> Implementation of 5S, GEMBA, Daily Huddle, and Ideation frameworks to organise shop floors, improve safety, and ensure “all-time readiness” for audits.</p>
                        </div>
                        <a href="#expert-driven" onClick={scrollToForm} className="sr-btn mt-4 d-inline-block" style={{ cursor: 'pointer' }}>
                            <span>Connect with us</span>
                        </a>
                    </div>
                </Col>
            </Row>
        </div>
    </Tab>

    <Tab className="col7" eventKey="dms" title="Operational Excellence Consulting">
        <Row>
            <Col md={12} lg={6}>
                <div className="overflow-hidden">
                    <Image src={IMAGES.OpEx_Operational} className="w-100" alt="srtabs" />
                </div>
            </Col>
            <Col md={12} lg={6}>
                <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                    <div>
                        <h3>Operational Excellence Consulting</h3>
                        <p className="pt-md-2">Deployment of the 20 Keys to Workplace Improvement Model-a structured, step-by-step framework for efficiency and business effectiveness.</p>
                    </div>
                    <a href="#expert-driven" onClick={scrollToForm} className="sr-btn mt-4 d-inline-block" style={{ cursor: 'pointer' }}>
                        <span>Connect with us</span>
                    </a>
                </div>
            </Col>
        </Row>
    </Tab>

    <Tab className="col7" eventKey="tms" title="Energy & Sustainability Projects">
        <Row>
            <Col md={12} lg={6}>
                <div className="overflow-hidden">
                    <Image src={IMAGES.OpEx_Energy} className="w-100" alt="srtabs" />
                </div>
            </Col>
            <Col md={12} lg={6}>
                <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                    <div>
                        <h3>Energy & Sustainability Projects</h3>
                        <p className="pt-md-2">Execution of renewable energy solutions through CAPEX, OPEX, BOOT, and Group Captive models—delivering ₹10+ crore in annual savings and long-term impact.</p>
                    </div>
                    <a href="#expert-driven" onClick={scrollToForm} className="sr-btn mt-4 d-inline-block" style={{ cursor: 'pointer' }}>
                        <span>Connect with us</span>
                    </a>
                </div>
            </Col>
        </Row>
    </Tab>

    <Tab className="col7" eventKey="rm" title="Process Optimization">
        <Row>
            <Col md={12} lg={6}>
                <div className="overflow-hidden">
                    <Image src={IMAGES.OpEx_Process} className="w-100" alt="srtabs" />
                </div>
            </Col>
            <Col md={12} lg={6}>
                <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                    <div>
                        <h3>Process Optimization & Audits</h3>
                        <p className="pt-md-2">Data-driven analysis to enhance machine efficiency, product quality, and safety while reducing downtime and hazardous work conditions.</p>
                    </div>
                    <a href="#expert-driven" onClick={scrollToForm} className="sr-btn mt-4 d-inline-block" style={{ cursor: 'pointer' }}>
                        <span>Connect with us</span>
                    </a>
                </div>
            </Col>
        </Row>
    </Tab>

    <Tab className="col7" eventKey="pv" title="Digital Shop Floor Enablement">
        <Row>
            <Col md={12} lg={6}>
                <div className="overflow-hidden">
                    <Image src={IMAGES.OpEx_Digital} className="w-100" alt="srtabs" />
                </div>
            </Col>
            <Col md={12} lg={6}>
                <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                    <div>
                        <h3>Digital Shop Floor Enablement</h3>
                        <p className="pt-md-2"> Real-time dashboards and digital applications to streamline communication, track KPIs, and empower decision-making at every level.</p>
                    </div>
                    <a href="#expert-driven" onClick={scrollToForm} className="sr-btn mt-4 d-inline-block" style={{ cursor: 'pointer' }}>
                        <span>Connect with us</span>
                    </a>
                </div>
            </Col>
        </Row>
    </Tab>

    <Tab className="col7" eventKey="sd" title="Employee Engagement">
        <Row>
            <Col md={12} lg={6}>
                <div className="overflow-hidden">
                    <Image src={IMAGES.OpEx_Employee} className="w-100" alt="srtabs" />
                </div>
            </Col>
            <Col md={12} lg={6}>
                <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                    <div>
                        <h3>Employee Engagement & Ideation</h3>
                        <p className="pt-md-2"> Structured programs that have generated 2900+ improvement ideas and ₹19.2 crore in cost avoidance—driving innovation from the ground up.</p>
                    </div>
                    <a href="#expert-driven" onClick={scrollToForm} className="sr-btn mt-4 d-inline-block" style={{ cursor: 'pointer' }}>
                        <span>Connect with us</span>
                    </a>
                </div>
            </Col>
        </Row>
    </Tab>

    <Tab className="col7" eventKey="psmf" title="Capability Development">
        <Row>
            <Col md={12} lg={6}>
                <div className="overflow-hidden">
                    <Image src={IMAGES.OpEx_Capability} className="w-100" alt="srtabs" />
                </div>
            </Col>
            <Col md={12} lg={6}>
                <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                    <div>
                        <h3>Capability & Leadership Development</h3>
                        <p className="pt-md-2">Customised Lean and Six Sigma training programs that instil ownership and operational discipline across all teams.</p>
                    </div>
                    <a href="#expert-driven" onClick={scrollToForm} className="sr-btn mt-4 d-inline-block" style={{ cursor: 'pointer' }}>
                        <span>Connect with us</span>
                    </a>
                </div>
            </Col>
        </Row>
    </Tab>
</Tabs>
                </div>
        </Container>
    </div>


      <div className="grey pad80 choose-wrapper">
      <Container>
        {/* <h2 className="h4 text-center" data-aos="fade-up">Operational Excellence Flow</h2> */}
         <h2 className="h4 text-center" data-aos="fade-up">Driving Excellence: Our Offerings </h2>

        <Row className="mt-4 mt-md-5 justify-content-center">
          
          {/* 1. Diagnostic & Assessment Phase */}
          <Col md={6} lg={4} className="mb-4">
            <div className="choose-box">
              <div className="choose-icon text-center" data-aos="fade-up">
                {/* Icon: Clipboard Check */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  style={iconStyle}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <div className="choose-data" data-aos="fade-up">
                <h6>Diagnostic & Assessment Phase</h6>
                <p className="mb-0">
                  Comprehensive site visits and preliminary evaluations to identify current maturity levels, operational gaps, and key focus areas.
                </p>
              </div>
            </div>
          </Col>

          {/* 2. Foundation Building */}
          <Col md={6} lg={4} className="mb-4">
            <div className="choose-box">
              <div className="choose-icon text-center" data-aos="fade-up">
                {/* Icon: Building Blocks / Layers */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  style={iconStyle}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                </svg>
              </div>
              <div className="choose-data" data-aos="fade-up">
                <h6>Foundation Building</h6>
                <p className="mb-0">
                  Implementation of 5S, Visual Factory, and other Lean foundation tools to stabilise operations and build an organised, safe, and efficient environment.
                </p>
              </div>
            </div>
          </Col>

          {/* 3. Transformation Projects */}
          <Col md={6} lg={4} className="mb-4">
            <div className="choose-box">
              <div className="choose-icon text-center" data-aos="fade-up">
                {/* Icon: Gears / Settings */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  style={iconStyle}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="choose-data" data-aos="fade-up">
                <h6 data-aos="fade-up">Transformation Projects</h6>
                <p data-aos="fade-up" className="mb-0">
                  Execution of the 20 Keys improvement initiatives over 12–15 months—covering safety, quality, productivity, and morale enhancement.
                </p>
              </div>
            </div>
          </Col>

          {/* 4. Digital Integration */}
          <Col md={6} lg={4} className="mb-4">
            <div className="choose-box">
              <div className="choose-icon text-center" data-aos="fade-up">
                {/* Icon: Computer Desktop / Graph */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  style={iconStyle}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <div className="choose-data" data-aos="fade-up">
                <h6 data-aos="fade-up">Digital Integration</h6>
                <p data-aos="fade-up" className="mb-0">
                  Use of technology such as the GEMBA app and analytical dashboards to strengthen communication and ensure transparent performance monitoring.
                </p>
              </div>
            </div>
          </Col>

          {/* 5. Continuous Improvement */}
          <Col md={6} lg={4} className="mb-0 mb-md-4">
            <div className="choose-box">
              <div className="choose-icon text-center" data-aos="fade-up">
                {/* Icon: Cycle / Refresh / Infinity */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  style={iconStyle}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
              </div>
              <div className="choose-data" data-aos="fade-up">
                <h6 data-aos="fade-up">Continuous Improvement & Recognition</h6>
                <p data-aos="fade-up" className="mb-0">
                  Sustained ideation, employee feedback, and recognition programs ensure long-term improvement, innovation, and employee motivation.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>


      {/* <NextPage 
                  heading={<>Smarter CSV, 
           <span> Powered by NoteIQ
          </span></>}
                  para="Pivot Path's NoteIQ, the next generation compliance platform, streamlines the entire CSV lifecycle from URS to PQ by automating validation workflows, documentation, and approvals, ensuring accuracy, traceability, and continuous audit readiness. By unifying validation, document control, and training within a single secure cloud native platform, NoteIQ reduces manual effort, minimises compliance risk, and enables teams to scale confidently while meeting global regulatory standards such as 21 CFR Part 11 and Annex 11."
                  link="/products/noteiq"
                  image={IMAGES.NOTEIQBANNER} 
                /> */}

    <div className="pad80 grey discover-from" id="expert-driven">
               <Container>
                   <h2 className="h4 text-center"  data-aos="fade-up">Drive Sustainable <br/>
<span> Manufacturing Excellence</span></h2>
   
                   <Row className="mt-5">
                       <Col md={12} lg={6}>
                           <Image src={IMAGES.Operational_f} alt="fromimg" className="w-100 h-100 pe-5"  data-aos="fade-up" />
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