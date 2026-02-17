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

     const scrollToForm = (e) => {
    e.preventDefault(); // Prevent default link behavior
    const section = document.getElementById("expert-driven");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
                    <p data-aos="fade-up" className=" col-md-7 text-white mb-0">Building high-performing, future-ready organisations through strategic people solutions, strong leadership frameworks, and optimised workforce capabilities. </p>
                </div>
            </Container>
            </div>
        </div>

    {/* <div className="grey pad80">
        <Container>
            <h2 className="h4 text-center" data-aos="fade-up"> Empowering Manufacturing Excellence through Data, Intelligence, and Innovation</h2>
           
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
    </div> */}

    <div className="grey challenges-wrapper service-value pad80">
        <Container>
            <h2 className="h4 text-center" data-aos="fade-up">Our Value Proposition</h2>
            <Row className="mt-5">
                <Col md={6} lg={4} className="mb-dflex">
                    <div className="challenges-box h-100" data-aos="fade-up">
                        <Image src={IMAGES.Business_Aligned} className="ComplexRegulations" alt="" />
                         <Image src={IMAGES.Business_Aligned_white} className="white-icon" alt="" />
                        <h6>Business-Aligned People Strategy</h6>
                        <p>  We ensured human capital initiatives directly supported organisational growth and strategic objectives.</p>
                    </div>
                </Col>
                
                <Col md={6} lg={4} className="mb-dflex mt-2 mt-md-0">
                    <div className="challenges-box h-100" data-aos="fade-up">
                        <Image src={IMAGES.Human_Data} className="ComplexRegulations" alt="" />
                         <Image src={IMAGES.Human_DataIcon} className="white-icon" alt="" />
                        <h6>Data-Driven Insights</h6>
                        <p>  We used workforce analytics and performance data to enable informed decision-making.</p>
                    </div>                   
                </Col>

                 <Col md={6} lg={4} className="mb-dflex mt-2 mt-md-0">
                    <div className="challenges-box h-100" data-aos="fade-up">
                        <Image src={IMAGES.Sustainable_Capability} className="ComplexRegulations" alt="" />
                         <Image src={IMAGES.Sustainable_Capability_white} className="white-icon" alt="" />
                        <h6>Sustainable Capability Building</h6>
                        <p> We focused on long-term capability development, not short-term fixes.</p>
                    </div>
                </Col>
                
                <Col md={6} lg={4} className="mb-dflex mt-2 mt-md-4">
                    <div className="challenges-box h-100" data-aos="fade-up">
                        <Image src={IMAGES.Practical_Implementation} className="ComplexRegulations" alt="" />
                         <Image src={IMAGES.Practical_Implementation_white} className="white-icon" alt="" />
                        <h6>Practical, Implementation-Focused Approach</h6>
                        <p>  We delivered actionable solutions designed for real-world application.</p>
                    </div>                   
                </Col>
                <Col md={6} lg={4} className="mb-dflex mt-2 mt-md-4">
                    <div className="challenges-box h-100" data-aos="fade-up">
                        <Image src={IMAGES.Future_Ready_Organisations} className="ComplexRegulations" alt="" />
                         <Image src={IMAGES.Future_Ready_Organisations_white} className="white-icon" alt="" />
                        <h6>Future-Ready Organisations</h6>
                        <p>  We helped businesses build adaptable, resilient workforces prepared for evolving market demands.</p>
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
        <Tab className="col7" eventKey="vms" title="Workforce Strategy & Planning">
            <div className="sr-tabs-dtls">
                <Row>
                    <Col md={12} lg={6}>
                        <div className="overflow-hidden">
                            <Image src={IMAGES.IP_Strategy} className="w-100" alt="srtabs" />
                        </div>
                    </Col>
                    <Col md={12} lg={6}>
                        <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                            <div>
                                <h3>Workforce Strategy & Planning</h3>
                                <p className="pt-md-2"> Designing scalable workforce models, role structures, and talent roadmaps that support evolving business needs.</p>
    
                                
                            </div>
                            {/* <a href="#expert-driven" onClick={scrollToForm} className="sr-btn mt-4 d-inline-block" style={{ cursor: 'pointer' }}>
                                <span>Connect with us</span>
                            </a> */}
                        </div>
                    </Col>
                </Row>
            </div>
        </Tab>
    
        <Tab className="col7" eventKey="dms" title="Organisational Design & Development">
            <Row>
                <Col md={12} lg={6}>
                    <div className="overflow-hidden">
                        <Image src={IMAGES.IP_Portfolio} className="w-100" alt="srtabs" />
                    </div>
                </Col>
                <Col md={12} lg={6}>
                    <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                        <div>
                            <h3>Organisational Design & Development</h3>
                            <p className="pt-md-2">Creating agile, efficient organisational structures that improve collaboration, accountability, and operational effectiveness.</p>
                        </div>
                        {/* <a href="#expert-driven" onClick={scrollToForm} className="sr-btn mt-4 d-inline-block" style={{ cursor: 'pointer' }}>
                            <span>Connect with us</span>
                        </a> */}
                    </div>
                </Col>
            </Row>
        </Tab>
    
        <Tab className="col7" eventKey="tms" title="Talent Management & Capability Building">
            <Row>
                <Col md={12} lg={6}>
                    <div className="overflow-hidden">
                        <Image src={IMAGES.IP_Protection} className="w-100" alt="srtabs" />
                    </div>
                </Col>
                <Col md={12} lg={6}>
                    <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                        <div>
                            <h3>Talent Management & Capability Building</h3>
                            <p className="pt-md-2"> Strengthening talent pipelines through competency frameworks, performance systems, and targeted development programs.</p>
    
                           
                        </div>
                        {/* <a href="#expert-driven" onClick={scrollToForm} className="sr-btn mt-4 d-inline-block" style={{ cursor: 'pointer' }}>
                            <span>Connect with us</span>
                        </a> */}
                    </div>
                </Col>
            </Row>
        </Tab>
    
        <Tab className="col7" eventKey="rm" title="Leadership Development">
            <Row>
                <Col md={12} lg={6}>
                    <div className="overflow-hidden">
                        <Image src={IMAGES.IP_Commercialisation} className="w-100" alt="srtabs" />
                    </div>
                </Col>
                <Col md={12} lg={6}>
                    <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                        <div>
                            <h3>Leadership Development</h3>
                            <p className="pt-md-2"> Equipping leaders with the skills, mindset, and tools needed to drive transformation, manage change, and inspire high-performing teams.</p>
                        </div>
                        {/* <a href="#expert-driven" onClick={scrollToForm} className="sr-btn mt-4 d-inline-block" style={{ cursor: 'pointer' }}>
                            <span>Connect with us</span>
                        </a> */}
                    </div>
                </Col>
            </Row>
        </Tab>
    
        <Tab className="col7" eventKey="pv" title="HR Process Optimisation">
            <Row>
                <Col md={12} lg={6}>
                    <div className="overflow-hidden">
                        <Image src={IMAGES.IP_Litigation} className="w-100" alt="srtabs" />
                    </div>
                </Col>
                <Col md={12} lg={6}>
                    <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                        <div>
                            <h3>HR Process Optimisation</h3>
                            <p className="pt-md-2"> Improving HR operations through streamlined processes, policy frameworks, and governance models that enhance efficiency and compliance.</p>
    
                        </div>
                        {/* <a href="#expert-driven" onClick={scrollToForm} className="sr-btn mt-4 d-inline-block" style={{ cursor: 'pointer' }}>
                            <span>Connect with us</span>
                        </a> */}
                    </div>
                </Col>
            </Row>
        </Tab>

        {/* <Tab className="col7" eventKey="Change" title="Change Management & Culture Transformation">
            <Row>
                <Col md={12} lg={6}>
                    <div className="overflow-hidden">
                        <Image src={IMAGES.IP_Litigation} className="w-100" alt="srtabs" />
                    </div>
                </Col>
                <Col md={12} lg={6}>
                    <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                        <div>
                            <h3>Change Management & Culture Transformation</h3>
                            <p className="pt-md-2"> Improving HR operations through streamlined processes, policy frameworks, and governance models that enhance efficiency and compliance.</p>
    
                        </div>
                       
                    </div>
                </Col>
            </Row>
        </Tab> */}


    </Tabs>
            </Container>
        </div>

    <div className="pad80 grey discover-from">
               <Container>
                   <h2 className="h4 text-center"  data-aos="fade-up">Unlock Manufacturing Value <br/> <span>Through Data & Intelligence</span>
</h2>
   
                   <Row className="mt-5">
                       <Col md={12} lg={6}>
                           <Image src={IMAGES.human_C} alt="fromimg" className="w-100 h-100 pe-5"  data-aos="fade-up" />
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