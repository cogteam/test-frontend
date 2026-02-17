"use client"; // Required for useState and event handlers
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedinIn } from "react-icons/fa6";
import { IMAGES } from "../../assets/images";
import { VALUES_DATA, BOARD_DATA } from "./aboutData";

// 3. Lazy Load Leadership Section (Reduces initial JS bundle)
const LeadershipSection = dynamic(() => import("@/components/LeadershipSection/page"), {
  loading: () => <div className="grey pad80" style={{ minHeight: '500px' }}>Loading...</div>
});



const BANNER_DATA = [
  {
    id: 1,
    desktop: IMAGES.About_Life,
    mobile: IMAGES.HOMEBANNER_MOB1,
    alt: "Life Science Innovation",
    className: "slide-life"
  },
  {
    id: 2,
    desktop: IMAGES.About_Science,
    mobile: IMAGES.HOMEBANNER_MOB2,
    alt: "Technology Solutions",
    className: "slide-science"
  },
  {
    id: 3,
    desktop: IMAGES.About_Possibility,
    mobile: IMAGES.HOMEBANNER_MOB3,
    alt: "Future Possibilities",
    className: "slide-possibilities"
  },
];


export default function AboutUs() {

    const [activeTab, setActiveTab] = useState("primary");

  return (
    <>
      {/* Initialize Animations */}
      {/* <AOSInit />
      <Header /> */}

      {/* 4. HERO SECTION - Added Background Color for Contrast LCP */}
      <div className="inner-head grey product-wrapper position-relative" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="position-absolute w-100 h-100 top-0 start-0" style={{ zIndex: 0 }}>
             <Image 
                src={IMAGES.Aboutbanner} 
                alt="Arcolab Innovation Center" 
                priority // Keep priority for LCP
                placeholder="blur" // Adds a blur effect while loading (if imports are static)
                sizes="100vw"
                fill
                style={{ objectFit: 'cover' }}
             />
             {/* Dark overlay to ensure text readability if image is bright */}
        </div>
        
        <Container className="d-flex align-items-center h-100 position-relative" style={{ zIndex: 1 }}>
          <div>
            <h1 className="h4 mt-0 text-black" data-aos="fade-up">LIFE SCIENCE <br /><span>innovation center</span></h1>
            <p className="text-black" data-aos="fade-up" data-aos-delay="100">Unlock the power of streamlined operations and<br /> accelerated growth! </p>
          </div>
        </Container>
      </div>

      {/* 5. VISION SECTION */}
      <div className="pad80 grey vision-wraper overflow-hidden" id="vision">
        <Container>
          <h2 className="h4 text-center mb-0" data-aos="fade-up">Building the Future of <br /><span>Life Sciences, Together.</span></h2>
          {/* <p className="col-lg-6 text-center m-auto" data-aos="fade-up">
            Arcolab is designed as a center of excellence with the purpose of offering a wide range of life science services.
          </p> */}


          <Row className="mt-4 mt-md-5">

<Col md={11}>
               <div className="d-flex vision-box-inner-align  mb-md-5">
                  <div className="vision-box-inner p-0">
                    {/* <h3>POSITIONING</h3> */}
                    <p className="mb-0 mt-3">Pivot Path is a life sciences solutioning organization that integrates technology, platforms and domain
expertise to deliver transformative solutions for customers across the globe.</p>



                  </div>
                  
                </div>
            </Col>


            <Col md={4} data-aos="fade-right">
              {/* Added sizes prop for performance */}
              <div className="h-100 position-relative" style={{ minHeight: '300px' }}>
                <Image 
                  src={IMAGES.Vision} 
                  alt="Vision and Mission" 
                  fill 
                  style={{ objectFit: 'cover' }} 
                  className="challenges-img h-100"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </Col>

            <Col md={8} data-aos="fade-left">
              <div className="vision-box">
                <div className="d-flex vision-box-inner-align">
                  <div className="vision-box-inner">
                    <h3>VISION</h3>
                    <p className="mb-0">To be the trusted global leader for life sciences, delivering impact through transformative technologies
and innovative solutions with an aim to enhance patient lives.</p>
                  </div>
                  <div>
                    <Image src={IMAGES.VISION_LOGO} alt="Vision Logo" className="clrlogo" width={60} height={60} style={{ width: '60px', height: 'auto' }} />
                    <Image src={IMAGES.VISION_LOGO_WHITE} alt="Vision Logo" className="whitelogo" width={60} height={60} style={{ width: '60px', height: 'auto' }} />
                  </div>
                </div>
              </div>

              <div className="vision-box mission-box-hover-area pb-0">
                <div className="d-flex vision-box-inner-align">
                  <div className="vision-box-inner">
                    <h3>MISSION</h3>
                    <p className="mb-0">To enable life science innovation by combining technology, domain expertise and collaborative
solutioning to deliver measurable outcomes for our customers.</p>
                  </div>
                  <div>
                    <Image src={IMAGES.MISSION_LOGO} alt="Mission Logo" className="clrlogo" width={60} height={60} />
                    <Image src={IMAGES.MISSION_LOGO_WHITE} alt="Mission Logo" className="whitelogo" width={60} height={60} />
                  </div>
                </div>
                <ul className="mission-pointers">
                  <li>Powered by agile and scalable technology platforms.</li>
                  <li>Strengthened through scientific expertise and SMEs.</li>
                  <li>Enabled by engaged and empowered teams.</li>
                  <li>Delivered through deep partnership with customers and collaborators.</li>
                </ul>
              </div>
            </Col>


             


          </Row>
        </Container>

       
      </div>


      

      {/* 6. VALUES SECTION */}
      <div className="pad80 grey2 values-wrapper" id="values">
        <Container>
          <h2 className="h4 text-center" data-aos="fade-up">OUR <span>VALUES</span></h2>
          {/* <p className="col-lg-7 text-center m-auto" data-aos="fade-up">
            At Arcolab, our core values form the bedrock of our actions.
          </p> */}

          <Row className="mt-4 mt-md-5">
            <Col md={6} lg={4} data-aos="fade-up">
              <div className="values-box values-box2 p-0 position-relative">
                {/* Optimized Static Image */}
                <Image 
                  src={IMAGES.Values1} 
                  alt="Our Values" 
                  style={{ width: '100%', height: 'auto' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="h-100"
                />
              </div>
            </Col>
            {VALUES_DATA.map((val, i) => (
              <Col md={6} lg={4} key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="values-box">
                  {/* Fixed width/height for icons prevents reflows */}
                  <Image src={val.icon} alt={val.title} width={60} height={60} />
                  <div className="values-caption">
                    <h6>{val.title}</h6>
                    <p>{val.desc}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>


  <div className="pad80">
  <Container>
    <h2 className="h4 text-center" data-aos="fade-up">
      OUR CORE <span>ETHOS</span>
    </h2>

    <div className="aboutSection position-relative overflow-hidden mt-4 mt-md-5">
      
      {/* 1. BACKGROUND IMAGES */}
      <div className="bg-image-container">
        {BANNER_DATA.map((item) => {
          // Define which tab key matches which ID
          const tabKeys = ["primary", "preprimary", "preprimaryed"];
          const isActive = activeTab === tabKeys[item.id - 1];

          return (
            <div 
              key={item.id} 
              className="position-absolute w-100 h-100 top-0 start-0"
              style={{ 
                opacity: isActive ? 1 : 0, 
                zIndex: 0,
                transition: 'opacity 0.5s ease-in-out' 
              }}
            >
              {/* Desktop Image: Hidden on mobile (d-none), visible on medium screens+ (d-md-block) */}
              <div className="d-none d-md-block position-relative w-100 h-100">
                 <Image
    src={item.desktop}
    alt={item.alt}
    fill // Use the fill prop explicitly
    style={{ objectFit: 'cover' }}
    // sizes="100vw"
    priority={item.id === 1}
  />
              </div>

              {/* Mobile Image: Visible on mobile (d-block), hidden on medium screens+ (d-md-none) */}
              <div className="d-block d-md-none position-relative w-100 h-100">
                <Image
    src={item.mobile}
    alt={item.alt}
    fill // Use the fill prop explicitly
    style={{ objectFit: 'cover'}}
    // sizes="100vw"
  />
              </div>
            </div>
          );
        })}
      </div>

      {/* 2. HOVER CONTENT */}
      <div className="row" style={{ zIndex: 1}}>
        <div className="col-md-4">
          <div className="hover_div hover_divp boder-rt" onMouseEnter={() => setActiveTab("primary")}>
            <strong> LIFE.</strong>
            <p>Represents our deep-rooted commitment to human health & our purpose in enhancing lives.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="hover_div hover_divp boder-rt" onMouseEnter={() => setActiveTab("preprimary")}>
            <strong>SCIENCE.</strong>
            <p>Reflects our data-driven approach, digital expertise, and innovation all backed by next-gen technology.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="hover_div hover_divp boder-rt" onMouseEnter={() => setActiveTab("preprimaryed")}>
            <strong>POSSIBILITIES.</strong>
            <p>Showcase our ability to unlock new horizons for global life sciences organizations.</p>
          </div>
        </div>
      </div>
    </div>
  </Container>
</div>

      {/* 7. LEADERSHIP (Client Component) */}
      <LeadershipSection />

      

      {/* 8. BOARD SECTION */}
      <div className="pad80 team-wrapper" id="bod">
        <Container>
          <h2 className="h4 text-center" data-aos="fade-up">BOARD OF <span>DIRECTORS</span></h2>
          <p className="col-lg-7 text-center m-auto" data-aos="fade-up">At PivotPath, our core values form the bedrock.</p>

          <Row className="mt-4 mt-md-5">
            {BOARD_DATA.map((director, i) => (
              <Col lg={4} md={6} key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="team-box mb-lg-0">
                  <div className="overflow-hidden position-relative">
                    {/* Size optimization for Team Cards */}
                    <Image 
                      src={director.img} 
                      alt={director.name} 
                       width={416} // Add default width
                        height={465} // Add default height
                      className="w-100 h-auto" 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="d-flex">
                    <Link target="_blank" className="linkedin-span" href={director.link} aria-label={`LinkedIn profile of ${director.name}`}>
                        <FaLinkedinIn />
                    </Link>
                    <div className="team-dtls">
                      <h4>{director.name}</h4>
                      <small>{director.role}</small>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* <Footer /> */}
    </>
  );
}