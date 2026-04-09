"use client";
import Careersmodal from '@/app/careers/Careersmodal/page';
import { IMAGES } from '@/assets/images';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import partnership1 from '@/assets/images/partnership1.webp';
import partnership2 from '@/assets/images/partnership2.webp';
import partnership3 from '@/assets/images/partnership3.webp';

export default function Partnerships() {
    const [show, setShow] = useState(false);
  return (
   <>
    {/* <div className='inner-head grey career-wrapper partnerships-banner'>
        <Container className='d-flex align-items-center h-100 '>
            <div>
                <h1 className='h4 text-white' data-aos="fade-up">Partnerships</h1>
                <p data-aos="fade-up" className="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting<br/> industry. Lorem Ipsum has been the industry's standard dummy text<br/> ever since the 1500s  </p>
            </div>
        </Container>
    </div> */}


    <Careersmodal 
      show={show}
      handleClose={() => setShow(false)}
    />


        <div className='solutions-page ' >
            <Container>

                <div className='solutions-row' onClick={() => setShow(true)}>
                   
                            <Row>
                                <Col md={6} data-aos="fade-up" lg={6}>
                                <div className='solution-box'>
                                    <h3 className='h5'>Powering End-to-End Serialization & Supply Chain Automation</h3>
                                        <p>Modern supply chains are becoming more connected, intelligent, and resilient — driven by real-time visibility and seamless partner collaboration. Together with TraceLink, we help organizations leverage the Healthcare and Life Sciences industry’s largest digital network of 291,000+ members, enabling unmatched connectivity across the supply ecosystem.</p>
                                    <p>At the core of this transformation is a digital supply chain platform that connects manufacturers, partners, and logistics providers on a unified network. From serialization and regulatory compliance to real-time data exchange and supply chain orchestration, every process is streamlined to deliver greater control, faster decision-making, and improved product availability.</p>
                                    <div  className="text-uppercase btns3" >
                                    <span>Know More</span>
                                    </div>
                                </div>
                            </Col>
                                <Col md={6} data-aos="fade-up" lg={6}>
                                <Image 
                                                                        src={partnership1} 
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
                            <h3 className='h5'>Reimagining Workforce Training with Immersive Digital Workforce Operating System</h3>
                            <p>As industries evolve, workforce readiness is becoming a key driver of operational excellence — powered by immersive, scalable, and intelligent training solutions. Together with 8chili and its platform HintVR, we are transforming how organizations train, validate, and certify operators through cutting-edge AR/VR experiences.</p>
                            <p>At the core of this transformation is a Digital Workforce Operating Solution that converts SOPs and machine operations into high-fidelity digital twins. This enables organizations to accelerate skill development up to 3× faster than traditional methods while ensuring consistency, compliance, and operational efficiency.</p>
                             <div  className="text-uppercase btns3" >
                              <span>Know More</span>
                            </div>
                        </div>
                  
                            </Col>
                                <Col md={6} data-aos="fade-up" lg={6}>
                                <Image 
                                        src={partnership2} 
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
                            <h3 className='h5'>Revolutionizing Human Capital with AI-Powered HCM</h3>
                            <p>Human Capital Management is evolving into a powerful driver of growth — defined by seamless experiences, intelligent insights, and organizational agility. Together with Darwinbox, we are transforming how organizations attract, engage, develop, and retain talent through an AI-powered HCM platform built for the modern workforce.</p>
                            <p>At the heart of this transformation is a next-generation HR ecosystem that blends deep automation with predictive intelligence. From smart hiring and seamless onboarding to performance management, payroll, workforce analytics, and employee engagement — every touchpoint is unified, intuitive, and insight-driven.</p>
                            <div  className="text-uppercase btns3" >
                              <span>Know More</span>
                            </div>
                        </div>
                            </Col>
                                <Col md={6} data-aos="fade-up" lg={6}>
                                <Image 
                                        src={partnership3} 
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


