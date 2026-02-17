"use client"; // Keep this here
import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa6";


export default function NextPage({ heading, para, link, image }) {
  
  return (
     <div className="vh-100 overflow-hidden move-next-page position-relative">
        
        {/* Dynamic Image */}
        <Image 
          src={image} 
          className="w-100 h-100 object-fit-cover" 
          alt={heading || "Background image"} 
          style={{ objectFit: 'cover', objectPosition: 'top' }}
        />  

        {/* Dark Tint Overlay */}
        <div 
          className="position-absolute top-0 start-0 w-100 h-100 bg-black" 
          style={{ opacity: 0.5 }} 
        ></div>

        {/* Content Overlay */}
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center">
          <Container>
            <Row>
                <Col className="col-md-10 m-auto">
                    <div className="text-white text-center">
              
              {/* Dynamic Heading */}
              <h2 className='h4 mb-3'>{heading}</h2>
              
              {/* Dynamic Paragraph */}
              <p className="mb-5">
                {para}
              </p>
              
              {/* Dynamic Link */}
              <Link href={link || "#"} className="animated-btn">
                <span>Read More</span>
                <FaArrowRight className="ms-2 icon-arrow" />
              </Link>

            </div>
                </Col>
            </Row>
          </Container>
        </div>

      </div>
  );
}