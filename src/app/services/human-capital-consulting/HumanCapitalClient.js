"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import Slider from "react-slick";
// import Header from "@/components/Header/page";
// import Footer from "@/components/Footer/page";
import Commonfrom from "@/components/Productfrom/Commonfrom/page";

import { IMAGES } from "@/assets/images/index.js"; 

export default function HumanCapitalClient() {

  

  const [key, setKey] = useState('vms');

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

     <div className='inner-head inner-head-products product-wrapper' style={{backgroundImage: `url(${IMAGES.Human_Banner.src})`}}>
            <div className="banner-inner">
                <Container className='d-flex align-items-center h-100 '>
                <div>
                <h1 className='h4 text-white' data-aos="fade-up "> Human Capital  <br className="d-none d-md-block" /><span>Consulting</span></h1>
                    <p data-aos="fade-up" className=" col-md-7 text-white mb-0"> In today’s fast-evolving industrial landscape, traditional manufacturing is often held back by inefficiencies in data management, limited scalability, and fragmented decision-making. Through digital transformation, we help manufacturers bridge these gaps by creating connected, intelligent, and future-ready ecosystems that drive agility, transparency, and growth. </p>
                </div>
            </Container>
            </div>
        </div>

    <div className="grey pad80">
        <Container>
            <h2 className="h4 text-center" data-aos="fade-up"> Empowering Manufacturing Excellence through Data, Intelligence, and Innovation
</h2>
           
            <Slider {...settings} className="mt-5 justify-content-center">
                <Col md={4} lg={4}>
                    <div className="compliance-box border-0 services-box2" >
                        <Image src={IMAGES.Human_EnterpriseIcon} alt="agile" className="h-auto" />
                        <div className="services-box2-caption">
                            <h4>Enterprise-wide Visibility</h4>
                            <p className="head">Gain real-time monitoring and control across all plants with integrated data systems that provide a unified view of operations.</p>
                        </div>
                    </div>
                </Col>
                <Col md={4} lg={4}>
                    <div className="compliance-box border-0 services-box2 p-0" >
                        <Image src={IMAGES.Human_Enterprise} alt="agile" className="w-100" />
                    </div>
                </Col>

                <Col md={4} lg={4}>
                    <div className="compliance-box border-0 services-box2" >
                        <Image src={IMAGES.Human_DiverseIcon} alt="agile" className="h-auto" />
                        <div className="services-box2-caption">
                            <h4> Diverse Data Handling</h4>
                            <p className="head">Seamlessly manage, integrate, and analyse data from multiple sources and formats, eliminating silos and improving data integrity.</p>
                        </div>
                    </div>
                </Col>
                <Col md={4} lg={4}>
                    <div className="compliance-box border-0 services-box2 p-0" >
                        <Image src={IMAGES.Human_Diverse} alt="agile" className="w-100" />
                    </div>
                </Col>

                <Col md={4} lg={4}>
                    <div className="compliance-box border-0 services-box2" >
                        <Image src={IMAGES.Human_FastIcon} alt="agile" className="h-auto" />
                        <div className="services-box2-caption">
                            <h4>Fast and Secure Storage</h4>
                            <p className="head"> Access robust, scalable, and secure data storage solutions that ensure integrity, confidentiality, and availability at all times.</p>
                        </div>
                    </div>
                </Col>
                <Col md={4} lg={4}>
                    <div className="compliance-box border-0 services-box2 p-0" >
                        <Image src={IMAGES.Human_Fast} alt="agile" className="w-100" />
                    </div>
                </Col>

                 <Col md={4} lg={4}>
                    <div className="compliance-box border-0 services-box2" >
                        <Image src={IMAGES.Human_OptimisationIcon} alt="agile" className="h-auto" />
                        <div className="services-box2-caption">
                            <h4>Optimisation and Scalability</h4>
                            <p className="head"> Enhance operational efficiency with data-driven insights that scale with your business, enabling continuous performance improvement.</p>
                        </div>
                    </div>
                </Col>
                <Col md={4} lg={4}>
                    <div className="compliance-box border-0 services-box2 p-0" >
                        <Image src={IMAGES.Human_Optimisation} alt="agile" className="w-100" />
                    </div>
                </Col>

                <Col md={4} lg={4}>
                    <div className="compliance-box border-0 services-box2" >
                        <Image src={IMAGES.Human_AIIcon} alt="agile" className="h-auto" />
                        <div className="services-box2-caption">
                            <h4>AI-driven Insights and Analytics</h4>
                            <p className="head">Transform data into actionable intelligence with AI-powered analytics and dashboards, enabling faster and smarter decision-making.</p>
                        </div>
                    </div>
                </Col>
                <Col md={4} lg={4}>
                    <div className="compliance-box border-0 services-box2 p-0" >
                        <Image src={IMAGES.Human_AI} alt="agile" className="w-100" />
                    </div>
                </Col>
            </Slider>
        </Container>
    </div>

    <div className="grey challenges-wrapper service-value">
        <Container>
            <h2 className="h4 text-center" data-aos="fade-up">Building the Digital Backbone for Next-Generation Manufacturing</h2>
            <Row className="mt-5">
                <Col md={6} lg={6} className="mb-dflex">
                    <div className="challenges-box h-100" data-aos="fade-up">
                        <Image src={IMAGES.Human_Equipment} className="ComplexRegulations" alt="" />
                         <Image src={IMAGES.Human_EquipmentIcon} className="white-icon" alt="" />
                        <h6>Equipment Connectivity and Data Acquisition</h6>
                        <p> Facilitates seamless integration of shop floor systems, including PLC, DCS, scales, controllers, and energy meters, through standard industrial communication protocols such as Ethernet, Modbus, RS232, OPC UA, TCP/IP, BACNET, and OPC DA. This ensures reliable, real-time data exchange with customer MES and IT systems.</p>
                    </div>
                </Col>
                
                <Col md={6} lg={6} className="mb-dflex mt-2 mt-md-0">
                    <div className="challenges-box h-100" data-aos="fade-up">
                        <Image src={IMAGES.Human_Data} className="ComplexRegulations" alt="" />
                         <Image src={IMAGES.Human_DataIcon} className="white-icon" alt="" />
                        <h6>Data Storage and Processing</h6>
                        <p> Aggregates and securely stores data from sensors, machines, and control systems in a structured format within a centralised Data Lake or Data Warehouse. This foundation enables efficient data access, improved analytics, and enhanced visibility across operations.</p>
                    </div>                   
                </Col>

                 <Col md={6} lg={6} className="mb-dflex mt-2 mt-md-4">
                    <div className="challenges-box h-100" data-aos="fade-up">
                        <Image src={IMAGES.Human_Manufacturing} className="ComplexRegulations" alt="" />
                         <Image src={IMAGES.Human_ManufacturingIcon} className="white-icon" alt="" />
                        <h6>Manufacturing Applications</h6>
                        <p> Incorporates specialised software solutions for managing and optimising production workflows, including E-logbooks and BMR/BPR systems for comprehensive digital tracking of batches, processes, and compliance documentation.</p>
                    </div>
                </Col>
                
                <Col md={6} lg={6} className="mb-dflex mt-2 mt-md-4">
                    <div className="challenges-box h-100" data-aos="fade-up">
                        <Image src={IMAGES.Human_DataAnalytics} className="ComplexRegulations" alt="" />
                         <Image src={IMAGES.Human_DataAnalyticsIcon} className="white-icon" alt="" />
                        <h6>Data Analytics and Visualisation</h6>
                        <p> Delivers real-time insights and performance monitoring through advanced AI and ML-driven analytics and visualisation tools, empowering predictive decision-making and continuous operational excellence.</p>
                    </div>                   
                </Col>
            </Row>
        </Container>
    </div>

    <div className="pad80 grey discover-from">
               <Container>
                   <h2 className="h4 text-center"  data-aos="fade-up">EXPERT-DRIVEN PHARMACOVIGILANCE SOLUTIONS FOR GLOBAL SAFETY</h2>
   
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