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
const [showProduct, setShowProduct] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const [showServices1, setShowServices1] = useState(false);
  const [showServices2, setShowServices2] = useState(false);
  const [showServices3, setShowServices3] = useState(false);
  const [showServices4, setShowServices4] = useState(false);
  const [showServices5, setShowServices5] = useState(false);
const isMobile =  typeof window !== "undefined" && window.innerWidth < 992;


  
  return (
    <Navbar expand="lg" className="grey-header"  expanded={expanded}  onToggle={() => setExpanded(!expanded)} >
      <Container>

        {/* Logo */}
        <Navbar.Brand as={Link} href="/" className="p-0 logo">
          <Image src={logo} alt="logo" />
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)}
        className={expanded ? "toggler-open" : ""} />

        {/* Offcanvas */}
        <Navbar.Collapse 
          id="basic-navbar-nav"
          aria-labelledby="offcanvasNavbarLabel"
          className=""
          placement="end"
        >
          {/* <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              <Image src={logo} alt="logo" />
            </Offcanvas.Title>
          </Offcanvas.Header> */}

     
            <Nav className="ms-auto navbar-list" 
            onClick={(e) => {
    if (window.innerWidth < 992) {
      const link = e.target.closest("a");

      // Agar actual navigation link hai
      if (
        link &&
        !link.classList.contains("dropdown-toggle") // dropdown toggle ignore
      ) {
        setExpanded(false);
      }
    }
  }}
            >

              {/* ABOUT */}
              <NavDropdown
  title="ABOUT"
  id="about-dropdown"
  show={showAbout}
  onMouseEnter={() => {
    if (window.innerWidth >= 992) {
      setShowAbout(true);
    }
  }}
  onMouseLeave={() => {
    if (window.innerWidth >= 992) {
      setShowAbout(false);
    }
  }}
  onToggle={(isOpen) => {
    if (window.innerWidth < 992) {
      setShowAbout(isOpen);
    }
  }}
>
                <NavDropdown.Item as={Link} href="/about">
                  Overview
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/about#vision">
                  Vision , Mission & Values
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/about#leadership">
                  Leadership
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/about#bod">
                  Board of Directors
                </NavDropdown.Item>
              </NavDropdown>

              {/* SERVICES */}
              <NavDropdown
                    title={<Link
                    href="/services"
                    className="nav-link server-dropdown"
                    onClick={(e) => e.stopPropagation()}
                  > SERVICES</Link>  }
                id="services-dropdown"
                show={showServices}
                // onMouseEnter={() => setShowServices(true)}
                // onMouseLeave={() => setShowServices(false)}


                onMouseEnter={() => {
    if (window.innerWidth >= 992) {
      setShowServices(true);
    }
  }}
  onMouseLeave={() => {
    if (window.innerWidth >= 992) {
      setShowServices(false);
    }
  }}
  onToggle={(isOpen) => {
    if (window.innerWidth < 992) {
      setShowServices(isOpen);
    }
  }}
              > 

                 <NavDropdown show={showServices1}
                onMouseEnter={() => setShowServices1(true)}
                onMouseLeave={() => setShowServices1(false)} title="Drug Safety & Intelligence" className="submenu2">
                        <NavDropdown.Item as={Link} href="/services/global-pharmacovigilance" className="submenu">
                          Global Pharmacovigilance
                        </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown show={showServices2}
                onMouseEnter={() => setShowServices2(true)}
                onMouseLeave={() => setShowServices2(false)} title="Integrated IP & Clinical Operations" className="submenu2">
                        <NavDropdown.Item as={Link} href="/services/clinical-operations" className="submenu">
                          Clinical Operations
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} href="/services/intellectual-property-consulting" className="submenu">
                          Intellectual Property Consulting
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} href="/services/mobile-clinical" className="submenu">
                          Mobile Clinical Services
                        </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown show={showServices3}
                onMouseEnter={() => setShowServices3(true)}
                onMouseLeave={() => setShowServices3(false)} title="Quality & Digital Compliance" className="submenu2">
                        <NavDropdown.Item as={Link} href="/services/computer-system-validation" className="submenu">
                          Computer System Validation
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} href="/services/quality-and-compliance" className="submenu">
                         Quality & Compliance Services
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} href="/services/operational-excellence" className="submenu">
                          Operational Excellence
                        </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown show={showServices4}
                onMouseEnter={() => setShowServices4(true)}
                onMouseLeave={() => setShowServices4(false)} title="Digital Innovation & Transformation" className="submenu2">
                        <NavDropdown.Item as={Link} href="/services/digital-manufacturing" className="submenu">
                         Digital Manufacturing
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} href="/services/track-and-trace-solutions" className="submenu">
                          Track and Trace Solutions
                        </NavDropdown.Item>
                     
                </NavDropdown>

                <NavDropdown show={showServices5}
                onMouseEnter={() => setShowServices5(true)}
                onMouseLeave={() => setShowServices5(false)} title="Human Capital" className="submenu2">
                        <NavDropdown.Item as={Link} href="/services/human-capital-consulting" className="submenu">
                          	Human Capital Consulting
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} href="/services/human-capital-digitisation" className="submenu">
                         Human Capital Digitisation
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} href="/services/talent-acquisition" className="submenu">
                          Talent Acquisition Services
                        </NavDropdown.Item>
                </NavDropdown>
              
                
              </NavDropdown>

              {/* <Nav.Link as={Link} href="/services" className="text-uppercase">
                SERVICES
              </Nav.Link>

              <Nav.Link as={Link} href="/products" className="text-uppercase">
                PRODUCTS
              </Nav.Link> */}


{/* Product Dropdown */}

              <NavDropdown
                    title={<Link
                    href="/products"
                    className="nav-link server-dropdown"
                    onClick={(e) => e.stopPropagation()}
                  > PRODUCTS</Link>  }
                id="services-dropdown"
                show={showProduct}
              

                  onMouseEnter={() => {
    if (window.innerWidth >= 992) {
      setShowProduct(true);
    }
  }}
  onMouseLeave={() => {
    if (window.innerWidth >= 992) {
      setShowProduct(false);
    }
  }}
  onToggle={(isOpen) => {
    if (window.innerWidth < 992) {
      setShowProduct(isOpen);
    }
  }}
              > 

               
              
                <NavDropdown.Item
                  as={Link}
                  href="/products/noteiq"
                >
                  NoteIQ
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  href="/products/anomiq"
                >
                  AnomIQ
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} href="/products/golanzar">
                 GoLanzar
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  href="/products/inlumin"
                >
                InLumin
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  href="/products/novavigil"
                >
                 NovaVigil
                </NavDropdown.Item>
               
              </NavDropdown>

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
          
        </Navbar.Collapse >
      </Container>
    </Navbar>
  );
}
