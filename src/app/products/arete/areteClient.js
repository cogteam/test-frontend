"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
// import Header from "@/components/Header/page";
// import Footer from "@/components/Footer/page";
import Bloghomepage from "@/app/blogshomepage/page";
import Commonfrom from "@/components/Productfrom/Commonfrom/page";
import { IMAGES } from "@/assets/images/index.js"; 
import arete from '../../../assets/images/ARETE.svg';
import Realtime from '../../../assets/images/products/arete/Real-Time.svg';
import Realtime_white from '../../../assets/images/products/arete/Real-time-white.svg';
import Intelligent1 from '../../../assets/images/products/arete/Intelligent.svg';
import Intelligent_white from '../../../assets/images/products/arete/Intelligent-white.svg';
import Seamless from '../../../assets/images/products/arete/Seamless.svg';
import Seamless_white from '../../../assets/images/products/arete/Seamless-white.svg';
import Configurable from '../../../assets/images/products/arete/Configurable.svg';
import Configurable_white from '../../../assets/images/products/arete/Configurable-white.svg';
import Limited_Visibility from '../../../assets/images/products/arete/Limited-Visibility.svg';

import AI_Powered  from '../../../assets/images/products/arete/AI-Powered.svg';
import Intelligent_candidate from '../../../assets/images/products/arete/Intelligent-candidate.svg';
import Direct_applications from '../../../assets/images/products/arete/Direct-applications.svg';
import Advanced_search from '../../../assets/images/products/arete/Advanced-search.svg';

import Streamlined_1  from '../../../assets/images/products/arete/Streamlined_1.svg';
import Streamlined_2 from '../../../assets/images/products/arete/Streamlined_2.svg';
import Streamlined_3 from '../../../assets/images/products/arete/Streamlined_3.svg';
import Streamlined_4 from '../../../assets/images/products/arete/Streamlined_4.svg';

import Insights_1 from '../../../assets/images/products/arete/Insights_1.svg';
import Insights_4 from '../../../assets/images/products/arete/Insights_4.svg';

import Arete_form from '../../../assets/images/products/arete/Arete_form.webp';

import Value_1 from '../../../assets/images/products/arete/Value_1.svg';
import Value_4 from '../../../assets/images/products/arete/Value_4.svg';
import Value_5 from '../../../assets/images/products/arete/Value_5.svg';

import arete_ChallengesImg from '../../../assets/images/products/arete/arete_ChallengesImg.webp';


export default function AreteClient() {


  const [key, setKey] = useState('vms');

  return (
   <>
   {/* <Header/> */}

     <div className='inner-head inner-head-products grey product-wrapper arete-banner'>
            <div className="banner-inner">
                <Container className='d-flex align-items-center h-100 '>
                <div>
                     <Image src={arete} className="h-auto" style={{"width": "120px"}} alt="Anom IQ WHITE"  />
                <h1 className='h4 text-white' >Hire Smarter. <span> Hire Faster.</span></h1>
                    <p  className=" col-md-7 mb-0 text-white">A unified recruitment platform that simplifies sourcing, screening, scheduling, and evaluation through intelligent automation and connected workflows. </p>
                </div>
            </Container>
            </div>
        </div>

    <div className="grey pad80">
        <Container>
            <h2 className="h4 text-center" data-aos="fade-up"> Faster, Smarter<br/> Hiring  <span>Operations</span></h2>
            <p data-aos="fade-up" className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

            <Row className="mt-4 mt-md-5 justify-content-center">
                <Col md={6} lg={3}>
                    <div className="compliance-box" data-aos="fade-up">
                        <p className="head">Intelligent Candidate Scoring </p>
                        <Image src={Intelligent1} alt="agile" className="" />
                        <div className="compliance-hover">
                            <p className="compliance-p">Identify the right talent faster through AI-driven insights</p>
                            <Image src={Intelligent_white} alt="agile" className="" />
                        </div>
                    </div>
                </Col>
                <Col md={6} lg={3}>
                    <div className="compliance-box" data-aos="fade-up">
                        <p className="head">Seamless System Integration </p>
                        <Image src={Seamless} alt="agile" className="" />
                        <div className="compliance-hover">
                            <p className="compliance-p">Connect effortlessly with HRMS, job boards, and enterprise tools</p>
                            <Image src={Seamless_white} alt="agile" className="" />
                        </div>
                    </div>
                </Col>
                <Col md={6} lg={3}>
                    <div className="compliance-box" data-aos="fade-up">
                        <p className="head"> Configurable Hiring Workflows </p>
                        <Image src={Configurable} alt="agile" className="" />
                        <div className="compliance-hover">
                            <p className="compliance-p">Adapt recruitment stages to organisational needs</p>
                            <Image src={Configurable_white} alt="agile" className="" />
                        </div>
                    </div>
                </Col>

                <Col md={6} lg={3}>
                    <div className="compliance-box" data-aos="fade-up">
                        <p className="head">Real Time Collaboration</p>
                        <Image src={Realtime} alt="agile" className="" />
                        <div className="compliance-hover">
                            <p className="compliance-p">Enable faster decision-making across hiring teams</p>
                            <Image src={Realtime_white} alt="agile" className="" />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>

    <div className="grey challenges-wrapper">
        <Container>
            <h2 className="h4 text-center" data-aos="fade-up"> Challenges in Modern <br /> <span>Recruitment</span></h2>
            <p data-aos="fade-up" className="text-center col-7 m-auto">Organisations face increasing complexity in managing high-volume hiring, fragmented systems, and slow manual processes that delay decision-making and reduce hiring efficiency.</p>

            <Row className="mt-4 mt-md-5">
                <Col md={12} lg={4} className="mb-dflex">
                    <div className="challenges-box" data-aos="fade-up">
                        <Image src={IMAGES.AnomIQ_DelayedDetection} className="ComplexRegulations" alt="" />
                        <h6>Slow Hiring Cycles</h6>
                        <p className="mb-0">Delays in sourcing and evaluation impact talent acquisition speed</p>
                    </div>
                    <div className="challenges-box" data-aos="fade-up">
                        <Image src={IMAGES.AnomIQ_ManualReviews} className="ComplexRegulations" alt="" />
                        <h6>Manual Processes</h6>
                        <p className="mb-0">Time-consuming workflows reduce efficiency and accuracy</p>
                    </div>
                </Col>
                <Col md={12} lg={4}>
                    <div className="challenges-box challenges-box2 p-0 border-0" data-aos="fade-up">
                       <Image src={arete_ChallengesImg} alt="challenges" className="w-100 mb-0" />
                    </div>
                </Col>

                <Col md={12} lg={4} className="mb-dflex">
                    <div className="challenges-box" data-aos="fade-up">
                        <Image src={IMAGES.AnomIQ_SiloedSystems} className="ComplexRegulations" alt="" />
                        <h6>Disconnected Systems</h6>
                        <p className="mb-0">Lack of integration creates data silos across platforms</p>
                    </div>
                    <div className="challenges-box" data-aos="fade-up">
                        <Image src={Limited_Visibility} className="ComplexRegulations" alt="" />
                        <h6>Limited Visibility</h6>
                        <p className="mb-0">Poor tracking of candidate progress and hiring metrics</p>
                    </div>
                </Col>

                <Col md={12}>
                    <p className="text-center mt-4 mb-0" data-aos="fade-up"><b>Consequences:</b> Reduced hiring efficiency, inconsistent candidate experience, and increased time-to-fill positions.</p>
                </Col>
            </Row>
        </Container>
    </div>

     <div className="grey pad80 challenges-wrapper">
        <Container>
            <h2 className="h4 text-center" data-aos="fade-up">Transforming Recruitment <br/> <span> with Arete</span> </h2>
            <p data-aos="fade-up" className="text-center col-md-8 m-auto"> Arete centralises and automates the entire recruitment lifecycle, enabling structured workflows, real-time collaboration, and data-driven hiring decisions across teams and systems.
</p>
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
                <Tab eventKey="vms" title="Intelligent Sourcing & Screening">
                        <div className="vms-tab mt-5">
                            <h3 className="h5 text-center mb-4">Intelligent Sourcing & <br />Screening</h3>
                            <p className="text-center col-md-8 m-auto">Accelerate talent discovery and shortlisting through intelligent, centralised tools that enhance visibility, improve candidate matching, and enable faster, more accurate hiring decisions.
</p>

                            <div className="grey3">
                                <h4 className="text-center mb-4 mb-md-5">KEY FEATURES</h4>
                                <Row>
                                    <Col lg={4} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={AI_Powered} className="Digitised" alt="" />
                                            <h6>AI-Powered resume repository for centralised talent management</h6>
                                            <p className="mb-0">Centralises candidate data in a searchable repository for quick access and efficient talent management.
</p>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={Intelligent_candidate} className="Digitised" alt="" />
                                            <h6>Intelligent candidate scoring for improved fit analysis</h6>
                                             <p className="mb-0">Enhances candidate evaluation with data-driven scoring to identify the best-fit talent faster.</p>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={Direct_applications} className="Digitised" alt="" />
                                            <h6>Direct applications for simplified candidate entry</h6>
                                              <p className="mb-0">Streamlines candidate submissions through a structured and seamless application process.</p>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={Advanced_search} className="Digitised" alt="" />
                                            <h6>Advanced search & filtering for faster sourcing</h6>
                                             <p className="mb-0">Enables precise candidate discovery with powerful search and filtering capabilities.
</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                </Tab>
                <Tab eventKey="dms" title="Streamlined Hiring Execution">
                      <div className="vms-tab mt-5">
                            <h3 className="h5 text-center mb-4">Streamlined Hiring  <br />Execution</h3>
                            <p className="text-center col-md-8 m-auto mb-4">
                                Enhance recruitment efficiency through automated workflows that improve coordination, increase transparency, and accelerate decision-making across every stage of hiring.
                            </p>
                            <div className="grey3">
                                <h4 className="text-center mb-5">KEY FEATURES</h4>
                               
                                <Row>
                                    <Col lg={4} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={Streamlined_1} className="Digitised" alt="" />
                                            <h6>Smart interview scheduling with real-time tracking</h6>
                                         <p className="mb-0">Simplifies interview coordination with automated scheduling and real-time visibility across hiring teams.</p>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={Streamlined_2} className="Digitised" alt="" />
                                            <h6>Customisable multi-stage workflows</h6>
                                            <p className="mb-0">Adapts hiring processes with flexible workflows tailored to organisational needs.</p>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={Streamlined_3} className="Digitised" alt="" />
                                            <h6>Instant feedback capture and sharing</h6>
                                           <p className="mb-0">Enables structured, real-time feedback to support faster and more informed decisions.

</p>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={Streamlined_4} className="Digitised" alt="" />
                                            <h6> Smart notifications for stakeholder alignment
</h6>
                                           <p className="mb-0">Ensures seamless communication with timely updates for all stakeholders throughout the hiring process.
</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                </Tab>
                <Tab eventKey="tms" title="Insights & Integration">
                            <div className="vms-tab mt-5">
                            <h3 className="h5 text-center mb-4"> Insights & Integration</h3>
                            <p className="text-center col-md-8 m-auto mb-4">
                                Enable data-driven hiring through integrated systems and unified dashboards that provide complete visibility, real-time insights, and informed decision-making across recruitment operations.

                            </p>

                            <div className="grey3">
                                <h4 className="text-center mb-5 text-uppercase">Key Features</h4>
                                <Row>
                                    <Col lg={4} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={Insights_1} className="Digitised" alt="" />
                                            <h6>HRMS and API integration for seamless connectivity</h6>
                                           <p className="mb-0">Ensures smooth data flow through seamless integration with HR systems and external platforms.
</p>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.AnomIQ_SmartQuestionnaires} className="Digitised" alt="" />
                                            <h6>Real-time analytics and reporting</h6>
                                           <p className="mb-0">Provides instant access to hiring data for faster, insight-driven decision-making.
</p>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.AnomIQ_CentralisedDashboards} className="Digitised" alt="" />
                                            <h6>Centralised dashboards for hiring performance tracking</h6>
                                           <p className="mb-0">Delivers a unified view of recruitment metrics, progress, and performance.
</p>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={Insights_4} className="Digitised" alt="" />
                                            <h6>Data-driven insights for continuous improvement</h6>
                                            <p className="mb-0">Enables ongoing optimisation of hiring strategies through actionable insights and trends.
</p>
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
            {/* <h2 className="h4 text-center" data-aos="fade-up">Value Delivered</h2> */}
            <h2 className="h4 text-center" data-aos="fade-up">The Value <span> Delivered</span></h2>
            <p data-aos="fade-up" className="text-center col-md-8 m-auto">
                Drive faster and more consistent hiring outcomes by reducing manual effort, improving cross-team collaboration, and enabling scalable, data-driven recruitment across the organisation.
            </p>
                <Row className="mt-4 mt-md-5">
                    <Col md={6} lg={4} className="mb-4">
                        <div className="choose-box">
                                <div className="choose-icon text-center" data-aos="fade-up">
                                    <Image src={Value_1} alt="tick"  />
                                </div>
                            <div className="choose-data" data-aos="fade-up">
                                <h6>Faster hiring cycles through automation and AI-driven screening</h6>
                                <p className="mb-0">Reduces time-to-hire by automating screening and enabling faster candidate shortlisting.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={4} className="mb-4">
                        <div className="choose-box">
                                <div className="choose-icon text-center" data-aos="fade-up">
                                    <Image src={IMAGES.AnomIQ_OperationalEfficiency} alt="tick"   />
                                </div>
                            <div className="choose-data" data-aos="fade-up">
                                <h6>Improved efficiency by eliminating manual and fragmented processes</h6>
                                <p className="mb-0">Replaces disconnected workflows with a unified, automated recruitment system.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={4} className="mb-4">
                        <div className="choose-box">
                                <div className="choose-icon text-center" data-aos="fade-up">
                                    <Image src={IMAGES.AnomIQ_EnterpriseScalability} alt="tick"   />
                                </div>
                            <div className="choose-data">
                                <h6  data-aos="fade-up">Enhanced collaboration with real-time feedback and visibility</h6>
                                <p  data-aos="fade-up" className="mb-0">Improves team alignment through shared visibility and instant feedback exchange.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={4} className="mb-4 mb-md-0">
                        <div className="choose-box">
                                <div className="choose-icon text-center" data-aos="fade-up">
                                    <Image src={Value_4} alt="tick"   />
                                </div>
                            <div className="choose-data">
                                <h6  data-aos="fade-up">Scalable recruitment across teams and enterprise systems</h6>
                                <p  data-aos="fade-up" className="mb-0"> Supports high-volume hiring with scalable workflows and seamless system integration.</p>
                            </div>
                        </div>
                    </Col>

                     <Col md={6} lg={4}>
                        <div className="choose-box">
                                <div className="choose-icon text-center" data-aos="fade-up">
                                    <Image src={Value_5} alt="tick"   />
                                </div>
                            <div className="choose-data">
                                <h6  data-aos="fade-up">Consistent hiring quality through structured, data-led decision-making
</h6>
                                <p  data-aos="fade-up" className="mb-0">Ensures reliable hiring outcomes through standardised, insight-driven evaluation.
</p>
                            </div>
                        </div>
                    </Col>
                </Row>
        </Container>
    </div>

     <div className="grey  insights-wrapper ">
        <Container>
            <h2 className="h4 text-center mb-4 mb-md-5" data-aos="fade-up">FOR INSIGHTS  <br /><span>THAT KEEP YOU AHEAD</span></h2>
            <Bloghomepage />
        </Container>
    </div>

     <div className="pad80 grey discover-from">
                        <Container>
                            <h2 className="h4 text-center"  data-aos="fade-up">Arete transforms recruitment <br/> <span> into an intelligent</span>
</h2>    
                            <Row className="mt-4 mt-md-5">
                                <Col md={12} lg={6}>
                                    <Image src={Arete_form} alt="fromimg" className="w-100 h-100 pe-5"  data-aos="fade-up" />
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