"use client";
import React from "react";

function HTMLRenderer({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

export default HTMLRenderer;
