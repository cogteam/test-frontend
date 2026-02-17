"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react"; // Added useEffect, useState
import { Col, Row } from "react-bootstrap";
// The 'blog' local import will be a fallback
import blog from '../../assets/images/blog.webp';

import api, { domainUrl } from "../../lib/axios"; 
const IMAGE_BASE_URL = domainUrl; 

const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    try {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: '2-digit'
        });
    } catch (e) {
        return dateString; 
    }
};


export default function Bloghomepage(){
    const [post, setPost] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // Function to fetch the latest blog post
    const fetchLatestBlog = async () => {
        setIsLoading(true);
        setError(null);
        
        try {
            // Fetch the first page with a limit of 1 to get the latest blog
            const axiosConfig = {
                method: "get",
                url: `blogs?page=1&limit=1`, 
                headers: { "Content-Type": "application/json", Accept: "application/json" },
            };
            
            const response = await api(axiosConfig);
            
            // Assuming the blog list is inside 'data.blog' or similar
            const responseData = response.data.data || response.data;
            const blogList = responseData.blog || responseData; 
            
            if (blogList && Array.isArray(blogList) && blogList.length > 0) {
                setPost(blogList[0]);
            } else {
                setError("No latest blog post found.");
            }
            
        } catch (err) {
            console.error("Error fetching latest blog:", err);
            setError("Failed to load latest blog post.");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchLatestBlog();
    }, []); 

    // Handle Loading and No Data State
    if (isLoading) {
        return (
            <div className="text-center mt-4">
                <p>Loading latest insight...</p>
            </div>
        );
    }
    
    if (error || !post) {
        return (
            <div className="blog position-relative mt-4">
                <div className="text-center p-5">
                    <p>{error || "No latest insight available."}</p>
                    <Link href="/blogs" className="btns3"><span>Explore All Insights</span></Link>
                </div>
            </div>
        );
    }


    return(

        <>
        
        <div className="blog position-relative mt-4">
                          <Image 
                              // Dynamic Image Source
                              src={post.image ? `${IMAGE_BASE_URL}${post.image}` : blog} 
                              className="w-100" 
                              alt={post.image_alt_text || post.title} 
                              style={{"height": "550px", objectFit: 'cover'}} 
                              data-aos="fade-in"
                              width={1200} // Example dimension
                              height={550} // Example dimension
                          />

                          <div className="blog-caption">
                            <Row className="align-items-end">
                              <Col lg={4} md={7}>
                              <div className="article-data m-0 position-relative">
                                  {/* Dynamic Date and Category (using "Blog" as static category label) */}
                                  <span className="case" data-aos="fade-up">Blog</span> 
                                  <span className="seprator"> | </span> 
                                  <span>{formatDate(post.created_at)}</span>
                                  
                                  {/* Dynamic Title */}
                                  <h3 className="text-uppercase" data-aos="fade-up">
                                      <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                                  </h3>
                                  
                                  {/* Dynamic Link */}
                                  <Link href={`/blogs/${post.slug}`} className="text-uppercase btns-line" data-aos="fade-up">Know more</Link>
                                </div>
                              </Col>
                              <Col lg={8} md={5}>
                                <div className="text-end">
                                  <Link href="/insights" className="btns3" data-aos="fade-up"><span>EXPLORE ALL INSIGHTS</span></Link>
                                </div>
                              </Col>
                            </Row>
                          </div>
                    </div>
        </>
    )
}