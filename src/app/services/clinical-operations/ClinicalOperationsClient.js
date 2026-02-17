"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import NextPage from "@/components/NextPage/page";
import Commonfrom from "@/components/Productfrom/Commonfrom/page";
import { IMAGES } from "@/assets/images/index.js"; 

export default function ClinicalOperationsClient() {

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

    <div className='inner-head inner-head-products product-wrapper clincal-operations-banner'>
                <div className="banner-inner">
                    <Container className='d-flex align-items-center h-100 '>
                    <div>
                    <h1 className='h4' data-aos="fade-up">Clinical   <span>Operations
    </span></h1>
                        <p data-aos="fade-up" className=" col-md-7">Delivering comprehensive clinical solutions with scientific expertise, regulatory compliance, and operational excellence.
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
                        <Image src={IMAGES.Clinical_Strong} className="ComplexRegulations" alt="" />
                        <Image src={IMAGES.Clinical_Strongwhite} className="white-icon" alt="" />
                        <h6>Strong Vendor & CRO Management</h6>
                        <p>Robust oversight of CRO partners with preferential allocation of study slots at competitive rates, ensuring timely and cost-effective study execution.</p>
                    </div>
                </Col>
                
                <Col md={6} lg={4} className="mb-dflex mt-2 mt-md-0">
                    <div className="challenges-box h-100" data-aos="fade-up">
                        <Image src={IMAGES.Clinical_Experienced} className="ComplexRegulations" alt="" />
                         <Image src={IMAGES.Clinical_Experiencedwhite} className="white-icon" alt="" />
                        <h6>Experienced Multidisciplinary Team</h6>
                        <p> A highly qualified team comprising Registered Nurses, research scientists (PhDs), and medically trained professionals, including advanced degrees in dentistry and pharmacology, with an average of 15+ years’ experience.</p>
                    </div>                   
                </Col>

                 <Col md={6} lg={4} className="mb-dflex mt-2 mt-md-0">
                    <div className="challenges-box h-100" data-aos="fade-up">
                        <Image src={IMAGES.Clinical_ScientificIcon} className="ComplexRegulations" alt="" />
                          <Image src={IMAGES.Clinical_Scientificwhite} className="white-icon"alt="" />
                        <h6>Scientific & Clinical Advisory</h6>
                        <p>Expert consultation for the development of new molecules, providing in-depth research, clinical evaluation, and strategic guidance for in-source or licensed products aligned with client objectives.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>

    <div className="grey2 pad80 sr-services">
        <Container>
            <h2 className="h4 text-center" data-aos="fade-up">Our services</h2>
            <p className="text-center mb-4 mb-md-5" data-aos="fade-up">Comprehensive clinical solutions and services across trials, <br/>regulatory compliance, pre-clinical studies, and scientific advisory.
</p>

           <Tabs
    id="controlled-tab-example"
    activeKey={key}
    onSelect={(k) => setKey(k)}
    className="mb-3 justify-content-center border-0 sr-tabs"
>
    <Tab className="col7" eventKey="vms" title="Clinical Trial Management">
        <div className="sr-tabs-dtls">
            <Row>
                <Col md={12} lg={6}>
                    <div className="overflow-hidden">
                        <Image src={IMAGES.Clinical_Management} className="w-100" alt="srtabs" />
                    </div>
                </Col>
                <Col md={12} lg={6}>
                    <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                        <div>
                            <h3 className="mb-4">Clinical Trial Management & Monitoring</h3>
                            <div className="sr-tab-dtls-dta">
                                <ul>
                                    <li><Image src={IMAGES.Dotsglobal} alt="dots" />Full lifecycle management of clinical trials, BE studies, and animal studies.</li>
                                    <li><Image src={IMAGES.Dotsglobal} alt="dots" />Monitoring to ensure protocol adherence, regulatory compliance, and quality standards.</li>
                                </ul>
                            </div>
                        </div>
                        <a href="#expert-driven" onClick={scrollToForm} className="sr-btn mt-4 d-inline-block" style={{ cursor: 'pointer' }}>
                            <span>Connect with us</span>
                        </a>
                    </div>
                </Col>
            </Row>
        </div>
    </Tab>

    <Tab className="col7" eventKey="dms" title="Safety & Regulatory Reporting">
        <Row>
            <Col md={12} lg={6}>
                <div className="overflow-hidden">
                    <Image src={IMAGES.Clinical_Safety} className="w-100" alt="srtabs" />
                </div>
            </Col>
            <Col md={12} lg={6}>
                <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                    <div>
                        <h3 className="mb-4">Safety & Regulatory Reporting</h3>
                        <div className="sr-tab-dtls-dta">
                            <ul>
                                <li><Image src={IMAGES.Dotsglobal} alt="dots" />Preparation of safety reports, including PDE/OEL and annual submissions.</li>
                                <li><Image src={IMAGES.Dotsglobal} alt="dots" />Responses to regulatory queries, SmPC & PIL reviews, and regulatory consulting (505(b)(2)).</li>
                            </ul>
                        </div>
                    </div>
                    <a href="#expert-driven" onClick={scrollToForm} className="sr-btn mt-4 d-inline-block" style={{ cursor: 'pointer' }}>
                        <span>Connect with us</span>
                    </a>
                </div>
            </Col>
        </Row>
    </Tab>

    <Tab className="col7" eventKey="tms" title="Pre-Clinical & In-Vitro Studies">
        <Row>
            <Col md={12} lg={6}>
                <div className="overflow-hidden">
                    <Image src={IMAGES.Clinical_Pre} className="w-100" alt="srtabs" />
                </div>
            </Col>
            <Col md={12} lg={6}>
                <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                    <div>
                        <h3 className="mb-4">Pre-Clinical & In-Vitro Studies</h3>
                        <div className="sr-tab-dtls-dta">
                            <ul>
                                <li><Image src={IMAGES.Dotsglobal} alt="dots" />Management of pre-clinical and in vitro studies.</li>
                                <li><Image src={IMAGES.Dotsglobal} alt="dots" />Dissolution evaluation, IVIVC recommendations, and quality-by-design procedure implementation.</li>
                            </ul>
                        </div>
                    </div>
                    <a href="#expert-driven" onClick={scrollToForm} className="sr-btn mt-4 d-inline-block" style={{ cursor: 'pointer' }}>
                        <span>Connect with us</span>
                    </a>
                </div>
            </Col>
        </Row>
    </Tab>

    <Tab className="col7" eventKey="rm" title="Medical Writing">
        <Row>
            <Col md={12} lg={6}>
                <div className="overflow-hidden">
                    <Image src={IMAGES.Clinical_Medical} className="w-100" alt="srtabs" />
                </div>
            </Col>
            <Col md={12} lg={6}>
                <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                    <div>
                        <h3 className="mb-4">Medical Writing</h3>
                        <div className="sr-tab-dtls-dta">
                            <ul>
                                <li><Image src={IMAGES.Dotsglobal} alt="dots" />Development of clinical, regulatory, and promotional documentation.</li>
                            </ul>
                        </div>
                    </div>
                    <a href="#expert-driven" onClick={scrollToForm} className="sr-btn mt-4 d-inline-block" style={{ cursor: 'pointer' }}>
                        <span>Connect with us</span>
                    </a>
                </div>
            </Col>
        </Row>
    </Tab>

    <Tab className="col7" eventKey="pv" title="Ambulatory Services">
        <Row>
            <Col md={12} lg={6}>
                <div className="overflow-hidden">
                    <Image src={IMAGES.Clinical_Ambulatory} className="w-100" alt="srtabs" />
                </div>
            </Col>
            <Col md={12} lg={6}>
                <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                    <div>
                        <h3 className="mb-4">Ambulatory Services & Vendor Management</h3>
                        <div className="sr-tab-dtls-dta">
                            <ul>
                                <li><Image src={IMAGES.Dotsglobal} alt="dots" />Comprehensive ambulatory support and strong vendor oversight with CRO audits and due diligence.</li>
                                <li><Image src={IMAGES.Dotsglobal} alt="dots" />Preferential allocation of study slots at competitive rates.</li>
                            </ul>
                        </div>
                    </div>
                    <a href="#expert-driven" onClick={scrollToForm} className="sr-btn mt-4 d-inline-block" style={{ cursor: 'pointer' }}>
                        <span>Connect with us</span>
                    </a>
                </div>
            </Col>
        </Row>
    </Tab>

    <Tab className="col7" eventKey="sd" title="Training & Compliance">
        <Row>
            <Col md={12} lg={6}>
                <div className="overflow-hidden">
                    <Image src={IMAGES.Clinical_Training} className="w-100" alt="srtabs" />
                </div>
            </Col>
            <Col md={12} lg={6}>
                <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                    <div>
                        <h3> Training & Compliance</h3>
                        <div className="sr-tab-dtls-dta pt-md-2">
                            <ul>
                                <li><Image src={IMAGES.Dotsglobal} alt="dots" />GCP and GxP training programs to ensure high-quality study conduct. </li>
                            </ul>
                        </div>
                    </div>
                    <a href="#expert-driven" onClick={scrollToForm} className="sr-btn mt-4 d-inline-block" style={{ cursor: 'pointer' }}>
                        <span>Connect with us</span>
                    </a>
                </div>
            </Col>
        </Row>
    </Tab>

    <Tab className="col7" eventKey="psmf" title="Scientific Advisory">
        <Row>
            <Col md={12} lg={6}>
                <div className="overflow-hidden">
                    <Image src={IMAGES.Clinical_Scientific} className="w-100" alt="srtabs" />
                </div>
            </Col>
            <Col md={12} lg={6}>
                <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                    <div>
                        <h3 className="mb-4">Scientific Advisory</h3>
                        <div className="sr-tab-dtls-dta">
                            <h6>Scientific Advisory</h6>
                            <ul className="mt-md-2">
                                <li><Image src={IMAGES.Dotsglobal} alt="dots" />Expert consultation for clinical development of new molecules.</li>
                                <li><Image src={IMAGES.Dotsglobal} alt="dots" />Assessment of research and clinical viability for in-source or licensed products aligned with customer objectives.</li>
                            </ul>
                        </div>
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

    <NextPage 
                 heading={<>Next-Gen Pharmacovigilance  <span>with NovaVigil</span></>}
                 para="Pivot Path delivers AI-powered literature surveillance through NovaVigil, our intelligent pharmacovigilance platform. NovaVigil streamlines literature monitoring and ICSR processing by automating article screening, data extraction, and case narrative generation while keeping expert reviewers in control of clinical decisions. By handling repetitive tasks and maintaining complete audit trails, it enables life sciences teams to meet regulatory timelines, scale case volumes without proportional headcount, and focus their expertise on patient safety rather than manual data entry."
                 link="/products/novavigil"
                 image={IMAGES.NOVAVIGILBANNER} 
               />

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