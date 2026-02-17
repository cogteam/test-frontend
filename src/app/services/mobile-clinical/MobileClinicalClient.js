"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import Slider from "react-slick";
// import Header from "@/components/Header/page";
// import Footer from "@/components/Footer/page";
import Commonfrom from "@/components/Productfrom/Commonfrom/page";

import { IMAGES } from "@/assets/images/index.js"; 
import NextPage from "@/components/NextPage/page";


export default function MobileClinicalClient() {

  


  const [key, setKey] = useState('vms');

    const scrollToForm = (e) => {
    e.preventDefault(); // Prevent default link behavior
    const section = document.getElementById("expert-driven");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 2,
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

     <div className='inner-head inner-head-products product-wrapper mobile-clinical-banner'>
            <div className="banner-inner">
                <Container className='d-flex align-items-center h-100 '>
                <div>
                <h1 className='h4 ' data-aos="fade-up">Mobile    <span>Clinical
</span></h1>
                    <p data-aos="fade-up" className="col-md-7">Operating across 20+ sites in India with 80+ trained study nurses, we deliver mobile clinical services ensuring patient convenience, protocol adherence, and high standards of quality and compliance.
</p>
                </div>
            </Container>
            </div>
        </div>

 <div className="grey pad80">
        <Container>
            <h2 className="h4 text-center" data-aos="fade-up"> Mobile Clinical Services Flow</h2>
           
            <Slider {...settings} className="mt-5 justify-content-center">
                <Col md={4} lg={4}>
                    <div className="compliance-box border-0 services-box2" >
                        <Image src={IMAGES.Mobile_Patienticon} alt="agile" className="h-auto" />
                        <div className="services-box2-caption">
                            <h4>Patient Consent</h4>
                            <p className="head">The patient provides informed consent to participate in home visit services.</p>
                        </div>
                    </div>
                </Col>
                <Col md={4} lg={4} className="hide">
                    <div className="compliance-box border-0 services-box2 p-0" >
                        <Image src={IMAGES.Mobile_Patient} alt="agile" className="w-100" />
                    </div>
                </Col>

                <Col md={4} lg={4}>
                    <div className="compliance-box border-0 services-box2" >
                        <Image src={IMAGES.Mobile_ServiceRequesticon} alt="agile" className="h-auto" />
                        <div className="services-box2-caption">
                            <h4>Service Request Initiation</h4>
                            <p className="head">The Principal Investigator (PI) submits a Service Request Form, initiating the mobile clinical services workflow.</p>
                        </div>
                    </div>
                </Col>
                <Col md={4} lg={4} className="hide">
                    <div className="compliance-box border-0 services-box2 p-0" >
                        <Image src={IMAGES.Mobile_ServiceRequest} alt="agile" className="w-100" />
                    </div>
                </Col>

                <Col md={4} lg={4}>
                    <div className="compliance-box border-0 services-box2" >
                        <Image src={IMAGES.Mobile_LocalServiceicon} alt="agile" className="h-auto" />
                        <div className="services-box2-caption">
                            <h4>Local Service Provider Qualification </h4>
                            <p className="head">Local providers are identified, qualified, and trained. Their credentials, CVs, and documentation are reviewed and filed by the investigator site.</p>
                        </div>
                    </div>
                </Col>
                <Col md={4} lg={4} className="hide">
                    <div className="compliance-box border-0 services-box2 p-0" >
                        <Image src={IMAGES.Mobile_LocalService} alt="agile" className="w-100" />
                    </div>
                </Col>

                 <Col md={4} lg={4}>
                    <div className="compliance-box border-0 services-box2" >
                        <Image src={IMAGES.Mobile_Visiticon} alt="agile" className="h-auto" />
                        <div className="services-box2-caption">
                            <h4>Visit Scheduling and Supply Coordination</h4>
                            <p className="head">  The Local Service Provider contacts the patient to schedule the visit and receives all necessary laboratory kits and supplies from the site.</p>
                        </div>
                    </div>
                </Col>
                <Col md={4} lg={4} className="hide">
                    <div className="compliance-box border-0 services-box2 p-0" >
                        <Image src={IMAGES.Mobile_Visit} alt="agile" className="w-100" />
                    </div>
                </Col>

                 <Col md={4} lg={4}>
                    <div className="compliance-box border-0 services-box2" >
                        <Image src={IMAGES.Mobile_OnSiteicon} alt="agile" className="h-auto" />
                        <div className="services-box2-caption">
                            <h4>On-Site Visit Execution</h4>
                            <p className="head"> The Local Service Provider conducts the visit at the patient’s location, manages sample collection and shipment under cold-chain conditions, and ensures timely reporting of results to the investigator site.</p>
                        </div>
                    </div>
                </Col>
                <Col md={4} lg={4} className="hide">
                    <div className="compliance-box border-0 services-box2 p-0" >
                        <Image src={IMAGES.Mobile_OnSite} alt="agile" className="w-100" />
                    </div>
                </Col>

                <Col md={4} lg={4}>
                    <div className="compliance-box border-0 services-box2" >
                        <Image src={IMAGES.Mobile_Documentationicon} alt="agile" className="h-auto" />
                        <div className="services-box2-caption">
                            <h4>Documentation and Reporting</h4>
                            <p className="head"> Source documents and laboratory results are shared with the investigator site and study coordinator. All AE/SAE reporting and EDC entries are managed as per protocol.</p>
                        </div>
                    </div>
                </Col>
                <Col md={4} lg={4} className="hide">
                    <div className="compliance-box border-0 services-box2 p-0" >
                        <Image src={IMAGES.Mobile_Documentation} alt="agile" className="w-100" />
                    </div>
                </Col>
            </Slider>
        </Container>
    </div>
     
 <div className="grey pad80 challenges-wrapper pt-0 service-value">
        <Container>
            <h2 className="h4 text-center" data-aos="fade-up">OUR VALUE PROPOSITION</h2>
            <Row className="mt-5">
                <Col md={6} lg={4} className="mb-dflex">
                    <div className="challenges-box h-100" data-aos="fade-up">
                        <Image src={IMAGES.Mobile_Standardised} className="ComplexRegulations" alt="" />
                        <Image src={IMAGES.Mobile_Standardisedicon} className="white-icon" alt="" />
                        <h6>Standardised Procedures</h6>
                        <p>Well-defined SOPs implemented at every stage to ensure consistency and compliance.</p>
                    </div>
                </Col>
                
                <Col md={6} lg={4} className="mb-dflex mt-2 mt-md-0">
                    <div className="challenges-box h-100" data-aos="fade-up">
                        <Image src={IMAGES.Mobile_Qualified} className="ComplexRegulations" alt="" />
                         <Image src={IMAGES.Mobile_Qualifiedicon} className="white-icon" alt="" />
                        <h6>Qualified Expertise</h6>
                        <p>GCP-trained nursing professionals skilled in clinical documentation and patient care.</p>
                    </div>                   
                </Col>

                 <Col md={6} lg={4} className="mb-dflex mt-2 mt-md-0">
                    <div className="challenges-box h-100" data-aos="fade-up">
                        <Image src={IMAGES.Mobile_Quality} className="ComplexRegulations" alt="" />
                         <Image src={IMAGES.Mobile_Qualityicon} className="white-icon" alt="" />
                        <h6>Quality and Precision</h6>
                        <p>Commitment to delivering high-quality data collection and patient care with accuracy and reliability.</p>
                    </div>
                </Col>

                <Col md={6} lg={4} className="mb-dflex mt-2 mt-md-4">
                    <div className="challenges-box h-100" data-aos="fade-up">
                        <Image src={IMAGES.Mobile_Regulatory} className="ComplexRegulations" alt="" />
                         <Image src={IMAGES.Mobile_Regulatoryicon} className="white-icon" alt="" />
                        <h6>Regulatory Compliance</h6>
                        <p>Maintenance of records and patient data in alignment with international standards and sponsor expectations.</p>
                    </div>
                </Col>

                <Col md={6} lg={4} className="mb-dflex mt-2 mt-md-4">
                    <div className="challenges-box h-100" data-aos="fade-up">
                        <Image src={IMAGES.Mobile_Transparent} className="ComplexRegulations" alt="" />
                         <Image src={IMAGES.Mobile_Transparenticon} className="white-icon" alt="" />
                        <h6>Transparent Collaboration</h6>
                        <p>Timely sharing of reports and updates in accordance with sponsor agreements.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>

    <div className="grey2 pad80 sr-services">
        <Container>
            <h2 className="h4 text-center" data-aos="fade-up">Our services</h2>
            <p className="text-center mb-4 mb-md-5" data-aos="fade-up">Expert-driven clinical services ensuring seamless execution,<br/> data accuracy, and regulatory compliance.
</p>

           <Tabs
    id="controlled-tab-example"
    activeKey={key}
    onSelect={(k) => setKey(k)}
    className="mb-3 justify-content-center border-0 sr-tabs"
>
    <Tab className="col7" eventKey="vms" title="Study Drug">
        <div className="sr-tabs-dtls">
            <Row>
                <Col md={12} lg={6}>
                    <div className="overflow-hidden">
                        <Image src={IMAGES.Mobile_StudyDrug} className="w-100" alt="srtabs" />
                    </div>
                </Col>
                <Col md={12} lg={6}>
                    <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                        <div>
                            <h3>Study Drug <br className="d-none d-md-block"/> Administration</h3>
                            <p className="pt-md-2"> Administration through infusion, injection, or topical <br className="d-none d-md-block"/> routes in accordance with study protocols.</p>
                        </div>
                        <a href="#expert-driven" onClick={scrollToForm} className="sr-btn mt-4 d-inline-block" style={{ cursor: 'pointer' }}>
                            <span>Connect with us</span>
                        </a>
                    </div>
                </Col>
            </Row>
        </div>
    </Tab>

    <Tab className="col7" eventKey="dms" title="Blood Draws">
        <Row>
            <Col md={12} lg={6}>
                <div className="overflow-hidden">
                    <Image src={IMAGES.Mobile_Blood} className="w-100" alt="srtabs" />
                </div>
            </Col>
            <Col md={12} lg={6}>
                <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                    <div>
                        <h3>Blood Draws</h3>
                        <p className="pt-md-2"> Conducted as per protocol requirements<br className="d-none d-md-block"/>  by certified professionals.</p>
                    </div>
                    <a href="#expert-driven" onClick={scrollToForm} className="sr-btn mt-4 d-inline-block" style={{ cursor: 'pointer' }}>
                        <span>Connect with us</span>
                    </a>
                </div>
            </Col>
        </Row>
    </Tab>

    <Tab className="col7" eventKey="tms" title="Other Biologic Sampling">
        <Row>
            <Col md={12} lg={6}>
                <div className="overflow-hidden">
                    <Image src={IMAGES.Mobile_Other} className="w-100" alt="srtabs" />
                </div>
            </Col>
            <Col md={12} lg={6}>
                <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                    <div>
                        <h3>Other Biologic<br className="d-none d-md-block"/>  Sampling</h3>
                        <p className="pt-md-2"> Collection of samples such as nasopharyngeal and oral<br className="d-none d-md-block"/>  mucosal swabs, urine, and other biological specimens.</p>
                    </div>
                    <a href="#expert-driven" onClick={scrollToForm} className="sr-btn mt-4 d-inline-block" style={{ cursor: 'pointer' }}>
                        <span>Connect with us</span>
                    </a>
                </div>
            </Col>
        </Row>
    </Tab>

    <Tab className="col7" eventKey="rm" title="Clinical Assessments">
        <Row>
            <Col md={12} lg={6}>
                <div className="overflow-hidden">
                    <Image src={IMAGES.Mobile_Clinical} className="w-100" alt="srtabs" />
                </div>
            </Col>
            <Col md={12} lg={6}>
                <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                    <div>
                        <h3>Clinical Assessments</h3>
                        <p className="pt-md-2"> Monitoring of vital signs, body weight, ECGs, concomitant<br className="d-none d-md-block"/>  medications, and clinical symptoms.</p>
                    </div>
                    <a href="#expert-driven" onClick={scrollToForm} className="sr-btn mt-4 d-inline-block" style={{ cursor: 'pointer' }}>
                        <span>Connect with us</span>
                    </a>
                </div>
            </Col>
        </Row>
    </Tab>

    <Tab className="col7" eventKey="pv" title="Patient Training">
        <Row>
            <Col md={12} lg={6}>
                <div className="overflow-hidden">
                    <Image src={IMAGES.Mobile_PatientTraining} className="w-100" alt="srtabs" />
                </div>
            </Col>
            <Col md={12} lg={6}>
                <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                    <div>
                        <h3>Patient Training <br className="d-none d-md-block"/> and Education</h3>
                        <p className="pt-md-2">Guidance on self-administration techniques,<br className="d-none d-md-block"/>  device usage, and treatment adherence.</p>
                    </div>
                    <a href="#expert-driven" onClick={scrollToForm} className="sr-btn mt-4 d-inline-block" style={{ cursor: 'pointer' }}>
                        <span>Connect with us</span>
                    </a>
                </div>
            </Col>
        </Row>
    </Tab>

    <Tab className="col7" eventKey="sd" title="Study Compliance">
        <Row>
            <Col md={12} lg={6}>
                <div className="overflow-hidden">
                    <Image src={IMAGES.Mobile_Study} className="w-100" alt="srtabs" />
                </div>
            </Col>
            <Col md={12} lg={6}>
                <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                    <div>
                        <h3>Study Compliance<br className="d-none d-md-block"/>  Checks</h3>
                        <p className="pt-md-2">Verification of patient diaries, drug storage, and <br className="d-none d-md-block"/> adherence to study requirements.</p>
                    </div>
                    <a href="#expert-driven" onClick={scrollToForm} className="sr-btn mt-4 d-inline-block" style={{ cursor: 'pointer' }}>
                        <span>Connect with us</span>
                    </a>
                </div>
            </Col>
        </Row>
    </Tab>

    <Tab className="col7" eventKey="psmf" title="Patient Questionnaires">
        <Row>
            <Col md={12} lg={6}>
                <div className="overflow-hidden">
                    <Image src={IMAGES.Mobile_PatientTraining} className="w-100" alt="srtabs" />
                </div>
            </Col>
            <Col md={12} lg={6}>
                <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                    <div>
                        <h3>Patient Questionnaires</h3>
                        <p className="pt-md-2">Administration of patient-reported outcome <br className="d-none d-md-block"/> tools and feedback forms.</p>
                    </div>
                    <a href="#expert-driven" onClick={scrollToForm} className="sr-btn mt-4 d-inline-block" style={{ cursor: 'pointer' }}>
                        <span>Connect with us</span>
                    </a>
                </div>
            </Col>
        </Row>
    </Tab>

    <Tab className="col7" eventKey="Staff" title="Staff">
        <Row>
            <Col md={12} lg={6}>
                <div className="overflow-hidden">
                    <Image src={IMAGES.Mobile_Staff} className="w-100" alt="srtabs" />
                </div>
            </Col>
            <Col md={12} lg={6}>
                <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                    <div>
                        <h3>Site (Staff) <br className="d-none d-md-block"/> Support Services</h3>
                        <p className="pt-md-2">Operational and documentation support to investigator<br className="d-none d-md-block"/>  sites to ensure seamless study execution.</p>
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


     {/* <NextPage 
                  heading={<>Track and Trace <span>Solutions</span></>}
                  para="Through our end-to-end Track & Trace and Supply Chain Digitalisation solutions powered by TraceLink, we help global life sciences organisations strengthen patient safety, ensure market compliance, and drive operational efficiency. TraceLink connects every participant in the life sciences supply chain from manufacturers to dispensers, enabling real-time visibility, seamless collaboration, and actionable intelligence to better serve patients across 50+ countries, 291,000 members, and 1,600+ customers."
                  link="/services/track-and-trace-solutions"
                  image={IMAGES.TRACKANDTRACE} 
                /> */}

    <div className="pad80 grey discover-from" id="expert-driven">
               <Container>
                   <h2 className="h4 text-center"  data-aos="fade-up">Extend Clinical Care<br/>  <span>Beyond the Site
</span></h2>
   
                   <Row className="mt-5">
                       <Col md={12} lg={6}>
                           <Image src={IMAGES.mobile} alt="fromimg" className="w-100 h-100 pe-5"  data-aos="fade-up" />
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