"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Col, Container, Row } from "react-bootstrap";
import Slider from 'react-slick';
import { useInView } from "react-intersection-observer";
import "odometer/themes/odometer-theme-default.css";
import "aos/dist/aos.css";
// Assets & Components
// import Header from "@/components/Header/page";
// import Loader from "@/components/Load/page";
// import Footer from "@/components/Footer/page";
import Automation from "../assets/images/Automation-and-intelligent.svg";
import Techfirst from "../assets/images/logo/Tech-first.svg";
import Built from "../assets/images/Built-in.svg";
import realtime from "../assets/images/Real-time insights.svg";
import Applied from "../assets/images/Applied-scientific.svg";

import Execution from "../assets/images/logo/Execution-focused.svg";
import Pharma from "../assets/images/logo/Pharma.svg";
import Regulatory from "../assets/images/logo/Regulatory.svg";
import Capture1 from "../assets/images/capture1.PNG";
import Capture2 from "../assets/images/capture2.PNG";

import circle from "../assets/images/circle.svg"

import { IMAGES } from "../assets/images";
const ServicesSection = dynamic(() => import("@/components/ServicesSection/page"), { 
  ssr: true,
  loading: () => <div style={{ height: '600px' }} className="grey"></div>
});
const PartnersSection = dynamic(() => import("@/components/PartnersSection/page"), { 
  ssr: true,
  loading: () => <div style={{ height: '300px' }} className="grey"></div>
});
const LatestCaseStudy = dynamic(() => import("@/components/LatestCaseStudy/page"), { ssr: false });
const LatestWhitePapers = dynamic(() => import("@/components/LatestWhitePapers/page"), { ssr: false });
const Nexgen = dynamic(() => import("@/components/Nexgen/page"), { ssr: false });
const Bloghomepage = dynamic(() => import("./blogshomepage/page"), { ssr: false });

const Odometer = dynamic(() => import("react-odometerjs"), {
  ssr: false, 
});

// ==========================================
// BANNER DATA
// ==========================================
const BANNER_DATA = [
  {
    id: 1,
    desktop: IMAGES.HOMEBANNER1,
    mobile: IMAGES.HOMEBANNER_MOB1,
    alt: "Life Science Innovation",
    className: "slide-life"
  },
  {
    id: 2,
    desktop: IMAGES.HOMEBANNER2,
    mobile: IMAGES.HOMEBANNER_MOB2,
    alt: "Technology Solutions",
    className: "slide-science"
  },
  {
    id: 3,
    desktop: IMAGES.HOMEBANNER3,
    mobile: IMAGES.HOMEBANNER_MOB3,
    alt: "Future Possibilities",
    className: "slide-possibilities"
  },
];

const aislider = {
  arrows: false,
  fade: false,
  infinite: true,
  speed: 1200,
  dots: true,

  responsive: [
    {
      breakpoint: 768, // mobile & tablet
      settings: {
        autoplay: true,
        autoplaySpeed: 6000,
        draggable: true,
        swipe: true,
        loop: true,
      }
    },{
      breakpoint: 9999, // desktop
      settings: "unslick" // slider disabled on desktop
    }
  ]
};


// ==========================================
// MAIN COMPONENT
// ==========================================

export default function Home() {
  const [start, setStart] = useState(false);
  const [values, setValues] = useState({ first: 0, second: 0, third: 0, four: 0 });
  
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  
  const slider1 = useRef(null);
  const slider2 = useRef(null);
  const sectionRef = useRef(null);

  // OPTIMIZATION 2: Intersection Observer for Heavy Blog Section
  // const { ref: insightsRef, inView: insightsVisible } = useInView({
  //   triggerOnce: true,
  //   rootMargin: "300px 0px",
  // });

  // Slider Settings
  // Memoized settings aren't strictly necessary here but good practice
  const settingsMain = {
    arrows: false,
    fade: false,
  autoplay: true,
  autoplaySpeed: 6000,
    speed: 1200,
    infinite: true,
    draggable: false,
    loop: true,
       dots: true,
  };

  const settingsText = {
    slidesToShow: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: false,
 
  autoplay: true,
   autoplaySpeed: 6500,
    speed: 1200,
    infinite: true,
    vertical: true,
    draggable: false,
  };

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  // Odometer Logic
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined" || !sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (start) {
      const timer = setTimeout(() => {
        setValues({ first: 400, second: 30, third: 5, four: 1000 });
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [start]);

  return (
    <>
      {/* <Loader /> */}
      {/* <Header /> */}

      {/* BANNER SECTION */}
      {/* OPTIMIZATION 3: Min-Height to prevent CLS (Layout Shift) */}
      {/* Add a CSS class or inline style ensuring this div has height before slider loads */}
      <div className="banner banner-home position-relative" style={{ overflow: "hidden" }}>
        
        <Slider {...settingsMain} asNavFor={nav2} ref={slider1} className="banner-slider">
          {BANNER_DATA.map((item, index) => (            
            <div className={`banner-img1 position-relative ${item.className}`} key={item.id}>
              
              {/* Desktop Image */}
              <div className="d-none d-md-block banner-img position-relative">
                <Image 
                  src={item.desktop} 
                  alt={item.alt}
                  fill
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                  priority={index === 0} // Only priority load the first image (LCP)
                  quality={90}
                  placeholder="blur" // Optional: Adds blur effect while loading if imported statically
                />
              </div>

              {/* Mobile Image */}
              <div className="d-block d-md-none banner-img position-relative">
                <Image 
                  src={item.mobile} 
                  alt={item.alt}
                  fill
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                  priority={index === 0} 
                  quality={80} // Lower quality for mobile speed
                />
              </div>

            </div>
          ))}
        </Slider>
        
        <Slider {...settingsText} asNavFor={nav1} ref={slider2} className="banner-text">
          <div><h1>LIFE.</h1> <p>Represents our deep-rooted commitment to human<br className="d-none d-md-block"/> health &  our purpose in enhancing lives.
</p></div>
          <div><h1>SCIENCE.</h1><p>
            Reflects our data-driven approach, digital expertise and<br className="d-none d-md-block"/> innovation all backed by next-gen technology.</p></div>
          <div><h1>POSSIBILITIES.</h1><p>
            Showcase our ability to unlock <br className="d-block d-md-none"/> new horizons for global <br className="d-none d-md-block"/>life<br className="d-block d-md-none"/> sciences organizations.</p></div>
        </Slider>
      </div>




 <div className="pad80 home-ai">
  <Container>
     <h2 className="h4 text-center" data-aos="fade-up">Shaping the future<br/> of<span> life science</span></h2>

     <p className="text-center" data-aos="fade-up">We are at the intersection of life science expertise & technology.</p>
          
          {/* <Row className="col-8 m-auto mb-5 traingle-box" >
              <Col lg={4} md={4}>
                  <div className="lie-s">
                      <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><defs></defs><polygon fill="#0e90a2" className="cls-1" points="3.1 83.76 114.92 83.76 114.92 197.46 196.9 116.24 196.9 2.54 83.57 2.54 3.1 83.76"/></svg>
                      <h5>Consulting.</h5>
                  </div>
              </Col>
              <Col lg={4} md={4}>
                  <div className="lie-s">
                     <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><defs></defs><polygon fill="#19a574" className="cls-1" points="3.1 83.76 114.92 83.76 114.92 197.46 196.9 116.24 196.9 2.54 83.57 2.54 3.1 83.76"/></svg>
                      <h5>Solutions.</h5>
                  </div>
              </Col>
              <Col lg={4} md={4}>
                  <div className="lie-s">
                      <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><defs></defs><polygon fill="#90c43c" className="cls-1" points="3.1 83.76 114.92 83.76 114.92 197.46 196.9 116.24 196.9 2.54 83.57 2.54 3.1 83.76"/></svg>
                      <h5>Services.</h5>
                  </div>
              </Col>
          </Row> */}


          <Row className="mt-5">
            <Col lg={12} md={12} className="p-0">
               <div className="circle-home">
                 <Image src={circle} alt="circle" className="w-100 h-auto" data-aos="fade-up" />
               </div>
            </Col>
             <Col lg={12} md={12} className="p-0">
              <Slider {...aislider} className="col-11 m-auto ai-slider row">
                <div className="p-0 col-md-6">
                <div className="ai-view ">
                      <h4>Technology-Led  Innovation</h4>
                      <ul>
                        <li><span><Image src={Techfirst} alt="" /></span> <p className="mb-0">Tech-first, AI-driven <br className="d-none" />solutions</p></li>
                        <li><span><Image src={Automation} alt="" /></span>  <p className="mb-0">Automation and intelligent<br className="d-none" />  solutions at scale</p></li>
                        <li><span><Image src={realtime} alt="" /></span>  <p className="mb-0">Real-time insights &<br className="d-none" /> integrated  workflows</p></li>
                        <li><span><Image src={Built} alt="" /></span>  <p className="mb-0">Built-in compliance &<br className="d-none" /> accuracy</p></li>
                      </ul>
                </div>
              </div>
             <div className="p-0  col-md-6">
                <div className="ai-view border-0">
                      <h4>Rooted in Pharma Expertise</h4>
                      <ul>
                        <li><span><Image src={Pharma} alt="" /></span>  <p className="mb-0">Pharma-native <br className="d-none" />expertise</p></li>
                        <li><span><Image src={Regulatory} alt="" /></span>  <p className="mb-0">Regulatory and compliance<br className="d-none" />  insight</p></li>
                        <li><span><Image src={Applied} alt="" /></span>  <p className="mb-0">Applied scientific and <br className="d-none" />operational expertise</p></li>
                         <li><span><Image src={Execution} alt="" /></span>  <p className="mb-0">Execution-focused <br className="d-none" />experience</p></li>
                      </ul>
                </div>
             </div>
          </Slider>
            </Col>
          </Row>


          
  
  </Container>
</div>



      {/* AI NEXT GEN SECTION - Static Content doesn't need hydration usually, but AOS needs it */}
      <div className="grey pad80 pb-0">
        <Container>
          <h2 className="h4 text-center" data-aos="fade-up">AI POWERED NEXT-GEN <br /><span>DIGITAL INNOVATIONS</span></h2>
          <p className="text-center col-md-8 m-auto" data-aos="fade-up">
            We solve real-world challenges in life sciences through purpose-built solutions powered by AI, machine learning, and modern technology stacks. With deep tech expertise and a digital-forward mindset, we’re reshaping the future of life sciences.
          </p>
          <Nexgen />
        </Container>
      </div>

      {/* DYNAMIC COMPONENT 1 */}
      <ServicesSection />

      {/* STATS SECTION */}
      <div className="grey pad80" ref={sectionRef}>
        <Container>
          <h2 className="h4 text-center" data-aos="fade-up">BUILT ON EXPERTISE, <br /><span>DRIVEN BY IMPACT</span></h2>
          <p className="text-center col-7 m-auto" data-aos="fade-up">
            We believe impact is created when deep expertise meets true collaboration. 
          </p>

          <div className="bult-expertise mt-5" style={{ backgroundImage: `url(${IMAGES.EXPERTISES_HOME.src})` }}>
            <Row>
              <Col md={6}>
                <div className="bult-box">
                  <div className="bult-number"><Odometer value={values.first} format="d" />+</div>
                  <p>EMPLOYEES</p>
                </div>
              </Col>
              {/* ... other cols ... */}
              <Col md={6}>
                <div className="bult-box">
                  <div className="bult-number"><Odometer value={values.second} format="d" />+</div>
                  <p>CLIENTS </p>
                </div>
              </Col>
              <Col md={6}>
                <div className="bult-box">
                  <div className="bult-number"><Odometer value={values.third} format="d" /></div>
                  <p>CONTINENTS</p>
                </div>
              </Col>
              <Col md={6}>
                <div className="bult-box">
                  <div className="bult-number"><Odometer value={values.four} format="d" />+</div>
                  <p>PROJECTS </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      {/* DYNAMIC COMPONENT 2 */}
      <PartnersSection />

      {/* BLOGS SECTION - Uses Intersection Observer */}
      {/* <div className="grey pad80 pt-0" ref={insightsRef} style={{ minHeight: "400px" }}>
        <Container>
          <h2 className="h4 text-center" data-aos="fade-up">INSIGHTS THAT <br /><span>DRIVE IMPACT</span></h2>
          <div className="row mt-5">
            {insightsVisible && <LatestCaseStudy />}
            {insightsVisible && <LatestWhitePapers />}
            
            <Col md={12}>
              {insightsVisible && <Bloghomepage />}
            </Col>
           
          </div>
        </Container>
      </div> */}


      <div className="grey pad80 pt-0" style={{ minHeight: "400px" }}>
        <Container>
          <h2 className="h4 text-center" data-aos="fade-up">INSIGHTS THAT <br /><span>DRIVE IMPACT</span></h2>
          <div className="row mt-5">
          
            <Col md={12}>
              <Image src={Capture1} alt="capture" className="w-100 h-100" />

            </Col>
            <Col md={12} className="mt-5">
              <Image src={Capture2} alt="capture" className="w-100 h-100" />

            </Col>
          </div>
        </Container>
      </div>

      {/* <Footer /> */}
    </>
  );
}