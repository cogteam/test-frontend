"use client";
import Careersmodal from '@/app/careers/Careersmodal/page';
import { IMAGES } from '@/assets/images';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Driving from '@/assets/images/Driving-Organizational-Excellence-Through-People-Centric-Consulting.webp';
import Elevating from '@/assets/images/Elevating-Pharmacovigilance-with-Expert-Consulting-Solutions.webp';
import Strategic from '@/assets/images/Strategic-Clinical-Operations-Consulting.webp';
import Transforming from '@/assets/images/Transforming-Quality-&-Digital-Compliance-Through-Strategic-Consulting.webp';
import Unlocking from '@/assets/images/Unlocking-Value-Through-Strategic-IP-Consulting.webp';


export default function Consulting() {
    const [show, setShow] = useState(false);
  return (
   <>
    <div className='inner-head grey career-wrapper consulting-banner'>
        <Container className='d-flex align-items-center h-100 '>
            <div>
                <h1 className='h4 text-white' data-aos="fade-up">Consulting</h1>
                <p data-aos="fade-up" className="text-white">Empowering better decisions with clear, strategic insight. <br className="d-none d-md-block" />
Turning vision into action and impact.  </p>
            </div>
        </Container>
    </div>


    <Careersmodal 
      show={show}
      handleClose={() => setShow(false)}
    />


        <div className='pad80 solutions-page ' >
            <Container>

                <div className='solutions-row' onClick={() => setShow(true)}>
                   
                            <Row>
                                <Col md={6} data-aos="fade-up" lg={6}>
                                <div className='solution-box'>
                                    <h3 className='h5'>Elevating Pharmacovigilance with Expert Consulting Solutions</h3>
                                        <p>Our consulting approach is built to transform PV operations through a structured, insight-led framework that enhances efficiency, strengthens governance, and ensures sustained regulatory alignment. We optimize processes by identifying critical gaps and streamlining workflows, while establishing robust vendor management models that enable reliable, high-performing partner ecosystems.</p>
                                        <p>Our expertise further extends to shaping scalable pharmacovigilance infrastructures through strategic development aligned with organizational goals. We ensure continuous inspection readiness through comprehensive audits and governance frameworks, while enabling seamless and compliant data migration to preserve data integrity. The result is a resilient, future-ready pharmacovigilance function designed not just to meet regulatory expectations, but to perform with precision and confidence.</p>
                                    <div  className="text-uppercase btns3" >
                                    <span>Know More</span>
                                    </div>
                                </div>
                            </Col>
                                <Col md={6} data-aos="fade-up" lg={6}>
                                <Image 
                                        src={Elevating} 
                                        alt="Pivot Path Innovation Center" 
                                        priority // Keep priority for LCP
                                        className='h-auto w-100'
                                        />
                                </Col>
                            </Row>
                        
                </div>

                <div className='solutions-row' onClick={() => setShow(true)}>
                   
                            <Row>
                                <Col md={6} data-aos="fade-up" lg={6}>
                               
                        <div className='solution-box'>
                            <h3 className='h5'>Strategic Clinical Operations Consulting</h3>
                            <p>Our clinical operations consulting is designed to optimize every stage of the study lifecycle through strong governance, intelligent vendor strategies, and deep domain expertise. We enable seamless execution by establishing robust CRO oversight models, securing preferential study allocations, and driving cost efficiencies ensuring trials are delivered on time, within budget, and to the highest quality standards.</p>
                            <p>At the core of our approach is a multidisciplinary team of seasoned professionals, including Registered Nurses, PhDs, and medically trained experts, bringing over 15 years of average industry experience. Complementing this expertise is our scientific and clinical advisory capability, where we partner with organizations to guide molecule development through in-depth research, clinical evaluation, and strategic alignment. Whether supporting in-house innovation or licensed assets, we deliver the insight and direction needed to accelerate clinical success with confidence.</p>
                             <div  className="text-uppercase btns3" >
                              <span>Know More</span>
                            </div>
                        </div>
                  
                            </Col>
                                <Col md={6} data-aos="fade-up" lg={6}>
                                <Image 
                                                                        src={Strategic} 
                                                                        alt="Pivot Path Innovation Center" 
                                                                        priority // Keep priority for LCP
                                                                       className='h-auto w-100'
                                                                        />
                                </Col>
                            </Row>
                        
                </div>


                <div className='solutions-row' onClick={() => setShow(true)}>
                    
                            <Row>
                                <Col md={6} data-aos="fade-up" lg={6}>
                                <div className='solution-box'>
                            <h3 className='h5'>Transforming Quality & Digital Compliance Through Strategic Consulting</h3>
                            <p>Our consulting approach is designed to ensure continuous adherence to global standards while strengthening audit readiness and building resilient quality management frameworks. We deliver end-to-end compliance support across audits, QMS development, vendor oversight, and certification readiness enabling organizations to operate with confidence in a highly regulated landscape.</p>
                            <p>With deep expertise across GxP, ISO, and industry-specific regulations, we help organizations navigate evolving compliance requirements while driving operational efficiency through streamlined processes and automation-led practices. Our focus on proactive risk management ensures early identification of gaps and implementation of preventive controls, minimizing exposure and disruption. Beyond compliance, we enable a culture of continuous improvement through structured training, robust documentation, and ongoing monitoring, creating sustainable systems that consistently deliver quality and regulatory excellence.</p>
                            <div  className="text-uppercase btns3" >
                              <span>Know More</span>
                            </div>
                        </div>
                            </Col>
                                <Col md={6} data-aos="fade-up" lg={6}>
                                <Image 
                                        src={Transforming} 
                                        alt="Pivot Path Innovation Center" 
                                        priority // Keep priority for LCP
                                       className='h-auto w-100'
                                        />
                                </Col>
                            </Row>
                       
                </div>


                  <div className='solutions-row' onClick={() => setShow(true)}>
                    
                            <Row>
                                <Col md={6} data-aos="fade-up" lg={6}>
                                <div className='solution-box'>
                            <h3 className='h5'>Unlocking Value Through Strategic IP Consulting</h3>
                            <p>Our IP consulting services are designed to simplify complex IP ecosystems, enabling organizations to protect, optimize, and maximize their assets from early-stage innovation through to market launch. By integrating scientific expertise with legal and strategic insight, we deliver end-to-end IP solutions that reduce risk, strengthen portfolio value, and support informed decision-making across the product lifecycle.</p>
                            <p>Backed by over two decades of domain experience, our multidisciplinary team brings deep expertise across therapeutic and technological areas, offering comprehensive techno-legal support spanning generics, biosimilars, IP M&A, due diligence, and contractual frameworks. We leverage advanced research and analytics platforms including global patent databases and industry-leading tools to deliver precise, data-driven insights. Complemented by proprietary in-house databases and curated intelligence, our approach empowers organizations with actionable IP strategies that are both robust and future ready.</p>
                            <div  className="text-uppercase btns3" >
                              <span>Know More</span>
                            </div>
                        </div>
                            </Col>
                                <Col md={6} data-aos="fade-up" lg={6}>
                                <Image 
                                        src={Unlocking} 
                                        alt="Pivot Path Innovation Center" 
                                        priority // Keep priority for LCP
                                       className='h-auto w-100'
                                        />
                                </Col>
                            </Row>
                       
                </div>

                 <div className='solutions-row' onClick={() => setShow(true)}>
                    
                            <Row>
                                <Col md={6} data-aos="fade-up" lg={6}>
                                <div className='solution-box'>
                            <h3 className='h5'>Driving Organizational Excellence Through People-Centric Consulting</h3>
                            <p>Our human capital consulting approach focuses on building high-performing, future-ready organizations by aligning talent, structure, and culture with strategic business objectives. Moving beyond traditional HR, we design integrated people solutions that enhance workforce capability, strengthen leadership frameworks, and enable organizations to unlock the full potential of their talent.</p>
                            <p>We bring a data-driven and implementation-focused approach to human capital transformation, leveraging workforce analytics to inform decision-making and drive measurable outcomes. Our focus on sustainable capability building ensures long-term impact, equipping organizations with the skills and structures needed to adapt and grow. By delivering practical, actionable strategies, we help businesses create agile, resilient workforces that are prepared to navigate evolving market demands and consistently deliver performance.</p>
                            <div  className="text-uppercase btns3" >
                              <span>Know More</span>
                            </div>
                        </div>
                            </Col>
                                <Col md={6} data-aos="fade-up" lg={6}>
                                <Image 
                                        src={Driving} 
                                        alt="Pivot Path Innovation Center" 
                                        priority // Keep priority for LCP
                                       className='h-auto w-100'
                                        />
                                </Col>
                            </Row>
                       
                </div>

               
            </Container>
        </div>

</>
  );
}


