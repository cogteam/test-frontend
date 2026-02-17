"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import fromimg from "../../assets/images/from-img.png";
import Commonfrom from "./Commonfrom/page";

export default function productfrom(){
    return(


        <>
        
        <div className="pad80 grey discover-from">
            <Container>
                <h2 className="h4 text-center"  data-aos="fade-up">DISCOVER THE FUTURE OF<br/> INTELLIGENT COMPLIANCE<br/> WITH NOTEIQ</h2>

                <Row className="mt-5">
                    <Col md={12} lg={6}>
                        <Image src={fromimg} alt="fromimg" className="w-100 h-100 pe-5"  data-aos="fade-up" />
                    </Col>

                    <Col md={12} lg={6}>
                          <Commonfrom />
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}