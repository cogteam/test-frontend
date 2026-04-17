"use client";
import Careersmodal from '@/app/careers/Careersmodal/page';
import { IMAGES } from '@/assets/images';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import solution1 from '@/assets/images/solution1.webp';
import solution2 from '@/assets/images/solution2.webp';
import solution3 from '@/assets/images/solution3.webp';

export default function Solutions() {
    const [show, setShow] = useState(false);
  return (
   <>
    <div className='inner-head grey career-wrapper solution-banner'>
        <Container className='d-flex align-items-center h-100 '>
            <div>
                <h1 className='h4 text-white' data-aos="fade-up">Solutions</h1>
                <p data-aos="fade-up" className="text-white">Creating smarter solutions that transform business outcomes.<br/>
Delivering speed, efficiency, and scalable results.  </p>
            </div>
        </Container>
    </div> 


    <Careersmodal 
      show={show}
      handleClose={() => setShow(false)}
    />


        <div className='solutions-page pad80'>
            <Container>

                <div className='solutions-row' onClick={() => setShow(true)}>
                   
                            <Row>
                                <Col md={6} data-aos="fade-up" lg={6}>
                                <div className='solution-box'>
                                    <h3 className='h5'>Investigation AI</h3>
                                        <p>Quality investigations shouldn’t be slowed down by manual processes, inconsistent documentation, and reactive decision-making. Our Investigation AI guides teams through a structured, end-to-end investigation lifecycle automatically generating RCA frameworks, connecting events to historical patterns, and producing fully drafted investigation and CAPA documents in a fraction of the time.</p>
                                    <p>Built to grow with your organization, our platform evolves from intelligent document generation to predictive quality intelligence that anticipates issues before they recur. And with GxP alignment built in human-in-the-loop validation, full audit trails, and AI outputs treated as recommendations, never decisions your teams stay in control at every step.</p>
                                    <div  className="text-uppercase btns3" >
                                    <span>Know More</span>
                                    </div>
                                </div>
                            </Col>
                                <Col md={6} data-aos="fade-up" lg={6}>
                                <Image 
                                        src={solution1} 
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
                            <h3 className='h5'>Digital Manufacturing</h3>
                            <p>From paperless manufacturing with E-Logbooks and eBMR to supply chain automation and track & trace, we help life sciences organizations replace legacy processes with modern, connected digital infrastructure. Our expertise spans RPA, AI, ML, and IoT giving you the technology muscle to transform operations at every layer of your business.</p>
                            <p>Beyond automation, we deliver quality applications, enterprise platforms, and immersive AR & VR solutions that redefine how your workforce learns, operates, and innovates. Whether you’re digitizing the shop floor or reimagining the entire enterprise, we turn your transformation vision into measurable, lasting value.</p>
                             <div  className="text-uppercase btns3" >
                              <span>Know More</span>
                            </div>
                        </div>
                  
                            </Col>
                                <Col md={6} data-aos="fade-up" lg={6}>
                                <Image 
                                        src={solution2} 
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
                            <h3 className='h5'>Robotic Process Automation</h3>
                            <p>Repetitive, manual processes are quietly draining your organization’s time, money, and compliance confidence. Our RPA practice eliminates that drag automating everything from user identity management and CAPA task creation to regulatory compliance monitoring and finance operations.</p>
                            <p>Backed by a team of pharma manufacturing specialists and qualified engineers with stellar industry experience, we bring deep domain expertise to every automation. From setting up enterprise RPA Centres of Excellence to delivering Robotics as a Service, we build intelligent automation programs that compound in value over time, freeing your people to focus on work that truly matters.</p>
                            <div  className="text-uppercase btns3" >
                              <span>Know More</span>
                            </div>
                        </div>
                            </Col>
                                <Col md={6} data-aos="fade-up" lg={6}>
                                <Image 
                                        src={solution3} 
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


