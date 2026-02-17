"use client";
import React, { useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Container } from "react-bootstrap";


// const testimonials = [
//   {
//     text: "I am excited about my future at Arcolab as our team keeps encouraging, evolving, and updating ourselves, enriching my experience of working here and wanting to be able to up-skill myself and help the team more and, in turn, the organisation. The experience I've gathered as a Management trainee, the mistakes that I've made along the way, and the lessons learned from them will only help me to make more positive contributions to the organisation.",
//     author: "Brightwell Lamin",
//     role: "Associate - HR Operations",
//     //img: "/avatars/user1.jpg"
//   },
//   {
//     text: "My journey in Arcolab has been nothing short of extraordinary. From the moment I walked through the doors on my first day, I was greeted by a team of supportive colleagues and a manager who embraced me as part of the family. They recognised my potential and encouraged me to unleash my creativity and ideas. I am filled with excitement and anticipation for what the future holds. My journey at Arcolab was a testament to the power of hard work, passion, and a nurturing work environment. It was a story of growth, learning, and the fulfilment of dreams.",
//     author: "Vibhor Naidu",
//     role: "Senior Associate - Operational Excellence",
//     //img: "/avatars/user2.jpg"
//   },
//   {
//     text: "Working here in Arcolab has installed a lot of confidence in me. As I gradually transitioned from being a trainee, I continued to embrace every challenge as an opportunity to learn and improve. No journey is easy. I have had times of self-doubt as well, but we have to believe in ourselves and keep going. I want to emphasize that my journey from trainee to associate lead has been a testament to the amazing opportunities and supportive environment that the leadership team provides at Arcolab.",
//     author: "Apoorva Rao",
//     role: "Associate Lead – Pharmacovigilance",
//     //img: "/avatars/user3.jpg"
//   },
//   {
//     text: "I embarked on my professional journey after completing my master’s degree in pharmacy, stepping into the world of quality assurance at Arcolab Pvt. Ltd. The initial days were a blend of excitement and nervousness as I embraced my first job. Starting as a trainee, I gradually evolved into an associate, gaining valuable knowledge and experience in handling challenging situations and engaging with diverse stakeholders. I am proud of my journey at Arcolab, where dedication, support, and innovation have paved the way for my professional growth.",
//     author: "Gollapalli Lalitha",
//     role: "Associate – Quality Assurance",
//     //img: "/avatars/user4.jpg"
//   },
//   {
//     text: "My journey at Arcolab has been a journey of continuous learning and growth. The company's commitment to nurturing talent has allowed me to thrive. With each passing day, I honed my skills, gained practical insights, and contributed to the organization's objectives.  Arcolab provided me with the ideal platform to do just that. My role as a management trainee allowed me to delve into the world of pharmaceuticals and healthcare. My journey from a wide-eyed management trainee to a seasoned associate has been marked by the support of my colleagues, the trust of my superiors, and the wealth of knowledge gained during this period.",
//     author: "Jeffrey Wilson",
//     role: "Associate – Learning & Development",
//     //img: "/avatars/user4.jpg"
//   },
//   {
//     text: "At Arcolab, I have had a fruitful, challenging, and opportunity-giving experience. As a person coming from an educational to a practical environment, the supportive and teaching environment has given me confidence in understanding my role in the company. The focus of Arcolab is now on technological advancement, and I am looking forward to being part of this novel pioneer organization and to playing a major role in contributing services to the organization in an ever-competitive environment.",
//     author: "Farhan Suhail",
//     role: "Associate – Medical Affairs",
//     //img: "/avatars/user4.jpg"
//   },
//   {
//     text: "Arcolab is the perfect place for someone looking for a challenging, fast-growing environment with opportunities to learn cross-functional skills. The work environment is fresh and boosts transparency and maturity in the culture, and everyone is given a chance to be heard, irrespective of their position. I find myself among a group of great colleagues who share their experience, work together, and are hard workers. As a curious employee, I have the right exposure as I can connect with learned colleagues, enthusiastic clients, and start-up founders. I always have opportunities and challenges beyond my current role, which help me transform myself and achieve greater heights.",
//     author: "Sharanya S",
//     role: "Associate – National Regulatory Affairs",
//     //img: "/avatars/user4.jpg"
//   }
// ];



const testimonials1 = [
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    author: "Brightwell Lamin",
    role: "Lorem Ipsum",
    //img: "/avatars/user1.jpg"
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    author: "Vibhor Naidu",
    role: "Lorem Ipsum",
    //img: "/avatars/user2.jpg"
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    author: "Apoorva Rao",
    role: "Lorem Ipsum",
    //img: "/avatars/user3.jpg"
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    author: "Gollapalli Lalitha",
    role: "Lorem Ipsum",
    //img: "/avatars/user4.jpg"
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    author: "Jeffrey Wilson",
    role: "Lorem Ipsum",
    //img: "/avatars/user4.jpg"
  },
  {
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    author: "Farhan Suhail",
    role: "Lorem Ipsum",
    //img: "/avatars/user4.jpg"
  },
  {
   text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    author: "Sharanya S",
    role: "Lorem Ipsum",
    //img: "/avatars/user4.jpg"
  }
];

export default function TestimonialSlider() {

  



  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 4000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const settingsRight = {
    ...settings,
    rtl: true, // reverse direction
  };

  
  return (
    <section className="pad80 bg-black text-white testimonial_section position-relative" data-aos="fade-up">

        <Container>
            <h2 className="h4 text-center mb-5">Testimonials</h2>
        </Container>

        {/* Top Slider (moves left) */}
        <Slider {...settings} className="testimonialswrap">
          {testimonials1.map((t, i) => (
            <div key={i} className="testimonials-box">
                <p className="text-lg leading-relaxed mb-6">{t.text}</p>
                <div className="flex items-center gap-3 mt-auto">
                  {/* <Image
                    src={t.img}
                    alt={t.author}
                    width={40}
                    height={40}
                    className="rounded-full"
                  /> */}
                  <div>
                    <h5 className="font-semibold">{t.author}</h5>
                    <small className="opacity-70">{t.role}</small>
                  </div>
                </div>
            </div>
          ))}
        </Slider>

        {/* Bottom Slider (moves right) */}
        <Slider {...settingsRight} className="mt-10 testimonialswrap">
          {testimonials1.map((t, i) => (
            <div key={i} className="testimonials-box">
                <p className="text-lg leading-relaxed mb-6">{t.text}</p>
                <div className="flex items-center gap-3 mt-auto">
                  {/* <Image
                    src={t.img}
                    alt={t.author}
                    width={40}
                    height={40}
                    className="rounded-full"
                  /> */}
                  <div>
                    <h5 className="font-semibold">{t.author}</h5>
                    <small className="opacity-70">{t.role}</small>
                  </div>
              </div>
            </div>
          ))}
        </Slider>
    
    </section>
  );
}
