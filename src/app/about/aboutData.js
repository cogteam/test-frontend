import { IMAGES } from "@/assets/images";
// Make sure "values1" is added to your IMAGES object in assets/images.js 
// or import it here if it's not centralized yet.

export const VALUES_DATA = [
  { 
    title: "Integrity", 
    desc: "We act ethically, honestly, and transparently in all our interactions and decisions.", 
    icon: IMAGES.INTEGRITY 
  },
  { 
    title: "Respect", 
    desc: "We treat every individual with dignity, fairness, and consideration, valuing diverse perspectives and fostering an inclusive environment.", 
    icon: IMAGES.EFFICIENCY 
  },
  { 
    title: "Accountability", 
    desc: "We take ownership of our actions, decisions, and outcomes, and honour our commitments.", 
    icon: IMAGES.COLLABORATION 
  },
  { 
    title: "Compliance", 
    desc: "We adhere to all applicable laws, regulations, policies, and standards, recognizing our responsibility to customers, partners, and patients.", 
    icon: IMAGES.CUSTOMER_CENTRICITY 
  },  
  
];

export const TEAM_DATA = [
  // --- VISIBLE INITIALLY ---
  {
    name: "Shashidhar KL",
    role: "Chief Executive Officer",
    img: IMAGES.SHASHIDHAR_KL,
    link: "https://www.linkedin.com/in/shashidhar-lingaraj-2b477314/",
    bio: [
      "22+ years of experience working with multiple industries like Pharmaceuticals, Medical Devices, Telecom, Banking and Insurance.",
      "Worked with organizations like Agnus Capital, Mylan, Aspen Pharmacare, Skanray devices, Vodafone, ICICI Bank and TATA AIG across Latin America, Europe, Africa and South-East Asia.",
      "MBA from University of Mysore and holds a degree in Advanced Management from IIM Bangalore."
    ]
  },
  {
    name: "Dr. Gopal Muralidharan",
    role: "Global Pharmacovigilance & Clinical Operations",
    img: IMAGES.DR_GOPAL_MURALIDHARAN,
    link: "https://www.linkedin.com/in/gopal-muralidharan-3ab5b014/",
    bio: [
      "35+ years of experience in both pre-clinical and clinical research areas in the USA for about 15years with American Cynamide (Lederle Laboratories) and Wyeth research before returning to India as President and CSO of Lotus Labs, Bangalore.",
      "Co-founded Semler Research Center, where he served as CEO, and later held the position of Chief Technology Officer at Advinus Therapeutics before joining Pivot Path.",
      "Holds a bachelor’s degree in Pharmacy (B .Pharm) and PhD from University of Saskatchewan, Canada, in Drug Metabolism and Pharmacokinetics."
    ]
  },
  {
    name: "Munish Kumar Sharma",
    role: "Computer System Validation",
    img: IMAGES.MUNISH,
    link: "https://www.linkedin.com/in/munish-kumar-sharma-41a8a72b/",
    bio: [
      "30+ years of experience comprising of mainstream IT systems, Validations and IT QA in Pharmacy.",
      "Worked with companies like Sun Pharma and Ranbaxy Laboratories. Ensures digital compliance in manufacturing equipment & analytical instruments like BMS, CDMS for Manufacturing, R&D and corporate set-ups.",
      "Holds a degree in commerce and IT. Advanced Diploma in Systems. Management from National Institute of Information Technology."
    ]
  },
  {
    name: "Mohammed G A",
    role: "Intellectual Property Rights",
    img: IMAGES.MOHAMMED_GA,
    link: "https://www.linkedin.com/in/mohammedga/",
    bio: [
      "16+ years of experience in the life science domain, comprising primarily pharmaceuticals, biotechnology, nutraceuticals and medical devices.",
      "Mohammed has extensive experience managing Hatch Waxman and BPCIA issues from product ideation through launch, partnering with R&D, regulatory, and commercial in developing and implementing global IP strategies for small molecules and biologics in 165+ countries.",
      "Holds a M.S. in Pharmaceutics from NIPER, Mohali; a M.A. BL in IPR and Cyber Laws from NUJS, Kolkata and a Master of Business Laws (MBL) from NLSIU, Bangalore."
    ]
  },
  {
    name: "Ajay Balakrishna",
    role: "IT Operations ",
    img: IMAGES.AJAY,
    link: "https://www.linkedin.com/in/ajay-balakrishna-1424276/",
    bio: [
      "23+ years of IT experience in Pharma and Life Science industry with Strides group, Cellofarm and Tenshi Life Sciences.",
      "Worked on multiple areas in life science industry like ITQA, infrastructure (Data center), information security, SAP implementation, plant IT compliance, end-to-end track & trace systems.",
      "He has managed IT operations in multiple geographies like Brazil, US & Australia."
    ]
  },
  {
    name: "Yadhu Gopal Raj Urs",
    role: "IT New Technologies ",
    img: IMAGES.YADHU,
    link: "https://www.linkedin.com/in/yadhu-urs-776a9115/",
    bio: [
      "23+ years of experience in IT, retail and pharmaceuticals with organizations like Metro cash & carry, Wipro Technologies & eDeals Technologies & solutions.",
      "Associated with Strides group for 5+ years leading manufacturing, digital transformation initiatives, RPA, AI & IOT, product developments, advanced analytics.",
      "Holds bachelor’s degree (B.Sc.) from Mysore University, PGDCA and Masters in Computer Applications."
    ]
  },

  // --- HIDDEN INITIALLY (INSIDE TOGGLE) ---
  
  {
    name: "Shankar Yadav",
    role: "Operational Excellence",
    img: IMAGES.SHANKAR,
    link: "https://www.linkedin.com/in/shankar-rajkumar-pmp%C2%AE-csm%C2%AE-lean-expert-524917144/",
    bio: [
      "18+ years of experience across diversified industry sectors including Pharmaceuticals, Infrastructure, Retail Industry.",
      "Worked for companies Like Confederation of Indian Industry, GMR Infra, B&B Constructions in Project Management, Operational Excellence, Mobile App development, Process Excellence, Indirect Procurement etc.",
      "He holds an MBA in Business Management."
    ]
  },
  {
    name: "Archana Kamath",
    role: "Technical Product Management",
    img: IMAGES.ARCHANA,
    link: "https://www.linkedin.com/in/archana-kamath-a8316128/",
    bio: [
      "19+ years of experience across Pharmaceutical R&D, IT, QA and CSV.",
      "Worked for companies like Strides and Xellia Pharmaceuticals with expertise in implementing and managing the life cycle of enterprise applications in Pharmaceutical quality and Labs.",
      "Bachelor of Pharmacy and MBA in Total Quality Management."
    ]
  },
  {
    name: "Girish Pai",
    role: "Business Development",
    img: IMAGES.GIRISH_PAI,
    link: "https://www.linkedin.com/in/girishpai79/",
    bio: [
      "22+ years of experience across various fields like IT, Pharma technology, Medical technology, Consumer Healthcare.",
      "Worked with companies like PharmaSecure, Philips, Johnson& Johnson,CavinKare, GSK Consumer Heath, Dabur and UST. Experience in Global business development, Consultative Solution Selling, General Management, International Business Partnerships & Alliance  and Business leadership.",
      "Holds an MBA in Marketing & Finance from NMIMS, Mumbai & BE (Chemical Engineering) from MIT, Manipal."
    ]
  },
  {
    name: "Gurupad Badithe",
    role: "Product Management",
    img: IMAGES.GURUPAD,
    link: "https://www.linkedin.com/in/gurupad/",
    bio: [
      "13+ years of experience in product led growth, partnerships & alliances, sales operations and marketing.",
      "He has worked in industries like medical devices, consumer technology, and education. He has established multiple revenue streams, forged significant contracts and worked in both B2C and B2B markets.",
      "Holds an MBA in Marketing & Strategy from the Indian School of Business (ISB)."
    ]
  },
  {
    name: "Kalpesh Vohra",
    role: "Human Capital",
    img: IMAGES.KALPESH_VOHRA,
    link: "https://www.linkedin.com/in/kalpesh-vohra/",
    bio: [
      "19+ years of experience in driving excellence in the field of human resources.",
      "He has led and contributed to numerous HR assignments, spanning areas such as organization design, job evaluation, HR systems and processes enhancement, performance management, and total rewards.",
      "Before joining Pivot Path, he held the position of Cluster Business Leader and Principal Consultant in HR Consulting vertical at Mercer."
    ]
  },
  {
    name: "Srinivasa Rao Mekala",
    role: "Talent Acquisition",
    img: IMAGES.SRINIVAS,
    link: "https://www.linkedin.com/in/srinivas-mekala-hr/",
    bio: [
      "17+ years of experience in Talent Acquisition, Workforce Planning, Campus Hiring and TA process excellence within Pharma sector.",
      "Worked with organizations like Aurobindo, Biocon, Dr Reddy's and Mylan. Deep knowledge in Pharma talent landscape across Formulations, Injectables, API and Biologics.",
      "Holds a Master's in Human Resource Management from Andhra University."
    ]
  },
  {
    name: "Stuti Sharma",
    role: "Business Strategy & Delivery Excellence",
    img: IMAGES.STUTI_SHARMA,
    link: "https://www.linkedin.com/in/stutisharma9/",
    bio: [
      "15+ years of experience with almost 11 years as business consultant in Big 4s (EY, KPMG, Pwc), focused professional for strategy, process and transformation.",
      "Experience in areas of Project Management, Operational Transformation, BPR, Business Process Design, IT strategy, etc.",
      "Holds an MBA in Marketing Communication from Symbiosis Institute of Business Management."
    ]
  },
  {
    name: "Sunandha G",
    role: "HR Business Partner and L&OD",
    img: IMAGES.SUNANDHA,
    link: "https://www.linkedin.com/in/sunandhagovindan/",
    bio: [
      "16+ years of experience across the pharmaceuticals, automotive, and ITES industries. She has worked with global organizations including Strides, Bosch, Quintiles (now IQVIA), and Hinduja Global Solutions.",
      " At Arcolab, she leads the human resources function, steering people strategy, capability building, talent and leadership development, and culture. She is known for creating future-ready people strategies that align talent, performance, and business growth. She brings expertise in talent management, HR operations, and digital learning. ",
      "She holds an MBA in Business Management from Manipal University and an Executive Development certification in Talent Management from XLRI."
    ]
  },
  {
    name: "Bharatha Bhushana",
    role: "Product Development",
    img: IMAGES.bharat,
    link: "https://www.linkedin.com/in/bharatha-bhushana-898858/",
    bio: [
      "26+ years of experience in technology leadership across regulated global industries, with deep expertise in product engineering, cloud native, data, and AI led platforms.",
      "Managed $30M+ strategic accounts and led 400+ global teams, delivering large scale programs across North America, Europe, and Asia.",
      "Proven track record in driving digital transformation and automation for global clients including FedEx, Pfizer, Walt Disney, Charles Schwab, and Strides Pharma."
    ]
  },
   {
    name: "Rajesh Kumar Sahu",
    role: "Product Development",
    img: IMAGES.rajesh,
    link: "https://www.linkedin.com/in/rajesh-kumar-sahu-262898327/",
    bio: [
      "Technology experience, including 18+ years in enterprise and product development across regulated and compliance driven environments.",
      "Strong expertise in cloud native, microservices, AI, and data driven architectures, with end to end delivery ownership.",
      "Known for structured, hands on leadership, translating complex business and regulatory needs into scalable solutions."    ]
  },

  {
    name: "Naveen Kumar H. D",
    role: "Associate Director, Pharmacovigilance",
    img: IMAGES.naveen,
    link: "https://www.linkedin.com/in/naveen-kumar-5903474b/",
    bio: [
      "13+ years of experience in the pharmaceutical industry, including pharmacovigilance (drug safety).",
      "Establish and maintain the pharmacovigilance system and to ensure compliance with EU, UK, US, Canada & ROW regulations. Management of ICSRs, PBRERs, PADERs, RMPs, REMS, PSMF, signal management, medical enquiries, safety database and call center operations.",
      "He holds an M.Pharm in Clinical Pharmacy."
    ]
  },


  // Note: The "Delivery Practices Leader" header should be handled in the component code 
  // by inserting a header before Rahul Nair if rendering logic requires it, 
  // or simply rendering it as part of the hidden section content.
  // {
  //   name: "Rahul Nair",
  //   role: "Global Pharmacovigilance",
  //   img: IMAGES.RAHUL_NAIR,
  //   link: "https://www.linkedin.com/in/rahul-nair-20796032/",
  //   bio: [
  //     "25+ years of pharmaceutical industry, with 14 years of experience in pharmacovigilance business process implementation and management.",
  //     "Life Member of Indian Pharmaceutical Association, Peer reviewer & referee for international journals such as Drug development & industrial pharmacy.",
  //     "Holds a Masters in Pharmacy in Industrial Pharmacy from the Institute of Pharmaceutical Technology, Chidambaram."
  //   ]
  // },
  {
    name: "Kiran Kumar A",
    role: "Quality & Digital Compliance ",
    img: IMAGES.KIRAN,
    link: "https://www.linkedin.com/in/kiran-kumar-a-569563117/",
    bio: [
      "20+ years of experience in the field CSV, regulatory compliance, and data assurance in life sciences industry.",
      "Worked with companies like Apotex, Cipla, Eurofins, Novo Nordisk, Ranbaxy, Eisai and Strides.",
      "Expertise in risk-based validation within Agile SDLC, Managing manufacturing, laboratory systems, infrastructure qualification, and cloud-based solutions."
    ]
  },
  {
    name: "Dr. Vimla D’souza",
    role: "Clinical Operations",
    img: IMAGES.DR_VIMLA,
    link: "https://www.linkedin.com/in/vimla-dsouza-0a042314/",
    bio: [
      "21+ years of experience in Clinical Research (BA/BE, Phase II/III) and Pharmacovigilance, with strong expertise in clinical operations and medical oversight.",
      "Worked with organizations such as Lotus Labs, Apotex Research, Asiatic Clinical Research, Quintiles Research, Novo Nordisk, and Arcolab Pvt. Ltd., leading initiatives in Clinical Strategy, Medical Complaint Assessment, and Audit Readiness.",
      "MBBS from Shri Siddhartha Medical College, Tumkur, Karnataka."
    ]
  },
  {
    name: "Prakasha Reddy",
    role: "IT Operations",
    img: IMAGES.PRAKASHA,
    link: "https://www.linkedin.com/in/prakash-reddy-85a55a170/?originalSubdomain=in",
    bio: [
      "25+ years of experience in the Information Technology and Pharmaceutical sectors, leading enterprise infrastructure and digital transformation initiatives.",
      "Worked with Strides Pharma Science, and Remed Labs, with expertise in Datacenter & Cloud Management, Network Design (LAN/WAN), Turnkey Integrations, and IT Cost Optimization.",
      "Diploma in Electronics and Bachelor of Computer Applications, Bangalore, Karnataka."
    ]
  },
  {
    name: "Karthick R",
    role: "Operational Excellence",
    img: IMAGES.KARTHIK,
    link: "https://www.linkedin.com/in/karthick-r-8971aa92/",
    bio: [
      "17+ years of experience across pharmaceutical, biopharma, and manufacturing sectors, with a proven track record in ISO certifications, LEED certification, British Safety Council 5-star rating, and the Deming Grand Prize journey.",
      "His career includes key roles with Tagros Chemicals, Saint-Gobain, IMC Limited, AstraZeneca, Recipharm, Kemwell Biopharma, and CEAT, specializing in Lean Manufacturing, Operational & EHS Excellence, Process Optimization, Governance & Assurance Systems, Project Management, and Digital Transformation (Industry 4.0).",
      "He holds a B.Tech in Chemical Engineering from Sathyabama University, an MBA in Finance Management from Vinayaka Mission University, a PG Diploma in Industrial Safety from the Regional Labour Institute, and a Diploma in Industrial & Pollution Control from Annamalai University."
    ]
  },
  {
    name: "Sneha Maiti",
    role: "Human Capital",
    img: IMAGES.SNEHA_MAITI,
    link: "https://www.linkedin.com/in/sneha-maiti-4804a9114/",
    bio: [
      "10+ years of experience in the Manufacturing and Pharmaceutical industries, including 6 years of specialization in HR Technology and Digital Transformation initiatives.",
      "Currently spearheading HRMS implementations for both domestic and international clients, with a proven track record in strategic HR process enablement, automation, and driving digital excellence across organizations.",
      "Holds a Master’s degree in Sociology from Christ University, Bangalore, and is a Darwinbox Functional Certified Professional."
    ]
  },
  // {
  //   name: "Prathima P D",
  //   role: "Quality Assurance",
  //   img: IMAGES.PRATHIMA,
  //   link: "https://www.linkedin.com/in/prathima-p-d-40b91929/",
  //   bio: [
  //     "33+ years of industrial & academic experience with leadership roles at Lotus Labs, Semler Research, Daksha Bioscience, and Tenshi Life Sciences; SME in Clinical Operations, Compliance & Quality Assurance.",
  //     "Certified Lead Auditor (ISO 27001, 27701, 9001) and Lean Six Sigma Black Belt.",
  //     "Expert in QMS implementation (SOPs, CAPA, Change Control, Deviations, RCA) for Clinical, PV, QA, and GxP organizations, aligned with global regulatory standards.",
  //     "Extensive audit & inspection expertise, conducting risk-based PV audits and representing organizations before regulators (DCGI, FDA, EMA, Health Canada, ANVISA, MHRA, WHO)."
  //   ]
  // },
  {
    name: "Dhana Vignesh",
    role: "Talent Acquisition",
    img: IMAGES.DHANA,
    link: "https://www.linkedin.com/in/dhana-vignesh-j-5b5973108/",
    bio: [
      "10+ years of experience across Telecom, Staffing, and Pharmaceuticals, with expertise in Global Talent Acquisition, Stakeholder Management, and People Leadership.",
      "Worked with organizations such as United Telecoms Limited, ITS Solutions, and Mindlance, delivering consistent, customer-centric hiring outcomes across international markets.",
      "M.S.W. from GTN Arts College, Tamil Nadu."
    ]
  }
];

export const BOARD_DATA = [
  {
    name: "Shashidhar KL",
    role: "Chief Executive Officer",
    img: IMAGES.SHASHIDHAR_KL,
    link: "https://www.linkedin.com/in/shashidhar-lingaraj-2b477314/"
  },
  {
    name: "Dr. Gopal Muralidharan",
    role: "Global Pharmacovigilance & Clinical Operations",
    img: IMAGES.DR_GOPAL_MURALIDHARAN,
    link: "https://www.linkedin.com/in/gopal-muralidharan-3ab5b014/"
  },
  {
    name: "Vinodkumar Bhaskaran",
    role: "Legal",
    img: IMAGES.VINOD_KUMAR,
    link: "https://www.linkedin.com/in/vinod-kumar-bhaskaran-bb04134/?originalSubdomain=in"
  }
];