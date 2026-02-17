"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Accordion, Col, Container, Form, Row } from "react-bootstrap";
import grow from '../../assets/images/grow.webp';
import { useRouter } from "next/navigation";
import Image from "next/image";
import file from '../../assets/images/file.svg'
import Loader from "@/components/Load/page";
import { useForm } from "react-hook-form";
import api from "../../lib/axios";


import { IMAGES } from "../../assets/images";



import Slider from "react-slick";
export default function Careers(){
   const router = useRouter(); 
    
  
    const { register, handleSubmit, formState: { errors }, reset, watch } = useForm();
    const resumeWatch = watch('resume');
    
   
    const [fileName, setFileName] = useState("No file chosen");

    
    const [jobs, setJobs] = useState([]); 
    const [jobLoading, setJobLoading] = useState(true); 

   
    const [isLoading, setIsLoading] = useState(false);
    const [validErrors, setValidErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

  
    useEffect(() => {
        if (resumeWatch && resumeWatch.length > 0) {
            setFileName(resumeWatch[0].name);
        } else {
            setFileName("No file chosen");
        }
    }, [resumeWatch]);

   
    useEffect(() => {
       
        fetchJobs(); 
    }, []);

  
    const logoslider = {
        dots: false,
        rtl: true,
        arrows: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        slidesToShow: 7,
        slidesToScroll: 1,
        pauseOnHover: false,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3, } },
            { breakpoint: 767, settings: { slidesToShow: 2, slidesToScroll: 1, } }
        ]
    };
    
   
   const fetchJobs = async () => {
        setJobLoading(true);
        try {
          
            const response = await api.get('jobs'); 
            
        
            const allJobs = response.data.data || response.data; 
            
          
            const activeJobs = Array.isArray(allJobs) ? allJobs.filter(job => job.job_status === 'active') : [];
            
            setJobs(activeJobs);

        } catch (error) {
            console.error("Error fetching jobs:", error);
            setJobs([]);
        } finally {
            setJobLoading(false);
        }
    };
    
    
    const onSubmit = async (data) => {
        try {
            setValidErrors({});
            setSuccessMessage("");
            setIsLoading(true);
            const formData = new FormData();
formData.append("first_name", data.first_name);            
formData.append("last_name", data.last_name || ""); // Ensure last_name exists or is empty
formData.append("email", data.email);
formData.append("phone", data.phone);
formData.append("linkedin_url", data.linkedin_url); // NEW FIELD
formData.append("personal_note", data.personal_note); 
formData.append("agreement", data.agreement ? "1" : "0"); // NEW FIELD (Checkbox)

if (data.resume && data.resume.length > 0) {
    formData.append("resume", data.resume[0]); 
}

            const axiosConfig = {
                method: "post",
                url: "job-application/add", 
                data: formData, 
            };

            const response = await api(axiosConfig);

            setSuccessMessage("Your application has been sent successfully!");
            reset(); 
            router.push("/thank-you"); 

        } catch (error) {
            console.error("Error:", error);

            if (error.response && error.response.data) {
                const responseData = error.response.data;
                const clientErrors = {};
                
                // Map API errors to clientErrors
                const apiErrors = responseData.errors || responseData; 

                for (const key in apiErrors) {
                    if (Array.isArray(apiErrors[key])) {
                        clientErrors[key] = apiErrors[key][0]; 
                    } else if (typeof apiErrors[key] === 'string') {
                        clientErrors[key] = apiErrors[key]; 
                    }
                }
                
                if (Object.keys(clientErrors).length === 0 && responseData.message) {
                    clientErrors.general = responseData.message;
                } else if (Object.keys(clientErrors).length === 0) {
                     clientErrors.general = "An internal server error occurred. Please contact support.";
                }
                
                setValidErrors(clientErrors);

            } else {
                setValidErrors({
                    general: "Network error or connection failed. Please check your connection.",
                });
            }
        } finally {
            setIsLoading(false);
        }
    };
    
    // Group jobs by category for the Accordion
    const groupedJobs = jobs.reduce((acc, job) => {
        // Updated to use job_category based on API structure
        const category = job.job_category || 'Other';
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(job);
        return acc;
    }, {});

    // FIX: Define jobCategories to resolve the ReferenceError
    const jobCategories = Object.keys(groupedJobs);

    return(

        <>

            {/* <Header /> */}


            <div className='inner-head grey career-wrapper career-banner'>
                <Container className='d-flex align-items-center h-100 '>
                    <div>
                        <h1 className='h4 text-black' data-aos="fade-up"><span>Careers</span></h1>
                        <p data-aos="fade-up" className="text-black">Think beyond boundaries. Grow beyond limits.<br/>
Join Pivot Path and shape the future of innovation.
 </p>
                    </div>
                </Container>
            </div>



             <div className='pad80'>
                <Container>
                    
                        <h2 className='h4 text-center' data-aos="fade-up">Working at <span>Pivot Path</span></h2>
                        <p className="text-center" data-aos="fade-up">Growing together through collaboration and discovery.
 </p>
                   

                    <Row className="mt-5">
                        <Col lg={6} md={12}>
                                <div className="pivot-box">
                                    <div className="pivot-box-data">
                                        <h3 data-aos="fade-up">A Culture that Inspires Growth and Greatness</h3>
                                         <p data-aos="fade-up">At Pivot Path, we are more than a workplace, a dynamic hub of innovation, collaboration, and growth. Here, your ideas and drive have the power to make a lasting impact. We are committed to fostering an environment that goes beyond the ordinary, empowering every individual to realise their fullest potential and shape a culture built on passion, purpose, and excellence.</p>
                                        {/* <Link href="#" data-aos="fade-up" className="text-uppercase btns-line position-relative" >Know More</Link> */}
                                    </div>  

                                    <div className="pivot-img overflow-hidden" data-aos="fade-up">
                                        <Image src={IMAGES.A_CULTURE_THAT_INSPIRES_GROWTH_AND_GREATNESS} className="w-100 h-auto" alt="" />
                                    </div>                                 
                                </div>

                                 <div className="pivot-box mt-4 pivot-box-right">
                                <Row>
                                    <Col md={6}>
                                        <div className="pivot-img overflow-hidden h-100" data-aos="fade-up">
                                            <Image src={grow} className="w-100  h-100 " alt="" />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                    <div className="pivot-box-data">
                                        <h3 data-aos="fade-up">Grow with Pivot Path</h3>
                                         <p data-aos="fade-up">At Pivot Path, people are our greatest strength, the driving force behind every idea, innovation, and achievement. We are committed to your growth, offering endless opportunities to learn, lead, and redefine what’s possible. Whether you are beginning your journey or bringing years of experience, you will find space here to thrive, evolve, and make a lasting impact. Together, we shape a future powered by passion, progress, and limitless potential.
 </p>
                                        
                                    </div> </Col>
                                </Row>
                            </div>
                        </Col>
                         <Col lg={6} md={12}>
                            <div className="pivot-box mb-4 pivot-box-right">
                                <Row>
                                    <Col md={6}>
                                        <div className="pivot-img overflow-hidden h-100" data-aos="fade-up">
                                            <Image src={IMAGES.COLLABORATION_THAT_DRIVES_INNOVATION} className="w-100 h-100" alt="" />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                    <div className="pivot-box-data">
                                        <h3 data-aos="fade-up">Collaboration That Drives Innovation
</h3>
                                         <p data-aos="fade-up">At Pivot Path, collaboration is at the heart of everything we do. We believe that when diverse minds unite, extraordinary ideas emerge. Here, teamwork isn’t just encouraged; it’s an integral part of our culture. The strength of our collective perspectives fuels innovation, creativity, and progress, driving us to reach new heights. By embracing a cross-functional approach, we bring together unique skills and viewpoints to create solutions that are holistic, impactful, and built for lasting success.
</p>
                                        
                                    </div> </Col>
                                </Row>
                            </div>
                            
                            <div className="pivot-box">
                                    <div className="pivot-box-data">
                                        <h3 data-aos="fade-up">Nurturing a Culture of Continuous Learning
</h3>
                                         <p data-aos="fade-up">At Pivot Path, we believe the journey to excellence begins with curiosity, courage, and a constant pursuit of knowledge. Growth flourishes when we challenge convention, embrace new ideas, and learn from every experience. Our Accelerated Leadership Program shapes visionary leaders, while Fusion, our learning journey for young professionals, fosters connection, confidence, and collaboration. By championing continuous learning, we empower our people to reach their potential and drive Pivot Path toward lasting success.
</p>
                                       
                                    </div>  

                                    <div className="pivot-img overflow-hidden" data-aos="fade-up">
                                        <Image src={IMAGES.NURTURING_ACULTURE_OF_CONTINUOUS_LEARNING_AND_GROWTH} className="w-100 h-auto" alt="" />
                                    </div>                                 
                                </div>
                        </Col>
                    </Row>


                </Container>
            </div>


 <div className=" partner-wrapper client-logos overflow-hidden">
         
                <Slider {...logoslider} className="home-marquee">
                    <span className="partner-logo text-center" >
                        <Image src={IMAGES.LOGO1} alt="" />
                    </span>
                    <span className="partner-logo text-center" >
                        <Image src={IMAGES.LOGO2} alt="" />
                    </span>
                    <span className="partner-logo text-center" >
                        <Image src={IMAGES.LOGO3} alt="" />
                    </span>
                    <span className="partner-logo text-center" >
                        <Image src={IMAGES.LOGO4} alt="" />
                    </span>
                    <span className="partner-logo text-center" >
                        <Image src={IMAGES.LOGO5} alt="" />
                    </span>
                  
                    <span className="partner-logo text-center" >
                        <Image src={IMAGES.LOGO6} alt="" />
                    </span>                   

                    <span className="partner-logo text-center" >
                        <Image src={IMAGES.LOGO7} alt="" className="logo7" />
                    </span>
                    <span className="partner-logo text-center" >
                        <Image src={IMAGES.LOGO8} alt="" />
                    </span>
                    <span className="partner-logo text-center" >
                        <Image src={IMAGES.LOGO9} alt="" />
                    </span>
                    <span className="partner-logo text-center" >
                        <Image src={IMAGES.LOGO10} alt="" />
                    </span>
                    <span className="partner-logo text-center" >
                        <Image src={IMAGES.LOGO11} alt="" />
                    </span>
                  
                    <span className="partner-logo text-center" >
                        <Image src={IMAGES.LOGO12} alt="" className="logo7" />
                    </span>


                    <span className="partner-logo text-center" >
                        <Image src={IMAGES.LOGO13} alt="" className="logo7" />
                    </span>
                    <span className="partner-logo text-center" >
                        <Image src={IMAGES.LOGO14} alt="" />
                    </span>
                    <span className="partner-logo text-center" >
                        <Image src={IMAGES.LOGO15} alt="" />
                    </span>
                    <span className="partner-logo text-center" >
                        <Image src={IMAGES.LOGO16} alt="" />
                    </span>
                    <span className="partner-logo text-center" >
                        <Image src={IMAGES.LOGO17} alt="" />
                    </span>
                  
                    <span className="partner-logo text-center" >
                        <Image src={IMAGES.LOGO18} alt="" />
                    </span>


                     <span className="partner-logo text-center" >
                        <Image src={IMAGES.LOGO19} alt="" />
                    </span>
                    <span className="partner-logo text-center" >
                        <Image src={IMAGES.LOGO20} alt="" />
                    </span>
                    <span className="partner-logo text-center" >
                        <Image src={IMAGES.LOGO21} alt="" />
                    </span>

                    
                   
                
                </Slider>

         
      </div>

              <div className='job-wrapper grey pad80'>
                <Container>

                    <Row>
                        <Col md={6} lg={6}>
                            <div className="sticky-job">
                                <h2 className="h4" data-aos="fade-up">Join us to shape the <span>future of work</span></h2>
                            </div>
                        </Col>

                        <Col md={6} lg={6}>
                            {/* --- Dynamic Job Accordion Implementation --- */}
                            {jobLoading ? (
                                <div className="text-center py-5">
                                    <p>Loading job openings...</p>
                                    <Loader /> {/* Re-using the Loader component */}
                                </div>
                            ) : jobCategories.length === 0 ? (
                                <p className="text-center py-5">No active job openings at the moment. Please check back later!</p>
                            ) : (
                                <Accordion defaultActiveKey="0" className="accordion-jobs" data-aos="fade-up">
                                    {jobCategories.map((category, catIndex) => (
                                        <Accordion.Item key={catIndex} eventKey={String(catIndex)}>
                                            <Accordion.Header>{category}</Accordion.Header>
                                            <Accordion.Body>
                                                {groupedJobs[category].map((job) => (
                                                    <Row key={job.id} className="mb-3 align-items-center">
                                                        <Col lg={6}>
                                                            {/* Display job_title from the API */}
                                                            <p className="mb-0">{job.job_title}</p>
                                                        </Col>
                                                        <Col lg={6}>
                                                            <div className="text-end">
                                                                {/* Link to the application form section */}
                                                                <Link href="#apply" className="text-uppercase btns-line position-relative bottom-0">Apply Now</Link>
                                                            </div>
                                                        </Col>
                                                        {/* Optional: Add job.job_description here if you want to display it */}
                                                    </Row>
                                                ))}
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    ))}
                                </Accordion>
                            )}
                            {/* --- End Dynamic Job Accordion Implementation --- */}
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* <Testimonials /> */}




            <div className=" pad80 apply-wrapper" id="apply">
                <Container>
                    <h2 className="h4 text-center" data-aos="fade-up">Apply <span>Now</span></h2>

                    {/* Success Message Display */}
                    {successMessage && <p className="text-center text-success mb-4">{successMessage}</p>}
                    {/* General Error Display */}
                    {validErrors.general && <p className="text-center text-danger mb-4">{validErrors.general}</p>}


                     <Form onSubmit={handleSubmit(onSubmit)} method="post">
                       <Row>
    <Col md={6}>
        <Form.Group className="mb-4 wow fadeInUp" controlId="Full Name" data-aos="fade-up">
            <Form.Control
                type="text"
                placeholder="Full Name*"
                {...register("first_name", {
                    required: "Full Name is required",
                    pattern: { value: /^[A-Za-z ]+$/, message: "Only alphabetic characters allowed" }
                })}
            />
        </Form.Group>
        {errors.first_name && <p className="error">{errors.first_name?.message}</p>}
        <p className="error">{validErrors.first_name}</p>
    </Col>

    <Col md={6}>
        <Form.Group className="mb-4 wow fadeInUp" controlId="Email*" data-aos="fade-up">
            <Form.Control
                type="text"
                placeholder="Email*"
                {...register("email", {
                    required: "Email is required",
                    pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email format" }
                })}
            />
        </Form.Group>
        {errors.email && <p className="error">{errors.email?.message}</p>}
        <p className="error">{validErrors.email}</p>
    </Col>

    <Col md={6}>
        <Form.Group className="mb-4 wow fadeInUp" controlId="Phone Number*" data-aos="fade-up">
            <Form.Control
                type="text"
                placeholder="Phone Number*"
                {...register("phone", {
                    required: "Phone Number is required",
                    pattern: { value: /^\d{10,15}$/, message: "Invalid mobile number" }
                })}
            />
        </Form.Group>
        {errors.phone && <p className="error">{errors.phone?.message}</p>}
        <p className="error">{validErrors.phone}</p>
    </Col>

    {/* --- NEW LINKEDIN URL FIELD --- */}
    <Col md={6}>
        <Form.Group className="mb-4 wow fadeInUp" controlId="LinkedIn URL" data-aos="fade-up">
            <Form.Control
                type="text"
                placeholder="LinkedIn URL (e.g., https://linkedin.com/in/username)"
                {...register("linkedin_url", {
                    required: "LinkedIn URL is required",
                    pattern: {
                        value: /^(https?:\/\/)?(www\.)?linkedin\.com\/.*$/,
                        message: "Please enter a valid LinkedIn URL",
                    },
                })}
            />
        </Form.Group>
        {errors.linkedin_url && <p className="error">{errors.linkedin_url?.message}</p>}
        <p className="error">{validErrors.linkedin_url}</p>
    </Col>

    <Col md={12}>
        <Form.Group className="mb-4" controlId="personal_note" data-aos="fade-up">
            <Form.Control
                as="textarea"
                rows={3}
                placeholder="Message"
                {...register("personal_note", { required: "Message is required" })}
            />
        </Form.Group>
        {errors.personal_note && <p className="error">{errors.personal_note.message}</p>}
    </Col>

    <Col md={12}>
        <div className="flex-attach flex-wrap" data-aos="fade-up">
            <label className="d-block w-100 label">
                Upload a Resume <small>(pdf and doc, max 2MB)</small>
            </label>
            <span className="btn btn-default btn-file">
                <Image src={file} alt="" />
                <input
                    type="file"
                    {...register("resume", {
                        required: "Resume upload is required",
                        validate: {
                            fileSize: v => v[0]?.size <= 2 * 1024 * 1024 || "Max 2MB",
                            fileType: v => ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(v[0]?.type) || "Only PDF/DOC allowed"
                        }
                    })}
                />
            </span>
            <span className="file-name">{fileName}</span>
        </div>
        {errors.resume && <p className="error mt-3">{errors.resume?.message}</p>}
    </Col>

    {/* --- NEW CHECKBOX FIELD --- */}
    {/* --- UPDATED CHECKBOX FIELD WITH LINK --- */}
<Col md={12} className="mt-4 mb-2" data-aos="fade-up">
    <Form.Group controlId="agreement">
        <Form.Check 
            type="checkbox"
            className="custom-checkbox"
            label={
                <span className="label-text">
                    I agree to the processing of my personal data and the{" "}
                    <Link href="/privacy-policy" target="_blank" className="textprimary text-decoration-underline">
                        Privacy Policy
                    </Link>
                    *
                </span>
            }
            {...register("agreement", { 
                required: "You must agree to the privacy policy to submit your application" 
            })}
        />
    </Form.Group>
    {errors.agreement && <p className="error">{errors.agreement.message}</p>}
</Col>

    <Col md={12} className="text-center" data-aos="fade-up">
        <button className="btns3" disabled={isLoading}>
            <span>{isLoading ? 'SUBMITTING...' : 'SUBMIT'}</span>
        </button>
    </Col>
</Row>
                    </Form>

                     {isLoading && <Loader />}

                </Container>
            </div>



            {/* <Footer/> */}
        </>

    )
}