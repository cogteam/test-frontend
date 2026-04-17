"use client"; // Required for useState and event handlers
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight, FaLinkedinIn } from "react-icons/fa6";
import { IMAGES } from "../../assets/images";
import { VALUES_DATA, BOARD_DATA } from "./aboutData";
import epic from "../../assets/images/epic.webp";
import Slider from "react-slick";
import e_epic from "../../assets/images/logo/e_epic.webp";
import p_epic from "../../assets/images/logo/p_epic.webp";
import i_epic from "../../assets/images/logo/i_epic.webp";
import c_epic from "../../assets/images/logo/c_epic.webp";
import arcolab_logo from "../../assets/images/arcolab_logo.png";
import logo from "../../assets/images/logo.svg";
// 3. Lazy Load Leadership Section (Reduces initial JS bundle)


// Client logos list using IMAGES.LOGO1 ... LOGO21
const clientLogos = [
    { name: "Client 1", image: IMAGES.LOGO1, alt: "Client 1 Logo" },
    { name: "Client 2", image: IMAGES.LOGO2, alt: "Client 2 Logo" },
    { name: "Client 3", image: IMAGES.LOGO3, alt: "Client 3 Logo" },
    { name: "Client 4", image: IMAGES.LOGO4, alt: "Client 4 Logo" },
    { name: "Client 5", image: IMAGES.LOGO5, alt: "Client 5 Logo" },
    { name: "Client 6", image: IMAGES.LOGO6, alt: "Client 6 Logo" },
    { name: "Client 7", image: IMAGES.LOGO7, alt: "Client 7 Logo" },
    { name: "Client 8", image: IMAGES.LOGO8, alt: "Client 8 Logo" },
    { name: "Client 9", image: IMAGES.LOGO9, alt: "Client 9 Logo" },
    { name: "Client 10", image: IMAGES.LOGO10, alt: "Client 10 Logo" },
    { name: "Client 11", image: IMAGES.LOGO11, alt: "Client 11 Logo" },
    { name: "Client 12", image: IMAGES.LOGO12, alt: "Client 12 Logo" },
    { name: "Client 13", image: IMAGES.LOGO13, alt: "Client 13 Logo" },
    { name: "Client 14", image: IMAGES.LOGO14, alt: "Client 14 Logo" },
    { name: "Client 15", image: IMAGES.LOGO15, alt: "Client 15 Logo" },
    { name: "Client 16", image: IMAGES.LOGO16, alt: "Client 16 Logo" },
    { name: "Client 17", image: IMAGES.LOGO17, alt: "Client 17 Logo" },
    { name: "Client 18", image: IMAGES.LOGO18, alt: "Client 18 Logo" },
    { name: "Client 19", image: IMAGES.LOGO19, alt: "Client 19 Logo" },
    { name: "Client 20", image: IMAGES.LOGO20, alt: "Client 20 Logo" },
    { name: "Client 21", image: IMAGES.LOGO21, alt: "Client 21 Logo" },
];


const LeadershipSection = dynamic(() => import("@/components/LeadershipSection/page"), {
  loading: () => <div className="grey pad80" style={{ minHeight: '500px' }}>Loading...</div>
});

const epicslider = {
  arrows: false,
  fade: false,
  infinite: true,
  speed: 1200,
  dots: true,
   loop: false,

  responsive: [
    {
      breakpoint: 768, // mobile & tablet
      settings: {
        autoplay: true,
        autoplaySpeed: 6000,
        draggable: true,
        swipe: true,
        loop: false,
        centerPadding: "20px",
        centerMode: true,
      }
    },
    {
      breakpoint: 9999, // desktop
      settings: "unslick" // slider disabled on desktop
    }
  ]
};

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

  //Custom Arrows

// ✅ Prev Arrow
const PrevArrow = ({ onClick, currentSlide }) => (
  <div
    className={`custom-arrow prev ${currentSlide === 0 ? "disabled" : ""}`}
    onClick={currentSlide === 0 ? null : onClick}
  >
     <span className="product-showcase-carousel-controls product-showcase-carousel-controls--left">
      <FaArrowLeft />
    </span>
  </div>
);

// ✅ Next Arrow (NO window use)
const NextArrow = ({ onClick, currentSlide, slideCount }) => {
  const isDisabled = currentSlide === slideCount - 1;

  return (
    <div
      className={`custom-arrow next ${isDisabled ? "disabled" : ""}`}
      onClick={!isDisabled ? onClick : null}
    >
       <span className="product-showcase-carousel-controls product-showcase-carousel-controls--right">
      <FaArrowRight />
    </span>
    </div>
  );
};

    const [activeTab, setActiveTab] = useState("primary");
// const [slidesToShow, setSlidesToShow] = useState(3);

    const aboutsettings = {
      arrows: true,
    infinite: false,
    // slidesToShow: slidesToShow,
    slidesToShow: 3,
    swipeToSlide: true,
    dots: false,
    nextArrow: <NextArrow  />, //slidesToShow={slidesToShow}
    prevArrow: <PrevArrow  />,
  responsive: [
    {
      breakpoint: 1024, // laptop/tablet
      settings: {
       slidesToShow: 2,
          //beforeChange: () => setSlidesToShow(2),

      }
    },
    {
      breakpoint: 991, // tablet
      settings: {
        slidesToShow:1,
          beforeChange: () => setSlidesToShow(1),
      }
    },
    {
      breakpoint: 767, // mobile
      settings: {
        slidesToShow: 1,
      }
    }
  ]
};
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
                alt="Pivot Path Innovation Center" 
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
            <p className="text-black" data-aos="fade-up" data-aos-delay="100">Unlocking the power of streamlined operations through<br/> our deep domain expertise and next-gen innovations.

 </p>
          </div>
        </Container>
      </div>



<div className="pad80 grey2">
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
      {/* 5. VISION SECTION */}
      <div className="pad80 grey vision-wraper overflow-hidden" id="vision">
        <Container>
          <h2 className="h4 text-center mb-0" data-aos="fade-up">Building the Future of <br /><span>Life Sciences, Together.</span></h2>
          {/* <p className="col-lg-6 text-center m-auto" data-aos="fade-up">
            Pivot Path is designed as a center of excellence with the purpose of offering a wide range of life science services.
          </p> */}


          <Row className="mt-4 mt-md-5">

<Col md={11}>
               <div className="d-flex vision-box-inner-align  mb-md-5">
                  <div className="vision-box-inner p-0">
                    {/* <h3>POSITIONING</h3> */}
                    <p className="mb-0 mt-3 mb-text-center">Pivot Path is a life sciences solutioning organization that integrates technology, platforms and domain
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

    <div className="pad80 grey2 epic-wrapper" >
          <Container>
              <h2 className="h4 text-center" data-aos="fade-up">Our   <span>cultural compass</span></h2>
              <p className="text-center" data-aos="fade-up">At Pivot Path, culture guides how we think, decide, and act. Our Cultural Compass ensures that<br/> as a newly formed organization, we grow responsibly while delivering meaningful impact in life<br/> sciences. It reflects what we stand for, what we expect, and how we create value for our customers,<br/> partners, and patients.</p>

                <h2 className="mt-5  text-center" data-aos="fade-up">Core Values</h2>

                <Image src={epic} alt="epic" className="w-100 h-auto epic-img mb-5 mt-5" />

              <Slider {...epicslider} className="row epicmb">
                <Col md={3}>
                  <div className="epic-box">
                      <h6 className="e"  data-aos="fade-up"  style={{ backgroundImage: `url(${e_epic.src})` }}>E</h6>
                      {/* <Image src={e_epic} alt="epic" className="w-100" />  */}
                      <h4  data-aos="fade-up">Excellence</h4>
                      <p  data-aos="fade-up">We set the highest standards for quality and rigor. We pursue mastery in our craft and continuous improvement in everything we deliver.</p>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="epic-box" >
                    <h6 className="e" data-aos="fade-down" style={{ backgroundImage: `url(${p_epic.src})` }}>P</h6>
                     {/* <Image src={p_epic} alt="epic" className="w-100" />  */}
                      <h4 data-aos="fade-up">Partnership</h4>
                      <p data-aos="fade-up">We work together across teams, functions, and with our customers. Success is collective, built on trust and shared purpose.</p>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="epic-box" >
                    <h6 className="e" data-aos="fade-Up" style={{ backgroundImage: `url(${i_epic.src})` }}>I</h6>
                     {/* <Image src={i_epic} alt="epic" className="w-100" />  */}
                      <h4 data-aos="fade-up">Innovation</h4>
                      <p data-aos="fade-up">We challenge the status quo and build the future. We embrace bold ideas, learn from failure, and create transformative solutions.</p>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="epic-box" >
                    <h6 className="e" data-aos="fade-down" style={{ backgroundImage: `url(${c_epic.src})` }}>C</h6>
                    {/* <Image src={c_epic} alt="epic" className="w-100" />  */}
                      <h4 data-aos="fade-up">Customer Centricity</h4>
                      <p data-aos="fade-up">We put customer and patient outcomes first. Every decision we make is guided by the impact it creates for those we serve.</p>
                  </div>
                </Col>
              </Slider>
          </Container>
    </div>


      

      {/* 6. VALUES SECTION */}
      <div className="pad80 grey2 pt-0 values-wrapper" id="values">
        <Container>
          {/* <h2 className="h4 text-center" data-aos="fade-up">Fundamental <span>VALUES</span></h2> */}
           <h2 className="mb-3 text-center" data-aos="fade-up">Fundamental <span>Values</span></h2>
          <p className="col-lg-7 text-center m-auto" data-aos="fade-up">
              Integrity, Respect, Accountability and Compliance define who we are. They are the foundation of trust and responsibility at Pivot Path. They are non-negotiable guardrails that protect our people, our customers and our mission.
          </p>

          <Row className="mt-4 mt-md-5">
            <Col md={12} lg={4} data-aos="fade-up">
              <div className="values-box values-box2 p-0 h-auto position-relative">
                {/* Optimized Static Image */}
                <Image 
                  src={IMAGES.Values1} 
                  alt="Our Values" 
                  style={{ width: '100%', height: '546px !important' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="h-100"
                />
              </div>
            </Col>
            
            <Col lg={8} md={12}>
              <Row>
                {VALUES_DATA.map((val, i) => (
              <Col md={6} lg={6} key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="values-box values-box2">
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
            </Col>
          </Row>
        </Container>
      </div>

<div className="pad80">
  <Container>
      <h2 className="h4 text-center" data-aos="fade-up">OUR JOURNEY   <span> OF EVOLUTION</span></h2>

        <div className="jour2 position-relative">
       <Slider    {...aboutsettings}  className="journey-slider-para mt-5">
          <div className="year">           
                <div className="year-content">
                  <span>2019-21</span>
                <h4>Functional Shared<br/> Services Centre </h4>
                  <p>The organisation was established through the integration of 350 employees from five pharma entities under Arcolab. This phase focused on stabilising operations, aligning core functions, and building a strong operational foundation to support future growth.</p>
                  <Image src={arcolab_logo} alt="Journey 2019-21" className="arclob-logo" />
                </div>             
          </div>

          <div className="year">           
                <div className="year-content">
                  <span>2021-22</span>
                <h4>Center of <br/>Excellence </h4>
                  <p>With a stable base in place, the organisation transitioned into a Centre of Excellence, delivering cross-functional initiatives and driving process optimisation through the adoption of technology-led solutions.</p>
                </div>             
          </div>

          <div className="year">                
                <div className="year-content">
                 <span>2022-23</span>
                <h4>Integrated Business<br /> Solutions </h4>
                  <p>Strategic expansion was achieved through the acquisition of Neviton Softech Pvt. Ltd., alongside the outsourcing of IT operations to Coforge. These initiatives enhanced digital capabilities and enabled the delivery of more integrated and scalable business solutions.</p>
                </div>             
          </div>

          <div className="year">
                <div className="year-content">
                 <span>2023-24</span>
                 <h4>Global Capability <br/>Centre </h4>
                  <p>The organisation strengthened its position by launching Procure-to-Pay (P2P) and Project Management solutions, while advancing its Technology Centre of Excellence with a focus on RPA and AI. This progress was recognised through industry accolades, including being named among the Top 3 GCCs at the EY GCC Awards 2023 and receiving Gold at the SEEM Awards 2022.</p>
                </div>              
          </div>

          <div className="year">            
               <div className="year-content">
                <span>2024-25</span>
                <h4>Value Creation <br/>Centre</h4>
                 <p>Expansion into a new office space in Hyderabad marked a significant milestone, alongside the achievement of ISO 27001 and ISO 27701 certifications. Strategic partnerships with Darwinbox, TraceLink, and Leucine, combined with the launch of AI-led platforms and solutions, reinforced the organisation’s focus on innovation and value creation.</p>
                </div>              
          </div> 

             <div className="year">                
                <div className="year-content">
                  <span>2026 & Beyond</span>
                <h4>Intelligent Business <br/> Solutions</h4>
                  <p>The formation of the Pivot Path represents the next phase of evolution. With a clear focus on intelligent business solutions, the organisation is positioned to drive innovation, enhance capabilities, and deliver sustained value in a rapidly evolving business landscape.</p>
                  <Image src={logo} alt="logo" className="pivot-logo" />
                </div>
          </div>
        
      </Slider>
      
     </div>

  </Container>
</div>  


  

      {/* 7. LEADERSHIP (Client Component) */}
      <LeadershipSection />

      

      {/* 8. BOARD SECTION */}
      <div className="pad80 team-wrapper" id="bod">
        <Container>
          <h2 className="h4 text-center" data-aos="fade-up">BOARD OF <span>DIRECTORS</span></h2>
          {/* <p className="col-lg-7 text-center m-auto" data-aos="fade-up">At PivotPath, our core values form the bedrock.</p> */}

          <Row className="mt-4 mt-md-5">
            {BOARD_DATA.map((director, i) => (
              <Col lg={4} md={6} key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="team-box team-dtls2 mb-lg-0">
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



       <main className='pad80 client-page grey' id="clients">
                             <Container>

                              <h2 className="h4 text-center" data-aos="fade-up">Clients</h2>
          <p className="col-lg-7 text-center m-auto" data-aos="fade-up">We partner with leading organizations globally to deliver <br/>
transformative solutions and drive success.</p>

                                 <Row className="mt-5">
                                     {clientLogos.map((client, index) => (
                                         <Col md={2} sm={4} xs={6} key={index} data-aos="fade-up" data-aos-delay={index * 100} className='mx-0 mb-4'>
                                             <div className='client-logo-item'>
                                                 <div className="client-logo-img-wrapper">
                                                     <Image
                                                         src={client.image}
                                                         width={150}
                                                         height={80}
                                                         alt={client.alt}
                                                     />
                                                 </div>
                                     
                                             </div>
                                         </Col>
                                     ))}
                                 </Row>
                             </Container>
                         </main>

      {/* <Footer /> */}
    </>
  );
}