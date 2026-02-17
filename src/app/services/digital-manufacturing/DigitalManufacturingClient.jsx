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


export default function DigitalManufacturingClient() {

//    useEffect(() => {
//       Aos.init({
//         duration: 1000, // animation duration
//         once: true,     // run animation only once
//       });
//     }, []);


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

     <div className='inner-head inner-head-products product-wrapper digital-manufacturing-banner'>
            <div className="banner-inner">
                <Container className='d-flex align-items-center h-100 '>
                <div>
                <h1 className='h4' data-aos="fade-up">Digital    <span>Manufacturing</span></h1>
                    <p data-aos="fade-up" className=" col-md-7">We enable manufacturers to overcome data silos, scalability challenges, and fragmented decisions through digital transformation-creating connected, intelligent, future-ready ecosystems for agility, transparency, and growth.
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
                        <Image src={IMAGES.Enhanced} className="ComplexRegulations" alt="" />
                        <Image src={IMAGES.Enhancedicon} className="white-icon" alt="" />
                        <h6>Enhanced Efficiency</h6>
                        <p>Streamline workflows and reduce operational bottlenecks.</p>
                    </div>
                </Col>
                
                <Col md={6} lg={4} className="mb-dflex mt-2 mt-md-0">
                    <div className="challenges-box h-100" data-aos="fade-up">
                        <Image src={IMAGES.Smarter} className="ComplexRegulations" alt="" />
                        <Image src={IMAGES.Smartericon} className="white-icon" alt="" />
                        <h6>Smarter Decisions</h6>
                        <p>Leverage predictive insights for proactive business strategies.</p>
                    </div>                   
                </Col>

                 <Col md={6} lg={4} className="mb-dflex mt-2 mt-md-0">
                    <div className="challenges-box h-100" data-aos="fade-up">
                        <Image src={IMAGES.Greater} className="ComplexRegulations" alt="" />
                        <Image src={IMAGES.Greatericon} className="white-icon" alt="" />
                        <h6>Greater Agility</h6>
                        <p>Adapt quickly to changing market and production demands.</p>
                    </div>
                </Col>

                 <Col md={6} lg={4} className="mb-dflex mt-2 mt-md-4">
                    <div className="challenges-box h-100" data-aos="fade-up">
                        <Image src={IMAGES.Sustained} className="ComplexRegulations" alt="" />
                        <Image src={IMAGES.Sustainedicon} className="white-icon" alt="" />
                        <h6>Sustained Growth</h6>
                        <p>Build scalable digital systems that evolve with your business.</p>
                    </div>
                </Col>
                 <Col md={6} lg={4} className="mb-dflex mt-2 mt-md-4">
                    <div className="challenges-box h-100" data-aos="fade-up">
                        <Image src={IMAGES.Future} className="ComplexRegulations" alt="" />
                        <Image src={IMAGES.Futureicon} className="white-icon" alt="" />
                        <h6>Future-Ready Operations</h6>
                        <p>Modernise Legacy Systems to Stay Ahead in Industry 4.0.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>

    <div className="grey2 pad80 sr-services">
        <Container>
            <h2 className="h4 text-center" data-aos="fade-up">Our services</h2>
            <p className="text-center" data-aos="fade-up">Empowering Manufacturing Excellence through Data,<br/> Intelligence, and Innovation</p>

                <div className="d-flex flex-wrap  services-tab">
                    <div className="col-4">
                        <p className="text-center">Enterprise-wide Visibility</p>
                    </div>
                    <div className="col-4">
                        <p className="text-center">Diverse Data Handling</p>
                    </div>
                    <div className="col-4">
                        <p className="text-center">Fast and Secure Storage</p>
                    </div>
                     <div className="col-4">
                        <p className="text-center"> Optimisation and Scalability</p>
                    </div>
                    <div className="col-4">
                        <p className="text-center">Ambulatory Services & Vendor Management </p>
                    </div>
                    <div className="col-4">
                        <p className="text-center">AI-driven Insights & Analytics</p>
                    </div>
                </div>

           <Tabs
    id="controlled-tab-example"
    activeKey={key}
    onSelect={(k) => setKey(k)}
    className="mb-3 justify-content-center border-0 sr-tabs"
>
    <Tab className="col7" eventKey="vms" title="Enterprise-wide Visibility">
        <div className="sr-tabs-dtls">
            <Row>
                <Col md={12} lg={6}>
                    <div className="overflow-hidden">
                        <Image src={IMAGES.Enterprise} className="w-100" alt="srtabs" />
                    </div>
                </Col>
                <Col md={12} lg={6}>
                    <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                        <div>
                            <h3>Enterprise-wide Visibility</h3>
                            <p className="pt-md-2">Gain real-time monitoring and control across all plants with integrated data systems that provide a unified view of operations.</p>
                        </div>
                        <a href="#expert-driven" onClick={scrollToForm} className="sr-btn mt-4 d-inline-block" style={{ cursor: 'pointer' }}>
                            <span>Connect with us</span>
                        </a>
                    </div>
                </Col>
            </Row>
        </div>
    </Tab>

    <Tab className="col7" eventKey="dms" title=" Diverse Data Handling">
        <Row>
            <Col md={12} lg={6}>
                <div className="overflow-hidden">
                    <Image src={IMAGES.Diverse} className="w-100" alt="srtabs" />
                </div>
            </Col>
            <Col md={12} lg={6}>
                <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                    <div>
                        <h3>Diverse Data Handling</h3>
                        <p className="pt-md-2"> Seamlessly manage, integrate, and analyse data from multiple sources and formats, eliminating silos and improving data integrity.</p>
                    </div>
                    <a href="#expert-driven" onClick={scrollToForm} className="sr-btn mt-4 d-inline-block" style={{ cursor: 'pointer' }}>
                        <span>Connect with us</span>
                    </a>
                </div>
            </Col>
        </Row>
    </Tab>

    <Tab className="col7" eventKey="tms" title="Fast and Secure Storage">
        <Row>
            <Col md={12} lg={6}>
                <div className="overflow-hidden">
                    <Image src={IMAGES.Fast} className="w-100" alt="srtabs" />
                </div>
            </Col>
            <Col md={12} lg={6}>
                <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                    <div>
                        <h3>Fast and Secure Storage</h3>
                        <p className="pt-md-2">Access robust, scalable, and secure data storage solutions that ensure integrity, confidentiality, and availability at all times.</p>
                    </div>
                    <a href="#expert-driven" onClick={scrollToForm} className="sr-btn mt-4 d-inline-block" style={{ cursor: 'pointer' }}>
                        <span>Connect with us</span>
                    </a>
                </div>
            </Col>
        </Row>
    </Tab>

    <Tab className="col7" eventKey="rm" title="Optimisation and Scalability">
        <Row>
            <Col md={12} lg={6}>
                <div className="overflow-hidden">
                    <Image src={IMAGES.Optimisation} className="w-100" alt="srtabs" />
                </div>
            </Col>
            <Col md={12} lg={6}>
                <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                    <div>
                        <h3>Optimisation and Scalability</h3>
                        <p className="pt-md-2">Enhance operational efficiency with data-driven insights that scale with your business—enabling continuous performance improvement.</p>
                    </div>
                    <a href="#expert-driven" onClick={scrollToForm} className="sr-btn mt-4 d-inline-block" style={{ cursor: 'pointer' }}>
                        <span>Connect with us</span>
                    </a>
                </div>
            </Col>
        </Row>
    </Tab>

    <Tab className="col7" eventKey="pv" title="AI-driven Insights & Analytics">
        <Row>
            <Col md={12} lg={6}>
                <div className="overflow-hidden">
                    <Image src={IMAGES.AI} className="w-100" alt="srtabs" />
                </div>
            </Col>
            <Col md={12} lg={6}>
                <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                    <div>
                        <h3>AI-driven Insights & Analytics</h3>
                        <p className="pt-md-2"> Transform data into actionable intelligence through AI-powered analytics and dashboards for faster, smarter decision-making.</p>
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
                      heading={<>Smart Manufacturing,


               <span> Powered by AnomIQ
              </span></>}
                      para="Pivot Path transforms manufacturing operations with AnomIQ, our anomaly tracking and detection tool. AnomIQ enables real-time monitoring and predictive analytics across enterprise and stand-alone manufacturing systems, to improve efficiency, reduce downtime, and maintain product quality. By unifying data across the manufacturing lifecycle, it empowers teams to make data-driven decisions, scale operations seamlessly, and deliver consistent, compliant products at speed."
                      link="/products/anomiq"
                      image={IMAGES.ANOMIQBANNER} 
                    />

    <div className="pad80 grey discover-from" id="expert-driven">
               <Container>
                   <h2 className="h4 text-center"  data-aos="fade-up">Modernise Manufacturing <br/>Through  <span> Digital Intelligence
</span></h2>
   
                   <Row className="mt-5">
                       <Col md={12} lg={6}>
                           <Image src={IMAGES.Digital} alt="fromimg" className="w-100 h-100 pe-5"  data-aos="fade-up" />
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