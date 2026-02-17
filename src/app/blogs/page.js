"use client";
// import Footer from "@/components/Footer/page";
// import Header from "@/components/Header/page";
// import Aos from "aos";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import blog1 from "../../assets/images/blog1.jpg";

// Axios instance & base URL
import api, { domainUrl } from "../../lib/axios";

const PER_PAGE = 3;
const SESSION_STORAGE_KEY = "blogListState";
const IMAGE_BASE_URL = domainUrl;

const formatDate = (dateString) => {
  if (!dateString) return "";
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  } catch (e) {
    return dateString ? dateString.substring(0, 10) : "";
  }
};

export default function Blogs() {
  // Restore state from sessionStorage if available
  const getInitialState = () => {
    if (typeof window !== "undefined" && window.sessionStorage) {
      const storedState = sessionStorage.getItem(SESSION_STORAGE_KEY);
      if (storedState) {
        try {
          const parsed = JSON.parse(storedState);
          if (parsed.blogs.length > 0) return parsed;
        } catch {
          sessionStorage.removeItem(SESSION_STORAGE_KEY);
        }
      }
    }
    return { blogs: [], currentPage: 1, hasMore: true };
  };

  const { blogs: initBlogs, currentPage: initPage, hasMore: initHasMore } = getInitialState();
  const [blogs, setBlogs] = useState(initBlogs);
  const [currentPage, setCurrentPage] = useState(initPage);
  const [hasMore, setHasMore] = useState(initHasMore);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // --- Fetch Blogs Function ---
  const fetchBlogs = async (page) => {
    if (isLoading) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await api.get(`blogs?page=${page}&limit=${PER_PAGE}`, {
        headers: { "Content-Type": "application/json", Accept: "application/json" },
      });

      const responseData = response.data.data || response.data;
      const newBlogs = responseData.blog || responseData;

      if (newBlogs && Array.isArray(newBlogs)) {
        setBlogs((prev) => {
          // Prevent duplicate blogs
          const existingIds = new Set(prev.map((b) => b.id));
          const filtered = newBlogs.filter((b) => !existingIds.has(b.id));
          return [...prev, ...filtered];
        });

        if (newBlogs.length < PER_PAGE) setHasMore(false);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.error("Error fetching blogs:", err);
      setError("Failed to load blog posts. Please try again later.");
      setHasMore(false);
    } finally {
      setIsLoading(false);
    }
  };

  // --- Component Mount ---
  useEffect(() => {
    // Aos.init({ duration: 1000, once: true });

    // Clear storage on hard refresh
    if (typeof window !== "undefined" && window.sessionStorage) {
      const navEntry = performance.getEntriesByType("navigation")[0];
      if (navEntry && navEntry.type === "reload") {
        sessionStorage.removeItem(SESSION_STORAGE_KEY);
      }
    }

    // Fetch only if blogs are not already in memory
    if (blogs.length === 0) fetchBlogs(1);

    // Save state on unmount
    return () => {
      if (typeof window !== "undefined" && window.sessionStorage) {
        const stateToSave = JSON.stringify({ blogs, currentPage, hasMore });
        sessionStorage.setItem(SESSION_STORAGE_KEY, stateToSave);
      }
    };
    // ✅ Empty dependency array — run once only
  }, []);

  // --- Load More Handler ---
  const handleLoadMore = () => {
    if (!isLoading && hasMore) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      fetchBlogs(nextPage);
    }
  };

  return (
    <>
      {/* <Header /> */}

      <div className="inner-head grey pad80">
        <Container className="text-center">
          <h1 className="h4" data-aos="fade-up">
            blo<span>gs</span>
          </h1>
          <p data-aos="fade-up">
            Exploring strategies, stories and trends shaping tomorrow’s impact.
          </p>
        </Container>
      </div>

      <main className="pad80 bloglist-page">
        <Container>
          {error && (
            <p className="text-center text-danger mb-4" data-aos="fade-up">
              {error}
            </p>
          )}

          <Row>
            {blogs.length > 0 ? (
              blogs.map((post, index) => (
                <Col
                  lg={4}
                  md={6}
                  key={post.id || post.slug + index}
                  className=""
                  data-aos="fade-up"
                >
                  <Link href={`/blogs/${post.slug}`} className="blog-list d-block">
                    <div className="overflow-hidden">
                      <Image
                        src={post.image ? `${IMAGE_BASE_URL}${post.image}` : blog1}
                        className="w-100 h-auto"
                        alt={post.image_alt_text || post.title}
                        width={500}
                        height={300}
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <h3>{post.title}</h3>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="m-0">{formatDate(post.date || post.created_at)}</p>
                      <span className="arrow d-flex justify-content-center align-items-center">
                        <svg
                          width="13"
                          height="12"
                          viewBox="0 0 13 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.0052 6.88623H0.909912V5.76123H10.0052L5.73298 1.48904L6.53491 0.69873L12.1599 6.32373L6.53491 11.9487L5.73298 11.1584L10.0052 6.88623Z"
                            fill="#38ad66"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </Link>
                </Col>
              ))
            ) : (
              !error && (
                <Col xs={12} className="text-center">
                  <p>{isLoading ? "Loading blogs..." : "No blogs found."}</p>
                </Col>
              )
            )}
          </Row>

          {/* Load More Button */}
          {hasMore && !error && (
            <div className="text-center mt-0 mt-md-5" data-aos="fade-up">
              <button
                onClick={handleLoadMore}
                className="btns3 btn4full"
                disabled={isLoading}
              >
                <span>{isLoading ? "Loading..." : "Load More"}</span>
              </button>
            </div>
          )}
        </Container>
      </main>

      {/* <Footer /> */}
    </>
  );
}
