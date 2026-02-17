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

export default function NovaVigilClient() {



  const [key, setKey] = useState('vms');

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 0,
    arrows: false,
    responsive: [
     
      {
        breakpoint: 991,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,          
        }
      }
    ]
  };

  return (
   <>
   {/* <Header/> */}

     <div className='inner-head inner-head-products grey product-wrapper novovigil-banner'>
        <div className="banner-inner">
            <Container className='d-flex align-items-center h-100 '>
            <div>
                {/* Use the correct logo key from IMAGES */}
                <Image src={IMAGES.NovaVigil_Logo || IMAGES.NOVAVIGILLOGO} className="" alt="novavigil"/> 
                <h1 className='h4 text-white'>AI-Powered Literature  <br /><span>Monitoring</span></h1>
                <p className=" col-md-8 mb-0 text-white">NovaVigil is an intelligent literature monitoring platform designed to address pharmacovigilance challenges efficiently and compliantly, enhancing team productivity while safeguarding patient safety.</p>
            </div>
        </Container>
        </div>
    </div>

    <div className="grey pad80">
        <Container>
            <h2 className="h4 text-center" data-aos="fade-up">  Pharmacovigilance, <br/>Simplified</h2>
            <p data-aos="fade-up" className="text-center">A unified platform to automate literature screening, case detection, <br/>and reporting built for modern life sciences organisations.</p>

            <Row className="mt-4 mt-md-5 justify-content-center">
                <Col md={6} lg={3}>
                    <div className="compliance-box" data-aos="fade-up">
                        <p className="head">Intelligent Automation & Scalability</p>
                        <Image src={IMAGES.NovaVigil_IntelligentAutomation} alt="agile" className="" />
                        <div className="compliance-hover">
                            <p className="compliance-p"> Accelerate workflows, handle increasing volumes, and focus on critical decisions.</p>
                            <Image src={IMAGES.NovaVigil_IntelligentAutomationWhite} alt="agile" className="" />
                        </div>
                    </div>
                </Col>
                <Col md={6} lg={3}>
                    <div className="compliance-box" data-aos="fade-up">
                        <p className="head">Enhanced Accuracy & Compliance</p>
                        <Image src={IMAGES.NovaVigil_EnhancedAccuracy} alt="agile" className="" />
                        <div className="compliance-hover">
                            <p className="compliance-p"> Ensure regulatory adherence with AI-driven analysis and full traceability.</p>
                            <Image src={IMAGES.NovaVigil_EnhancedAccuracyWhite} alt="agile" className="" />
                        </div>
                    </div>
                </Col>
                <Col md={6} lg={3}>
                    <div className="compliance-box" data-aos="fade-up">
                        <p className="head">Seamless Data Integration</p>
                        <Image src={IMAGES.NovaVigil_UnifiedSafety} alt="agile" className="" />
                        <div className="compliance-hover">
                            <p className="compliance-p">Unifies safety data sources for proactive, comprehensive risk analysis.</p>
                            <Image src={IMAGES.NovaVigil_UnifiedSafetyWhite} alt="agile" className="" />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>

    <div className="grey challenges-wrapper">
        <Container>
            <h2 className="h4 text-center" data-aos="fade-up"> Challenges in Pharmacovigilance</h2>
            <p data-aos="fade-up" className="text-center col-7 m-auto">Pharmacovigilance teams face growing operational, regulatory, and technological pressures. Manual processes, delayed case detection, and fragmented data management slow workflows, increase errors, and elevate compliance risks.</p>

            <Row className="mt-4 mt-md-5">
                <Col md={12} lg={4} className="mb-dflex">
                    <div className="challenges-box" data-aos="fade-up">
                        <Image src={IMAGES.NovaVigil_ManualScreening} className="ComplexRegulations" alt="" />
                        <h6>Manual Literature Screening</h6>
                        <p className="mb-0">Time-consuming, prone to oversight, and slows case processing.</p>
                    </div>
                    <div className="challenges-box" data-aos="fade-up">
                        <Image src={IMAGES.NovaVigil_DelayedICSR} className="ComplexRegulations" alt="" />
                        <h6>Delayed ICSR Detection</h6>
                        <p className="mb-0">Critical safety signals may be missed, jeopardising patient safety.</p>
                    </div>
                </Col>
                <Col md={12} lg={4}>
                    <div className="challenges-box  challenges-box2 p-0 border-0" data-aos="fade-up">
                       <Image src={IMAGES.NovaVigil_ChallengesImg} alt="challenges" className="w-100 mb-0" />
                    </div>
                </Col>

                <Col md={12} lg={4} className="mb-dflex">
                    <div className="challenges-box" data-aos="fade-up">
                        <Image src={IMAGES.NovaVigil_FragmentedData} className="ComplexRegulations" alt="" />
                        <h6>Fragmented Data Sources</h6>
                        <p className="mb-0"> Multiple, disconnected systems impede analysis and decision-making.</p>
                    </div>
                    <div className="challenges-box" data-aos="fade-up">
                        <Image src={IMAGES.NovaVigil_OperationalStrain} className="ComplexRegulations" alt="" />
                        <h6>Operational Strain</h6>
                        <p className="mb-0">  Teams spend excessive time on repetitive tasks rather than strategic review.</p>
                    </div>
                </Col>

                <Col md={12}>
                    <p className="text-center mt-4 mb-0" data-aos="fade-up"><b>Consequences:</b> Reduced efficiency, higher operational costs, increased compliance risks, and potential threats to patient safety.</p>
                </Col>
            </Row>
        </Container>
    </div>

     <div className="grey pad80 challenges-wrapper">
        <Container>
            <h2 className="h4 text-center" data-aos="fade-up">AI-Driven <br />Pharmacovigilance</h2>
            <p data-aos="fade-up" className="text-center col-7 m-auto"> NovaVigil converts complex, manual literature workflows into automated, streamlined processes. With advanced AI, secure integrations, and centralised management, teams gain accuracy, transparency, and scalability.</p>
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
                <Tab eventKey="vms" title="ILS">
                        <div className="vms-tab mt-5">
                            <h3 className="h5 text-center">Intelligent Literature Screening</h3>
                            <p className="text-center col-7 m-auto">Manual review is slow and error-prone. NovaVigil automates detection, extraction, and case structuring, reducing processing time from approximately three hours to under one.</p>

                            <div className="grey3">
                                <h4 className="text-center mb-4 mb-md-5">KEY FEATURES</h4>
                                <Row>
                                    <Col lg={3} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.NovaVigil_AIPoweredScreening} className="AIPoweredScreening" alt="" />
                                            <h6>AI-Powered Screening & Prioritisation</h6>
                                            <p className="mb-0"> Automatically identify relevant literature with precision, ensuring no critical signal is missed.</p>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.NovaVigil_AutomatedData} className="Digitised" alt="" />
                                            <h6>Automated Data Extraction & Case Structuring</h6>
                                            <p className="mb-0"> Capture, organise, and structure safety data efficiently for faster case processing.</p>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.NovaVigil_ContextualAnalysis} className="ContextualAnalysis" alt="" />
                                            <h6>Contextual Analysis Guided by Domain Expertise</h6>
                                            <p className="mb-0"> Combine AI intelligence with expert context for accurate and compliant case evaluation.</p>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.NovaVigil_RealTimeTracking} className="RealTimeTracking" alt="" />
                                            <h6>Real-Time Tracking of Review Progress</h6>
                                           <p className="mb-0">Monitor every screening step live, improving transparency and team visibility.</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            <div className="confi-box">
                                <h4 className="text-center mb-4 mb-md-5">BENEFITS</h4>
                                <Slider {...settings} className="benefits-slider">
                                    <div className="benefits-box benefits-box-novavigil">
                                        <div className="overflow-hidden">
                                            <Image src={IMAGES.NovaVigil_FasterCase} alt="benifits" className="w-100" />
                                        </div>
                                        <div className="benefits-hidden">
                                            <h6>Faster Case Identification and Regulatory Reporting</h6>
                                           <p className="mb-0"> Automate literature review to detect safety signals quickly and accelerate case submission timelines.</p>
                                        </div>
                                    </div>
                                    <div className="benefits-box benefits-box-novavigil">
                                        <div className="overflow-hidden">
                                            <Image src={IMAGES.NovaVigil_ImprovedAccuracy} alt="benifits" className="w-100" />
                                        </div>
                                        <div className="benefits-hidden">
                                            <h6>Improved Accuracy and Reduced Human Error</h6>
                                            <p className="mb-0"> Leverage AI-driven analysis to ensure precision, consistency, and compliance in every screening process.</p>
                                        </div>
                                    </div>
                                    <div className="benefits-box benefits-box-novavigil">
                                        <div className="overflow-hidden">
                                            <Image src={IMAGES.NovaVigil_IncreasedEfficiency} alt="benifits" className="w-100" />
                                        </div>
                                        <div className="benefits-hidden">
                                            <h6>Increased Team Efficiency and Focus on Critical Decisions</h6>
                                           <p className="mb-0">Free teams from repetitive review tasks, enabling greater focus on high-impact, strategic pharmacovigilance activities.</p>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                </Tab>
                <Tab eventKey="dms" title="SWM">
                      <div className="vms-tab mt-5">
                            <h3 className="h5 text-center">Scalable Workflow Management</h3>
                            <p className="text-center">NovaVigil handles fluctuations in literature volume without compromising compliance or quality,<br/> ensuring your team stays ahead regardless of workload intensity.</p>
                            <div className="grey3">
                                <h4 className="text-center mb-5">KEY FEATURES</h4>
                                <Row>
                                    <Col lg={3} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.NovaVigil_FlexibleWorkflow} className="Digitised" alt="" />
                                            <h6>Flexible Workflow Design for Varying Workloads</h6>
                                           <p className="mb-0"> Adapt seamlessly to fluctuating literature volumes with configurable workflows.</p>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.NovaVigil_AutomatedTask} className="Digitised" alt="" />
                                            <h6>Automated Task Assignment and Prioritisation</h6>
                                            <p className="mb-0">Distribute work intelligently to maintain efficiency and meet critical timelines.</p>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.NovaVigil_IntegrationGlobal} className="Digitised" alt="" />
                                            <h6>Integration with Global and Local Literature Sources</h6>
                                            <p className="mb-0">Consolidate worldwide literature feeds for comprehensive coverage and compliance.</p>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.NovaVigil_CentralisedDashboards} className="Digitised" alt="" />
                                            <h6>Centralised Dashboards for Oversight and Reporting</h6>
                                            <p className="mb-0"> Gain complete visibility into performance metrics, progress, and compliance status.</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            <div className="confi-box">
                                <h4 className="text-center mb-5">BENEFITS</h4>
                                <Slider {...settings} className="benefits-slider">
                                    <div className="benefits-box">
                                        <div className="overflow-hidden">
                                            <Image src={IMAGES.NovaVigil_SWM1} alt="benifits" className="w-100" />
                                        </div>
                                        <div className="benefits-hidden h-auto">
                                            <h6>Seamless adaptation to peak periods without additional headcount</h6>
                                           <p className="mb-0">Handle fluctuating literature volumes effortlessly with flexible, scalable workflows that maintain performance without extra resources.</p>
                                        </div>
                                    </div>
                                    <div className="benefits-box">
                                        <div className="overflow-hidden">
                                            <Image src={IMAGES.NovaVigil_SWM2} alt="benifits" className="w-100" />
                                        </div>
                                        <div className="benefits-hidden h-auto">
                                            <h6>Optimised resource allocation and reduced operational bottlenecks</h6>
                                            <p className="mb-0"> Distribute workloads intelligently to maximise team efficiency and eliminate process slowdowns.</p>
                                        </div>
                                    </div>
                                    <div className="benefits-box">
                                        <div className="overflow-hidden">
                                            <Image src={IMAGES.NovaVigil_SWM3} alt="benifits" className="w-100" />
                                        </div>
                                        <div className="benefits-hidden h-auto">
                                            <h6>Consistent processing times and SLA compliance across all volume levels</h6>
                                           <p className="mb-0"> Ensure predictable, compliant performance through automation and standardised workflow management.</p>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                </Tab>
                <Tab eventKey="tms" title="CDCC">
                            <div className="vms-tab mt-5">
                            <h3 className="h5 text-center">Comprehensive Data & <br />Compliance Control</h3>
                            <p className="text-center">Ensure transparency, accountability, and audit readiness throughout <br />the pharmacovigilance process with complete oversight and traceability.</p>

                            <div className="grey3">
                                <h4 className="text-center mb-5">KEY FEATURES</h4>
                                <Row>
                                    <Col lg={3} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.NovaVigil_FullTraceability} className="Digitised" alt="" />
                                            <h6>Full Traceability of every screening and case step</h6>
                                           <p className="mb-0"> Ensure end-to-end accountability with complete audit trails for all activities.</p>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.NovaVigil_MultiLingual} className="Digitised" alt="" />
                                            <h6>Multi-Lingual Support for non-English literature</h6>
                                            <p className="mb-0"> Ensure end-to-end accountability with complete audit trails for all activities.</p>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.NovaVigil_SecureData} className="Digitised" alt="" />
                                            <h6>Secure Data Integration across systems and sources</h6>
                                            <p className="mb-0"> Unify disparate safety data into one secure, compliant environment.</p>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.NovaVigil_AIAlerts} className="Digitised" alt="" />
                                            <h6>AI-Driven Alerts to Highlight Potential Compliance Risks</h6>
                                            <p className="mb-0"> Detect anomalies early and act quickly to prevent compliance breaches.</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            <div className="confi-box">
                                <h4 className="text-center mb-5">BENEFITS</h4>
                                <Slider {...settings} className="benefits-slider">
                                    <div className="benefits-box ">
                                        <div className="overflow-hidden">
                                            <Image src={IMAGES.NovaVigil_CDCC1} alt="benifits" className="w-100" />
                                        </div>
                                        <div className="benefits-hidden h-auto">
                                            <h6>Inspection-ready audit trails that demonstrate regulatory compliance</h6>
                                           <p className="mb-0">  Maintain full traceability of every action with detailed records, ensuring effortless audit readiness and transparency.</p>
                                        </div>
                                    </div>
                                    <div className="benefits-box ">
                                        <div className="overflow-hidden">
                                            <Image src={IMAGES.NovaVigil_CDCC2} alt="benifits" className="w-100" />
                                        </div>
                                        <div className="benefits-hidden h-auto">
                                            <h6>Reduced risk of data integrity issues and compliance violations</h6>
                                            <p className="mb-0"> Safeguard processes with AI-enabled validation and secure data handling that minimise human error and regulatory risk.</p>
                                        </div>
                                    </div>
                                    <div className="benefits-box ">
                                        <div className="overflow-hidden">
                                            <Image src={IMAGES.NovaVigil_CDCC3} alt="benifits" className="w-100" />
                                        </div>
                                        <div className="benefits-hidden h-auto">
                                            <h6>Faster response to regulatory queries with complete documentation</h6>
                                           <p className="mb-0">  Access comprehensive, organised reports instantly to support timely and confident communication with authorities.</p>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                </Tab>
                </Tabs>
        </Container>
    </div>

    <div className="grey pad80 choose-wrapper">
        <Container>
            <h2 className="h4 text-center" data-aos="fade-up">WHY CHOOSE NovaVigil?</h2>
            <p className="text-center" data-aos="fade-up">NovaVigil empowers pharmacovigilance teams to work smarter, ensuring patient<br/> safety, regulatory excellence, and operational efficiency—bringing AI to life in life sciences.</p>

                <Row className="mt-4 mt-md-5">
                    <Col md={6} lg={3} className="mb-4 ">
                        <div className="choose-box">
                                <div className="choose-icon text-center" data-aos="fade-up">
                                    <Image src={IMAGES.NovaVigil_Accelerated} alt="tick"  />
                                </div>
                            <div className="choose-data" data-aos="fade-up">
                                <h6 >Accelerated Processing</h6>
                                <p className="mb-0">Reduce literature review time while maintaining accuracy.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={3} className="mb-4">
                        <div className="choose-box">
                                <div className="choose-icon text-center" data-aos="fade-up">
                                    <Image src={IMAGES.NovaVigil_EnhancedComp} alt="tick"   />
                                </div>
                            <div className="choose-data" data-aos="fade-up">
                                <h6>Enhanced Compliance</h6>
                                <p className="mb-0">Fully traceable and audit-ready processes.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={3} className="mb-4">
                        <div className="choose-box">
                                <div className="choose-icon text-center" data-aos="fade-up">
                                    <Image src={IMAGES.NovaVigil_Scalable} alt="tick"   />
                                </div>
                            <div className="choose-data"  data-aos="fade-up">
                                <h6  data-aos="fade-up">Scalable & Flexible</h6>
                                <p  data-aos="fade-up" className="mb-0">Handle growing volumes without additional resources.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={3} className="mb-4">
                        <div className="choose-box">
                                <div className="choose-icon text-center" data-aos="fade-up">
                                    <Image src={IMAGES.NovaVigil_ImproveProd} alt="tick"   />
                                </div>
                            <div className="choose-data"  data-aos="fade-up">
                                <h6  data-aos="fade-up">Improve Productivity</h6>
                                <p  data-aos="fade-up" className="mb-0">Automate repetitive tasks to reduce time spent on redundant activities.</p>
                            </div>
                        </div>
                    </Col>

                    <Col md={6} lg={3} >
                        <div className="choose-box">
                                <div className="choose-icon text-center" data-aos="fade-up">
                                    <Image src={IMAGES.NovaVigil_Future} alt="tick"   />
                                </div>
                            <div className="choose-data"  data-aos="fade-up">
                                <h6  data-aos="fade-up">Future-Ready</h6>
                                <p  data-aos="fade-up" className="mb-0">AI-driven insights for continuous innovation in pharmacovigilance.</p>
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
                        <h2 className="h4 text-center"  data-aos="fade-up">DISCOVER THE FUTURE OF<br/> INTELLIGENT COMPLIANCE<br/> WITH NOVAVIGIL</h2>    
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