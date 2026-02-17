"use client";
import react, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import footervideo from '@/video/footer.mp4';
import logo from '../../assets/images/logo.svg'
import Image from "next/image";
import arrow from '../../assets/images/arrow.svg'
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaXTwitter, FaInstagram ,FaYoutube    } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import privacy from "../../assets/pdf/Privacy-Consent.pdf"
import CSR from "../../assets/pdf/CSR-Policy.pdf"
import api, { domainUrl } from "../../lib/axios";


export default function Footer(){
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // MISSING STATES FIXED👇
  const [validErrors, setValidErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setValidErrors({});
      setSuccessMessage("");
      setIsLoading(true);

      const sendingData = { ...data };

      const axiosConfig = {
        method: "post",
        url: "subscribe/add",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        data: JSON.stringify(sendingData),
      };

      const response = await api(axiosConfig);

      setSuccessMessage("Your message has been sent successfully!");
      reset();
    } catch (error) {
      console.error("Error:", error);

      if (error.response && error.response.data) {
        setValidErrors(error.response.data);
      } else {
        setValidErrors({
          general: "Something went wrong. Please try again later.",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const currentYear = new Date().getFullYear();

    
    return(

        <>
            <footer className="position-relative">
                <div className="footer-video">
                    <div className="overlay"></div>
                    <video autoPlay loop muted playsInline className="w-100">
                        <source src={footervideo} type="video/mp4" />
                    </video>
                </div>

                <Container className="pad80 pb-0">
                        <Row>
                            <Col md={12} lg={4}>
                                <Image src={logo} alt="logo" className="logo"  data-aos="fade-up"/>
                            </Col>

                            <Col md={12} lg={6} className="m-0">
                                <h2 className="h4 text-center"  data-aos="fade-up">Join Us <br /><span>Newsletter</span></h2>

                                <Form onSubmit={handleSubmit(onSubmit)} method="post" className="d-flex newsletter-box position-relative" data-aos="fade-up">
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="EMAIL ADDRESS"
                  {...register("email", {
                    required: { value: true, message: "This field is required" },
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "Invalid email",
                    },
                  })}
                />

                <button disabled={isLoading}>
                  <Image src={arrow} alt="arrow" />
                </button>
              </Form>

              {/* Validation Messages */}
              {errors.email && <p className="error newsletter-box mt-1">{errors.email?.message}</p>}
              {validErrors.email && <p className="error">{validErrors.email}</p>}
              {successMessage && <p className="success-msg">{successMessage}</p>}
            </Col>
                            
                        </Row>

                        <Row className="mt-6">
                            <Col lg={3} md={3} sm={6} xs={6}>
                                <div className="quick-links">
                                    <h6  data-aos="fade-up">ABOUT</h6>
                                        <ul>
                                            <li  data-aos="fade-up"><Link href="/about#vision">Vision & Mission</Link></li>
                                            <li  data-aos="fade-up"><Link href="/about#values">Core Value</Link></li>
                                            <li  data-aos="fade-up"><Link href="/about#leadership">Leadership</Link></li>
                                            {/* <li  data-aos="fade-up"><Link href="/">Recognition</Link></li> */}
                                        </ul>
                                </div>
                            </Col>
                            <Col lg={3} md={3} sm={6} xs={6}>
                                <div className="quick-links">
                                    <h6 data-aos="fade-up">PRODUCTS</h6>
                                        <ul>
                                             <li data-aos="fade-up"><Link href="/products/noteiq">NoteIQ</Link></li>
                                             <li data-aos="fade-up"><Link href="/products/anomiq">AnomIQ</Link></li>
                                             <li data-aos="fade-up"><Link href="/products/golanzar">GoLanzar</Link></li>
                                             <li data-aos="fade-up"><Link href="/products/inlumin">InLumin</Link></li>
                                             <li data-aos="fade-up"><Link href="/products/novavigil">NovaVigil</Link></li>
                                             
                                             
                                             
                                        </ul>
                                </div>
                            </Col>
                            <Col lg={4} md={3} sm={6} xs={6}>
                                <div className="quick-links mt-3 mt-md-0">
                                    <h6 data-aos="fade-up">SERVICES</h6>
                                        <ul>
                                             <li data-aos="fade-up"><Link href="/services/#drug-safety-and-intelligence" scroll={true}>Drug Safety & Intelligence</Link></li>
                                             <li data-aos="fade-up"><Link href="/services/#drug-research-and-development" scroll={true}>Integrated IP & Clinical Operations</Link></li>
                                             <li data-aos="fade-up"><Link href="/services/#quality-and-compliance" scroll={true}>Quality & Digital Compliance</Link></li>
                                             <li data-aos="fade-up"><Link href="/services/#digital-innovation-and-transformation" scroll={true}>Digital Innovation & Transformation</Link></li>
                                             <li data-aos="fade-up"><Link href="/services/#human-capital" scroll={true} >Human Capital</Link></li>
                                        </ul>
                                </div>
                            </Col>
                            <Col lg={2} md={3} sm={6} xs={6}>
                                <div className="quick-links mt-3 mt-md-0">
                                    <h6  data-aos="fade-up">INSIGHTS</h6>
                                    <ul>
                                    <li  data-aos="fade-up"><Link href="/insights">Case Studies</Link></li>
                                    <li  data-aos="fade-up"><Link href="/insights">White Paper</Link></li>
                                    <li  data-aos="fade-up"><Link href="/blogs">Blogs</Link></li>
                                    </ul>


                                    
                                </div>
                            </Col>
                            <Col>
                                <div className="quick-links addlink">
                                    <h6  data-aos="fade-up">CONTACT</h6>
                                    <address className="d-inline-block"  data-aos="fade-up">Bangalore, India </address>| <address className="d-inline-block"  data-aos="fade-up">Mysuru, India </address>|
                                    <address className="d-inline-block" data-aos="fade-up">Hyderabad, India </address> |
                                    <a href="mailto:info@pivotpath.com" className="d-inline-block"  data-aos="fade-up">
                                       info@pivotpath.com 
                                    </a> | 
                                    <a href="tel:8026586233" className="d-inline-block"  data-aos="fade-up">
                                       +91 80 26586233 
                                    </a>
                                </div>
                            </Col>
                        </Row>

                        <Row className="pt-4 py-md-5 align-items-center">
                            <Col md={3} lg={4}>
                                <div className="social-icon d-flex">
                                  <Link  href="/"><FaLinkedinIn /></Link>
                                  <Link  href="/"><FaYoutube /> </Link>
                                    {/* <Link  href="/"><FaFacebookF /></Link> */}
                                                                        <Link  href="/"><FaInstagram /></Link>

                                    {/* <Link  href="/"><FaXTwitter /></Link> */}
                                    
                                </div>
                            </Col>

                            <Col md={9} lg={8}>
                                <div className="text-end quick-links2">
                                    {/* <Link  href="/careers">Careers</Link> */}
                                    <Link  href="/terms-of-use">Terms of use </Link>
                                    <Link  href={privacy} target="_blank">Privacy Policy</Link>
                                    <Link  href="/consent-policy">Consent Policy</Link>
                                    <Link  href={CSR} target="_blank">CSR Policy</Link>
                                     <Link  href="/privacy-breach-reporting">Privacy Breach Reporting</Link>
                                     
                                </div>
                            </Col>

                        </Row>
                </Container>
            </footer>
            <div className="copyright">
                <Container>
                    <p className="m-0 text-center">Copyright © {currentYear} Pivot Path Private Limited. All rights reserved.</p>
                </Container>
            </div>
        </>
    )
} 