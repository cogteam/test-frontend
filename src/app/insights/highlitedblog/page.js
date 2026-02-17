"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Aos from "aos"; 
// Import both the default export (api) and the named export (domainUrl)
import api, { domainUrl } from "../../../lib/axios"; 

// Use the imported domainUrl from the central axios config as the image base URL
// The image path from the API (e.g., /uploads/blog/...) will be appended to this.
const IMAGE_BASE_URL = domainUrl; // THIS IS NOW DYNAMICALLY IMPORTED

export default function Highlightblog() {
    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Initialize AOS
        Aos.init({
            duration: 1000, 
            once: true,     
        });

        // Function to fetch the blogs
        const fetchBlogs = async () => {
            try {
                setIsLoading(true);
                setError(null);

                const axiosConfig = {
                    method: "get",
                    url: "/blogs", // baseURL: domainUrl + "/api/website/" is prepended automatically
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                };

                const response = await api(axiosConfig);

                const blogData = response.data.data || response.data; 
                
                // --- CONSOLE LOG ADDED FOR CHECKING DATA ---
                console.log("Blog API Response Data:", blogData);
                // ------------------------------------------

                setBlogs(blogData.slice(0, 3)); 

            } catch (err) {
                console.error("Error fetching blogs:", err);
                setError("Failed to load latest blog posts.");
                setBlogs([]); 
            } finally {
                setIsLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    // Destructure the first blog for the main highlight and the rest for the side column
    const [mainBlog, ...sideBlogs] = blogs;

    // Function to format the date (e.g., YYYY-MM-DD to DD MMM YYYY)
    const formatDate = (dateString) => {
        if (!dateString) return '';
        try {
            return new Date(dateString).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: '2-digit'
            });
        } catch (e) {
            return dateString.substring(0, 10); // Fallback to YYYY-MM-DD
        }
    };

    if (isLoading) {
        return (
            <main className="pad80 highlighted-blog">
                <Container className="text-center">
                    <p>Loading latest blogs...</p>
                </Container>
            </main>
        );
    }

    console.log(IMAGE_BASE_URL);
    

    if (error) {
        return (
            <main className="pad80 highlighted-blog">
                <Container className="text-center">
                    <p className="error">{error}</p>
                </Container>
            </main>
        );
    }

    if (blogs.length === 0) {
        return (
            <main className="pad80 highlighted-blog">
                <Container className="text-center">
                    <p>No blog posts found.</p>
                </Container>
            </main>
        );
    }

    return (
        <>
            <main className="pad80 highlighted-blog">
                <Container>
                    <h4 className="text-center mb-5 text-center h4" data-aos="fade-up">Blogs</h4>
                    <Row>
                        {/* Main Highlighted Blog (First Blog) */}
                        {mainBlog && (
                            <Col lg={8} md={12} className="" data-aos="fade-up">
                                <Link
                                    href={`/blogs/${mainBlog.slug}`}
                                    className="blog-list bloglist-high2 d-block p-0 border-0 mb-0 h-100"
                                >
                                    <div className="overflow-hidden position-relative h-100">
                                        <img 
                                            // COMBINE BASE URL with the image path from the API
                                            src={`${IMAGE_BASE_URL}${mainBlog.image}`} 
                                            className="w-100 h-100 mb-hight" 
                                            alt={mainBlog.image_alt_text || mainBlog.title} 
                                        />
                                        <div className="caption">
                                            <span>{formatDate(mainBlog.created_at)}</span> 
                                            <h3>{mainBlog.title}</h3>
                                        </div>
                                    </div>
                                </Link>
                            </Col>
                        )}

                        {/* Side Highlighted Blogs (Remaining two) */}
                        {sideBlogs.length > 0 && (
                            <Col lg={4} md={12} className="d-flex flex-column gap-4 high-tab" data-aos="fade-up">
                                {sideBlogs.map((blog) => (
                                    <Link
                                        key={blog.id} 
                                        href={`/blogs/${blog.slug}`}
                                        className="blog-list d-block blog-list-highlighted p-0 border-0 m-0"
                                    >
                                        <div className="overflow-hidden position-relative">
                                            <img 
                                                // COMBINE BASE URL with the image path from the API
                                                src={`${IMAGE_BASE_URL}${blog.image}`} 
                                                className="w-100 h-auto" 
                                                alt={blog.image_alt_text || blog.title} 
                                            />
                                            <div className="caption">
                                                <span>{formatDate(blog.created_at)}</span>
                                                <h3>{blog.title}</h3>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </Col>
                        )}
                    </Row>

                    <div className="text-center mt-0 mt-md-5 mb-hight" data-aos="fade-up">
                        <Link href="/blogs" className="btns3 btn4full"><span>Read More</span></Link>
                    </div>
                </Container>
            </main>
        </>
    );
}