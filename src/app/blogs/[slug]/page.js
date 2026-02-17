"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
// import Header from "@/components/Header/page";
// import Footer from "@/components/Footer/page";
import React, { useEffect, useState } from "react";
// import Aos from "aos";
import { Col, Container, Row } from "react-bootstrap";
import blogimg from "../../../assets/images/blog-inner.jpg"; // Fallback image
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

// Axios setup import
import api, { domainUrl } from "../../../lib/axios";
import Aos from "aos";
const IMAGE_BASE_URL = domainUrl;

// Format Date Helper
const formatDate = (dateString) => {
  if (!dateString) return "N/A";
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  } catch (e) {
    return dateString;
  }
};

export default function BlogDetailPage() {
  const { slug } = useParams();

  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch single blog post details
  const fetchPostDetails = async (postSlug) => {
    if (!postSlug) return;

    setIsLoading(true);
    setError(null);
    setPost(null);

    try {
      const response = await api.get(`blogs/${postSlug}`, {
        headers: { "Content-Type": "application/json", Accept: "application/json" },
      });

      const postData = response.data.data || response.data;

      if (postData && postData.id) {
        setPost(postData);
      } else {
        setError("Blog post not found.");
      }
    } catch (err) {
      console.error("Error fetching blog post:", err);
      setError("Failed to load blog post details.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
    if (slug) fetchPostDetails(slug);
  }, [slug]);

  // Rendering conditions
  if (isLoading) {
    return (
      <>
        {/* <Header /> */}
        <main className="inner-head grey pad80 text-center">
          <Container>
            <p>Loading blog post...</p>
          </Container>
        </main>
        {/* <Footer /> */}
      </>
    );
  }

  if (error || !post) {
    return (
      <>
        {/* <Header /> */}
        <main className="inner-head grey pad80 text-center">
          <Container>
            <h2 className="h4 text-danger mb-4">{error || "Blog not found."}</h2>
            <Link href="/blogs" className="btns3 btn4full">
              <span>← Back to Blogs</span>
            </Link>
          </Container>
        </main>
        {/* <Footer /> */}
      </>
    );
  }

  const shareUrl =
    typeof window !== "undefined"
      ? window.location.href
      : `${IMAGE_BASE_URL}/blogs/${post.slug}`;

  return (
    <>
      {/* <Header /> */}

      {/* Blog Head */}
      <main className="inner-head grey pad80">
        <Container>
          <Row className="align-items-end">
            <Col md={10}>
              <h1 data-aos="fade-up" className="h4">
                {post.title}
              </h1>
              <p data-aos="fade-up">{post.sub_title}</p>
            </Col>
            <Col md={2}>
              <div className="social-wrap">
                <p className="" data-aos="fade-up">
                  {formatDate(post.created_at)}
                </p>

                {/* Social Share Buttons */}
                <div className="share_wrapper" data-aos="fade-up">
                  {/* <Link
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      shareUrl
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF />
                  </Link> */}

                  <Link
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                      shareUrl
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn />
                  </Link>
{/* 
                  <Link
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                      shareUrl
                    )}&text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaXTwitter />
                  </Link> */}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </main>

      {/* Blog Banner */}
      <div className="blog-banner">
        <Image
          src={post.image ? `${IMAGE_BASE_URL}${post.image}` : blogimg}
          alt={post?.image_alt_text || post?.title || "Blog Image"}
          width={1200}
          height={600}
          priority
          className="w-100"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Blog Content */}
      <div className="pad80 blod-dtls">
        <Container>
          <div
            data-aos="fade-up"
            dangerouslySetInnerHTML={{
              __html: post.description || "No content available.",
            }}
          />
        </Container>
      </div>

      {/* <Footer /> */}
    </>
  );
}
