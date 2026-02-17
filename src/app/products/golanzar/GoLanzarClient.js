"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import Slider from "react-slick";
// import Header from "@/components/Header/page";
// import Footer from "@/components/Footer/page";
import Bloghomepage from "@/app/blogshomepage/page";
import Commonfrom from "@/components/Productfrom/Commonfrom/page";
import { IMAGES } from "@/assets/images/index.js"; 

export default function GoLanzarClient() {



  const [key, setKey] = useState('vms');

  var settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
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

     <div className='inner-head inner-head-products grey product-wrapper golanzar-banner'>
            <div className="banner-inner">
                <Container className='d-flex align-items-center h-100 '>
                <div>
                    <Image src={IMAGES.GoLanzar_Logo || IMAGES.GOLANZARLOGO} className="" alt="golanzar" />   
                <h1 className='h4 text-white'>Accelerated<br/> Pharmaceutical <br/><span>Launches</span></h1>
                    <p  className=" col-md-7 mb-0 text-white"> Reimagine pharmaceutical product launches with a platform that delivers precision, efficiency, and seamless cross-functional collaboration.</p>
                </div>
            </Container>
            </div>
        </div>

    <div className="grey pad80">
        <Container>
            <h2 className="h4 text-center" data-aos="fade-up"> Launch with  Precision</h2>
            <p data-aos="fade-up" className="text-center">A unified platform to plan, coordinate, and execute pharmaceutical product launches,<br/> ensuring timely market entry with strategic control.</p>

            <Row className="mt-4 mt-md-5 justify-content-center">
                <Col md={6} lg={3}>
                    <div className="compliance-box" data-aos="fade-up">
                        <p className="head">Intelligent Planning & Automation</p>
                        <Image src={IMAGES.GoLanzar_IntelligentPlanning} alt="agile" className="" />
                        <div className="compliance-hover">
                            <p className="compliance-p">Streamline processes, connect teams, and scale launch operations effortlessly.</p>
                            <Image src={IMAGES.GoLanzar_IntelligentPlanningWhite} alt="agile" className="" />
                        </div>
                    </div>
                </Col>
                <Col md={6} lg={3}>
                    <div className="compliance-box" data-aos="fade-up">
                        <p className="head"> Real-Time Insights & Collaboration</p>
                        <Image src={IMAGES.GoLanzar_RealTimeInsightsLunch} alt="agile" className="" />
                        <div className="compliance-hover">
                            <p className="compliance-p"> Monitor progress, track metrics, and ensure every stakeholder is aligned at every stage.</p>
                            <Image src={IMAGES.GoLanzar_RealTimeInsightsWhite} alt="agile" className="" />
                        </div>
                    </div>
                </Col>
                <Col md={6} lg={3}>
                    <div className="compliance-box" data-aos="fade-up">
                        <p className="head">Cross-Functional Alignment</p>
                        <Image src={IMAGES.GoLanzar_CrossFunctional} alt="agile" className="" />
                        <div className="compliance-hover">
                            <p className="compliance-p">Facilitate smooth coordination across regulatory, finance, procurement, manufacturing, business development, and other teams.</p>
                            <Image src={IMAGES.GoLanzar_CrossFunctionalWhite} alt="agile" className="" />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>

    <div className="grey challenges-wrapper">
        <Container>
            <h2 className="h4 text-center" data-aos="fade-up">  Challenges in <br /> Pharmaceutical Launches</h2>
            <p data-aos="fade-up" className="text-center col-7 m-auto">Launching a pharmaceutical product is a complex, high-stakes process. Teams face operational, regulatory, and strategic pressures that can lead to delays, inefficiencies, and costly errors.</p>

            <Row className="mt-4 mt-md-5">
                <Col md={12} lg={4} className="mb-dflex">
                    <div className="challenges-box" data-aos="fade-up">
                        <Image src={IMAGES.GoLanzar_FragmentedProcesses} className="ComplexRegulations" alt="" />
                        <h6>Fragmented Processes</h6>
                        <p className="mb-0">Multiple teams, disconnected systems, and inconsistent information slow progress.</p>
                    </div>
                    <div className="challenges-box" data-aos="fade-up">
                        <Image src={IMAGES.GoLanzar_TimeSensitive} className="ComplexRegulations" alt="" />
                        <h6>Time-Sensitive Deadlines</h6>
                        <p className="mb-0"> Misaligned execution can lead to delayed market entry and missed opportunities.</p>
                    </div>
                </Col>
                <Col md={12} lg={4}>
                    <div className="challenges-box challenges-box2 p-0 border-0" data-aos="fade-up">
                       <Image src={IMAGES.GoLanzar_ChallengesImg} alt="challenges" className="w-100 mb-0" />
                    </div>
                </Col>

                <Col md={12} lg={4} className="mb-dflex">
                    <div className="challenges-box" data-aos="fade-up">
                        <Image src={IMAGES.GoLanzar_ManualCoordination} className="ComplexRegulations" alt="" />
                        <h6>Manual Coordination</h6>
                        <p>Spreadsheets, emails, and ad hoc tracking increase errors and reduce visibility.</p>
                    </div>
                    <div className="challenges-box" data-aos="fade-up">
                        <Image src={IMAGES.GoLanzar_LimitedInsights} className="ComplexRegulations" alt="" />
                        <h6>Limited Insights</h6>
                        <p className="mb-0"> Lack of real-time data makes decision-making reactive rather than proactive.</p>
                    </div>
                </Col>

                <Col md={12}>
                    <p className="text-center mt-4 mb-0" data-aos="fade-up"><b>Obstacles:</b> Launch teams experience inefficiency, higher operational costs, and increased risk of non-compliance or delays.</p>
                </Col>
            </Row>
        </Container>
    </div>

     <div className="grey pad80 challenges-wrapper">
        <Container>
            <h2 className="h4 text-center" data-aos="fade-up">Transforming Launch <br/>Management with GoLanzar</h2>

            <h3 className="text-center mb-4" data-aos="fade-up">
                Accelerate Launches with Confidence
            </h3>
            <p data-aos="fade-up" className="text-center col-7 m-auto"> GoLanzar converts complex launch workflows into streamlined, automated processes. Teams gain visibility, reduce errors, and maintain alignment, enabling faster and more accurate product launches.</p>
        </Container>
    </div>

    <div className="grey2 pad80 vms-wrapper">
        <Container>
              <div className="vms-tab">
                            <h3 className="h5 text-center">Launch Management Platform</h3>
                            <p className="text-center col-7 m-auto">Manual and fragmented launch processes can hinder progress. GoLanzar centralises planning, communication, and execution, ensuring seamless coordination across teams.</p>

                            <div className="grey3">
                                <h4 className="text-center mb-4 mb-md-5">KEY FEATURES</h4>
                                <Row>
                                    <Col lg={4} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.GoLanzar_SingleSource} className="Digitised" alt="" />
                                            <h6>Single Source of Truth</h6>
                                            <p className="mb-0">Unified project information accessible to all stakeholders.</p>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.GoLanzar_RealTimeInsightsLMP} className="Digitised" alt="" />
                                            <h6>Real-Time Insights</h6>
                                            <p className="mb-0">Dashboards track progress, timelines, and KPIs for informed decisions </p>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.GoLanzar_RoleBasedAccess} className="Digitised" alt="" />
                                            <h6>Role-Based Access</h6>
                                            <p className="mb-0">Tailored information for each user — no clutter, no confusion.</p>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.GoLanzar_SmartFiltering} className="Digitised" alt="" />
                                            <h6>Smart Filtering</h6>
                                           <p className="mb-0"> Focus on priorities at every stage of the launch.  </p>
                                        </div>
                                    </Col>
                                     <Col lg={4} md={6}>
                                        <div className="challenges-box vms-icon">
                                            <Image src={IMAGES.GoLanzar_AutomatedAlerts} className="Digitised" alt="" />
                                            <h6>Automated Alerts</h6>
                                           <p className="mb-0">  Proactive notifications ensure critical tasks are never overlooked.</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                           
                        </div>


                <h4 className="text-center mb-4 mt-5">BENEFITS</h4>        

           <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3 mt-4 justify-content-center border-0"
                >
                <Tab eventKey="vms" title="TCC">
                       <div className="confi-box">
                                <h5 className="text-center mb-4">Team Coordination & Collaboration</h5>
                                <p className="text-center col-7 m-auto mb-5">
                                    Effective launches require cross-functional alignment. GoLanzar connects teams from regulatory, portfolio management, finance, procurement, packaging, planning, business development, manufacturing, and others under a single platform.

                                </p>
                                
                                <Slider {...settings} className="benefits-slider">
                                    <div className="benefits-box">
                                        <div className="overflow-hidden">
                                            <Image src={IMAGES.GoLanzar_CentralisedTaskManagement} alt="benifits" className="w-100" />
                                        </div>
                                        <div className="benefits-hidden">
                                            <h6>Centralised task management and Ownership</h6>
                                           <p className="mb-0">Assign, track, and manage responsibilities in one place to ensure clarity and accountability across teams.  </p>
                                        </div>
                                    </div>
                                    <div className="benefits-box">
                                        <div className="overflow-hidden">
                                            <Image src={IMAGES.GoLanzar_SeamlessCommunication} alt="benifits" className="w-100" />
                                        </div>
                                        <div className="benefits-hidden">
                                            <h6>Seamless communication channels</h6>
                                            <p className="mb-0">Enable instant collaboration and information sharing to keep every stakeholder aligned in real time.</p>
                                        </div>
                                    </div>
                                    <div className="benefits-box">
                                        <div className="overflow-hidden">
                                            <Image src={IMAGES.GoLanzar_MilestoneTracking} alt="benifits" className="w-100" />
                                        </div>
                                        <div className="benefits-hidden">
                                            <h6>Milestone Tracking with Progress Visibility</h6>
                                           <p className="mb-0"> Monitor key launch milestones with transparent dashboards that highlight progress and potential delays.</p>
                                        </div>
                                    </div>
                                     <div className="benefits-box">
                                        <div className="overflow-hidden">
                                            <Image src={IMAGES.GoLanzar_IntegrationEnterprise} alt="benifits" className="w-100" />
                                        </div>
                                        <div className="benefits-hidden">
                                            <h6>Integration with enterprise systems (ERP, QMS, LIMS)</h6>
                                           <p className="mb-0">Connect effortlessly with existing enterprise tools for unified data flow and smooth cross-system coordination.</p>
                                        </div>
                                    </div>
                                </Slider>
                            </div> 
                </Tab>
                <Tab eventKey="dms" title="IAR">
                      <div className="confi-box">
                                <h5 className="text-center mb-4">Intelligent Automation & Reporting</h5>
                                <p className="text-center col-7 m-auto mb-5">
                                    Automation reduces manual effort and improves accuracy across launch activities.


                                </p>
                                
                                <Slider {...settings} className="benefits-slider">
                                    <div className="benefits-box">
                                        <div className="overflow-hidden">
                                            <Image src={IMAGES.GoLanzar_CentralisedTaskManagement} alt="benifits" className="w-100" />
                                        </div>
                                        <div className="benefits-hidden">
                                            <h6>Automated Workflows and Task Execution
</h6>
                                           <p className="mb-0">Reduce manual effort with automated, standardised processes that ensure accuracy and speed.
  </p>
                                        </div>
                                    </div>
                                    <div className="benefits-box">
                                        <div className="overflow-hidden">
                                            <Image src={IMAGES.GoLanzar_SeamlessCommunication} alt="benifits" className="w-100" />
                                        </div>
                                        <div className="benefits-hidden">
                                            <h6>Real-Time Alerts and Escalations
</h6>
                                            <p className="mb-0"> Stay proactive with instant notifications that flag delays or issues before they impact timelines.
</p>
                                        </div>
                                    </div>
                                    <div className="benefits-box">
                                        <div className="overflow-hidden">
                                            <Image src={IMAGES.GoLanzar_MilestoneTracking} alt="benifits" className="w-100" />
                                        </div>
                                        <div className="benefits-hidden">
                                            <h6>Customisable Dashboards and Reports
</h6>
                                           <p className="mb-0">  Gain complete visibility with configurable dashboards tailored to team and leadership needs.
</p>
                                        </div>
                                    </div>
                                     <div className="benefits-box">
                                        <div className="overflow-hidden">
                                            <Image src={IMAGES.GoLanzar_IntegrationEnterprise} alt="benifits" className="w-100" />
                                        </div>
                                        <div className="benefits-hidden">
                                            <h6>Predictive Insights for Proactive Planning
</h6>
                                           <p className="mb-0"> Leverage data intelligence to anticipate challenges and make informed, forward-looking decisions.
</p>
                                        </div>
                                    </div>
                                </Slider>
                            </div> 
                </Tab>
                <Tab eventKey="tms" title="FLSO">
                          <div className="confi-box">
                                <h5 className="text-center mb-4">Faster Launches. Smarter Operations.</h5>
                                <p className="text-center col-7 m-auto mb-5">
                                   By uniting teams, data, and processes, GoLanzar simplifies workflows, eliminates redundancies, and drives smarter execution to bring products to market faster.


                                </p>
                                
                                <Slider {...settings} className="benefits-slider">
                                    <div className="benefits-box">
                                        <div className="overflow-hidden">
                                            <Image src={IMAGES.GoLanzar_CentralisedTaskManagement} alt="benifits" className="w-100" />
                                        </div>
                                        <div className="benefits-hidden">
                                            <h6>Unified Workflows
</h6>
                                           <p className="mb-0">Connect every launch activity through an integrated workflow that enhances coordination and efficiency.
</p>
                                        </div>
                                    </div>
                                    <div className="benefits-box">
                                        <div className="overflow-hidden">
                                            <Image src={IMAGES.GoLanzar_SeamlessCommunication} alt="benifits" className="w-100" />
                                        </div>
                                        <div className="benefits-hidden">
                                            <h6>Automated Processes
</h6>
                                            <p className="mb-0">Eliminate repetitive manual tasks with automation that ensures consistency and accuracy at every stage.
</p>
                                        </div>
                                    </div>
                                    <div className="benefits-box">
                                        <div className="overflow-hidden">
                                            <Image src={IMAGES.GoLanzar_MilestoneTracking} alt="benifits" className="w-100" />
                                        </div>
                                        <div className="benefits-hidden">
                                            <h6>Centralised Data</h6>
                                           <p className="mb-0">  Access all launch information in one place for improved transparency and faster decision-making.
</p>
                                        </div>
                                    </div>
                                     <div className="benefits-box">
                                        <div className="overflow-hidden">
                                            <Image src={IMAGES.GoLanzar_IntegrationEnterprise} alt="benifits" className="w-100" />
                                        </div>
                                        <div className="benefits-hidden">
                                            <h6>Real-Time Insights
</h6>
                                           <p className="mb-0"> Monitor progress through live dashboards that deliver actionable intelligence and performance visibility.
</p>
                                        </div>
                                    </div>
                                </Slider>
                            </div> 
                </Tab>
                </Tabs>
        </Container>
    </div>

    <div className="grey pad80">
        <Container>
            <h2 className="h4 text-center" data-aos="fade-up">WHY CHOOSE GoLanzar?</h2>
            <p className="text-center" data-aos="fade-up">GoLanzar ensures that every launch is executed with precision, efficiency, and strategic<br/> excellence, empowering teams to “beat the clock” and deliver products to market on time, every time.</p>

                <Row className="mt-4 mt-md-5 ">
                    <Col md={6} lg={4}  className="mb-4 ">
                        <div className="choose-box">
                                <div className="choose-icon text-center" data-aos="fade-up">
                                    <Image src={IMAGES.GoLanzar_FasterLaunches} alt="tick"  />
                                </div>
                            <div className="choose-data" data-aos="fade-up">
                                <h6 >Faster Launches</h6>
                                <p className="mb-0">Reduce delays and accelerate time-to-market.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={4}  className="mb-4 ">
                        <div className="choose-box">
                                <div className="choose-icon text-center" data-aos="fade-up">
                                    <Image src={IMAGES.GoLanzar_EnhancedCollaboration} alt="tick"   />
                                </div>
                            <div className="choose-data" data-aos="fade-up">
                                <h6>Enhanced Collaboration</h6>
                                <p className="mb-0">Align cross-functional teams with clear visibility.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={4}  className="mb-4 ">
                        <div className="choose-box">
                                <div className="choose-icon text-center" data-aos="fade-up">
                                    <Image src={IMAGES.GoLanzar_DataDrivenDecisions} alt="tick"   />
                                </div>
                            <div className="choose-data"  data-aos="fade-up">
                                <h6  data-aos="fade-up">Data-Driven Decisions</h6>
                                <p  data-aos="fade-up" className="mb-0">Make informed choices with real-time insights.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={4}  className="mb-4">
                        <div className="choose-box">
                                <div className="choose-icon text-center" data-aos="fade-up">
                                    <Image src={IMAGES.GoLanzar_ScalableFlexible} alt="tick"   />
                                </div>
                            <div className="choose-data"  data-aos="fade-up">
                                <h6  data-aos="fade-up">Scalable & Flexible </h6>
                                <p  data-aos="fade-up" className="mb-0">Suitable for launches of any size or complexity.</p>
                            </div>
                        </div>
                    </Col>

                    <Col md={6} lg={4} className="mb-4">
                        <div className="choose-box">
                                <div className="choose-icon text-center" data-aos="fade-up">
                                    <Image src={IMAGES.GoLanzar_FutureReady} alt="tick"   />
                                </div>
                            <div className="choose-data"  data-aos="fade-up">
                                <h6  data-aos="fade-up">Future-Ready</h6>
                                <p  data-aos="fade-up " className="mb-0">Continuous innovation to meet evolving pharmaceutical launch needs.</p>
                            </div>
                        </div>
                    </Col>


<Col md={8}  className="m-auto text-center" data-aos="fade-up">
<p className="mb-0">
    GoLanzar ensures that every launch is executed with precision, efficiency, and strategic excellence, empowering teams to “beat the clock” and deliver products to market on time, every time.

</p>
</Col>

                </Row>
        </Container>
    </div>

     <div className="grey  insights-wrapper pt-0">
        <Container>
            <h2 className="h4 text-center mb-4 mb-md-5" data-aos="fade-up">FOR INSIGHTS  <br />THAT KEEP YOU AHEAD</h2>
            <Bloghomepage />
        </Container>
    </div>

    <div className="pad80 grey discover-from">
                        <Container>
                            <h2 className="h4 text-center"  data-aos="fade-up">DISCOVER THE FUTURE OF<br/> INTELLIGENT COMPLIANCE<br/> WITH GoLanzar</h2>    
                            <Row className="mt-4 mt-md-5">
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