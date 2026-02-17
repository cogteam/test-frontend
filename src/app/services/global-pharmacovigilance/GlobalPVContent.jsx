"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
// import Aos from "aos";
import Slider from "react-slick";

// Components
// import Header from "@/components/Header/page";
// import Footer from "@/components/Footer/page";
import Commonfrom from "@/components/Productfrom/Commonfrom/page";
import NextPage from "@/components/NextPage/page";

// Images
import { IMAGES } from "@/assets/images/index.js";
import dots from "../../../assets/images/services/dots.svg";
import DetectPharmaIQbanner from "../../../assets/images/services/Global-Pharmacovigilanc.webp";

export default function Detectharmaiq() {
  // useEffect(() => {
  //   Aos.init({
  //     duration: 1000,
  //     once: true,
  //   });
  // }, []);

  const [key, setKey] = useState("vms");

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
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Helper for dot list items to keep code clean but structure same
  const DotItem = ({ text }) => (
    <li>
      <Image src={dots} alt="dots" /> {text}
    </li>
  );

  return (
    <>
      {/* <Header /> */}

      <div
        className="inner-head inner-head-products product-wrapper"
        style={{ backgroundImage: `url(${DetectPharmaIQbanner.src})` }}
      >
        <div className="banner-inner">
          <Container className="d-flex align-items-center h-100 ">
            <div>
              <h1 className="h4" data-aos="fade-up">
                GLOBAL <br className="d-none d-md-block" />
                <span>Pharmacovigilance</span>
              </h1>
              <p data-aos="fade-up" className=" col-md-9">
                Driving global safety and compliance through expert pharmacovigilance consulting and tailored solutions.
              </p>
            </div>
          </Container>
        </div>
      </div>

      <div className="grey pad80">
        <Container>
          <h2 className="h4 text-center" data-aos="fade-up">
            Empowering Pharmacovigilance Through Expert Consulting Solutions
          </h2>

          <Slider {...settings} className="mt-5 justify-content-center">
            <Col md={4} lg={4}>
              <div className="compliance-box border-0 services-box2">
                <Image src={IMAGES.ProactiveMonitoring} alt="agile" className="h-auto" />
                <div className="services-box2-caption">
                  <h4>Process Improvement</h4>
                  <p className="head">
                    Enhancing efficiency by streamlining workflows and strengthening compliance through targeted gap resolution.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} lg={4}>
              <div className="compliance-box border-0 services-box2 p-0">
                <Image src={IMAGES.ProcessImprovement} alt="agile" className="w-100" />
              </div>
            </Col>

            <Col md={4} lg={4}>
              <div className="compliance-box border-0 services-box2">
                <Image src={IMAGES.Vendoricon} alt="agile" className="h-auto" />
                <div className="services-box2-caption">
                  <h4>Vendor Management</h4>
                  <p className="head">
                    Implementing robust management practices and ensuring reliable partnerships through thorough assessment and qualification.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} lg={4}>
              <div className="compliance-box border-0 services-box2 p-0">
                <Image src={IMAGES.vendor} alt="agile" className="w-100" />
              </div>
            </Col>

            <Col md={4} lg={4}>
              <div className="compliance-box border-0 services-box2">
                <Image src={IMAGES.StrategiciconGlobal || IMAGES.Strategicicon} alt="agile" className="h-auto" />
                <div className="services-box2-caption">
                  <h4>Strategic Development </h4>
                  <p className="head">
                    Aligning pharmacovigilance processes with business objectives while establishing comprehensive, compliant PV systems for
                    operational excellence.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} lg={4}>
              <div className="compliance-box border-0 services-box2 p-0">
                <Image src={IMAGES.StrategicGlobal || IMAGES.Strategic} alt="agile" className="w-100" />
              </div>
            </Col>

            <Col md={4} lg={4}>
              <div className="compliance-box border-0 services-box2">
                <Image src={IMAGES.Complianceicon} alt="agile" className="h-auto" />
                <div className="services-box2-caption">
                  <h4> Compliance Assurance</h4>
                  <p className="head">
                    Conducting thorough audits to ensure inspection readiness while facilitating accurate data migration to maintain
                    integrity and compliance.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} lg={4}>
              <div className="compliance-box border-0 services-box2 p-0">
                <Image src={IMAGES.Compliance} alt="agile" className="w-100" />
              </div>
            </Col>
          </Slider>
        </Container>
      </div>

      <div className="grey pad80 challenges-wrapper service-value pt-0">
        <Container>
          <h2 className="h4 text-center" data-aos="fade-up">
            OUR VALUE PROPOSITION
          </h2>
          <Row className="mt-5">
            <Col md={6} lg={4} className="mb-dflex" data-aos="fade-up">
              <div className="challenges-box h-100">
                <Image src={IMAGES.Multi} className="ComplexRegulations" alt="" />
                <Image src={IMAGES.Multiwhite} className="white-icon" alt="" />
                <h6>Multi-Geography Experience</h6>
                <p> Proven capability in executing projects seamlessly across global markets with regional insights.</p>
              </div>
            </Col>

            <Col md={6} lg={4} className="mb-dflex mt-2 mt-md-0" data-aos="fade-up">
              <div className="challenges-box h-100">
                <Image src={IMAGES.Robust} className="ComplexRegulations" alt="" />
                <Image src={IMAGES.Robustwhite} className="white-icon" alt="" />
                <h6>Robust Planning and Processes</h6>
                <p>Structured frameworks ensure efficiency, consistency, and on-time delivery.</p>
              </div>
            </Col>

            <Col md={6} lg={4} className="mb-dflex mt-2 mt-md-0" data-aos="fade-up">
              <div className="challenges-box h-100">
                <Image src={IMAGES.SMEs} className="ComplexRegulations" alt="" />
                <Image src={IMAGES.SMEswhite} className="white-icon" alt="" />
                <h6>SMEs with Extensive Therapeutic Area Expertise</h6>
                <p>Subject matter experts bring deep scientific understanding to every project.</p>
              </div>
            </Col>

            <Col md={6} lg={4} className="mb-dflex mt-2 mt-md-4" data-aos="fade-up">
              <div className="challenges-box h-100">
                <Image src={IMAGES.Audit} className="ComplexRegulations" alt="" />
                <Image src={IMAGES.Auditwhite} className="white-icon" alt="" />
                <h6>Audit-Ready Quality Processes</h6>
                <p>Compliance-driven operations designed to meet the highest regulatory standards at all times.</p>
              </div>
            </Col>

            <Col md={6} lg={4} className="mb-dflex mt-2 mt-md-4" data-aos="fade-up">
              <div className="challenges-box h-100">
                <Image src={IMAGES.Effectively} className="ComplexRegulations" alt="" />
                <Image src={IMAGES.Effectivelywhite} className="white-icon" alt="" />
                <h6>Effectively Managing Risks</h6>
                <p>Proactive identification and mitigation strategies ensure smooth project execution.</p>
              </div>
            </Col>

            <Col md={6} lg={4} className="mb-dflex mt-2 mt-md-4" data-aos="fade-up">
              <div className="challenges-box h-100">
                <Image src={IMAGES.Reducing} className="ComplexRegulations" alt="" />
                <Image src={IMAGES.Reducingwhite} className="white-icon" alt="" />
                <h6>Reducing Costs</h6>
                <p>Optimised workflows and resource utilisation deliver measurable cost efficiencies.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="grey2 pad80 sr-services">
        <Container>
          <h2 className="h4 text-center" data-aos="fade-up">
            COMPREHENSIVE PV SERVICES
          </h2>
          <p className="text-center" data-aos="fade-up">
            End-to-end pharmacovigilance solutions to ensure patient safety and <br />
            regulatory compliance.
          </p>

          <div className="d-flex flex-wrap services-tab">
            <div className="col-4">
              <p className="text-center">ICSR Case Processing</p>
            </div>
            <div className="col-4">
              <p className="text-center">Aggregate Reporting</p>
            </div>
            <div className="col-4">
              <p className="text-center">Signal Management</p>
            </div>
            <div className="col-4">
              <p className="text-center"> Risk Management & Minimisation Support</p>
            </div>
            <div className="col-4">
              <p className="text-center">PV Regulatory Intelligence </p>
            </div>
            <div className="col-4">
              <p className="text-center">Safety Database Management</p>
            </div>
            <div className="col-4">
              <p className="text-center">PSMF & SDEA Management </p>
            </div>
            <div className="col-4">
              <p className="text-center">xEVMPD Support </p>
            </div>
            <div className="col-4">
              <p className="text-center">REMS Management</p>
            </div>
            <div className="col-4">
              <p className="text-center">Medical Complaints </p>
            </div>
            <div className="col-4">
              <p className="text-center">MICC Support </p>
            </div>
            <div className="col-4">
              <p className="text-center">Social Media Monitoring</p>
            </div>
          </div>

          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3 justify-content-center border-0 sr-tabs"
          >
            <Tab eventKey="vms" title="ICSR">
              <div className="sr-tabs-dtls">
                <Row>
                  <Col md={12} lg={6}>
                    <div className="overflow-hidden">
                      <Image src={IMAGES.icsr} className="w-100" alt="srtabs" />
                    </div>
                  </Col>
                  <Col md={12} lg={6}>
                    <div className="sr-tab-dlts">
                      <h3>ICSR MANAGEMENT</h3>
                      <p>Delivering accurate and efficient case processing solutions from intake to regulatory submission.</p>

                      <div className="sr-tab-dtls-dta">
                        <h6>Intake</h6>
                        <ul>
                          <DotItem text="Case Evaluation" />
                          <DotItem text="Case Booking" />
                          <DotItem text="Triage & Case prioritisation" />
                        </ul>
                      </div>
                      <div className="sr-tab-dtls-dta">
                        <h6>Processing </h6>
                        <ul>
                          <DotItem text="Data Entry" />
                          <DotItem text="Coding (WHO DD and MedDRA)" />
                          <DotItem text="Labelling" />
                          <DotItem text="Seriousness" />
                          <DotItem text="Narrative writing" />
                        </ul>
                      </div>
                      <div className="sr-tab-dtls-dta">
                        <h6>Assessment </h6>
                        <ul>
                          <DotItem text="Medical Review" />
                          <DotItem text="Causality Assessment" />
                          <DotItem text="Case comment" />
                        </ul>
                      </div>
                      <div className="sr-tab-dtls-dta">
                        <h6>Submission </h6>
                        <ul>
                          <DotItem text="Health Authorities submission & Acknowledgement" />
                        </ul>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Tab>
            <Tab eventKey="dms" title="Signal Management">
              <Row>
                <Col md={12} lg={6}>
                  <div className="overflow-hidden">
                    <Image src={IMAGES.Signal} className="w-100" alt="srtabs" />
                  </div>
                </Col>
                <Col md={12} lg={6}>
                  <div className="sr-tab-dlts sr-scroll">
                    <h3>Signal Management</h3>
                    <p>Enabling proactive detection, evaluation, and management of safety signals to safeguard patient well-being.</p>

                    <div className="sr-tab-dtls-dta">
                      <h6> Assessment Strategy</h6>
                      <ul>
                        <DotItem text="Product Strategy" />
                        <DotItem text="Medical Concepts" />
                        <DotItem text="AE grouping (DME, TME and EBGM / Statistical outputs)" />
                        <DotItem text="Review of data from clinical trials, electronic records (EHRs), and social media" />
                      </ul>
                    </div>
                    <div className="sr-tab-dtls-dta">
                      <h6>Signal Monitoring </h6>
                      <ul>
                        <DotItem text="Real-time tracking and identification of safety signals" />
                        <DotItem text="Evaluation of emerging safety issues" />
                      </ul>
                    </div>
                    <div className="sr-tab-dtls-dta">
                      <h6>Signal Analysis </h6>
                      <ul>
                        <DotItem text="Medical review and analysis of signals" />
                        <DotItem text="Risk factor identification and review" />
                        <DotItem text="Trend analysis: Reporting rates based on drug exposure" />
                      </ul>
                    </div>
                    <div className="sr-tab-dtls-dta">
                      <h6> External Data search </h6>
                      <ul>
                        <DotItem text="Data Mining using VigiBase, FAERS, EVDAS data" />
                        <DotItem text="Literature review and assessment" />
                      </ul>
                    </div>
                    <div className="sr-tab-dtls-dta">
                      <h6> Signal identification & Notification </h6>
                      <ul>
                        <DotItem text="Product safety review meetings" />
                        <DotItem text="Signal Validation" />
                        <DotItem text="Notification to Health Authorities" />
                        <DotItem text="Signal confirmation & prioritization" />
                      </ul>

                      <h6 className="mt-3"> Label Updates </h6>
                      <ul>
                        <DotItem text="Handling over 800+ product portfolios across all TAs" />
                        {/* <DotItem text="Signal Validation" /> */}
                        <DotItem text="Expertise in Qualitative and quantitative methods for signal detection" />
                        <DotItem text="Using signal detection tools like Empirica and statistical methods" />
                      </ul>
                    </div>
                  </div>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="tms" title="Medical Information">
              <Row>
                <Col md={12} lg={6}>
                  <div className="overflow-hidden">
                    <Image src={IMAGES.Medical} className="w-100" alt="srtabs" />
                  </div>
                </Col>
                <Col md={12} lg={6}>
                  <div className="sr-tab-dlts">
                    <h3>Medical Information Contact Centre</h3>
                    <p>
                      Our Medical Information Contact Centre is dedicated to providing accurate and timely information to healthcare
                      professionals, patients, and consumers.
                    </p>

                    <div className="sr-tab-dtls-dta">
                      <h6> We strive to ensure that every inquiry is met with professionalism and regulatory compliance.</h6>
                      <ul>
                        <DotItem text="Patient Support" />
                        <DotItem text="Medical Information" />
                        <DotItem text="Adverse Event Reporting" />
                        <DotItem text="Clinical Trial Support" />
                        <DotItem text="Product Quality Complaints" />
                      </ul>
                    </div>
                    <div className="sr-tab-dtls-dta">
                      <h6>Supporting 8+companies for more than 300 products in the US, Canada, UK and EU.</h6>
                      <ul>
                        <DotItem text="Supporting Pharmaceutical, Medical Devices, and Cosmetics companies." />
                        <DotItem text="Local and Global Regulatory Compliance." />
                        <DotItem text="Global Coverage & 24/7 Support." />
                        <DotItem text="Integrated Technology & Multi-lingual Support." />
                        <DotItem text="Omni-channel Enablement Phone, Email, Chat, Social Media" />
                      </ul>
                    </div>
                  </div>
                </Col>
              </Row>
            </Tab>

            <Tab eventKey="rm" title="Aggregate Management">
              <Row>
                <Col md={12} lg={6}>
                  <div className="overflow-hidden">
                    <Image src={IMAGES.Aggregate} className="w-100" alt="srtabs" />
                  </div>
                </Col>
                <Col md={12} lg={6}>
                  <div className="sr-tab-dlts">
                    <h3>Aggregate Management and Writing</h3>
                    <p>Ensuring high-quality, compliant aggregate reports through robust processes and expert oversight.</p>

                    <div className="sr-tab-dtls-dta">
                      <h6> Calendar Management</h6>
                      <ul>
                        <DotItem text="Data Strategy Meeting" />
                        <DotItem text="Calendar Support & Maintenance" />
                      </ul>
                    </div>
                    <div className="sr-tab-dtls-dta">
                      <h6>Planning</h6>
                      <ul>
                        <DotItem text="Preliminary Case Listing" />
                        <DotItem text="Validated Case Listing" />
                        <DotItem text="Final source documents" />
                        <DotItem text="Review of all source documents –labels, cases, health authority requests" />
                      </ul>
                    </div>

                    <div className="sr-tab-dtls-dta">
                      <h6>Development 1 </h6>
                      <ul>
                        <DotItem text="Quality Review" />
                        <DotItem text="Incorporation of Comments" />
                        <DotItem text="AR Sign-off" />
                      </ul>
                    </div>

                    <div className="sr-tab-dtls-dta">
                      <h6>Development 2 </h6>
                      <ul>
                        <DotItem text="Final AR Review" />
                        <DotItem text="Business Partner / Local Market Approval" />
                        <DotItem text="Summary Preparation" />
                        <DotItem text="Submission to Health Authorities" />
                        <DotItem text="Archiving" />
                      </ul>

                      <p className="mt-3">
                        Delivering 100% compliant PBRERs, RMPs, ACOs, CARs, PSURs, and PADERs across diverse therapeutic areas.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="pv" title="Risk Management">
              <Row>
                <Col md={12} lg={6}>
                  <div className="overflow-hidden">
                    <Image src={IMAGES.Risk} className="w-100" alt="srtabs" />
                  </div>
                </Col>
                <Col md={12} lg={6}>
                  <div className="sr-tab-dlts sr-scroll ">
                    <h3>Risk Management reports -RMS, REMS & BRE</h3>
                    <p>Strengthening product safety through strategic risk identification, assessment, and mitigation planning.</p>

                    <div className="sr-tab-dtls-dta">
                      <h6> Risk identification </h6>
                      <ul>
                        <DotItem text="Epidemiological study summaries" />
                        <DotItem text="Literature Review" />
                        <DotItem text="Non-clinical, Clinical & post marketing safety sections" />
                        <DotItem text="Signal review" />
                        <DotItem text="Risk Assessment Reports" />
                        <DotItem text="Trend Analysis" />
                      </ul>
                    </div>
                    <div className="sr-tab-dtls-dta">
                      <h6> Mitigation plan creation </h6>
                      <ul>
                        <DotItem text="Mitigation plan based on Risk Assessment Reports" />
                        <DotItem text="Mitigation plan based on Health Hazard Evaluation Reports" />
                        <DotItem text="Identification of ETASU" />
                      </ul>
                    </div>

                    <div className="sr-tab-dtls-dta">
                      <h6>Plan creation </h6>
                      <ul>
                        <DotItem text="Identification and characterisation of safety concerns" />
                        <DotItem text="Planned PV actions -safety study, brochures, PIL preparation, label creation" />
                        <DotItem text="Post marketing surveillance plan" />
                      </ul>
                    </div>

                    <div className="sr-tab-dtls-dta">
                      <h6>Risk minimisation </h6>
                      <ul>
                        <DotItem text="Preparation of Risk Assessment Documents and matrices" />
                        <DotItem text="Proactive recommendations –Label changes, HCP communications & education, patient education, box warnings, controlled distributions, assisted administration, medication guide" />
                        <DotItem text="Review and update of RMPs / REMs / BREs" />
                      </ul>
                    </div>
                  </div>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="sd" title="Global and Local Literature">
              <Row>
                <Col md={12} lg={6}>
                  <div className="overflow-hidden">
                    <Image src={IMAGES.Global} className="w-100" alt="srtabs" />
                  </div>
                </Col>
                <Col md={12} lg={6}>
                  <div className="sr-tab-dlts">
                    <h3> Global and Local Literature</h3>
                    <p>Conducting systematic literature monitoring to identify safety insights and support regulatory compliance.</p>

                    <div className="sr-tab-dtls-dta">
                      <h6>Literature Search Strategy</h6>
                      <ul>
                        <DotItem text="Literature database: PubMed, MEDLINE, EMBASE" />
                        <DotItem text="Local literature search strategy" />
                        <DotItem text="(Selection of Non-Indexed Journals)" />
                      </ul>
                    </div>
                    <div className="sr-tab-dtls-dta">
                      <h6>Review</h6>
                      <ul>
                        <DotItem text="Compilation of search results and abstracts, Deduplication" />
                        <DotItem text="Review of Literature Hits and classification" />
                        <DotItem text="Case Creation/ Notification to the ICSR team" />
                        <DotItem text="Full text procurement" />
                      </ul>
                    </div>

                    <div className="sr-tab-dtls-dta">
                      <h6>Assessment </h6>
                      <ul>
                        <DotItem text="Medical Relevance" />
                        <DotItem text="Potential Signal Identification" />
                        <DotItem text="Aggregate Report Inclusion" />
                      </ul>
                    </div>

                    <div className="sr-tab-dtls-dta">
                      <h6>Data Transfer </h6>
                      <ul>
                        <DotItem text="Case Creation –ICSR" />
                        <DotItem text="Enhanced efficiency & output" />
                      </ul>
                    </div>
                  </div>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="psmf" title="Toxicology Writing">
              <Row>
                <Col md={12} lg={6}>
                  <div className="overflow-hidden">
                    <Image src={IMAGES.Toxicology} className="w-100" alt="srtabs" />
                  </div>
                </Col>
                <Col md={12} lg={6}>
                  <div className="sr-tab-dlts sr-scroll">
                    <h3>Toxicology Writing</h3>
                    <p> Expert Toxicology Writing for Compliant, Scientifically Sound Product Documentation.</p>

                    <div className="sr-tab-dtls-dta">
                      <h6>BioPharma</h6>
                      <ul>
                        <DotItem text="Permitted Daily Exposure (PDE)/Occupational Exposure Limits (OEL)" />
                        <DotItem text="Health-Based Exposure (HBEL) Report Preparation of Non-Clinical and Clinical Sections (2.4 and 2.6) as per ICH guidelines" />
                        <DotItem text="Impurity qualification as per ICH requirements (ICH M7), including nitrosamines" />
                        <DotItem text="Risk Management Plan (RMP) and CCDS –preparation of the non-clinical section" />
                      </ul>
                    </div>
                    <div className="sr-tab-dtls-dta">
                      <h6>Medical Device</h6>
                      <ul>
                        <DotItem text="Biocompatibility Risk Assessment (BRA)" />
                        <DotItem text="Toxicological Risk Assessment (TRA)" />
                        <DotItem text="Gap Analysis" />
                        <DotItem text="BiologicalEvaluationPlan (BEP)" />
                      </ul>
                    </div>

                    <div className="sr-tab-dtls-dta">
                      <h6>Cosmetics</h6>
                      <ul>
                        <DotItem text="Preparation of Cosmetic Product Safety Report (CPSR)" />
                        <DotItem text="Preparation of raw material (RM)/ Ingredient toxicological profiles" />
                        <DotItem text="Exposure and Margin of Safety (MoS) calculations" />
                        <DotItem text="Proposition 65 calculations" />
                        <DotItem text="Fragrance and Flavours assessment" />
                      </ul>
                      <p className="mt-3 mb-0"> Life science background and DABT and ERT certified Toxicologist with 8+ years of experience.</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="xs" title="Medical Writing">
              <Row>
                <Col md={12} lg={6}>
                  <div className="overflow-hidden">
                    <Image src={IMAGES.MedicalWriting} className="w-100" alt="srtabs" />
                  </div>
                </Col>
                <Col md={12} lg={6}>
                  <div className="sr-tab-dlts">
                    <h3>Medical Writing</h3>
                    <p>We ensure clear, concise medical writing support from pre- to post-marketing product life cycle.</p>

                    <div className="sr-tab-dtls-dta">
                      <h6> BioPharma</h6>
                      <ul>
                        <DotItem text="Protocol development" />
                        <DotItem text="Investigator's Brochures and Patient Leaflet" />
                        <DotItem text="Claims Management" />
                        <DotItem text="Clinical Study Reports (CSR)" />
                        <DotItem text="Manuscripts" />
                        <DotItem text="Complex Medical inquiries response preparation" />
                        <DotItem text="Aggregate reports and Risk Management Plans" />
                      </ul>
                    </div>
                    <div className="sr-tab-dtls-dta">
                      <h6>Medical Device</h6>
                      <ul>
                        <DotItem text="Clinical Evaluation Plan (CEP)" />
                        <DotItem text="Clinical Evaluation Reports (CER)" />
                        <DotItem text="Summary of Safety and Clinical Performance (SSCP)" />
                        <DotItem text="Post Marketing Surveillance Plan (PMS)" />
                        <DotItem text="PSURs" />
                        <DotItem text="Post-market clinical follow-up plans (PMCFP)" />
                      </ul>
                    </div>
                  </div>
                </Col>
              </Row>
            </Tab>
          </Tabs>
        </Container>
      </div>

       <NextPage 
               heading={<>Next-Gen Pharmacovigilance <span>with NovaVigil</span></>}
              para="Pivot Path delivers AI-powered literature surveillance through NovaVigil, our intelligent pharmacovigilance platform. NovaVigil streamlines literature monitoring and ICSR processing by automating article screening, data extraction, and case narrative generation while keeping expert reviewers in control of clinical decisions. By handling repetitive tasks and maintaining complete audit trails, it enables life sciences teams to meet regulatory timelines, scale case volumes without proportional headcount, and focus their expertise on patient safety rather than manual data entry."
              link="/products/novavigil"
              image={IMAGES.NOVAVIGILBANNER} 
            />

      <div className="pad80 grey discover-from">
        <Container>
          <h2 className="h4 text-center" data-aos="fade-up">
            EXPERT-DRIVEN PHARMACOVIGILANCE <span>SOLUTIONS FOR GLOBAL SAFETY</span>
          </h2>

          <Row className="mt-5">
            <Col md={12} lg={6}>
              <Image src={IMAGES.Fromimg} alt="fromimg" className="w-100 h-100 pe-5" data-aos="fade-up" />
            </Col>

            <Col md={12} lg={6}>
              <Commonfrom />
            </Col>
          </Row>
        </Container>
      </div>

      {/* <Footer /> */}
    </>
  );
}