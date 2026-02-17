import { IMAGES } from "@/assets/images/index.js"; 

export const VALUE_PROPOSITIONS = [
  {
    title: "Strategic Validation Expertise",
    desc: "Leveraging CSA-based risk approaches to accelerate compliance and reduce validation burden.",
    img: IMAGES.Strategic,
    icon: IMAGES.Strategicicon,
  },
  {
    title: "Digitally Enabled Processes",
    desc: "Adoption of AI/ML/RPA and the NoteIQ platform to streamline the validation lifecycle and document management.",
    img: IMAGES.Digitally,
    icon: IMAGES.Digitallyicon,
  },
  {
    title: "Audit Readiness",
    desc: "Ensuring systems are compliant and inspection-ready with traceable documentation and SOP alignment.",
    img: IMAGES.Audit,
    icon: IMAGES.Auditicon,
  },
  {
    title: "Comprehensive Coverage",
    desc: "Expertise across all CSV maturity levels — from CSV 1.0 to CSV 4.0.",
    img: IMAGES.Comprehensive,
    icon: IMAGES.Comprehensiveicon,
  },
  {
    title: "Business Impact",
    desc: "Transforming compliance from a regulatory necessity to a business accelerator, driving efficiency and innovation.",
    img: IMAGES.Business,
    icon: IMAGES.Businessicon,
  },
];

export const SERVICES_TABS = [
  {
    key: "maximise_compliance",
    title: "Maximise Compliance",
    heading: "Managed & Consulting Services",
    img: IMAGES.Patient_Training_and_Education,
    desc: (
      <>
        <h6 className="fw-bold text-primary mb-2">Managed Services</h6>
        <ul className="mb-4 ps-3">
          <li>Operations</li>
          <li>Enterprise Applications</li>
          <li>Analytical Instruments & Shopfloor Equipment</li>
          <li>Network Qualification, Middleware & Hardware</li>
          <li>CSVMP, SOPs compliance</li>
          <li>Compliance Audits & Training</li>
        </ul>

        <h6 className="fw-bold text-primary mb-2">Consulting Services</h6>
        <ul className="mb-0 ps-3">
          <li>Process Consulting</li>
          <li>Audit Readiness, Participation & Observation Response</li>
          <li>CSVMP and SOP Re-Design & Simplification</li>
          <li>Digital Platform & Vendor Management</li>
          <li>Core Domain Consulting & CSVMP Development</li>
        </ul>
      </>
    ),
  },
  {
    key: "business_enabler",
    title: "Business Enabler",
    heading: "Transformation & Automation Services",
    img: IMAGES.Clinical_Assessments,
    desc: (
      <ul className="ps-3">
        <li className="mb-2">Strategic Validation</li>
        <li className="mb-2">Adoption of New Tech – AI / ML / RPA</li>
        <li className="mb-2">Unmanned Protocol Execution</li>
        <li className="mb-2">200+ RPAs Validated</li>
        <li className="mb-2">
          <strong>CSA</strong>
          <ul className="ps-3 mt-1" style={{ listStyleType: 'circle' }}>
            <li>10,000+ documents</li>
            <li>Risk-Based Approach</li>
          </ul>
        </li>
      </ul>
    ),
  },
  {
    key: "business_accelerator",
    title: "Business Accelerator",
    heading: "Software Platform",
    img: IMAGES.Other_Biologic_Sampling,
    desc: (
      <ul className="ps-3">
        <li className="mb-2"><strong>NoteIQ</strong></li>
        <li className="mb-2"><strong>Validation Management System</strong></li>
        <li className="mb-2">
          <strong>Documentation Management System</strong>
          <ul className="ps-3 mt-1" style={{ listStyleType: 'decimal' }}>
            <li>Developed in-house</li>
            <li>Digitisation</li>
            <li>Integrations</li>
            <li>AI enablement</li>
          </ul>
        </li>
      </ul>
    ),
  },
];