"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
// import Header from "@/components/Header/page";
// import Footer from "@/components/Footer/page";
import Bloghomepage from "@/app/blogshomepage/page";
import Commonfrom from "@/components/Productfrom/Commonfrom/page";
import { IMAGES } from "@/assets/images/index.js"; 

export default function InLuminClient() {

 


  const [key, setKey] = useState('vms');

 

  return (
   <>
   {/* <Header/> */}

     <div className='inner-head inner-head-products grey product-wrapper inlumin-banner'>
            <div className="banner-inner">
                <Container className='d-flex align-items-center h-100 '>
                <div>
                <Image src={IMAGES.InLumin_Logo || IMAGES.INLUMINLOGO} className="" alt="inlumin"/>
                   {/* <h1 className='h4 text-white' >Reimagining Procure-to-Pay <br className="d-none d-md-block"/>for Life Sciences with a <br className="d-none d-md-block"/><span>Next-Gen Platform</span></h1> */}
                    <h1 className='h4 text-white' >Simplify Procurement with <br  className="d-none d-md-block" /><span>Transparency & Governance</span></h1>
                    <p  className=" col-md-7 text-white mb-0">Streamline every step of procurement with a platform that brings clarity, control, and speed. From requisition to payment, InLumin simplifies complex workflows, reduces errors, and connects your teams and vendors in one unified, intelligent system.
</p>
                </div>
            </Container>
            </div>
        </div>

    <div className="grey pad80">
        <Container>
            <h2 className="h4 text-center" data-aos="fade-up"> Procurement Made Smarter</h2>
            <p data-aos="fade-up" className="text-center"> A unified platform to automate workflows, improve accuracy, and maintain full visibility across the entire procure-to-pay cycle.</p>

            <Row className="mt-4 mt-md-5 justify-content-center">
                <Col md={6} lg={3}>
                    <div className="compliance-box" data-aos="fade-up">
                        <p className="head">Integration & Scalability</p>
                        <Image src={IMAGES.InLumin_IntegrationScale} alt="agile" className="" />
                        <div className="compliance-hover">
                            <p className="compliance-p">Digitise to fast-track procurement, connect effortlessly, and scale operations without limits.</p>
                            <Image src={IMAGES.InLumin_IntegrationScaleWhite} alt="agile" className="" />
                        </div>
                    </div>
                </Col>
                <Col md={6} lg={3}>
                    <div className="compliance-box" data-aos="fade-up">
                        <p className="head"> AI-Driven Accuracy & Compliance </p>
                        <Image src={IMAGES.InLumin_AiDriven} alt="agile" className="" />
                        <div className="compliance-hover">
                            <p className="compliance-p"> Reduce errors, automate 3-way matching, and ensure accountability across all transactions.</p>
                            <Image src={IMAGES.InLumin_AiDrivenWhite} alt="agile" className="" />
                        </div>
                    </div>
                </Col>
                <Col md={6} lg={3}>
                    <div className="compliance-box" data-aos="fade-up">
                        <p className="head">Enhanced Collaboration & Control</p>
                        <Image src={IMAGES.InLumin_EnhancedCollab} alt="agile" className="" />
                        <div className="compliance-hover">
                            <p className="compliance-p">Align procurement, finance, IT, and logistics teams for operational excellence.</p>
                            <Image src={IMAGES.InLumin_EnhancedCollabWhite} alt="agile" className="" />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>

    <div className="grey  challenges-wrapper">
        <Container>
            <h2 className="h4 text-center" data-aos="fade-up"> Challenges in <br />Pharma Procurement</h2>
            <p data-aos="fade-up" className="text-center col-7 m-auto">Procurement teams face operational inefficiencies, fragmented systems, and limited visibility that slow down approvals, payments, and vendor collaboration. Traditional ERP solutions often fail to address these challenges fully.</p>

            <Row className="mt-4 mt-md-5">
                <Col md={12} lg={4} className="mb-dflex">
                    <div className="challenges-box" data-aos="fade-up">
                        <Image src={IMAGES.InLumin_ManualProcesses} className="ComplexRegulations" alt="" />
                        <h6>Manual Processes</h6>
                        <p className="mb-0">Requisition, purchase order, and invoice handling are time-consuming and error-prone.</p>
                    </div>
                    <div className="challenges-box" data-aos="fade-up">
                        <Image src={IMAGES.InLumin_LowVisibility} className="ComplexRegulations" alt="" />
                        <h6>Low Visibility</h6>
                        <p className="mb-0">Limited transparency across PRs, POs, invoices, and payments hampers decision-making.</p>
                    </div>
                </Col>
                <Col md={12} lg={4}>
                    <div className="challenges-box challenges-box2 p-0 border-0" data-aos="fade-up">
                       <Image src={IMAGES.InLumin_ChallengesImg} alt="challenges" className="w-100 mb-0" />
                    </div>
                </Col>

                <Col md={12} lg={4} className="mb-dflex">
                    <div className="challenges-box" data-aos="fade-up">
                        <Image src={IMAGES.InLumin_DelayedPayments} className="ComplexRegulations" alt="" />
                        <h6>Delayed Payments</h6>
                        <p className="mb-0"> Slow approvals and invoice reconciliation impact vendor relationships and financial accuracy.</p>
                    </div>
                    <div className="challenges-box" data-aos="fade-up">
                        <Image src={IMAGES.InLumin_FragmentedSystems} className="ComplexRegulations" alt="" />
                        <h6>Fragmented Systems</h6>
                        <p className="mb-0">  Disconnected tools create bottlenecks and reduce collaboration.</p>
                    </div>
                </Col>

                <Col md={12}>
                    <p className="text-center mt-4 mb-0" data-aos="fade-up"><b>Repercussions:</b>  Teams face inefficiency, higher operational costs, vendor dissatisfaction, and reduced business agility.</p>
                </Col>
            </Row>
        </Container>
    </div>

     <div className="grey pad80 challenges-wrapper">
        <Container>
            <h2 className="h4 text-center mb-0" data-aos="fade-up">Transforming Procurement </h2>
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
                <Tab eventKey="vms" title="Digitising Procurement with Precision">
                        <div className="vms-tab mt-5">
                            <h3 className="h5 text-center mb-4">Digitising Procurement with Precision</h3>
                            <p className="text-center col-7 m-auto">  InLumin converts complex, manual P2P workflows into automated, streamlined processes. It centralises requisitions, approvals, 3-way matching, exception handling, and vendor communications - improving speed, accuracy, and compliance.</p>

                            <div className="grey3">
                                <h4 className="text-center mb-5">KEY FEATURES</h4>
                                <Row>
                                    <Col lg={4} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.InLumin_BoostEfficiency} className="Digitised" alt="" />
                                            <h6>Boost Efficiency</h6>
                                            <p className="mb-0">Automate repetitive tasks to free teams for strategic work. </p>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.InLumin_BuiltInAccountability} className="Digitised" alt="" />
                                            <h6>Built-In Accountability</h6>
                                            <p className="mb-0">Every action is time-stamped and traceable for transparency.</p>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.InLumin_RealTimeClarity} className="Digitised" alt="" />
                                            <h6>Real-Time Clarity</h6>
                                            <p className="mb-0"> Instant visibility into PRs, POs, invoices, and payments.</p>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.InLumin_AiDrivenMatching} className="Digitised" alt="" />
                                            <h6>AI-Driven Matching</h6>
                                           <p className="mb-0"> Reduce errors with automated reconciliation of PO, ASN, and GRN.</p>
                                        </div>
                                    </Col>
                                     <Col lg={4} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.InLumin_CompleteControl} className="Digitised" alt="" />
                                            <h6>Complete Control</h6>
                                           <p className="mb-0">Manage the entire procure-to-pay lifecycle from requisition to payment.</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                </Tab>
                <Tab eventKey="dms" title="Seamless Productivity Across Teams">
                      <div className="vms-tab mt-5">
                            <h3 className="h5 text-center">Seamless Productivity Across Teams</h3>
                            <div className="grey3">
                                <h4 className="text-center mb-5">KEY FEATURES</h4>
                                <Row>
                                    <Col lg={4} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.InLumin_Procurement} className="Digitised" alt="" />
                                            <h6>Procurement</h6>
                                           <p className="mb-0">Faster, simpler PR & PO management.</p>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.InLumin_Finance} className="Digitised" alt="" />
                                            <h6>Finance & Accounting</h6>
                                            <p className="mb-0">Smarter decisions with real-time data and automated invoicing.</p>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.InLumin_DeptHeads} className="Digitised" alt="" />
                                            <h6>Department Heads</h6>
                                            <p className="mb-0">Easy digital approvals with full spend control.</p>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.InLumin_IT} className="Digitised" alt="" />
                                            <h6>IT</h6>
                                            <p className="mb-0">Centralised, integrated platform with minimal maintenance.</p>
                                        </div>
                                    </Col>
                                     <Col lg={4} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.InLumin_SecurityLogistics} className="Digitised" alt="" />
                                            <h6>Security & Logistics</h6>
                                            <p className="mb-0">Automated alerts for inventory and supply chain management.</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                </Tab>
                <Tab eventKey="tms" title="Case in Point – P2P Transformation at a Pharma CDMO">
                            <div className="vms-tab mt-5">
                            <h3 className="h5 text-center">Case in Point – P2P Transformation <br />at a Pharma CDMO</h3>
                            <p className="text-center">A leading pharma CDMO struggled with P2P inefficiencies that affected vendor ties, financial accuracy, and operational agility.<br/> ERP alone could not resolve delayed payments, missing invoices, and low visibility.</p>

                            <div className="grey3">
                                <h4 className="text-center mb-3 text-uppercase">InLumin Solution</h4>
                                <p className="text-center mb-4 mb-md-5">  A next-generation platform that digitises procurement and unites buyers, approvers, and vendors, delivering:</p>

                                <Row>
                                    <Col lg={3} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.InLumin_FasterPayments} className="Digitised" alt="" />
                                            <h6 className="mb-0">Faster, accurate payments</h6>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.InLumin_SapSync} className="Digitised" alt="" />
                                            <h6 className="mb-0">Real-time SAP synchronisation</h6>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.InLumin_AutomatedMatching} className="Digitised" alt="" />
                                            <h6 className="mb-0">Automated three-way matching</h6>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.InLumin_VendorCollab} className="Digitised" alt="" />
                                            <h6 className="mb-0">Stronger vendor collaboration</h6>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                </Tab>
                </Tabs>
        </Container>
    </div>

     <div className="grey  insights-wrapper pad80 pb-0">
        <Container>
            <h2 className="h4 text-center mb-4 mb-md-5" data-aos="fade-up">FOR INSIGHTS  <br />THAT KEEP YOU AHEAD</h2>
            <Bloghomepage />
        </Container>
    </div>

   <div className="pad80 grey discover-from">
                       <Container>
                           {/* <h2 className="h4 text-center"  data-aos="fade-up">DISCOVER THE FUTURE OF<br/> INTELLIGENT COMPLIANCE<br/> WITH InLumin</h2>     */}
                            <h2 className="h4 text-center"  data-aos="fade-up">Bring Clarity and Control to<br/>  Procure-to-Pay Operations
</h2>   
                           <Row className="mt-4 mt-md-5">
                               <Col md={12} lg={6}>
                                   <Image src={IMAGES.InLuminf} alt="fromimg" className="w-100 h-100 pe-5"  data-aos="fade-up" />
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