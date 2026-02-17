"use client";
import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import Link from "next/link";
import api, { domainUrl } from "../../lib/axios";
import Aos from "aos";

const IMAGE_BASE_URL = domainUrl;

// Utility function to format the date (safe fallback)
const formatDate = (dateString) => {
  if (!dateString) return "";
  try {
    const d = new Date(dateString);
    if (isNaN(d)) return dateString;
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  } catch (e) {
    return dateString ? dateString.substring(0, 10) : "";
  }
};

export default function LatestCaseStudy() {
  const [caseStudy, setCaseStudy] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });

    const fetchLatestCaseStudy = async () => {
      try {
        const endpoint = "/case-studies?category=case-study&limit=1";
        const response = await api.get(endpoint);
        const data = response.data.data || response.data;
        const latestItem = Array.isArray(data) ? data[0] : data?.list?.[0] ?? null;
        setCaseStudy(latestItem);
      } catch (err) {
        console.error("Error fetching latest case study:", err);
        setCaseStudy(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLatestCaseStudy();
  }, []);

  if (isLoading) {
    return (
      <Col lg={6} md={12}>
        <div className="d-flex article-wrapper p-5 justify-content-center align-items-center">
          <p>Loading Latest Case Study...</p>
        </div>
      </Col>
    );
  }

  if (!caseStudy) {
    return (
      <Col lg={6} md={12}>
        <div className="d-flex article-wrapper p-5 justify-content-center align-items-center">
          <p>No Case Study available.</p>
        </div>
      </Col>
    );
  }

  // Use the API's `date` field first; fallback to created_at if not present
  const displayDate = caseStudy.date || caseStudy.created_at || caseStudy.updated_at;
  const articleLink = caseStudy.link || `/case-studies/${caseStudy.id}`;
  const imageUrl = caseStudy.thumbnail ? `${IMAGE_BASE_URL}${caseStudy.thumbnail}` : "";
  const excerpt = caseStudy.sub_title || caseStudy.excerpt || caseStudy.short_description || "Know more";
  const altText = caseStudy.alt_text || caseStudy.image_alt_text || caseStudy.title || "Case study";

  return (
    <Col lg={6} md={12}>
      <div className="d-flex article-wrapper h-100" data-aos="fade-up">
        {/* Image Section */}
        <div className="article-img m-0 w-50 overflow-hidden">
          <Link href={articleLink}>
            <img src={imageUrl} className="w-100 h-100 object-fit-cover" alt={altText} />
          </Link>
        </div>

        {/* Data Section */}
        <div className="article-data m-0 position-relative w-50">
          <span className="case" data-aos="fade-up">
            Case Study
          </span>
          <span className="seprator">|</span>
          <span>{formatDate(displayDate)}</span>

          <h3 className="text-uppercase" data-aos="fade-up">
            <Link href={articleLink} className="text-dark">
              {caseStudy.title}
            </Link>
          </h3>

          <p data-aos="fade-up">{excerpt}</p>

          <Link href={articleLink} data-aos="fade-up" className="text-uppercase btns-line">
            Know more
          </Link>
        </div>
      </div>
    </Col>
  );
}
