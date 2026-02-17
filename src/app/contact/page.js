"use client";

import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Link from "next/link";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import Loader from "@/lib/Loader";
import api from "../../lib/axios";
import { useRouter } from "next/navigation";

import DetectPharmaIQbanner from '../../assets/images/Contact-Us.webp';   

export default function Contact() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const [validErrors, setValidErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      setValidErrors({});
      setSuccessMessage("");
      setIsLoading(true);

      const axiosConfig = {
        method: "post",
        url: "/contact/add",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        data: JSON.stringify(data),
      };

      await api(axiosConfig);
      setSuccessMessage("Your message has been sent successfully!");
      router.push("/thank-you");
    } catch (error) {
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

  return (
    <>
      {/* <Header /> */}

      {/* ⬆ Banner from first code */}
      <div
        className="inner-head grey career-wrapper"
        style={{ backgroundImage: `url(${DetectPharmaIQbanner.src})` }}
      >
        <Container className="text-center d-flex align-items-center vh-100 justify-content-center">
          <div>
            <h1 className="h4 text-black" data-aos="fade-up">
              <span>Contact Us</span>
            </h1>
          </div>
        </Container>
      </div>

      {/* ================= FORM SECTION ================= */}
      <div className="pad80 apply-wrapper">
        <Container>
          <h2 className="h4 text-center" data-aos="fade-up">
            Get in <span>touch</span>
          </h2>
          <p className="text-center" data-aos="fade-up">
            Reach out to us, we’ll ensure your query finds the right expert, fast.
          </p>

          <Form onSubmit={handleSubmit(onSubmit)} method="post">
            <Row>

              {/* Full Name */}
              <Col md={6}>
                <Form.Group className="mb-4" controlId="FullName" data-aos="fade-up">
                  <Form.Control
                    type="text"
                    placeholder="Full Name*"
                    autoComplete="off"
                    {...register("first_name", {
                      required: { value: true, message: "This field is required" },
                      pattern: {
                        value: /^[A-Za-z ]+$/,
                        message: "Only alphabetic characters and spaces are allowed.",
                      },
                    })}
                    onKeyPress={(e) => {
                      const keyValue = String.fromCharCode(e.which || e.keyCode);
                      if (!/^[A-Za-z ]$/.test(keyValue)) e.preventDefault();
                    }}
                  />
                  {errors.first_name && <p className="error">{errors.first_name.message}</p>}
                <p className="error">{validErrors.first_name}</p>
                </Form.Group>
                
              </Col>

              {/* Email */}
              <Col md={6}>
                <Form.Group className="mb-4" controlId="Email" data-aos="fade-up">
                  <Form.Control
                    type="text"
                    placeholder="Email*"
                    autoComplete="off"
                    {...register("email", {
                      required: { value: true, message: "This field is required" },
                      pattern: {
                        value: /^\S+@\S+\.\S+$/,
                        message: "Invalid email format",
                      },
                    })}
                  />
                     {errors.email && <p className="error">{errors.email.message}</p>}
                <p className="error">{validErrors.email}</p>
                </Form.Group>
             
              </Col>

              {/* Phone */}
              <Col md={6}>
                <Form.Group className="mb-4" controlId="Phone" data-aos="fade-up">
                  <Form.Control
                    type="text"
                    placeholder="Phone Number*"
                    autoComplete="off"
                    maxLength={10}
                    {...register("phone", {
                      required: { value: true, message: "This field is required" },
                      pattern: { value: /^\d{10}$/, message: "Invalid mobile number" },
                    })}
                    onKeyPress={(e) => {
                      if (!/^\d+$/.test(String.fromCharCode(e.which || e.keyCode)))
                        e.preventDefault();
                    }}
                  />
                  {errors.phone && <p className="error">{errors.phone.message}</p>}
                <p className="error">{validErrors.phone}</p>
                </Form.Group>
                
              </Col>

              {/* Services Dropdown */}
              <Col md={6}>
                <div className="caret mb-4" data-aos="fade-up">
                  <Form.Select
                    className="form-control"
                    {...register("services", { required: "Please select a service" })}
                  >
                    <option value="">Select Service*</option>
                    <option value="pharmacovigilance-and-clinical">Pharmacovigilance & Clinical</option>
                    <option value="manufacturing-and-supply-chain">Manufacturing & Supply Chain</option>
                    <option value="quality-and-compliance">Quality & Compliance</option>
                    <option value="commercialization">Commercialization</option>
                    <option value="human-capital">Human Capital</option>
                  </Form.Select>
                    {errors.services && <p className="error">{errors.services.message}</p>}
                <p className="error">{validErrors.services}</p>
                </div>
              
              </Col>

              {/* Message */}
              <Col md={12}>
                <Form.Group className="mb-4" controlId="Message" data-aos="fade-up">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Message*"
                    autoComplete="off"
                    {...register("message", {
                      required: { value: true, message: "This field is required" },
                    })}
                  />
                   {errors.message && <p className="error">{errors.message.message}</p>}
                <p className="error">{validErrors.message}</p>
                </Form.Group>
               
              </Col>

              <Col md={12} className="text-center" data-aos="fade-up">
                <button className="btns3">
                  <span>SUBMIT</span>
                </button>
              </Col>

            </Row>
          </Form>

          {isLoading && <Loader />}
        </Container>
      </div>

      {/* CONTACT INFO (same as your upper code) */}
      <div className="pad80 address-wrapper grey">
        <Container>
          <Row>
            <Col md={4} className="pe-0">
              <div className="address" data-aos="fade-up">
                <address>
                  <FaLocationDot />
                  19/2, Sarakki Village, 15th Cross Rd, Dollars Layout, 4th Phase,
                  J.P. Nagar, Bengaluru, Karnataka - 560078, India.
                </address>
              </div>
            </Col>

            <Col md={4} className="ps-0 border-left-1">
              <div className="address" data-aos="fade-up">
                <address>
                  <FaLocationDot />
                  10th Floor, Building No 10, Raheja Mindspace, Hitech City, Madhapur, Hyderabad - 500081, India.
                </address>
              </div>
            </Col>

            <Col md={4}>
              <div className="address d-flex align-items-center flex-wrap justify-content-center" data-aos="fade-up">
               
                <div><Link href="mailto:info@pivotpath.comm" className="d-block ">
                  <FaEnvelope className="d-inline-block  mb-0 me-3" style={{ width: "20px" }} /> info@pivotpath.com
                </Link>
                <Link href="tel:918026586233" className="d-block">
                  <FaPhone className="d-inline-block  mb-0  me-3" style={{ width: "20px", marginLeft:"-22px" }} /> +91 80 26586233
                </Link></div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* <Footer /> */}
    </>
  );
}
