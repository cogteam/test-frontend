"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Row, Col, Container } from "react-bootstrap";
import { FaLinkedinIn } from "react-icons/fa6";
import Aos from "aos";
import "aos/dist/aos.css";
import { TEAM_DATA } from "@/app/about/aboutData"; // Import your data

export default function LeadershipSection() {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);

  // Initialize AOS only in this component if needed, or globally in layout
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  // Split team into initial view (e.g., first 6) and hidden view
  const INITIAL_COUNT = 6;
  const initialTeam = TEAM_DATA.slice(0, INITIAL_COUNT);
  const hiddenTeam = TEAM_DATA.slice(INITIAL_COUNT);

  const toggle = () => {
    const content = contentRef.current;
    if (!open) {
      // Slide Down
      content.style.height = content.scrollHeight + "px";
    } else {
      // Slide Up
      content.style.height = content.scrollHeight + "px"; // Set explicit height first
      requestAnimationFrame(() => {
        content.style.height = "0px";
      });
      
      // Scroll back up logic
      setTimeout(() => {
        const target = document.getElementById("leadership");
        if (target) target.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
    setOpen(!open);
  };

  // Helper function to render a single card (DRY Code)
  const TeamCard = ({ member }) => (
    <div className="team-box position-relative overflow-hidden">
      <Image src={member.img} alt={member.name} className="w-100 h-auto" />
      <div className="team-box-data">
        <h6>{member.name}</h6>
        <p>{member.role}</p>
      </div>
      <div className="team-hoverdata">
        <div className="team-scroll">
          {member.bio.map((text, i) => <p key={i}>{text}</p>)}
          {member.link && (
            <Link target="_blank" href={member.link}><FaLinkedinIn /></Link>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="grey pad80 leadership-wrapper" id="leadership">
      <Container>
        <h2 className="h4 text-center" data-aos="fade-up">MEET THE <span>LEADERSHIP TEAM</span></h2>
        <p className="col-lg-7 text-center m-auto" data-aos="fade-up">
          At PivotPath, our core values form the bedrock of our actions.
        </p>

        {/* Visible Team */}
        <Row className="mt-4 mt-md-5">
          {initialTeam.map((member, index) => (
            <Col md={6} lg={4} key={index}>
              <TeamCard member={member} />
            </Col>
          ))}
        </Row>

        {/* Hidden Team (Collapsible) */}
        <div
          id="showteam"
          ref={contentRef}
          style={{ height: 0, overflow: "hidden", transition: "height 0.3s ease" }}
        >
          <Row>
            <Col md={12}>
               {/* Optional Header inside toggle */}
               <h2 className="h4 text-center py-4 py-md-5">Delivery Practices Leader</h2>
            </Col>
            {hiddenTeam.map((member, index) => (
              <Col md={6} lg={4} key={index + INITIAL_COUNT}>
                <TeamCard member={member} />
              </Col>
            ))}
          </Row>
        </div>

        {/* Toggle Button */}
        <div className="text-center mt-4">
          <div style={{ cursor: "pointer" }} onClick={toggle} className="btns3" data-aos="fade-up">
            <span>{open ? "SEE LESS" : "SEE MORE"}</span>
          </div>
        </div>
      </Container>
    </div>
  );
}