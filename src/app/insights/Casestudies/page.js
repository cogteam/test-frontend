"use client";
import Aos from 'aos';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Col, Row } from 'react-bootstrap';
import api, { domainUrl } from "../../../lib/axios"; 
import InsightsGridItem from '../../../components/InsightsGridItem/page';
import CasepaperModal from '../CasestuidesModal/page';

const IMAGE_BASE_URL = domainUrl; 

export default function Casestudies() {
    const [activeTab, setActiveTab] = useState("casestudies");

    const [caseStudies, setCaseStudies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const [show, setShow] = useState(false);

    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
        
        const fetchCaseStudies = async () => {
            try {
                setIsLoading(true);
                setError(null);

                const endpoint = "/case-studies?category=case-study"; 

                const response = await api.get(endpoint, {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                });

                const data = response.data.data || response.data;
                console.log("Case Studies API Data:", data);

                setCaseStudies(Array.isArray(data) ? data : (data.list || []));
            } catch (err) {
                console.error("Error fetching case studies:", err);
                setError("Failed to load Case Studies.");
                setCaseStudies([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCaseStudies();
    }, []);

    if (isLoading) {
        return <div className="text-center p-5">Loading Case Studies...</div>;
    }

    if (error) {
        return <div className="text-center p-5 text-danger">{error}</div>;
    }

    return (
        <>
            <div className="case-grid">
                <Row>
                    {caseStudies.length > 0 ? (
                        caseStudies.map(item => (
                            <InsightsGridItem key={item.id} item={item} onOpen={() => setShow(true)}  />
                        ))
                    ) : (
                        <Col className="text-center p-5">No Case Studies found.</Col>
                    )}
                </Row>
            </div>
        
        <CasepaperModal  show={show}
        handleClose={() => setShow(false)}
        activeTab={activeTab} />
        </>



    );
}
