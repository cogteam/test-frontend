"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import Slider from "react-slick";
// import Header from "@/components/Header/page";
// import Footer from "@/components/Footer/page";
import Bloghomepage from "@/app/blogshomepage/page";
import Commonfrom from "@/components/Productfrom/Commonfrom/page";
import { IMAGES } from "@/assets/images/index.js"; 

export default function NoteIQClient() {

  const [key, setKey] = useState('vms');

  var settings = {
   dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
     
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
   <>
   {/* <Header/> */}

     <div className={`inner-head inner-head-products product-wrapper noteiqbanner`}>
            <div className="banner-inner">
                <Container className='d-flex align-items-center h-100 '>
                <div>
                    <Image src={IMAGES.NOTEIQLOGO} className="" alt="noteiq"/>
                <h1 className='h4 text-white'>INTEGRATED GXP <br /><span>PLATFORM</span></h1>
                    <p className="col-md-7 mb-0 text-white">Reimagining compliance for life sciences with a next-gen platform that delivers precision, efficiency, and productivity.</p>
                </div>
            </Container>
            </div>
        </div>

    <div className="grey pad80">
        <Container>
            <h2 className="h4 text-center" data-aos="fade-up"> COMPLIANCE MADE SIMPLER</h2>
            <p data-aos="fade-up" className="text-center">Get a unified platform for validation, documentation, and training, built for <br />modern life sciences organisations.</p>

            <Row className="mt-4 mt-md-5">
                <Col md={6} lg={3}>
                    <div className="compliance-box" data-aos="fade-up">
                        <p className="head">Agile Deployment, Integration & Scalability</p>
                        <Image src={IMAGES.NoteIQ_Agile} alt="agile" className="" />
                        <div className="compliance-hover">
                            <p className="compliance-p">Deploy faster, connect effortlessly, and scale without limits.</p>
                            <Image src={IMAGES.NoteIQ_AgileWhite} alt="agile" className="" />
                        </div>
                    </div>
                </Col>
                <Col md={6} lg={3}>
                    <div className="compliance-box" data-aos="fade-up">
                        <p className="head">Automated Validation & Document Lifecycle Suite</p>
                        <Image src={IMAGES.NoteIQ_AutomatedVal} alt="agile" className="" />
                        <div className="compliance-hover">
                            <p className="compliance-p">Compliance made easy with smart automation from start to finish.</p>
                            <Image src={IMAGES.NoteIQ_AutomatedWhite} alt="agile" className="" />
                        </div>
                    </div>
                </Col>
                <Col md={6} lg={3}>
                    <div className="compliance-box" data-aos="fade-up">
                        <p className="head">Life Science Regulatory Excellence</p>
                        <Image src={IMAGES.NoteIQ_Life} alt="agile" className="" />
                        <div className="compliance-hover">
                            <p className="compliance-p">Always audit-ready, meeting global life sciences standards with confidence.</p>
                            <Image src={IMAGES.NoteIQ_LifeWhite} alt="agile" className="" />
                        </div>
                    </div>
                </Col>
                <Col md={6} lg={3}>
                    <div className="compliance-box" data-aos="fade-up">
                        <p className="head">Engineered with Cutting Edge Technology</p>
                        <Image src={IMAGES.NoteIQ_Engineered} alt="agile" className="" />
                        <div className="compliance-hover">
                            <p className="compliance-p">Powered by next-gen tech for speed, reliability, and innovation.</p>
                            <Image src={IMAGES.NoteIQ_EngineeredWhite} alt="agile" className="" />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>

    <div className="grey challenges-wrapper">
        <Container>
            <h2 className="h4 text-center" data-aos="fade-up"> CHALLENGES IN LIFE <br />SCIENCES COMPLIANCE</h2>
            <p data-aos="fade-up" className="text-center col-7 m-auto">Life sciences teams face growing operational, regulatory, and technological pressures. Managing complex data, staying updated with evolving regulations, and relying on manual or fragmented systems make compliance slow, error-prone, and difficult to scale. These challenges impact efficiency, quality, and overall operational excellence.</p>

            <Row className="mt-4 mt-md-5">
                <Col md={12} lg={4} className="mb-dflex">
                    <div className="challenges-box" data-aos="fade-up">
                        <Image src={IMAGES.NoteIQ_ComplexRegulations} className="ComplexRegulations" alt="" />
                        <h6>Complex Regulations</h6>
                        <p className="mb-0">Compliance with multiple GxP standards, FDA, EMA, and global regulatory bodies.</p>
                    </div>
                    <div className="challenges-box" data-aos="fade-up">
                        <Image src={IMAGES.NoteIQ_Operational} className="ComplexRegulations" alt="" />
                        <h6>Operational Delays & Risks</h6>
                        <p className="mb-0">Manual workflows slow validation, increase errors, and risk audit failures.</p>
                    </div>
                </Col>
                <Col md={12} lg={4}>
                    <div className="challenges-box challenges-box2 p-0 border-0" data-aos="fade-up">
                       <Image src={IMAGES.NoteIQ_ChallengesImg} alt="challenges" className="w-100 mb-0" />
                    </div>
                </Col>

                <Col md={12} lg={4} className="mb-dflex">
                    <div className="challenges-box" data-aos="fade-up">
                        <Image src={IMAGES.NoteIQ_Manual} className="ComplexRegulations" alt="" />
                        <h6>Manual Documentation</h6>
                        <p className="mb-0">Time-consuming, prone to errors, and difficult to audit.</p>
                    </div>
                    <div className="challenges-box" data-aos="fade-up">
                        <Image src={IMAGES.NoteIQ_Fragmented} className="ComplexRegulations" alt="" />
                        <h6>Fragmented Systems</h6>
                        <p className="mb-0">Disconnected tools make collaboration difficult and data scattered.</p>
                    </div>
                </Col>

                <Col md={12}>
                    <p className="text-center mt-4 mb-0" data-aos="fade-up"><b>Impact:</b> Teams struggle with inefficiency, higher operational costs, and increased risk of non-compliance.</p>
                </Col>
            </Row>
        </Container>
    </div>

     <div className="grey pad80 challenges-wrapper">
        <Container>
            <h2 className="h4 text-center" data-aos="fade-up">ENHANCING <br />REGULATORY PROCESSES </h2>
            <p data-aos="fade-up" className="text-center col-7 m-auto"> NoteIQ simplifies even the most complex compliance processes by converting them into streamlined, automated workflows. With robust tracking, secure document control, and centralised management, organisations can ensure accuracy, reduce errors, and maintain full regulatory compliance with ease.</p>
        </Container>
    </div>

    <div className="grey2 pad80 vms-wrapper">
        <Container>
           <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3 justify-content-center border-0"
                >
                <Tab eventKey="vms" title="VALIDATION MANAGEMENT SYSTEM">
                        <div className="vms-tab mt-5">
                            <h3 className="h5 text-center">VALIDATION MANAGEMENT SYSTEM</h3>
                            <p className="text-center">Manual and error-prone validation processes can slow operations. NoteIQ VMS streamlines <br/> and automates each step, ensuring compliance is efficient, accurate, and seamless.</p>

                            <div className="grey3">
                                <h4 className="text-center mb-4 mb-md-5">KEY FEATURES</h4>
                                <Row>
                                    <Col lg={4} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.NoteIQ_Digitised} className="Digitised" alt="" />
                                            <h6>Digitised Validation Life Cycle</h6>
                                            <p className="mb-0">Automates and standardises processes from URS to PQ.</p>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.NoteIQ_CustomFramework} className="Digitised" alt="" />
                                            <h6>Custom Framework Management</h6>
                                            <p className="mb-0">Tailor workflows, rules, and policies to organisational needs.</p>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.NoteIQ_Discrepancy} className="Digitised" alt="" />
                                            <h6>Discrepancy Management</h6>
                                            <p className="mb-0">Detect, log, and resolve deviations efficiently.</p>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.NoteIQ_Centralised} className="Digitised" alt="" />
                                            <h6>Centralised Monitoring</h6>
                                            <p className="mb-0">Real-time dashboards track progress, KPIs, and bottlenecks.</p>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.NoteIQ_Proactive} className="Digitised" alt="" />
                                            <h6>Proactive Risk Mitigation</h6>
                                            <p className="mb-0"> AI-driven risk assessment prevents compliance issues.</p>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.NoteIQ_Automated} className="Digitised" alt="" />
                                            <h6>Automated Deliverable Generation</h6>
                                            <p className="mb-0">Documents created automatically with minimal manual input.</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            <div className="confi-box">
                                <h4 className="text-center mb-4 mb-md-5">BENEFITS</h4>
                                <Slider {...settings} className="benefits-slider">
                                    <div className="benefits-box">
                                        <div className="overflow-hidden">
                                            <Image src={IMAGES.NoteIQ_MultiTenancy} alt="benifits" className="w-100" />
                                        </div>
                                        <div className="benefits-hidden">
                                            <h6>Multi-Tenancy Architecture</h6>
                                            <p className="mb-0">Supports multiple teams in a single instance, reducing costs.</p>
                                        </div>
                                    </div>
                                    <div className="benefits-box">
                                        <div className="overflow-hidden">
                                            <Image src={IMAGES.NoteIQ_CloudNative} alt="benifits" className="w-100" />
                                        </div>
                                        <div className="benefits-hidden">
                                            <h6>Cloud-Native</h6>
                                            <p className="mb-0">Accessible globally, no local installation needed.</p>
                                        </div>
                                    </div>
                                    <div className="benefits-box">
                                        <div className="overflow-hidden">
                                            <Image src={IMAGES.NoteIQ_ERP_Integrations} alt="benifits" className="w-100" />
                                        </div>
                                        <div className="benefits-hidden">
                                            <h6>ERP/LIMS/QMS Integrations</h6>
                                            <p className="mb-0">Seamless ecosystem connectivity.</p>
                                        </div>
                                    </div>
                                    <div className="benefits-box">
                                        <div className="overflow-hidden">
                                            <Image src={IMAGES.NoteIQ_Security} alt="benifits" className="w-100" />
                                        </div>
                                        <div className="benefits-hidden">
                                            <h6>Security & Compliance</h6>
                                            <p className="mb-0">21 CFR Part 11 & Annex 11 compliant, data encryption, role-based access.</p>
                                        </div>
                                    </div>
                                    <div className="benefits-box">
                                        <div className="overflow-hidden">
                                            <Image src={IMAGES.NoteIQ_Scalability} alt="benifits" className="w-100" />
                                        </div>
                                        <div className="benefits-hidden">
                                            <h6>Scalability</h6>
                                            <p className="mb-0"> Increase users, storage, workflows with zero performance impact.</p>
                                        </div>
                                    </div>
                                </Slider>
                            </div>

                             <div className="confi-box">
                                <h4 className="text-center mb-4 mb-md-5">CONFIGURABLE PROCESSES INCLUDE</h4>
                                <Row className="align-items-center">
                                    <Col md={6}>
                                        <div className="confi-img">
                                            <Image src={IMAGES.NoteIQ_Infographic} className="w-100" alt="infograpgic" />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="confi-img">
                                            <ul className="">
                                                <li><Image src={IMAGES.NoteIQ_Tick} alt="tick" /> Computerised System Validation (CSV)</li>
                                                <li><Image src={IMAGES.NoteIQ_Tick} alt="tick" /> Equipment Qualification (IQ/OQ/PQ)</li>
                                                <li><Image src={IMAGES.NoteIQ_Tick} alt="tick" /> Utility Qualification</li>
                                                <li><Image src={IMAGES.NoteIQ_Tick} alt="tick" /> Process Validation</li>
                                                <li><Image src={IMAGES.NoteIQ_Tick} alt="tick" /> Analytical Validation Documents</li>
                                                <li><Image src={IMAGES.NoteIQ_Tick} alt="tick"  className="lstimg"/> Quality Risk Assessments</li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                </Tab>
                <Tab eventKey="dms" title="DOCUMENT MANAGEMENT SYSTEM">
                      <div className="vms-tab mt-5">
                            <h3 className="h5 text-center">DOCUMENT MANAGEMENT SYSTEM</h3>
                            <p className="text-center">Document management is often time-consuming and prone to errors. With NoteIQ DMS, organisations gain<br /> reliable control, advanced search capabilities, and secure collaboration, all in one streamlined solution.</p>
                            <div className="grey3">
                                <h4 className="text-center mb-5">KEY FEATURES</h4>
                                <Row>
                                    <Col lg={4} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.NoteIQ_Physical} className="Digitised" alt="" />
                                            <h6>Physical Copy Distribution Management</h6>
                                            <p className="mb-0">Track printed documents' distribution, retrieval, and destruction.</p>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.NoteIQ_ContentSearch} className="Digitised" alt="" />
                                            <h6>Content Search</h6>
                                            <p className="mb-0">Search by keywords, phrases, metadata, or full document content.</p>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.NoteIQ_Dashboards} className="Digitised" alt="" />
                                            <h6>Dashboards & Reports</h6>
                                            <p className="mb-0">Real-time task updates, due dates, and KPIs; prebuilt report templates.</p>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.NoteIQ_AuditTrail} className="Digitised" alt="" />
                                            <h6>Audit Trail</h6>
                                            <p className="mb-0">Full tracking of all actions, events, and changes; advanced filters and print log.</p>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.NoteIQ_Integration} className="Digitised" alt="" />
                                            <h6>Integration & Import</h6>
                                            <p className="mb-0">AD/SSO, email platforms, and bulk document uploads supported.</p>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.NoteIQ_Virtual} className="Digitised" alt="" />
                                            <h6>Virtual Data Room</h6>
                                            <p className="mb-0">Secure, structured access for auditors, stakeholders, and external collaborators.</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            <div className="confi-box">
                                <h4 className="text-center mb-5">CONFIGURABLE PROCESSES INCLUDE</h4>
                                <Row className="align-items-center">
                                    <Col md={6}>
                                        <div className="confi-img">
                                            <Image src={IMAGES.NoteIQ_Infographic} className="w-100" alt="infograpgic" />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="confi-img">
                                            <ul className="">
                                                <li><Image src={IMAGES.NoteIQ_Tick} alt="tick" /> Documents & Templates</li>
                                                <li><Image src={IMAGES.NoteIQ_Tick} alt="tick" /> Metadata Management</li>
                                                <li><Image src={IMAGES.NoteIQ_Tick} alt="tick" /> Numbering & Version Control</li>
                                                <li><Image src={IMAGES.NoteIQ_Tick} alt="tick" /> Workflow Management & Checklists</li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                </Tab>
                <Tab eventKey="tms" title="TRAINING MANAGEMENT SYSTEM">
                            <div className="vms-tab mt-5">
                            <h3 className="h5 text-center">TRAINING MANAGEMENT SYSTEM</h3>
                            <p className="text-center">Simplify the management of training compliance with NoteIQ TMS, which offers centralised <br/> administration, automated processes, and comprehensive tracking.</p>

                            <div className="grey3">
                                <h4 className="text-center mb-5">KEY FEATURES</h4>
                                <Row>
                                    <Col lg={4} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.NoteIQ_Integrated} className="Digitised" alt="" />
                                            <h6>Integrated Training Materials</h6>
                                            <p className="mb-0">Link training content to controlled documents for compliance.</p>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.NoteIQ_Flexible} className="Digitised" alt="" />
                                            <h6>Flexible Assessments</h6>
                                            <p className="mb-0">Open/closed book, project-based, and “Read & Understand” modules.</p>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.NoteIQ_AIPowered} className="Digitised" alt="" />
                                            <h6>AI-Powered Quiz Automation</h6>
                                            <p className="mb-0">Personalised, scalable training with automated evaluations.</p>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.NoteIQ_Training} className="Digitised" alt="" />
                                            <h6>Training Content Management</h6>
                                            <p className="mb-0">Accelerate development, AI-assisted content review, and SCORM-ready modules.</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                </Tab>
                </Tabs>
        </Container>
    </div>

    <div className="grey pad80">
        <Container>
            <h2 className="h4 text-center" data-aos="fade-up">The Value We Deliver</h2>
            <p className="text-center" data-aos="fade-up">Accelerate compliance processes while minimising errors.<br /> Leverage a secure and scalable platform designed for organisations of any size.</p>

                <Row className="mt-4 mt-md-5">
                    <Col md={6} lg={3} className="mb-4 mb-md-0">
                        <div className="choose-box">
                                <div className="choose-icon text-center" data-aos="fade-up">
                                    <Image src={IMAGES.NoteIQ_Faster} alt="tick"  />
                                </div>
                            <div className="choose-data" data-aos="fade-up">
                                <h6 >Faster Compliance</h6>
                                <p className="mb-0">Reduce errors and <br className="d-none d-md-block"/>accelerate approvals</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={3} className="mb-4 mb-md-0">
                        <div className="choose-box">
                                <div className="choose-icon text-center" data-aos="fade-up">
                                    <Image src={IMAGES.NoteIQ_Secure} alt="tick"   />
                                </div>
                            <div className="choose-data" data-aos="fade-up">
                                <h6>Secure & Reliable</h6>
                                <p className="mb-0">21 CFR Part 11 + Annex <br className="d-none d-md-block"/>11  compliant</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={3} className="mb-4 mb-md-0">
                        <div className="choose-box">
                                <div className="choose-icon text-center" data-aos="fade-up">
                                    <Image src={IMAGES.NoteIQ_Scalable} alt="tick"   />
                                </div>
                            <div className="choose-data">
                                <h6  data-aos="fade-up">Scalable & Flexible</h6>
                                <p  data-aos="fade-up" className="mb-0">Suitable for teams of any size, from small labs to global enterprises</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={3} className="mb-4 mb-md-0">
                        <div className="choose-box">
                                <div className="choose-icon text-center" data-aos="fade-up">
                                    <Image src={IMAGES.NoteIQ_Future} alt="tick"   />
                                </div>
                            <div className="choose-data">
                                <h6  data-aos="fade-up">Future-Ready</h6>
                                <p  data-aos="fade-up" className="mb-0">AI-driven roadmap for <br className="d-none d-md-block"/>continuous innovation.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
        </Container>
    </div>

     <div className="grey  insights-wrapper pt-0">
        <Container>
            <h2 className="h4 text-center mb-4 mb-md-5" data-aos="fade-up">FOR INSIGHTS  <br />THAT KEEP YOU AHEAD</h2>
            <Bloghomepage />
        </Container>
    </div>

        <div className="pad80 grey discover-from">
                <Container>
                    <h2 className="h4 text-center"  data-aos="fade-up">DISCOVER THE FUTURE OF<br/> INTELLIGENT COMPLIANCE<br/> WITH NOTEIQ</h2>    
                    <Row className="mt-4 mt-md-5">
                        <Col md={12} lg={6}>
                            <Image src={IMAGES.Noteiqf} alt="fromimg" className="w-100 h-100 pe-5"  data-aos="fade-up" />
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