"use client";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "../../assets/images/index.js";

export default function Nexgen() {
  const [nav1, setNav1] = useState(null);
  const [nav3, setNav3] = useState(null); 
  
  // Main content slider settings
  const settingsMain = {
    asNavFor: nav3,
    arrows: false,
    autoplay: true, 
    autoplaySpeed: 6000,
    speed: 1400,
    infinite: true, // Main slider loops
    fade: true,
    draggable: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          draggable: true,
        },
      },
    ],
  };

  // Nav slider (tabs) settings
  const settingsNav = {
    asNavFor: nav1,
    slidesToShow: 5,
    draggable: false,
    swipeToSlide: false,
    focusOnSelect: true,
    arrows: false,
    // FIX: Changed from false to true to match settingsMain
    infinite: true, 
    autoplay: false,
    speed: 1400,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <>
      <div className="invoation-wrappper mt-5 position-relative" data-aos="fade-up">
        {/* Main Slider */}
        <Slider
          {...settingsMain}
          ref={(slider) => setNav1(slider)}
          className="main-slider-class"
        >
           {/* ... Your content slides remain exactly the same ... */}
          <div className="next-gen-box">
            <div className="next-gen-img position-relative">
                <div className="overflow-hidden position-relative next-gen-img2">
                 <Image src={IMAGES.NOTEIQBANNER} alt="" style={{ height: "600px" }} className="w-100" />
                </div>
              <div className="nextgen-data">
                <Image src={IMAGES.NOTEIQLOGO} alt="" className="dk-hide-logo" />
                <Image src={IMAGES.NoteIQLogoFull} alt="" className="mb-show-logo d-none" />
                <p>
                  A cutting-edge platform engineered to revolutionize validation, documentation and training management delivering unmatched compliance and productivity.
                </p>
                <ul>
                  <li><Image src={IMAGES.DOTS} alt="" /> Agile Deployment Integration & Scalability</li>
                  <li><Image src={IMAGES.DOTS} alt="" /> Automated Validation & Document Lifecycle Suite</li>
                  <li><Image src={IMAGES.DOTS} alt="" /> Life Science Regulatory Excellence</li>
                  <li><Image src={IMAGES.DOTS} alt="" /> Engineered on Cutting Edge Technology</li>
                </ul>
                <Link href="/products/noteiq" className="text-uppercase btns-line position-relative">
                  KNOW MORE
                </Link>
              </div>
            </div>
          </div>
            <div className="next-gen-box">
            <div className="next-gen-img position-relative">
             <div className="overflow-hidden position-relative next-gen-img2">
                <Image src={IMAGES.ANOMIQBANNER} alt="" style={{ height: "600px" }} className="w-100" />
            </div> 
              <div className="nextgen-data">
                <Image src={IMAGES.ANOMIQLOGO} alt="" style={{ width: "160px" }} className="dk-hide-logo"  />
                <Image src={IMAGES.AnomIQLogoFull} alt="" className="mb-show-logo d-none" />
                <p>
                  AnomIQ automates anomaly detection and compliance management, helping teams identify issues early, maintain data integrity and achieve confident regulatory compliance.
                </p>
                <ul>
                  <li><Image src={IMAGES.DOTS} alt="" /> Proactive Monitoring & Insights</li>
                  <li><Image src={IMAGES.DOTS} alt="" /> Automated Workflows & Governance</li>
                  <li><Image src={IMAGES.DOTS} alt="" /> Scalable Oversight</li>
                  <li><Image src={IMAGES.DOTS} alt="" /> AI-Powered Transparency</li>
                </ul>
                <Link href="/products/anomiq" className="text-uppercase btns-line position-relative">
                  KNOW MORE
                </Link>
              </div>
            </div>
          </div>
            <div className="next-gen-box">
            <div className="next-gen-img position-relative">
           <div className="overflow-hidden position-relative next-gen-img2">
                <Image src={IMAGES.GOLANZARBANNER} alt="" style={{ height: "600px" }} className="w-100" />
              </div>
              <div className="nextgen-data">
                <Image src={IMAGES.GOLANZARLOGO} alt="" className="dk-hide-logo" />
                <Image src={IMAGES.GolanzarLogoFull} alt="" className="mb-show-logo d-none" />
                <p>
                  GoLanzar is an integrated launch management platform that streamlines pharmaceutical launches through intelligent automation, real-time collaboration, and data-driven insights for faster and more efficient market entry.
                </p>
                <ul>
                  <li><Image src={IMAGES.DOTS} alt="" /> Intelligent Planning & Automation</li>
                  <li><Image src={IMAGES.DOTS} alt="" /> Real-Time Insights & Collaboration</li>
                  <li><Image src={IMAGES.DOTS} alt="" /> Cross-Functional Alignment</li>
                </ul>
                <Link href="/products/golanzar" className="text-uppercase btns-line position-relative">
                  KNOW MORE
                </Link>
              </div>
            </div>
          </div>

<div className="next-gen-box">
            <div className="next-gen-img position-relative">
              <div className="overflow-hidden position-relative next-gen-img2">
              <Image src={IMAGES.INLUMINBANNER} alt="" style={{ height: "600px" }} className="w-100" />
              </div>
              <div className="nextgen-data">
                <Image src={IMAGES.INLUMINLOGO} alt="" className="dk-hide-logo" />
                <Image src={IMAGES.InluminLogoFull} alt="" className="mb-show-logo d-none" />
                <p>
                  InLumin is a next-generation procure-to-pay platform that automates procurement, enhances financial governance and delivers full transparency across every transaction, driving speed, accuracy and accountability.
                </p>
                <ul>
                  <li><Image src={IMAGES.DOTS} alt="" /> Integration & Scalability</li>
                  <li><Image src={IMAGES.DOTS} alt="" /> AI-Driven Accuracy & Compliance</li>
                  <li><Image src={IMAGES.DOTS} alt="" /> Enhanced Collaboration & Control</li>
                </ul>
                <Link href="/products/inlumin" className="text-uppercase btns-line position-relative">
                  KNOW MORE
                </Link>
              </div>
            </div>
          </div>





          <div className="next-gen-box">
            <div className="next-gen-img position-relative">
               <div className="overflow-hidden position-relative next-gen-img2">
              <Image src={IMAGES.NOVAVIGILBANNER} alt="" style={{ height: "600px" }} className="w-100" />
            </div>
              <div className="nextgen-data">
                <Image src={IMAGES.NOVAVIGILLOGO} alt="" className="dk-hide-logo" />
                <Image src={IMAGES.NovaVigilLogoFull} alt="" className="mb-show-logo d-none" />
                <p>
                  NovaVigil transforms pharmacovigilance with intelligent automation and real-time insights, enabling teams to detect risks faster, stay compliant, and protect patient safety with precision.
                </p>
                <ul>
                  <li><Image src={IMAGES.DOTS} alt="" /> Intelligent Automation & Scalability</li>
                  <li><Image src={IMAGES.DOTS} alt="" /> Enhanced Accuracy & Compliance</li>
                  <li><Image src={IMAGES.DOTS} alt="" /> Seamless Data Integration</li>
                </ul>
                <Link href="/products/novavigil" className="text-uppercase btns-line position-relative">
                  KNOW MORE
                </Link>
              </div>
            </div>
          </div>

        

          
        
        </Slider>

        {/* Navigation Slider */}
        <Slider
          {...settingsNav}
          ref={(slider) => setNav3(slider)}
          className="nextgen-head"
        >
          <div className="nexgen-head2 text-uppercase"><h4>NOTEIQ</h4></div>
          <div className="nexgen-head2 text-uppercase"><h4>AnomIQ</h4></div>

          <div className="nexgen-head2 text-uppercase"><h4>GOLANZAR</h4></div>
          <div className="nexgen-head2 text-uppercase"><h4>INLUMIN</h4></div>
            <div className="nexgen-head2 text-uppercase"><h4>NOVAVIGIL</h4></div>
          
        </Slider>
      </div>
    </>
  );
}