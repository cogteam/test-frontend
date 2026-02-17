"use client";
import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import Link from "next/link";
import api, { domainUrl } from "../../lib/axios";
import Aos from "aos";

const IMAGE_BASE_URL = domainUrl;

// Utility function to format the date safely
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
    return dateString?.substring(0, 10) || "";
  }
};

/**
 * Renders a single small white paper card.
 * @param {object} item - The white paper data.
 */
const WhitePaperCard = ({ item }) => {
  const articleLink = item.link || "#";
  const imageUrl = item.thumbnail ? `${IMAGE_BASE_URL}${item.thumbnail}` : "";
  const displayDate = item.date || item.created_at || item.updated_at;
  const altText = item.alt_text || item.image_alt_text || item.title || "White paper";

  return (
    <Col lg={3} md={6}>
      <div className="article-wrapper article-wrapper-home-2" data-aos="fade-up">
        <div className="article-img m-0 overflow-hidden">
          <Link href={articleLink}>
            <img src={imageUrl} className="w-100" alt={altText} />
          </Link>
        </div>
        <div className="article-data h246 m-0 position-relative">
          <span className="case" data-aos="fade-up">
            White Paper
          </span>
          <span className="seprator">|</span>
          <span>{formatDate(displayDate)}</span>

          <h3 data-aos="fade-up" className="text-uppercase">
            <Link href={articleLink} className="text-dark">
              {item.title}
            </Link>
          </h3>

          <Link
            href={articleLink}
            data-aos="fade-up"
            className="text-uppercase btns-line"
          >
            Know more
          </Link>
        </div>
      </div>
    </Col>
  );
};

export default function LatestWhitePapers() {
  const [whitePapers, setWhitePapers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });

    const fetchLatestWhitePapers = async () => {
      try {
        const endpoint = "/case-studies?category=whitepaper&limit=2";
        const response = await api.get(endpoint);
        const data = response.data.data || response.data;
        const latestItems = Array.isArray(data)
          ? data.slice(0, 2)
          : data.list
          ? data.list.slice(0, 2)
          : [];
        setWhitePapers(latestItems);
      } catch (err) {
        console.error("Error fetching latest white papers:", err);
        setWhitePapers([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLatestWhitePapers();
  }, []);

  if (isLoading) {
    return (
      <>
        <Col lg={3} md={6} className="p-5 text-center">
          <p>Loading...</p>
        </Col>
        <Col lg={3} md={6} className="p-5 text-center d-none d-lg-block">
          <p>Loading...</p>
        </Col>
      </>
    );
  }

  return (
    <>
      {whitePapers.length > 0 ? (
        whitePapers.map((item) => <WhitePaperCard key={item.id} item={item} />)
      ) : (
        <Col lg={6} md={12} className="p-5 text-center">
          <p>No White Papers available.</p>
        </Col>
      )}
    </>
  );
}
