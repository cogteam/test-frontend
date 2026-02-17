import React from "react"; // Needed because we are using JSX (<>) inside the data
import { IMAGES } from "@/assets/images/index.js"; 

export const VALUE_PROPOSITIONS = [
  {
    title: "End-to-End Compliance Support",
    desc: "Comprehensive solutions covering audits, QMS development, vendor oversight, and certification readiness.",
    img: IMAGES.End,
    icon: IMAGES.Endicon,
  },
  {
    title: "Regulatory Expertise",
    desc: "Deep understanding of global GxP, ISO, and industry-specific regulations to ensure alignment with evolving compliance needs.",
    img: IMAGES.Regulatory,
    icon: IMAGES.Regulatoryicon,
  },
  {
    title: "Operational Efficiency",
    desc: "Streamlined processes and automation-focused practices that reduce audit burden and enhance quality outcomes.",
    img: IMAGES.Operational,
    icon: IMAGES.Operationalicon,
  },
  {
    title: "Proactive Risk Management",
    desc: "Early identification of compliance gaps and implementation of preventive controls to minimise risk exposure.",
    img: IMAGES.Proactive,
    icon: IMAGES.Proactiveicon,
  },
  {
    title: "Continuous Improvement",
    desc: "Empowering organisations to sustain high-quality standards through training, documentation, and ongoing compliance monitoring.",
    img: IMAGES.Continuous,
    icon: IMAGES.Continuousicon,
  },
];

export const SERVICES_TABS = [
  {
    key: "vms",
    title: "GxP Audit Services",
    heading: "GxP Audit Services",
    desc: "Conduct audits to ensure compliance with GxP regulations and identify areas for process improvement.",
    img: IMAGES.GxP,
  },
  {
    key: "dms",
    title: "Vendor Management",
    heading: "Vendor Management",
    desc: "Develop and implement programs to ensure third-party partners meet quality and compliance expectations.",
    img: IMAGES.Vendor,
  },
  {
    key: "tms",
    title: "Inspection Readiness Support",
    heading: "Inspection Readiness Support",
    desc: "Prepare for regulatory inspections through mock audits, gap assessments, and staff training sessions.",
    img: IMAGES.Inspection_Readiness_Support,
  },
  {
    key: "rm",
    title: "Quality Management System",
    heading: "Quality Management System Development",
    desc: "Design and implement tailored QMS frameworks aligned with global regulatory standards to enhance operational quality.",
    img: IMAGES.Quality_Management,
  },
  {
    key: "pv",
    title: "Training Coordination",
    heading: "Training Coordination",
    desc: "Plan and coordinate targeted training programs to strengthen organisational understanding of compliance and audit practices.",
    img: IMAGES.Training,
  },
  {
    key: "sd",
    title: "ISO Certification Consulting",
    heading: "ISO Certification Consulting",
    // We can use JSX here safely
    desc: (
      <>
        Support organisations in achieving and maintaining compliance for <b>ISO 27001, 27701, and 9001</b> certifications through structured readiness assessments and audits.
      </>
    ),
    img: IMAGES.ISO,
  },
];