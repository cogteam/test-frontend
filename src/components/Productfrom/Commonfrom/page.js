"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useRouter, usePathname } from "next/navigation";
import { useForm } from "react-hook-form";
import Aos from "aos";
import api from "../../../lib/axios"
import Loader from "@/lib/Loader";

export default function Commonfrom(){

    const router = useRouter();
  const pathname = usePathname(); // e.g. /products/noteiq
  const pageName = pathname.replace(/^\/+/, ""); // removes leading "/" → products/noteiq

  const [isLoading, setIsLoading] = useState(false);
  const [validErrors, setValidErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setValidErrors({});
      setSuccessMessage("");
      setIsLoading(true);

      const sendingData = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        date: data.date,
        message: data.message,
        page: pageName || "unknown",
      };

      const axiosConfig = {
        method: "post",
        url: "/product-from/add",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        data: JSON.stringify(sendingData),
      };

      await api(axiosConfig);
      setSuccessMessage("Form submitted successfully!");
      router.push("/thank-you");
    } catch (error) {
      console.error("Error submitting form:", error);
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
    return(


        <>
        
        
                  <Form onSubmit={handleSubmit(onSubmit)} method="post">
                <Row>
                  {/* Name */}
                  <Col md={6}>
                    <Form.Group
                      className="mb-4"
                      controlId="Name"
                      data-aos="fade-up"
                    >
                      <Form.Control
                        type="text"
                        placeholder="Your Name"
                        autoComplete="off"
                        {...register("name", {
                          required: "Name is required",
                        })}
                      />
                    </Form.Group>
                    {errors.name && (
                      <p className="error">{errors.name.message}</p>
                    )}
                    <p className="error">{validErrors.name}</p>
                  </Col>

                  {/* Email */}
                  <Col md={6}>
                    <Form.Group
                      className="mb-4"
                      controlId="Email"
                      data-aos="fade-up"
                    >
                      <Form.Control
                        type="text"
                        placeholder="Email*"
                        autoComplete="off"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^\S+@\S+\.\S+$/,
                            message: "Invalid email format",
                          },
                        })}
                      />
                    </Form.Group>
                    {errors.email && (
                      <p className="error">{errors.email.message}</p>
                    )}
                    <p className="error">{validErrors.email}</p>
                  </Col>

                  {/* Phone */}
                  <Col md={6}>
                    <Form.Group
                      className="mb-4"
                      controlId="Phone"
                      data-aos="fade-up"
                    >
                      <Form.Control
                        type="text"
                        placeholder="Phone Number*"
                        autoComplete="off"
                        maxLength={10}
                        {...register("phone", {
                          required: "Phone number is required",
                          pattern: {
                            value: /^\d{10}$/,
                            message: "Enter a valid 10-digit number",
                          },
                        })}
                      />
                    </Form.Group>
                    {errors.phone && (
                      <p className="error">{errors.phone.message}</p>
                    )}
                    <p className="error">{validErrors.phone}</p>
                  </Col>

                  {/* Date */}
                  <Col md={6}>
                    <Form.Group
                      className="mb-4"
                      controlId="Date"
                      data-aos="fade-up"
                    >
                      <Form.Control
                        type="date"
                        autoComplete="off"
                        {...register("date", {
                          required: "Please select a date",
                        })}
                      />
                    </Form.Group>
                    {errors.date && (
                      <p className="error">{errors.date.message}</p>
                    )}
                    <p className="error">{validErrors.date}</p>
                  </Col>

                  {/* Message */}
                  <Col md={12}>
                    <Form.Group
                      className="mb-4"
                      controlId="Message"
                      data-aos="fade-up"
                    >
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Message"
                        autoComplete="off"
                        {...register("message")}
                      />
                    </Form.Group>
                    <p className="error">{validErrors.message}</p>
                  </Col>

                  {/* Checkbox */}
                  <Col md={12}>
                    <div className="form-check mb-3" data-aos="fade-up">
                      <input
                        type="checkbox"
                        id="formBasicCheckbox"
                        className="form-check-input"
                        {...register("policy", {
                          required:
                            "You must accept the privacy policy and terms",
                        })}
                      />
                      <label
                        htmlFor="formBasicCheckbox"
                        className="form-check-label"
                      >
                        I accept the{" "}
                        <Link href="/privacy-policy">Privacy Policy</Link> and
                        terms of use.
                      </label>
                    </div>
                    {errors.policy && (
                      <p className="error">{errors.policy.message}</p>
                    )}
                  </Col>

                  {/* Submit */}
                  <Col md={12} data-aos="fade-up">
                    <button className="btns3 text-uppercase" type="submit">
                      <span>Get in Touch</span>
                    </button>
                  </Col>
                </Row>
              </Form>
              {isLoading && <Loader />}
              {successMessage && (
                <p className="success text-success mt-3">{successMessage}</p>
              )}
                  
        </>
    )
}