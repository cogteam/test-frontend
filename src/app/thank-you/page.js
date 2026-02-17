"use client";
import React from "react";
import { Container } from "react-bootstrap";
import Link from "next/link";

export default function Thankyou() {
    



    return(


        <>
            <div className="thanku-wrapper">
                <Container>
                        <h1 className="h4">Thank You</h1>
                        <span className="line"></span>
                        <h4>For your interest in<br /> Pivot path.<br />
We will be in touch with <br />you shortly.</h4>


<Link href="/" className="btns3 text-uppercase" ><span>Back to home</span></Link>
                </Container>
            </div>
            
        </>
    )
}