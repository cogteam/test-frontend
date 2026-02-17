"use client";
import Link from "next/link";
import { Col } from "react-bootstrap";
import { domainUrl } from "../../lib/axios";

import { useEffect, useState } from "react";
import CaseModal from "@/app/insights/WhitepaperModal/page";
import Casestudiesmodal from "@/app/insights/CasestuidesModal/page";
import CaseModalWhitepaper from "@/app/insights/WhitepaperModal/page";
import WhitepaperModal from "@/app/insights/WhitepaperModal/page";

const IMAGE_BASE_URL = domainUrl;

// Utility function to format the date
const formatDate = (dateString) => {



  if (!dateString) return "";
  try {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  } catch (e) {
    return dateString ? dateString.substring(0, 10) : "";
  }
};

export default function InsightsGridItem({ item, onOpen }) {

  
  const [show, setShow] = useState(false);
   const [show1, setShow1] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose1 = () => setShow(false);
  const handleShow1 = () => setShow(true);

  const [source, setSource] = useState("");


  if (!item || !item.id) return null;

  // Use full external link directly
  const itemLink = item.link;

  // Construct image URL
  const imageUrl = item.thumbnail ? `${IMAGE_BASE_URL}${item.thumbnail}` : "";

  // Description text
  const excerpt = item.sub_title || "Click to read more...";

  return (
    <>
    <Col lg={3} md={6}  className="mb-4">
      <div className="case-grid-4 mb-0"  >
        {/* Use <a> instead of <Link> since it's an external link */}
        <a   
        // onClick={() => {
        //     console.log("clicked");
        //     setShow(true);
        //   }}
        onClick={onOpen}
           style={{cursor:"pointer"}}
          // href={itemLink}
          // target="_blank"
          // rel="noopener noreferrer"
          className="text-decoration-none"
        >
          <div className="overflow-hidden">
            <img
              src={imageUrl}
              className="w-100"
              alt={item.alt_text || item.title || "Insight image"}
            />
          </div>
          <div className="case-grid-data">
            <span>{formatDate(item.date)}</span>
            <h2>{item.title}</h2>
            <p className="mb-0">{excerpt}</p>
          </div>
        </a>
      </div>
    </Col>




 {/* <WhitepaperModal show={show} handleClose={() => setShow(false)}   source={source} /> */}

  {/* <Casestudiesmodal show={show1} handleClose1={() => setShow(false)}   source={source} /> */}

</>
  );
}
