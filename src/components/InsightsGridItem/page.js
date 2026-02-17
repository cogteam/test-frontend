"use client";
import Link from "next/link";
import { Col } from "react-bootstrap";
import { domainUrl } from "../../lib/axios";

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

export default function InsightsGridItem({ item }) {
  if (!item || !item.id) return null;

  // Use full external link directly
  const itemLink = item.link;

  // Construct image URL
  const imageUrl = item.thumbnail ? `${IMAGE_BASE_URL}${item.thumbnail}` : "";

  // Description text
  const excerpt = item.sub_title || "Click to read more...";

  return (
    <Col lg={3} md={4} sm={6} className="mb-4">
      <div className="case-grid-4 mb-0">
        {/* Use <a> instead of <Link> since it's an external link */}
        <a
          href={itemLink}
          target="_blank"
          rel="noopener noreferrer"
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
  );
}
