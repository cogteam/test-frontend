"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
// import Header from "@/components/Header/page";
// import Footer from "@/components/Footer/page";
import Commonfrom from "@/components/Productfrom/Commonfrom/page";
import { IMAGES } from "@/assets/images/index.js"; 

export default function HumanCapitalDigitisationClient() {

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
    color: '#ffffff', // Replace with your brand color
  };

  return (
   <>
   {/* <Header/> */}

    <div className='inner-head inner-head-products product-wrapper human-capital-digitisation-banner'>
            <div className="banner-inner">
                <Container className='d-flex align-items-center h-100 '>
                <div>
                <h1 className='h4 text-white' data-aos="fade-up">Human Capital <br/> <span>Digitisation  </span></h1>
                    <p data-aos="fade-up" className=" col-md-7 text-white"> Designed to empower organisations through next-generation digital HR transformation, integrating intelligence, automation, and analytics to optimise processes, enhance employee experience, and drive business agility across the human capital value chain.
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
                        <Image src={IMAGES.EndtoEnd1} className="ComplexRegulations" alt="" />
                         <Image src={IMAGES.EndtoEnd}  className="white-icon" alt="" />
                        <h6>End-to-End Digital Transformation</h6>
                        <p>Comprehensive digitisation of HR functions from employee data management and onboarding to performance, payroll, and analytics, driven by advanced platforms like Darwinbox and Microsoft integrations.</p>
                    </div>
                </Col>
                
                <Col md={6} lg={4} className="mb-dflex mt-2 mt-md-0">
                    <div className="challenges-box h-100" data-aos="fade-up">
                        <Image src={IMAGES.Intelligent1} className="ComplexRegulations" alt="" />
                         <Image src={IMAGES.Intelligent}  className="white-icon" alt="" />
                        <h6>Intelligent Workforce Management</h6>
                        <p> Mobile-first and AI-powered solutions enabling data-driven decisions, seamless workflows, and enhanced employee engagement across geographies.</p>
                    </div>                   
                </Col>

                 <Col md={6} lg={4} className="mb-dflex mt-2 mt-md-0">
                    <div className="challenges-box h-100" data-aos="fade-up">
                        <Image src={IMAGES.Customised1} className="ComplexRegulations" alt="" />
                         <Image src={IMAGES.Customised}  className="white-icon" alt="" />
                        <h6>Customised HR Technology Solutions</h6>
                        <p>Advisory, implementation, and integration services tailored to each organisation’s structure, industry, and scalability needs.</p>
                    </div>
                </Col>
                
                <Col md={6} lg={4} className="mb-dflex mt-2 mt-md-4">
                    <div className="challenges-box h-100" data-aos="fade-up">
                        <Image src={IMAGES.Operational11} className="ComplexRegulations" alt="" />
                         <Image src={IMAGES.Operational1}  className="white-icon" alt="" />
                        <h6>Operational Excellence & Compliance</h6>
                        <p>Digitised HR processes ensure transparency, accuracy, and regulatory alignment, reducing administrative burden and operational risk.</p>
                    </div>                   
                </Col>

                 <Col md={6} lg={4} className="mb-dflex mt-2 mt-md-4">
                    <div className="challenges-box h-100" data-aos="fade-up">
                        <Image src={IMAGES.Unified1} className="ComplexRegulations" alt="" />
                         <Image src={IMAGES.Unified}  className="white-icon" alt="" />
                        <h6>Unified Experience</h6>
                        <p> Delivering a seamless, people-first digital ecosystem that connects employees, HR, and leadership for real-time collaboration and visibility.</p>
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
                <Tab eventKey="vms" title="Employee Data " className="cl7">
                        <div className="sr-tabs-dtls">
                            <Row>
                                <Col md={12} lg={6}>
                                    <div className="overflow-hidden">
                                        <Image src={IMAGES.Employee_Data_Management} className="w-100" alt="srtabs" />
                                    </div>
                                </Col>
                                <Col md={12} lg={6}>
                                    <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                                        <div>
                                            <h3>Employee Data<br className="d-none d-md-block"/> Management</h3>
                                        <p className="pt-md-2">Digitise and centralise employee data, organisational <br className="d-none d-md-block"/>structures, HR workflows, and workforce planning<br className="d-none d-md-block"/> through secure, scalable platforms.</p>                            
                                        </div>   
                                        <a href="#expert-driven" onClick={scrollToForm} className="sr-btn mt-4 d-inline-block" style={{cursor: 'pointer'}}>
                                            <span>Connect with us</span>
                                        </a>            
                                    </div>
                                </Col>
                            </Row>
                        </div>
                </Tab>

                <Tab eventKey="dms" title="Compensation & Finances" className="cl7">
                      <Row>
                                <Col md={12} lg={6}>
                                    <div className="overflow-hidden">
                                        <Image src={IMAGES.Operations_Compensation_And_Finances} className="w-100" alt="srtabs" />
                                    </div>
                                </Col>
                                <Col md={12} lg={6}>                                    
                                    <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                                        <div>
                                            <h3>Operations, Compensation <br className="d-none d-md-block"/> & Finances</h3>
                                        <p className="pt-md-2"> Automate attendance, leave management, payroll,<br className="d-none d-md-block"/> expense tracking, and helpdesk operations for improved <br className="d-none d-md-block"/>efficiency and accuracy.</p> 
                                        </div>   
                                        <a href="#expert-driven" onClick={scrollToForm} className="sr-btn mt-4 d-inline-block" style={{cursor: 'pointer'}}>
                                            <span>Connect with us</span>
                                        </a>            
                                    </div>
                                </Col>
                            </Row>
                </Tab>

                <Tab eventKey="tms" title="Talent Acquisition "  className="cl7">
                     <Row>
                                <Col md={12} lg={6}>
                                    <div className="overflow-hidden">
                                        <Image src={IMAGES.Talent_Acquisition_And_Development} className="w-100" alt="srtabs" />
                                    </div>
                                </Col>
                                <Col md={12} lg={6}>                                    
                                    <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                                        <div>
                                             <h3>Talent Acquisition <br className="d-none d-md-block"/> & Development</h3>
                                        <p className="pt-md-2"> Streamline recruitment, onboarding, performance <br className="d-none d-md-block"/>appraisals, skill development, and rewards programs to foster<br className="d-none d-md-block"/> a culture of continuous growth.</p>                       
                                        </div>   
                                        <a href="#expert-driven" onClick={scrollToForm} className="sr-btn mt-4 d-inline-block" style={{cursor: 'pointer'}}>
                                            <span>Connect with us</span>
                                        </a>            
                                    </div>
                                </Col>
                            </Row>
                </Tab>

                <Tab eventKey="rm" title="Digital HR Advisory"  className="cl7">
                    <Row>
                                <Col md={12} lg={6}>
                                    <div className="overflow-hidden">
                                        <Image src={IMAGES.Digital_Hr_Advisory_And_Implementation} className="w-100" alt="srtabs" />
                                    </div>
                                </Col>
                                <Col md={12} lg={6}>
                                    <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                                        <div>
                                             <h3>Digital HR Advisory <br className="d-none d-md-block"/> & Implementation</h3>
                                        <p className="pt-md-2"> Adopt and deploy digital platforms like Darwinbox<br className="d-none d-md-block"/> with expert consulting, CoE-led implementation, and <br className="d-none d-md-block"/>cross-system integration.</p>                          
                                        </div>   
                                        <a href="#expert-driven" onClick={scrollToForm} className="sr-btn mt-4 d-inline-block" style={{cursor: 'pointer'}}>
                                            <span>Connect with us</span>
                                        </a>            
                                    </div>
                                </Col>
                            </Row>
                </Tab>

                <Tab eventKey="pv" title="System Integration" className="cl7">
                     <Row>
                                <Col md={12} lg={6}>
                                    <div className="overflow-hidden">
                                        <Image src={IMAGES.System_Integration_And_Customisation} className="w-100" alt="srtabs" />
                                    </div>
                                </Col>
                                <Col md={12} lg={6}>                                  
                                    <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                                        <div>
                                             <h3>System Integration<br className="d-none d-md-block"/> & Customisation</h3>
                                        <p className="pt-md-2"> Integrate HR tools with payroll, ERP, and attendance <br className="d-none d-md-block"/>systems for unified operations, supported by in-house capability<br className="d-none d-md-block"/> centres and certified consultants.</p>                
                                        </div>   
                                        <a href="#expert-driven" onClick={scrollToForm} className="sr-btn mt-4 d-inline-block" style={{cursor: 'pointer'}}>
                                            <span>Connect with us</span>
                                        </a>            
                                    </div>
                                </Col>
                            </Row>
                </Tab>

                <Tab eventKey="sd" title="Change Management"  className="cl7">
                     <Row>
                                <Col md={12} lg={6}>
                                    <div className="overflow-hidden">
                                        <Image src={IMAGES.Change_And_Adoption_Management} className="w-100" alt="srtabs" />
                                    </div>
                                </Col>
                                <Col md={12} lg={6}>
                                    <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                                        <div>
                                            <h3>Change & Adoption<br className="d-none d-md-block"/> Management</h3>
                                        <p className="pt-md-2"> Enable seamless digital adoption through HR CoE <br className="d-none d-md-block"/> frameworks, policy alignment, and targeted user <br className="d-none d-md-block"/>training initiatives.</p>               
                                        </div>   
                                        <a href="#expert-driven" onClick={scrollToForm} className="sr-btn mt-4 d-inline-block" style={{cursor: 'pointer'}}>
                                            <span>Connect with us</span>
                                        </a>            
                                    </div>
                                </Col>
                            </Row>
                </Tab>

                <Tab eventKey="sms" title="Support & Maintenance"  className="cl7">
                     <Row>
                                <Col md={12} lg={6}>
                                    <div className="overflow-hidden">
                                        <Image src={IMAGES.Support_And_Maintenance_Services} className="w-100" alt="srtabs" />
                                    </div>
                                </Col>
                                <Col md={12} lg={6}>
                                    <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                                        <div>
                                            <h3>Support & Maintenance <br className="d-none d-md-block"/> Services</h3>
                                        <p className="pt-md-2">  Ensure long-term system stability through proactive<br className="d-none d-md-block"/> monitoring, query resolution, and ongoing technical support.</p>             
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



    <div className="grey pad80 choose-wrapper">
      <Container>
        <h2 className="h4 text-center" data-aos="fade-up">Key Differentiators</h2>

        <Row className="mt-4 mt-md-5 justify-content-center">
          
          {/* 1. Technology & Scalability */}
          <Col md={6} lg={4} className="mb-4">
            <div className="choose-box h-100">
              <div className="choose-icon text-center" data-aos="fade-up">
                {/* Icon: Mobile Device / Chip (AI) */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={iconStyle}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              </div>
              <div className="choose-data" data-aos="fade-up">
                
                <p className="mb-0">Mobile-first, AI-powered HR platforms built for global and regional scalability.</p>
              </div>
            </div>
          </Col>

          {/* 2. Global Workforce Support */}
          <Col md={6} lg={4} className="mb-4">
            <div className="choose-box h-100">
              <div className="choose-icon text-center" data-aos="fade-up">
                {/* Icon: Users / Globe */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={iconStyle}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              </div>
              <div className="choose-data" data-aos="fade-up">
                
                <p className="mb-0">Proven expertise supporting 6,000+ employees in India and 400+ across the UK & USA.</p>
              </div>
            </div>
          </Col>

          {/* 3. Implementation Experience */}
          <Col md={6} lg={4} className="mb-4">
            <div className="choose-box h-100">
              <div className="choose-icon text-center" data-aos="fade-up">
                {/* Icon: Clock / History */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={iconStyle}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="choose-data" data-aos="fade-up">
                
                <p className="mb-0">Over 5 years of implementation experience with 10+ clients globally.</p>
              </div>
            </div>
          </Col>

          {/* 4. Certified Consultants */}
          <Col md={6} lg={4} className="mb-4">
            <div className="choose-box h-100">
              <div className="choose-icon text-center" data-aos="fade-up">
                {/* Icon: Badge / Certificate */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={iconStyle}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <div className="choose-data" data-aos="fade-up">
               
                <p className="mb-0">Certified Darwinbox consultants and integration architects.</p>
              </div>
            </div>
          </Col>

          {/* 5. Transformation Delivery */}
          <Col md={6} lg={4} className="mb-4">
            <div className="choose-box h-100">
              <div className="choose-icon text-center" data-aos="fade-up">
                {/* Icon: Clipboard / Strategy */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={iconStyle}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <div className="choose-data" data-aos="fade-up">
                
                <p className="mb-0">Strong project management and transformation delivery capabilities.</p>
              </div>
            </div>
          </Col>

          {/* 6. Domain Expertise */}
          <Col md={6} lg={4} className="mb-4">
            <div className="choose-box h-100">
              <div className="choose-icon text-center" data-aos="fade-up">
                {/* Icon: Building / Factory / Pharma */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={iconStyle}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                </svg>
              </div>
              <div className="choose-data" data-aos="fade-up">
               
                <p className="mb-0">Deep domain expertise in manufacturing and pharmaceutical organisations.</p>
              </div>
            </div>
          </Col>

        </Row>
      </Container>
    </div>

    <div className="grey2 pad80 ai-hcm">
      <Container>
         <h2 className="h4 text-center" data-aos="fade-up">Revolutionizing Human Capital<br/>  <span>with AI-Powered HCM</span></h2>

        <div className="col-9 text-center m-auto">
             <p>Human Capital Management is evolving into a powerful driver of growth — defined by seamless experiences, intelligent insights, and organizational agility. Together with Darwinbox, we are transforming how organizations attract, engage, develop, and retain talent through an AI-powered HCM platform built for the modern workforce.</p>
         <p>At the heart of this transformation is a next-generation HR ecosystem that blends deep automation with predictive intelligence. From smart hiring and seamless onboarding to performance management, payroll, workforce analytics, and employee engagement — every touchpoint is unified, intuitive, and insight-driven.</p>

          <a href="#expert-driven" onClick={scrollToForm} className="sr-btn mt-4 d-inline-block" style={{cursor: 'pointer'}}>
                                            <span>Know More</span>
                                        </a>   

        </div>
      </Container>
</div>

    <div className="pad80 grey discover-from" id="expert-driven">
               <Container>
                   <h2 className="h4 text-center"  data-aos="fade-up">Transform HR Through <br/> <span>Intelligent Digitisation</span>
</h2>
   
                   <Row className="mt-5">
                       <Col md={12} lg={6}>
                           <Image src={IMAGES.human_D} alt="fromimg" className="w-100 h-100 pe-5"  data-aos="fade-up" />
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