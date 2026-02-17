"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
// import Header from "@/components/Header/page";
// import Footer from "@/components/Footer/page";
import Bloghomepage from "@/app/blogshomepage/page";
import Commonfrom from "@/components/Productfrom/Commonfrom/page";
import { IMAGES } from "@/assets/images/index.js"; 

export default function AnomIQClient() {


  const [key, setKey] = useState('vms');

  return (
   <>
   {/* <Header/> */}

     <div className='inner-head inner-head-products grey product-wrapper anomiq-banner'>
            <div className="banner-inner">
                <Container className='d-flex align-items-center h-100 '>
                <div>
                     {/* Ensure IMAGES.ANOMIQLOGO is defined in your index.js */}
                     <Image src={IMAGES.ANOMIQLOGO} className="" alt="Anom IQ WHITE"  />
                <h1 className='h4 text-white' >Intelligent Early  <br className="d-none d-md-block" /><span>Warning System</span></h1>
                    <p  className=" col-md-7 mb-0 text-white"> Reimagining Quality Oversight for Life Sciences with AI-Driven Anomaly Detection AnomIQ is an AI-powered platform that proactively detects and resolves anomalies across QC labs and manufacturing systems, automating compliance, enhancing visibility and ensuring continuous operational excellence.</p>
                </div>
            </Container>
            </div>
        </div>

    <div className="grey pad80">
        <Container>
            <h2 className="h4 text-center" data-aos="fade-up"> Early Warnings.<br/> Confident Compliance.</h2>
            <p data-aos="fade-up" className="text-center">A next-generation anomaly detection and compliance management platform designed<br/> to enhance data integrity, reduce risk, and strengthen operational control.</p>

            <Row className="mt-4 mt-md-5 justify-content-center">
                <Col md={6} lg={3}>
                    <div className="compliance-box" data-aos="fade-up">
                        <p className="head">Proactive Monitoring & Insights </p>
                        <Image src={IMAGES.AnomIQ_ProactiveMonitoring} alt="agile" className="" />
                        <div className="compliance-hover">
                            <p className="compliance-p">Detect, review, and resolve anomalies before they impact quality or compliance.</p>
                            <Image src={IMAGES.AnomIQ_ProactiveMonitoringWhite} alt="agile" className="" />
                        </div>
                    </div>
                </Col>
                <Col md={6} lg={3}>
                    <div className="compliance-box" data-aos="fade-up">
                        <p className="head">Automated Workflows & Governance </p>
                        <Image src={IMAGES.AnomIQ_AutomatedWorkflows} alt="agile" className="" />
                        <div className="compliance-hover">
                            <p className="compliance-p"> Replace manual reviews with structured, rule-based, and audit-ready processes.</p>
                            <Image src={IMAGES.AnomIQ_AutomatedWorkflowsWhite} alt="agile" className="" />
                        </div>
                    </div>
                </Col>
                <Col md={6} lg={3}>
                    <div className="compliance-box" data-aos="fade-up">
                        <p className="head">Scalable Oversight </p>
                        <Image src={IMAGES.AnomIQ_ScalableOversight} alt="agile" className="" />
                        <div className="compliance-hover">
                            <p className="compliance-p">Standardise monitoring across enterprise systems, laboratories, and manufacturing facilities.</p>
                            <Image src={IMAGES.AnomIQ_ScalableOversightWhite} alt="agile" className="" />
                        </div>
                    </div>
                </Col>

                <Col md={6} lg={3}>
                    <div className="compliance-box" data-aos="fade-up">
                        <p className="head">AI-Powered Transparency</p>
                        <Image src={IMAGES.AnomIQ_AiTransparency} alt="agile" className="" />
                        <div className="compliance-hover">
                            <p className="compliance-p">Drive smarter, faster decisions through real-time data and risk-based prioritisation.</p>
                            <Image src={IMAGES.AnomIQ_AiTransparencyWhite} alt="agile" className="" />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>

    <div className="grey challenges-wrapper">
        <Container>
            <h2 className="h4 text-center" data-aos="fade-up"> Challenges in 
  Pharmaceutical<br /> Compliance Oversight</h2>
            <p data-aos="fade-up" className="text-center col-7 m-auto">Life sciences organisations face mounting challenges in maintaining quality and data integrity across multiple sites and systems. Manual anomaly tracking, delayed investigations, and fragmented workflows increase regulatory risk and operational inefficiencies.</p>

            <Row className="mt-4 mt-md-5">
                <Col md={12} lg={4} className="mb-dflex">
                    <div className="challenges-box" data-aos="fade-up">
                        <Image src={IMAGES.AnomIQ_DelayedDetection} className="ComplexRegulations" alt="" />
                        <h6>Delayed Detection</h6>
                        <p className="mb-0">Pharma companies identify safety anomalies too late, escalating compliance risk.</p>
                    </div>
                    <div className="challenges-box" data-aos="fade-up">
                        <Image src={IMAGES.AnomIQ_ManualReviews} className="ComplexRegulations" alt="" />
                        <h6>Manual Reviews</h6>
                        <p className="mb-0">Time-consuming and error-prone processes affect audit readiness.</p>
                    </div>
                </Col>
                <Col md={12} lg={4}>
                    <div className="challenges-box challenges-box2 p-0 border-0" data-aos="fade-up">
                       <Image src={IMAGES.AnomIQ_ChallengesImg} alt="challenges" className="w-100 mb-0" />
                    </div>
                </Col>

                <Col md={12} lg={4} className="mb-dflex">
                    <div className="challenges-box" data-aos="fade-up">
                        <Image src={IMAGES.AnomIQ_SiloedSystems} className="ComplexRegulations" alt="" />
                        <h6>Siloed Systems</h6>
                        <p className="mb-0">Disconnected quality and IT operations limit traceability.</p>
                    </div>
                    <div className="challenges-box" data-aos="fade-up">
                        <Image src={IMAGES.AnomIQ_LimitedScalability} className="ComplexRegulations" alt="" />
                        <h6>Limited Scalability</h6>
                        <p className="mb-0"> Lack of standardisation across sites creates inconsistency.</p>
                    </div>
                </Col>

                <Col md={12}>
                    <p className="text-center mt-4 mb-0" data-aos="fade-up"><b>Consequences:</b> Reduced visibility, delayed investigations, increased audit risk, and inefficiencies that undermine operational excellence.</p>
                </Col>
            </Row>
        </Container>
    </div>

     <div className="grey pad80 challenges-wrapper">
        <Container>
            <h2 className="h4 text-center" data-aos="fade-up">Strengthening Compliance <br /> Through AnomIQ</h2>
            <p data-aos="fade-up" className="text-center col-md-8 m-auto">  AnomIQ automates anomaly detection, categorisation, and investigation across enterprise and standalone systems. It bridges the gap between IT operations and quality oversight, ensuring early detection, faster decision-making, and consistent compliance across all manufacturing and laboratory environments.</p>
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
                <Tab eventKey="vms" title="CDWM">
                        <div className="vms-tab mt-5">
                            <h3 className="h5 text-center mb-4">Configurable Detection & <br />Workflow Management</h3>
                            <p className="text-center col-7 m-auto">Tailor anomaly detection parameters and workflows to meet site-specific or organisational compliance requirements.</p>

                            <div className="grey3">
                                <h4 className="text-center mb-4 mb-md-5">KEY FEATURES</h4>
                                <Row>
                                    <Col lg={4} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.AnomIQ_ConfigurableParams} className="Digitised" alt="" />
                                            <h6>Configurable Parameters Aligned with Business Needs</h6>
                                            <p className="mb-0"> Customise detection rules and thresholds to match specific operational, regulatory, or quality standards.</p>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.AnomIQ_FlexibleWorkflows} className="Digitised" alt="" />
                                            <h6>Flexible, Multi-Step Workflows Integrated with Site Operations</h6>
                                             <p className="mb-0"> Design adaptable workflows that fit seamlessly within existing site processes for efficient issue resolution.</p>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.AnomIQ_Categorisation} className="Digitised" alt="" />
                                            <h6>Categorisation and Ranking of Anomalies by Risk and Impact</h6>
                                              <p className="mb-0"> Prioritise findings based on severity and relevance to drive faster, more effective corrective actions.</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                </Tab>
                <Tab eventKey="dms" title="ATAC">
                      <div className="vms-tab mt-5">
                            <h3 className="h5 text-center mb-4">Advanced Traceability & <br />Access Control</h3>
                            <p className="text-center">Maintain complete oversight with role-based permissions, secure access,<br/> and end-to-end audit trails.</p>
                            <div className="grey3">
                                <h4 className="text-center mb-5">KEY FEATURES</h4>
                                <Row>
                                    <Col lg={4} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.AnomIQ_RoleBasedUser} className="Digitised" alt="" />
                                            <h6>Role-based user management for secure access</h6>
                                         <p className="mb-0"> Control visibility and permissions across teams to ensure data security and accountability.</p>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.AnomIQ_AuditTrails} className="Digitised" alt="" />
                                            <h6>Comprehensive audit trails of every action and system event</h6>
                                            <p className="mb-0"> Maintain transparent, inspection-ready records that track every user interaction and workflow update.</p>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.AnomIQ_InteractiveDashboards} className="Digitised" alt="" />
                                            <h6>Interactive dashboards with real-time alerts and notifications</h6>
                                           <p className="mb-0">Monitor activities instantly through visual dashboards that highlight key events and compliance actions.</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                </Tab>
                <Tab eventKey="tms" title="CMIR">
                            <div className="vms-tab mt-5">
                            <h3 className="h5 text-center mb-4"> Continuous Monitoring & <br /> Intelligent Review</h3>
                            <p className="text-center">Ensure continuous compliance through automated scanning, structured reviews,<br/> and actionable analytics.</p>

                            <div className="grey3">
                                <h4 className="text-center mb-5 text-uppercase">Key Features</h4>
                                <Row>
                                    <Col lg={4} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.AnomIQ_PeriodicScan} className="Digitised" alt="" />
                                            <h6>Periodic automated anomaly scans across systems</h6>
                                           <p className="mb-0"> Continuously detect deviations and irregularities through scheduled, system-wide automated scans.</p>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.AnomIQ_SmartQuestionnaires} className="Digitised" alt="" />
                                            <h6>Smart questionnaires and checklists for consistent reviews</h6>
                                            <p className="mb-0"> Standardise review processes with intelligent, guided checklists that ensure thorough and uniform evaluations.</p>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.AnomIQ_CentralisedDashboards} className="Digitised" alt="" />
                                            <h6>Centralised dashboards for trend monitoring and KPI tracking</h6>
                                            <p className="mb-0"> Visualise performance trends, compliance metrics, and key insights in one integrated, real-time dashboard.</p>
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
            <h2 className="h4 text-center" data-aos="fade-up">Value Delivered</h2>
                <Row className="mt-4 mt-md-5">
                    <Col md={6} lg={4} className="mb-4">
                        <div className="choose-box">
                                <div className="choose-icon text-center" data-aos="fade-up">
                                    <Image src={IMAGES.AnomIQ_ComplianceAssurance} alt="tick"  />
                                </div>
                            <div className="choose-data" data-aos="fade-up">
                                <h6 >Compliance Assurance</h6>
                                <p className="mb-0">Continuous monitoring and traceable review history reduce regulatory risk.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={4} className="mb-4">
                        <div className="choose-box">
                                <div className="choose-icon text-center" data-aos="fade-up">
                                    <Image src={IMAGES.AnomIQ_OperationalEfficiency} alt="tick"   />
                                </div>
                            <div className="choose-data" data-aos="fade-up">
                                <h6>Operational Efficiency</h6>
                                <p className="mb-0">Automation replaces manual, paper-based reviews across laboratories and systems, saving time and resources.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={4} className="mb-4">
                        <div className="choose-box">
                                <div className="choose-icon text-center" data-aos="fade-up">
                                    <Image src={IMAGES.AnomIQ_EnterpriseScalability} alt="tick"   />
                                </div>
                            <div className="choose-data">
                                <h6  data-aos="fade-up">Enterprise Scalability</h6>
                                <p  data-aos="fade-up" className="mb-0"> Consistent compliance across multiple laboratories and manufacturing sites.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={4} className="mb-4 mb-md-0">
                        <div className="choose-box">
                                <div className="choose-icon text-center" data-aos="fade-up">
                                    <Image src={IMAGES.AnomIQ_ProactiveInsights} alt="tick"   />
                                </div>
                            <div className="choose-data">
                                <h6  data-aos="fade-up">Proactive Insights</h6>
                                <p  data-aos="fade-up" className="mb-0"> Analytics-driven visibility enables timely and informed decisions.</p>
                            </div>
                        </div>
                    </Col>

                     <Col md={6} lg={4}>
                        <div className="choose-box">
                                <div className="choose-icon text-center" data-aos="fade-up">
                                    <Image src={IMAGES.AnomIQ_DataIntegrity} alt="tick"   />
                                </div>
                            <div className="choose-data">
                                <h6  data-aos="fade-up">Data Integrity</h6>
                                <p  data-aos="fade-up" className="mb-0"> Ensures accuracy and reliability across laboratory instruments and systems.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
        </Container>
    </div>

     <div className="grey  insights-wrapper ">
        <Container>
            <h2 className="h4 text-center mb-4 mb-md-5" data-aos="fade-up">FOR INSIGHTS  <br />THAT KEEP YOU AHEAD</h2>
            <Bloghomepage />
        </Container>
    </div>

     <div className="pad80 grey discover-from">
                        <Container>
                            <h2 className="h4 text-center"  data-aos="fade-up">DISCOVER THE FUTURE OF<br/> INTELLIGENT COMPLIANCE<br/> WITH AnomIQ</h2>    
                            <Row className="mt-4 mt-md-5">
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