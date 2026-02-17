"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

import logo from "../../assets/images/logo.svg";

export default function Header() {
  const [showAbout, setShowAbout] = useState(false);
  const [showServices, setShowServices] = useState(false);

  return (
    <Navbar expand="lg" className="grey-header">
      <Container>

        {/* Logo */}
        <Navbar.Brand as={Link} href="/" className="p-0 logo">
          <Image src={logo} alt="logo" />
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle aria-controls="offcanvasNavbar" />

        {/* Offcanvas */}
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              <Image src={logo} alt="logo" />
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav className="ms-auto navbar-list">

              {/* ABOUT */}
              <NavDropdown
                title="ABOUT"
                id="about-dropdown"
                show={showAbout}
                onMouseEnter={() => setShowAbout(true)}
                onMouseLeave={() => setShowAbout(false)}
              >
                <NavDropdown.Item as={Link} href="/about">
                  Overview
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/about#vision">
                  Vision & Mission
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/about#leadership">
                  Leadership
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/about#bod">
                  Board of Directors
                </NavDropdown.Item>
              </NavDropdown>

              {/* SERVICES */}
              {/* <NavDropdown
                title="SERVICES"
                id="services-dropdown"
                show={showServices}
                onMouseEnter={() => setShowServices(true)}
                onMouseLeave={() => setShowServices(false)}
              >
                <NavDropdown.Item
                  as={Link}
                  href="/services/global-pharmacovigilance"
                >
                  Global Pharmacovigilance
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  href="/services/clinical-operations"
                >
                  Clinical Operations
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/services/mobile-clinical">
                  Mobile Clinical Services
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  href="/services/computer-system-validation"
                >
                  Computer System Validation
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  href="/services/quality-and-Compliance"
                >
                  Quality & Compliance Services
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  href="/services/digital-manufacturing"
                >
                  Digital Manufacturing
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  href="/services/intellectual-property-consulting"
                >
                  Intellectual Property Consulting
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  href="/services/human-capital-consulting"
                >
                  Human Capital Consulting
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  href="/services/operational-excellence"
                >
                  Operational Excellence
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  href="/services/track-and-trace-solutions"
                >
                  Track and Trace Solutions
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  href="/services/talent-acquisition"
                >
                  Talent Acquisition Services
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  href="/services/human-capital-digitisation"
                >
                  Human Capital Digitisation
                </NavDropdown.Item>
              </NavDropdown> */}

              <Nav.Link as={Link} href="/services" className="text-uppercase">
                SERVICES
              </Nav.Link>

              {/* PRODUCTS */}
              <Nav.Link as={Link} href="/products" className="text-uppercase">
                PRODUCTS
              </Nav.Link>

              {/* CLIENTS */}
              <Nav.Link as={Link} href="/clients" className="text-uppercase">
                CLIENTS
              </Nav.Link>

              {/* INSIGHTS */}
              <Nav.Link as={Link} href="/insights" className="text-uppercase">
                INSIGHTS
              </Nav.Link>

              {/* CAREERS */}
              <Nav.Link as={Link} href="/careers" className="text-uppercase">
                CAREERS
              </Nav.Link>

              {/* CONTACT */}
              <Nav.Link
                as={Link}
                href="/contact"
                className="text-uppercase btns2"
              >
                <span>CONTACT US</span>
              </Nav.Link>

            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
