"use client";
import { useEffect, useState } from "react";
import { Col, Form, Modal, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Loader from "@/lib/Loader";
import api from "../../../lib/axios";
import { useRouter } from "next/navigation";
import HTMLRenderer from "@/components/htmlRenderer/page";
export default function WhitepaperModal({ show, handleClose, source  }) {
     const router = useRouter();
     console.log(source)

      const {
  register,
  handleSubmit,
  setValue,
  formState: { errors },
} = useForm({
  defaultValues: {
    type: "whitepaper", // ✅ hard coded
  },
});
     

useEffect(() => {
  setValue("type", "whitepaper");
}, [setValue]);


// useEffect(() => {
//   if (source?.form_description) {
//     alert(source.form_description);
//   }
// }, [source]);

       const [isLoading, setIsLoading] = useState(false);
       const [validErrors, setValidErrors] = useState({});
       const [successMessage, setSuccessMessage] = useState("");
     
       const onSubmit = async (data) => {
        console.log("FINAL FORM DATA 👉", data);
         try {
           setValidErrors({});
           setSuccessMessage("");
           setIsLoading(true);
     
           const axiosConfig = {
             method: "post",
             url: "/enquiries",
             headers: {
               "Content-Type": "application/json",
               Accept: "application/json",
             },
             data: JSON.stringify(data),
           };
     
           await api(axiosConfig);
           setSuccessMessage("Your message has been sent successfully!");
           //router.push("/thank-you");
         } catch (error) {
           if (error.response && error.response.data) {
             setValidErrors(error.response.data);
           } else {
             setValidErrors({
               general: "Something went wrong. Please try again later.",
             });
           }
         } finally {
           setIsLoading(false);
         }
       };
  return (
    <Modal show={show} onHide={handleClose} centered className="custommodal apply-wrapper">
      <Modal.Header closeButton className="border-0">
        {/* <Modal.Title className="mb-0 h4 ">Enquire Now </Modal.Title> */}
      </Modal.Header>

      <Modal.Body className="p-0">
            <div className="query-form">

                {/* ✅ API HTML CONTENT */}
                  {source?.form_description && (
                    <div className="query-dynamic">
                      <HTMLRenderer
                        html={source.form_description}
                        className="whitepaper-content"
                      />
                    </div>
                  )}

              {/* <div className="query-dynamic ">
                <h5>Is your validation process enabling innovation or slowing it down?</h5>
                  <p>For decades, software validation has been defined by rigid documentation and prescriptive testing—an approach increasingly misaligned with modern development practices. Computer Software Assurance (CSA) represents a fundamental shift in how we ensure software quality while maintaining regulatory compliance.</p>
                  <h6>In this comprehensive whitepaper, we explore:</h6>
                  <ul>
                  <li>What CSA is and the regulatory context behind FDA's finalized guidance?</li>
                  <li>Why traditional validation creates bottlenecks without improving patient safety?</li>
                  <li>Real challenges organizations face when transitioning to CSA.</li>
                  <li>Practical strategies for overcoming implementation hurdles.</li>
                  <li>Building organizational commitment for sustainable change.</li>
                  <li>The tangible benefits: faster cycles, reduced burden, better outcomes.</li>
                </ul>

                <p className="high_p">Whether you're just beginning your CSA journey or optimizing current processes, this guide provides the insights needed to transform your quality operations for the modern era.</p>

              </div> */}


        <p><b>Download the full publication by</b> submitting your details below.</p>                  


                 <Form  onSubmit={handleSubmit(onSubmit)} method="post" className="mt-0">
            <Row>

              {/* Full Name */}
              <Col md={6}>
                <Form.Group className="mb-4" controlId="FullName" >
                  <Form.Control
                    type="text"
                    placeholder="Full Name*"
                    autoComplete="off"
                    {...register("name", {
                      required: { value: true, message: "This field is required" },
                      pattern: {
                        value: /^[A-Za-z ]+$/,
                        message: "Only alphabetic characters and spaces are allowed.",
                      },
                    })}
                    onKeyPress={(e) => {
                      const keyValue = String.fromCharCode(e.which || e.keyCode);
                      if (!/^[A-Za-z ]$/.test(keyValue)) e.preventDefault();
                    }}
                  />
                   {errors.name && <p className="error">{errors.name.message}</p>}
                <p className="error">{validErrors.name}</p>
                </Form.Group>
               
              </Col>

              {/* Email */}
              <Col md={6}>
                <Form.Group className="mb-4" controlId="Email" >
                  <Form.Control
                    type="text"
                    placeholder="Email*"
                    autoComplete="off"
                    {...register("email", {
                      required: { value: true, message: "This field is required" },
                      pattern: {
                        value: /^\S+@\S+\.\S+$/,
                        message: "Invalid email format",
                      },
                    })}
                  />
                   {errors.email && <p className="error">{errors.email.message}</p>}
                <p className="error">{validErrors.email}</p>
                </Form.Group>
               
              </Col>

              {/* Phone */}
              <Col md={12}>
                <Form.Group className="mb-4" controlId="Phone" >
                  <Form.Control
                    type="text"
                    placeholder="Phone Number*"
                    autoComplete="off"
                    maxLength={10}
                    {...register("phone", {
                      required: { value: true, message: "This field is required" },
                      pattern: { value: /^\d{10}$/, message: "Invalid mobile number" },
                    })}
                    onKeyPress={(e) => {
                      if (!/^\d+$/.test(String.fromCharCode(e.which || e.keyCode)))
                        e.preventDefault();
                    }}
                  />
                  {errors.phone && <p className="error">{errors.phone.message}</p>}
                <p className="error">{validErrors.phone}</p>
                </Form.Group>
                
              </Col>

            

              {/* Message */}
              <Col md={12}>
                <Form.Group className="mb-4" controlId="Message" >
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Message*"
                    autoComplete="off"
                    {...register("message", {
                      required: { value: true, message: "This field is required" },
                    })}
                  />
                     {errors.message && <p className="error">{errors.message.message}</p>}
                <p className="error">{validErrors.message}</p>
                </Form.Group>
             
              </Col>


               <Form.Control  type="hidden"   {...register("type")}  />


              <Col md={12} className="text-center" >
                <button className="btns3 mt-2">
                  <span>SUBMIT</span>
                </button>
              </Col>

            </Row>
          </Form> 
          {isLoading && <Loader />}
            </div>
      </Modal.Body>

      
    </Modal>
  );
}
