"use client";
import Aos from "aos";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import api from "../../../lib/axios";
import InsightsGridItem from "../../../components/InsightsGridItem/page";

export default function Whitepaper() {
  const [whitepapers, setWhitepapers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });

    const fetchWhitepapers = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // API endpoint for whitepapers
        const endpoint = "/case-studies?category=whitepaper";

        const response = await api.get(endpoint, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });

        const data = response.data.data || response.data;
        console.log("White Paper API Data:", data);

        setWhitepapers(Array.isArray(data) ? data : data.list || []);
      } catch (err) {
        console.error("Error fetching white papers:", err);
        setError("Failed to load White Papers.");
        setWhitepapers([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWhitepapers();
  }, []);

  if (isLoading) {
    return <div className="text-center p-5">Loading White Papers...</div>;
  }

  if (error) {
    return <div className="text-center p-5 text-danger">{error}</div>;
  }

  return (
    <div className="case-grid">
      <Row>
        {whitepapers.length > 0 ? (
          whitepapers.map((item) => (
            <InsightsGridItem key={item.id} item={item} />
          ))
        ) : (
          <Col className="text-center p-5">No White Papers found.</Col>
        )}
      </Row>
    </div>
  );
}
