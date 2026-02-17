"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import NextPage from "@/components/NextPage/page";

// import Header from "@/components/Header/page";
// import Footer from "@/components/Footer/page";
import Commonfrom from "@/components/Productfrom/Commonfrom/page";

import { IMAGES } from "@/assets/images/index.js"; 

export default function IntellectualPropertyClient() {

  


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

     <div className='inner-head inner-head-products product-wrapper' style={{backgroundImage: `url(${IMAGES.IP_Banner.src})`}}>
            <div className="banner-inner">
                <Container className='d-flex align-items-center h-100 '>
                <div>
                <h1 className='h4' data-aos="fade-up">Intellectual   <br className="d-none d-md-block" /><span> Property Consulting
</span></h1>
                    <p data-aos="fade-up" className="col-md-8 mb-3">Our IP Consulting services offer strategic support to simplify IP management, enhance asset value, and reduce risks from idea to market launch.

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
                        <Image src={IMAGES.IP_Expertise} className="ComplexRegulations" alt="" />
                        <Image src={IMAGES.IP_Expertiseicon} className="white-icon" alt="" />
                        <h6>Expertise</h6>
                        <p>A multidisciplinary team of scientific minds with a deep understanding of IP law, integrating science, technology, and legal strategy to deliver effective IP solutions.</p>
                    </div>
                </Col>
                
                <Col md={6} lg={4} className="mb-dflex mt-2 mt-md-0">
                    <div className="challenges-box h-100" data-aos="fade-up">
                        <Image src={IMAGES.IP_Experience} className="ComplexRegulations" alt="" />
                        <Image src={IMAGES.IP_Experienceicon} className="white-icon" alt="" />
                        <h6>Experience</h6>
                        <p>Over 20 years of specialised domain experience, offering strategic insights across multiple therapeutic and technological areas.</p>
                    </div>                   
                </Col>
               

                <Col md={6} lg={4} className="mb-dflex mt-2 mt-md-0">
                    <div className="challenges-box h-100" data-aos="fade-up">
                        <Image src={IMAGES.Operational} className="ComplexRegulations" alt="" />
                        <Image src={IMAGES.Operationalicon} className="white-icon" alt="" />
                        <h6>Techno-Legal Services</h6>
                        <p>Comprehensive IP solutions from concept to market, covering pharma generics, biosimilars, IP M&A, diligence, and contracts</p>
                    </div>                   
                </Col>

                 <Col md={6} lg={4} className="mb-dflex mt-2 mt-md-4">
                    <div className="challenges-box h-100" data-aos="fade-up">
                        <Image src={IMAGES.IP_Research} className="ComplexRegulations" alt="" />
                        <Image src={IMAGES.IP_Researchicon} className="white-icon" alt="" />
                        <h6>Research Tools</h6>
                        <p>Access to global and regional databases, including CAS SciFinder and national patent repositories, enabling precise IP research and analysis.</p>
                    </div>
                </Col>
                
                <Col md={6} lg={4} className="mb-dflex mt-2 mt-md-4">
                    <div className="challenges-box h-100" data-aos="fade-up">
                        <Image src={IMAGES.IP_Analytics} className="ComplexRegulations" alt="" />
                        <Image src={IMAGES.IP_Analyticsicon} className="white-icon" alt="" />
                        <h6>Analytics Tools</h6>
                        <p>Advanced platforms like IPD Analytics and Cortellis Product Intelligence to support data-driven IP strategy and decision-making.</p>
                    </div>                   
                </Col>

                 <Col md={6} lg={4} className="mb-dflex mt-2 mt-md-4">
                    <div className="challenges-box h-100" data-aos="fade-up">
                        <Image src={IMAGES.IP_InHouse} className="ComplexRegulations" alt="" />
                        <Image src={IMAGES.IP_InHouseicon} className="white-icon" alt="" />
                        <h6>In-House Tools</h6>
                        <p>Proprietary curated databases and periodic IP newsletters providing actionable intelligence and industry trends.</p>
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
    <Tab className="col7" eventKey="vms" title="IP Strategy and Landscaping">
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
                            <h3>IP Strategy and Landscaping</h3>
                            <p className="pt-md-2">We help define robust IP strategies that strengthen innovation pipelines and support market differentiation.</p>

                            <div className="sr-tab-dtls-dta">
                                <ul>
                                    <li><Image src={IMAGES.Dotsglobal} alt="dots" /> Patent landscape reports</li>
                                    <li><Image src={IMAGES.Dotsglobal} alt="dots" /> Freedom to Operate (FTO), (In)validation and Non-infringement proposals</li>
                                    <li><Image src={IMAGES.Dotsglobal} alt="dots" /> Patent and exclusivity certifications</li>
                                    <li><Image src={IMAGES.Dotsglobal} alt="dots" /> White Space Analysis</li>
                                    <li><Image src={IMAGES.Dotsglobal} alt="dots" /> Technology Evaluation</li>
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

    <Tab className="col7" eventKey="dms" title=" IP & Portfolio Management">
        <Row>
            <Col md={12} lg={6}>
                <div className="overflow-hidden">
                    <Image src={IMAGES.IP_Portfolio} className="w-100" alt="srtabs" />
                </div>
            </Col>
            <Col md={12} lg={6}>
                <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                    <div>
                        <h3> IP & Portfolio Management</h3>
                        <p className="pt-md-2">Comprehensive management of IP assets from creation to commercialisation, ensuring alignment with business goals.</p>

                        <div className="sr-tab-dtls-dta">
                            <ul>
                                <li><Image src={IMAGES.Dotsglobal} alt="dots" />Patentability analysis</li>
                                <li><Image src={IMAGES.Dotsglobal} alt="dots" />Drafting, filing, and prosecution of Patent, Design & Trademark applications </li>
                                <li><Image src={IMAGES.Dotsglobal} alt="dots" />Para IV with First-to-File (FTF) / First-to-Market opportunities</li>
                                <li><Image src={IMAGES.Dotsglobal} alt="dots" /> 505(b)(2) / Differentiated Product Development Opportunities</li>
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

    <Tab className="col7" eventKey="tms" title=" IP Protection and Enforcement">
        <Row>
            <Col md={12} lg={6}>
                <div className="overflow-hidden">
                    <Image src={IMAGES.IP_Protection} className="w-100" alt="srtabs" />
                </div>
            </Col>
            <Col md={12} lg={6}>
                <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                    <div>
                        <h3> IP Protection and Enforcement</h3>
                        <p className="pt-md-2">Safeguarding innovation through robust legal actions and proactive protection strategies.</p>

                        <div className="sr-tab-dtls-dta">
                            <ul>
                                <li><Image src={IMAGES.Dotsglobal} alt="dots" />Patent & Trademark opposition, invalidity, and revocation proceedings</li>
                                <li><Image src={IMAGES.Dotsglobal} alt="dots" />Enforcement of patent rights through infringement litigation</li>
                                <li><Image src={IMAGES.Dotsglobal} alt="dots" />Due diligence on potential infringers</li>
                                <li><Image src={IMAGES.Dotsglobal} alt="dots" />Advisory on Orange Book (OB) listings</li>
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

    <Tab className="col7" eventKey="rm" title=" IP Commercialisation">
        <Row>
            <Col md={12} lg={6}>
                <div className="overflow-hidden">
                    <Image src={IMAGES.IP_Commercialisation} className="w-100" alt="srtabs" />
                </div>
            </Col>
            <Col md={12} lg={6}>
                <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                    <div>
                        <h3> IP Commercialisation</h3>
                        <p className="pt-md-2">Transforming IP assets into business value through effective monetisation and partnership strategies.</p>

                        <div className="sr-tab-dtls-dta">
                            <ul>
                                <li><Image src={IMAGES.Dotsglobal} alt="dots" />Patent & Trademark due diligence in M&A </li>
                                <li><Image src={IMAGES.Dotsglobal} alt="dots" />IP Licensing & Assignment</li>
                                <li><Image src={IMAGES.Dotsglobal} alt="dots" />At-Risk Launch Guidance</li>
                                <li><Image src={IMAGES.Dotsglobal} alt="dots" />Competitor Intelligence</li>
                                <li><Image src={IMAGES.Dotsglobal} alt="dots" />Drafting of commercial agreements</li>
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

    <Tab className="col7" eventKey="pv" title="IP Litigation Support">
        <Row>
            <Col md={12} lg={6}>
                <div className="overflow-hidden">
                    <Image src={IMAGES.IP_Litigation} className="w-100" alt="srtabs" />
                </div>
            </Col>
            <Col md={12} lg={6}>
                <div className="sr-tab-dlts d-flex flex-column justify-content-between align-items-start h-100">
                    <div>
                        <h3>IP Litigation Support</h3>
                        <p className="pt-md-2">Comprehensive support through the entire litigation process, ensuring informed and strategic legal actions.</p>

                        <div className="sr-tab-dtls-dta">
                            <ul>
                                <li><Image src={IMAGES.Dotsglobal} alt="dots" />Advisory on Hatch-Waxman Law and BPCI (Act for Biosimilars) </li>
                                <li><Image src={IMAGES.Dotsglobal} alt="dots" />Document & e-discovery, deposition support</li>
                                <li><Image src={IMAGES.Dotsglobal} alt="dots" />Litigation Support </li>
                                <li><Image src={IMAGES.Dotsglobal} alt="dots" />IP Settlement and Negotiation</li>
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

     {/* <NextPage 
                   heading={<>Next-Gen Pharmacovigilance  <span>with NovaVigil</span></>}
                  para="Pivot Path delivers AI-powered literature surveillance through NovaVigil, our intelligent pharmacovigilance platform. NovaVigil streamlines literature monitoring and ICSR processing by automating article screening, data extraction, and case narrative generation while keeping expert reviewers in control of clinical decisions. By handling repetitive tasks and maintaining complete audit trails, it enables life sciences teams to meet regulatory timelines, scale case volumes without proportional headcount, and focus their expertise on patient safety rather than manual data entry."
                  link="/products/novavigil"
                  image={IMAGES.NOVAVIGILBANNER} 
                /> */}

    <div className="pad80 grey discover-from" id="expert-driven">
               <Container>
                   <h2 className="h4 text-center"  data-aos="fade-up">Protect, Strengthen, <br/><span>and Monetise Innovation
</span></h2>
   
                   <Row className="mt-5">
                       <Col md={12} lg={6}>
                           <Image src={IMAGES.Intellectual} alt="fromimg" className="w-100 h-100 pe-5"  data-aos="fade-up" />
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