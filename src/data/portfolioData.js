export const personalInfo = {
  name: "Steven Harun Samba, S.Kom., B.Sc.",
  nickname: "Steven",
  title: "Data Science & Analyst, AI Engineer & Supply Chain Project Controller",
  degree: "Bachelor of Science in Information Systems (B.Sc. / S.Kom.)",
  degreeAbbr: "S.Kom., B.Sc.",
  gpa: "3.60 / 4.00",
  graduationDate: "Aug 2025",
  university: "Telkom University",
  graduationStatus: "Fresh Graduate / Alumni",
  location: "Bandung & Jakarta, Indonesia",
  email: "steven.samba@gmail.com",
  phone: "(+62) 8139552-3571",
  whatsappLink: "https://wa.me/6281395523571?text=Hi%20Steven,%20I%20reviewed%20your%20executive%20portfolio",
  linkedin: "https://www.linkedin.com/in/steven-harun-samba",
  github: "https://github.com/StevenHarun",
  englishScore: "EPRT: 510",
  photo: "/steven-harun-samba.jpg",
  bio: "Information Systems graduate from Telkom University (GPA 3.60/4.00, B.Sc. / S.Kom.) with proven enterprise experience in multinational telecommunications (PT Huawei Tech Investment - Supply Chain & Project Controlling) and national energy operations (PT Pertamina Hulu Energi). Alumnus of Bangkit Academy led by Google, first author of published IEEE computer vision research (YOLOv9), certified Oracle Cloud Data Science Professional, and BNSP Associate Data Scientist.",
  roles: [
    "Data Science & Analyst",
    "AI & Computer Vision Researcher",
    "Supply Chain & Project Controller",
    "Enterprise Systems & BI Analyst"
  ]
};

export const enterpriseFootprint = [
  { name: "PT Pertamina Hulu Energi", role: "Human Capital Information System", icon: "Building2" },
  { name: "PT Huawei Tech Investment", role: "Supply Chain & Project Controller (250+ Sites)", icon: "Globe" },
  { name: "PT Bank BJB, Tbk.", role: "Business Consumer Unit BI", icon: "Landmark" },
  { name: "Bangkit Academy by Google", role: "Machine Learning Cohort & Capstone Lead", icon: "Sparkles" },
  { name: "IEEE Xplore", role: "Published First Author (ICIC 2024)", icon: "Award" },
  { name: "Oracle Cloud Infrastructure", role: "OCI Certified Data Science Professional", icon: "Cloud" }
];

export const impactMetrics = [
  {
    value: "26,020",
    label: "InfoBMKG User Reviews Analyzed",
    description: "LightGBM (91% Accuracy) + LDA Topic Modeling in undergraduate thesis",
    accent: "from-emerald-400 to-cyan-400"
  },
  {
    value: "94.2%",
    label: "YOLOv9 Computer Vision Precision",
    description: "Evaluated on real-time traffic accident detection, published on IEEE",
    accent: "from-indigo-400 to-purple-400"
  },
  {
    value: "250+ Sites",
    label: "Supply Chain & Telecom Integration",
    description: "Coordinated at Huawei across Indonesia, achieving 90%+ SLA closure",
    accent: "from-cyan-400 to-blue-400"
  },
  {
    value: "650+ Mentees",
    label: "Students Mentored & Taught",
    description: "Across Enterprise Data Management & Intelligence System Labs",
    accent: "from-amber-400 to-orange-400"
  }
];

export const projectCategories = [
  { id: "all", label: "All Works" },
  { id: "research", label: "Research & Publications" },
  { id: "side-projects", label: "AI & Side Projects" },
  { id: "enterprise-bi", label: "Enterprise & Supply Chain Cases" }
];

export const projects = [
  {
    id: "yolov9-accident-detection",
    title: "Traffic Accident Detection Analysis Using YOLOv9 Algorithm",
    category: "research",
    year: "Feb 2024 – Nov 2024",
    role: "First Author & Conference Presenter",
    organization: "The 9th International Conference on Informatics and Computing (ICIC 2024)",
    publicationOrg: "IEEE Xplore & APTIKOM",
    summary: "First-authored international IEEE research demonstrating real-time traffic accident detection using YOLOv9 with GELAN architecture, achieving 94.2% precision.",
    description: "Led the development of a real-time AI-based traffic accident detection system utilizing the YOLOv9 algorithm with GELAN (Generalized Efficient Layer Aggregation Network) architecture. Sourced, verified, and annotated over 4,000 accident-related images from web scraping and open repositories. Conducted comparative empirical experiments evaluating YOLOv8 and YOLOv9 across multiple epochs to benchmark precision and inference speed. Attained 94.2% precision and strong mAP scores to accelerate emergency medical responses and reduce road fatalities.",
    metrics: [
      { label: "Model Precision", value: "94.2%" },
      { label: "Dataset Size", value: "4,000+ images" },
      { label: "Comparative Baselines", value: "YOLOv8 vs YOLOv9" },
      { label: "Publication Index", value: "IEEE Xplore (#10957461)" }
    ],
    technologies: [
      "YOLOv9",
      "GELAN Architecture",
      "PyTorch",
      "Computer Vision",
      "Roboflow / OpenCV",
      "Data Annotation",
      "IEEE Scientific Writing"
    ],
    highlights: [
      "Selected as 1st Author and delivered presentation at the 9th ICIC 2024 in Medan.",
      "Engineered automated data preprocessing pipeline handling noisy street cameras.",
      "Proved GELAN gradient path retention surpasses prior YOLO generation detectors.",
      "Officially cataloged and published in IEEE Xplore digital library."
    ],
    workflow: [
      { title: "1. Data Acquisition", desc: "Scraped and curated 4,000+ real-world collision photos across diverse lighting conditions." },
      { title: "2. Annotation & Preprocessing", desc: "Standardized bounding box annotations and augmented multi-weather conditions." },
      { title: "3. GELAN Architecture Tuning", desc: "Configured YOLOv9 with GELAN backbone to maximize gradient retention." },
      { title: "4. Benchmarking & Publication", desc: "Achieved 94.2% precision, outperforming YOLOv8; presented paper at IEEE conference." }
    ],
    links: {
      publication: "https://ieeexplore.ieee.org/document/10957461",
      linkLabel: "Read on IEEE Xplore"
    },
    badge: "IEEE Xplore Publication",
    featured: false
  },
  {
    id: "sentiment-analysis-infobmkg",
    title: "Sentiment Analysis InfoBMKG with LightGBM and LDA Algorithm",
    category: "research",
    year: "Jan 2025 – May 2025",
    role: "Lead Researcher & Undergraduate Thesis",
    organization: "Telkom University & Badan Meteorologi, Klimatologi, dan Geofisika (BMKG)",
    publicationOrg: "Undergraduate Academic Thesis",
    summary: "Analyzed 26,020 user reviews of the InfoBMKG app using LightGBM (91% accuracy) and LDA topic modeling to formulate strategic government meteorological system improvements.",
    description: "Conducted an in-depth Natural Language Processing (NLP) study on public perception of Indonesia's national weather service application (InfoBMKG). Scraped and cleaned a corpus of 26,020 Google Play Store user reviews. Built predictive sentiment classifiers using the Light Gradient Boosting Machine (LightGBM) algorithm, reaching a 91% classification accuracy. Combined with Latent Dirichlet Allocation (LDA) unsupervised topic modeling to isolate recurring complaint patterns, synthesizing strategic policy recommendations for BMKG on information latency, weather radar precision, and server stability.",
    metrics: [
      { label: "Reviewed Dataset", value: "26,020 reviews" },
      { label: "Model Accuracy", value: "91% (LightGBM)" },
      { label: "Topic Modeling", value: "LDA Clustering" },
      { label: "Domain Impact", value: "BMKG Strategic Policy" }
    ],
    technologies: [
      "Python",
      "LightGBM",
      "LDA Topic Modeling",
      "NLP (NLTK & Sastrawi)",
      "Pandas & Scikit-learn",
      "Data Visualization",
      "Statistical Modeling"
    ],
    highlights: [
      "Extracted and preprocessed 26,020 raw Indonesian review texts with Indonesian slang normalization.",
      "Surpassed traditional Naive Bayes and SVM benchmarks using optimized LightGBM hyper-parameters.",
      "Discovered core latent topic clusters: radar delay, earthquake notification timeliness, and UI responsiveness.",
      "Delivered formal policy recommendations directly relevant to national disaster mitigation systems."
    ],
    workflow: [
      { title: "1. Web Scraping & Ingestion", desc: "Collected 26,020 authentic user reviews from Google Play Store." },
      { title: "2. Indonesian NLP Pipeline", desc: "Stopword removal, tokenization, stemming, and TF-IDF vectorization." },
      { title: "3. LightGBM Classification", desc: "Trained gradient boosting model attaining 91% accuracy." },
      { title: "4. LDA Latent Clustering", desc: "Segmented core public pain points regarding latency and weather radar." }
    ],
    links: {
      linkLabel: "Undergraduate Thesis Case Study"
    },
    badge: "NLP & Data Science Thesis",
    featured: false
  },
  {
    id: "docare-ai-chatbot",
    title: "DoCare.AI Virtual Health Assistant (LLaMA + RAG)",
    category: "side-projects",
    year: "Sep 2024 – Dec 2024",
    role: "Capstone Project Lead & ML Engineer",
    organization: "BANGKIT Academy led by Google, GoTo, and Traveloka",
    publicationOrg: "Google Bangkit Capstone Project",
    summary: "Engineered an intelligent medical assistant using TensorFlow, Large Language Models (LLaMA), and Retrieval-Augmented Generation (RAG) for personalized health dialogues.",
    description: "As Capstone Team Lead in the prestigious Google Bangkit program, designed and deployed an interactive virtual health consultation system. Integrated Large Language Model (LLaMA) architectures with Retrieval-Augmented Generation (RAG) to ensure evidence-based responses grounded in verified medical documentation. Orchestrated TensorFlow model components, API connectors, and vector similarity search for accurate user symptoms triage.",
    metrics: [
      { label: "Program", value: "Google Bangkit" },
      { label: "Architecture", value: "LLaMA + RAG" },
      { label: "Framework", value: "TensorFlow" },
      { label: "Role", value: "Capstone Project Lead" }
    ],
    technologies: [
      "TensorFlow",
      "LLaMA",
      "Retrieval-Augmented Gen (RAG)",
      "Vector Embeddings",
      "Python Flask API",
      "Prompt Engineering",
      "Agile Capstone Management"
    ],
    highlights: [
      "Directed end-to-end strategy, milestone delivery, and comprehensive reporting for team capstone.",
      "Prevented LLM hallucination through strict RAG domain-grounding on clinical knowledge bases.",
      "Completed 20+ specialized Google Deep Learning courses during program tenure."
    ],
    workflow: [
      { title: "1. Medical Corpus Ingestion", desc: "Chunked and embedded vetted clinical health guides into vector index." },
      { title: "2. Query Vectorization", desc: "Mapped user natural language questions into embedding space." },
      { title: "3. RAG Context Retrieval", desc: "Fetched top-K relevant clinical chunks for prompt synthesis." },
      { title: "4. LLaMA Response Generation", desc: "Generated empathetic, verified healthcare recommendations." }
    ],
    links: {
      linkLabel: "Bangkit Capstone Demo"
    },
    badge: "Google Bangkit Capstone",
    featured: false
  },
  {
    id: "pertamina-hcis-powerbi",
    title: "Human Capital Information System & Data Automation",
    category: "enterprise-bi",
    year: "July 2026 – Present",
    role: "Human Capital Information System",
    organization: "PT Pertamina Hulu Energi – Jakarta, Indonesia",
    publicationOrg: "National Energy Upstream Subsidiary",
    summary: "Authored business requirement documents (BRD/RIC), architected analytical Power BI dashboards, and automated human capital data integration pipelines.",
    description: "At Indonesia's national upstream energy giant (Pertamina Hulu Energi), translated cross-divisional business needs into structured technical system requirements via Business Requirement Documents (BRD) and Requirement Initial Checklists (RIC). Engineered and maintained analytical dashboards using Power BI and Power Query to visualize workforce allocation and personnel demographic distribution. Designed automated data workflows that eliminated repetitive manual data integration, elevating workforce strategic planning.",
    metrics: [
      { label: "Host Corporation", value: "PT Pertamina Hulu Energi" },
      { label: "Core Tooling", value: "Power BI & Power Query" },
      { label: "System Artifacts", value: "BRD & RIC Documentation" },
      { label: "Operational Value", value: "Automated Data Workflows" }
    ],
    technologies: [
      "Power BI",
      "Power Query",
      "Business Requirement Documents (BRD)",
      "Requirement Initial Checklist (RIC)",
      "Workflow Automation (n8n / ETL)",
      "Workforce Planning Analytics"
    ],
    highlights: [
      "Formulated comprehensive BRD and RIC specifications aligning HR operations with IT systems.",
      "Constructed live executive Power BI dashboards with drill-downs on talent distribution.",
      "Engineered automated pipelines unifying fragmented employee data tables."
    ],
    workflow: [
      { title: "1. Business Needs Translation", desc: "Elicited stakeholder requirements from cross-divisional human capital leads." },
      { title: "2. BRD & RIC Formulation", desc: "Documented functional and technical blueprints for application development." },
      { title: "3. Power Query Transformation", desc: "Sanitized and normalized disparate workforce enterprise datasets." },
      { title: "4. Executive Power BI Delivery", desc: "Deployed interactive dashboards for organizational strategic decisions." }
    ],
    links: {
      linkLabel: "Pertamina HCIS Corporate Profile"
    },
    badge: "Enterprise Energy BUMN",
    featured: false
  },
  {
    id: "huawei-telecom-site-integration",
    title: "Large-Scale Telecom XL-Smart Integration (250+ Sites)",
    category: "enterprise-bi",
    year: "Oct 2025 – May 2026",
    role: "Assistant Project Controller – Supply Chain & Telecom Integration",
    organization: "PT Huawei Tech Investment – Jakarta, Indonesia",
    publicationOrg: "Global Telecommunications Leader",
    summary: "Coordinated material planning, subcontractor execution, and logistics across 250+ post-merger telecom sites, achieving 90%+ SLA closure across 4 dismantle warehouses.",
    description: "Managed delivery execution for large-scale telecom infrastructure during the critical XL-Smart network merger covering over 250 sites nationwide. Monitored bill of materials (BOM), site readiness, and logistics pipelines utilizing Huawei's ISDP (ERP) software. Liaised with over 20 subcontractors, technical engineering teams, corporate customers, and third-party vendors. Systematically reduced material shortages by 25% and secured a 90%+ Service Level Agreement (SLA) closure rate across 4 XLS dismantle warehouses throughout Indonesia.",
    metrics: [
      { label: "Project Scope", value: "250+ Telecom Sites" },
      { label: "Delay Reduction", value: "25% Fewer Delays" },
      { label: "SLA Rate", value: "90%+ Warehouse SLA" },
      { label: "Subcontractors", value: "20+ Managed Vendors" }
    ],
    technologies: [
      "ISDP Enterprise Platform",
      "Supply Chain Management (SCM)",
      "Project Controlling",
      "Risk & Material Planning",
      "SLA Tracking",
      "Vendor Coordination"
    ],
    highlights: [
      "Governed project controls for national post-merger network consolidation across 250+ active sites.",
      "Collaborated with SCM, logistics, technical teams, and vendors to resolve acute material shortages.",
      "Achieved 90%+ SLA milestone compliance across 4 dismantling warehouse hubs in Indonesia."
    ],
    workflow: [
      { title: "1. Site Readiness Assessment", desc: "Tracked civil and technical readiness parameters across 250+ target sites." },
      { title: "2. Material Planning via ISDP", desc: "Calculated hardware requirements and scheduled warehouse dispatch." },
      { title: "3. Subcontractor Coordination", desc: "Resolved bottleneck queries with 20+ installation vendors." },
      { title: "4. SLA Audit & Reconciliation", desc: "Reached 90%+ closure standard on equipment dismantle and return cycles." }
    ],
    links: {
      linkLabel: "Huawei Telecom Case Profile"
    },
    badge: "Global Telecom Controller",
    featured: false
  },
  {
    id: "dashboard-triatra-job-order",
    title: "Service Job Order Analytics Dashboard (Triatra by Astra)",
    category: "enterprise-bi",
    year: "Mar 2024",
    role: "Project Lead & Data Analyst",
    organization: "TRIATRA by Astra Business Operations Case",
    publicationOrg: "Astra Heavy Equipment / Service Ecosystem",
    summary: "Orchestrated an operational analytics dashboard utilizing Design Thinking to resolve tracking challenges and formulate KPIs (Demands, Revenue, Status).",
    description: "Identified critical operational blind spots in tracking heavy equipment service job orders. Guided the development through the Design Thinking framework and Crazy 8's rapid ideation sessions. Structured core Key Performance Indicators including Total Demands, Total Estimated Revenue, and conversion lifecycle (Won, Open, Lost). Built comprehensive interactive dashboard views empowering operations management with real-time performance insights.",
    metrics: [
      { label: "Methodology", value: "Design Thinking & Crazy 8's" },
      { label: "Monitored Indicators", value: "Demands, Revenue, Win Rate" },
      { label: "Order Categories", value: "Won / Open / Lost" },
      { label: "Ecosystem", value: "Astra Service Operations" }
    ],
    technologies: [
      "Design Thinking",
      "KPI Architecture",
      "Data Visualization",
      "Crazy 8's Prototyping",
      "Customer Segmentation",
      "Operational Dashboards"
    ],
    highlights: [
      "Facilitated empathy mapping with branch managers experiencing order delays.",
      "Engineered KPI framework converting raw transactional logs into executive decision screens.",
      "Visualized revenue trends per account owner and high-potential client segments."
    ],
    workflow: [
      { title: "1. Empathize & Define", desc: "Mapped operational headaches regarding disparate job order records." },
      { title: "2. Crazy 8's Ideation", desc: "Rapidly sketched 8 dashboard UX concepts with the product team." },
      { title: "3. KPI Modeling", desc: "Standardized Total Demands, Estimated Revenue, and Won/Lost tracking." },
      { title: "4. Dashboard Prototyping", desc: "Delivered interactive management views with drill-down capability." }
    ],
    links: {
      linkLabel: "Astra Triatra Case Study"
    },
    badge: "Design Thinking & Analytics",
    featured: false
  },
  {
    id: "bank-bjb-performance-dashboard",
    title: "Employee Performance Dashboard (Bank BJB)",
    category: "enterprise-bi",
    year: "Jan 2025 – March 2025",
    role: "Business Consumer Unit Analyst",
    organization: "PT Bank Pembangunan Daerah Jawa Barat dan Banten, Tbk. (Bank BJB)",
    publicationOrg: "Regional Banking Corporation",
    summary: "Constructed real-time Google Looker Studio performance dashboards for Bandung branch managers and enhanced administrative input efficiency by 30%.",
    description: "Resolved workflow bottlenecks at Bank BJB where raw consumer banking transactions and officer quotas were manually audited. Applied Design Thinking to build real-time monitoring dashboards in Google Looker Studio for Main Branch leadership. Visualized Account Officer (AO) daily booking targets versus actual realizations, branch ranking across Bandung, and conducted SLIK financial risk evaluations.",
    metrics: [
      { label: "Efficiency Gain", value: "+30% Input Speed" },
      { label: "Platform", value: "Google Looker Studio" },
      { label: "Risk Evaluation", value: "SLIK BI Checking" },
      { label: "Organization", value: "Bank BJB Main Branch" }
    ],
    technologies: [
      "Google Looker Studio",
      "SLIK Financial Risk Analysis",
      "Data Transformation",
      "Design Thinking",
      "KPI Scorecards",
      "Banking Operations BI"
    ],
    highlights: [
      "Delivered production dashboards adopted by the Main Branch Manager for monthly reviews.",
      "Standardized daily target tracking across multiple sub-branch offices (KCPs) in Bandung.",
      "Automated manual data cleansing, improving processing throughput by 30%."
    ],
    workflow: [
      { title: "1. Operational Audit", desc: "Identified reporting delays between branch branches and headquarters." },
      { title: "2. Data Modeling", desc: "Cleaned raw account officer booking streams into structured schemas." },
      { title: "3. Looker Studio BI", desc: "Constructed interactive filters by Branch, Officer, and Target Quota." },
      { title: "4. Risk Assessment Support", desc: "Executed SLIK checking reports for credit risk analysis." }
    ],
    links: {
      live: "https://lookerstudio.google.com/s/qq02XN6OvRQ",
      linkLabel: "Open Looker Studio Dashboard"
    },
    badge: "Banking Operations BI",
    featured: false
  },
  {
    id: "phishing-url-detection",
    title: "Phishing URL Detection Web App",
    category: "side-projects",
    year: "Sep 2023",
    role: "Team Leader - Data Science Competition",
    organization: "National Data Science Tournament",
    publicationOrg: "Competitive Machine Learning",
    summary: "Led team to build a real-time cybersecurity web tool classifying malicious phishing URLs via CatBoost, MLP, and Gradient Boost with a Flask API.",
    description: "Spearheaded competitive machine learning team developing automated defenses against malicious URLs. Extracted structural lexical features (token length, character entropy, subdomain hierarchy). Trained and benchmarked CatBoost, Multi-Layer Perceptron (MLP), and Gradient Boost classifiers. Integrated the top-performing ensemble into a lightweight Flask web API for real-time link safety verdict.",
    metrics: [
      { label: "Models Trained", value: "CatBoost, MLP, GradBoost" },
      { label: "Latency", value: "< 200ms" },
      { label: "Backend", value: "Python Flask API" },
      { label: "Role", value: "Team Leader" }
    ],
    technologies: [
      "CatBoost",
      "Gradient Boosting",
      "Multi-Layer Perceptron (MLP)",
      "Python Flask API",
      "Scikit-Learn",
      "Feature Engineering"
    ],
    highlights: [
      "Directed end-to-end data pipeline from raw URL parsing to web application deployment.",
      "Engineered domain entropy and token ratio feature extractors.",
      "Competed in high-stakes national university league."
    ],
    workflow: [
      { title: "1. URL Parsing", desc: "Extracted structural tokens, IP masks, and lexical parameters." },
      { title: "2. Model Training", desc: "Trained CatBoost and Gradient Boost classifiers." },
      { title: "3. Flask Endpoint", desc: "Exposed REST endpoint returning probability verdict." },
      { title: "4. Web Interface", desc: "Provided instant safety assessment for end users." }
    ],
    links: {
      github: "https://github.com/StevenHarun/URL_PhisingDetection_Webapps",
      linkLabel: "View GitHub Repository"
    },
    badge: "Competitive ML & Flask",
    featured: false
  },
  {
    id: "mangrove-forest-monitoring-gis",
    title: "Mangrove Forest Monitoring Web GIS",
    category: "side-projects",
    year: "2024",
    role: "Team Programmer",
    organization: "Rekayasa Perangkat Lunak (RPL) - Telkom University",
    publicationOrg: "Government Environmental GIS Project",
    summary: "Engineered a web-based geospatial GIS application with PHP Laravel and Leaflet JS for government environmental monitoring and mangrove classification.",
    description: "Built for environmental monitoring agencies to measure coastal forest area and classify mangrove species. Followed Scrum methodology with sprint cycles. Developed backend MVC architectures in PHP Laravel, spatial database endpoints, and integrated Leaflet JS map layers with polygon boundaries, geo-tagging, and administrative reporting dashboards.",
    metrics: [
      { label: "Backend", value: "PHP Laravel" },
      { label: "GIS Engine", value: "Leaflet JS" },
      { label: "Methodology", value: "Scrum / Agile" },
      { label: "Domain", value: "Government Forestry GIS" }
    ],
    technologies: [
      "PHP Laravel",
      "Leaflet JS",
      "MySQL / PostgreSQL",
      "Web GIS & GeoJSON",
      "Scrum Methodology",
      "RESTful APIs"
    ],
    highlights: [
      "Rendered interactive geospatial polygon overlays indicating replanting zones.",
      "Implemented role-based administrative portals for forestry inspectors.",
      "Collaborated in Scrum sprints with UI designers and project managers."
    ],
    workflow: [
      { title: "1. Sprint Planning", desc: "Defined user stories for geo-coordinates, species classification, and report logs." },
      { title: "2. Laravel Architecture", desc: "Constructed database models and spatial endpoints." },
      { title: "3. Leaflet JS Mapping", desc: "Rendered interactive geo-layers, pins, and density areas." },
      { title: "4. Sprint Demo", desc: "Delivered functional government web portal." }
    ],
    links: {
      github: "https://github.com/StevenHarun/Mangrove_Forest_Website",
      linkLabel: "View GitHub Repository"
    },
    badge: "Web GIS & Laravel",
    featured: false
  }
];

export const certifications = [
  {
    title: "OCI Data Science Professional",
    issuer: "Oracle Cloud Infrastructure",
    date: "Oct 2025",
    badgeColor: "indigo",
    description: "Validated expertise in managing the machine learning lifecycle, deploying cloud models, and enterprise data architecture using Oracle Cloud Infrastructure.",
    credentialType: "Global Cloud Certification"
  },
  {
    title: "Associate of Data Scientist",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    date: "Mar 2025",
    badgeColor: "cyan",
    description: "Certified by the Indonesian National Board for Data Science fundamentals, data processing, statistical computing, and predictive modeling.",
    credentialType: "National Board Certified"
  },
  {
    title: "Project Management Essential",
    issuer: "Management & Strategy Institute (MSI)",
    date: "Dec 2025",
    badgeColor: "amber",
    description: "Certified in core project management methodologies, strategic planning, resource allocation, and operational execution.",
    credentialType: "Professional Institute"
  }
];

export const honorsAndAchievements = [
  {
    title: "Platinum Speaker Team",
    event: "The 26th World Youth Meeting in Japan",
    year: "International",
    icon: "Globe",
    description: "Awarded top platinum speaker honours representing Indonesia in global youth leadership conference in Japan."
  },
  {
    title: "Indonesian Language Tutor for Paris",
    event: "Embassy of the Republic of Indonesia in France",
    year: "Diplomatic Program",
    icon: "GraduationCap",
    description: "Selected to instruct Indonesian language and cultural exchange programs for French learners in Paris."
  },
  {
    title: "PKM-GFT 2023 Awardee",
    event: "Ministry of Education, Culture, Research, and Technology (Kemendikbudristek)",
    year: "National Grant",
    icon: "Award",
    description: "Awarded prestigious national grant for transformative future-technology research proposals."
  },
  {
    title: "Finalist - National Data Science Tournament (TSDN 2024)",
    event: "DataAcademy & Asosiasi Ilmuwan Data Indonesia (ASDASI)",
    year: "National 2024",
    icon: "Target",
    description: "Recognized as top finalist among national universities in advanced machine learning and data modeling."
  },
  {
    title: "Finalist - BPJS Healthkathon Jeopardy 2023",
    event: "BPJS Kesehatan Indonesia",
    year: "National 2023",
    icon: "Shield",
    description: "Finalist in national health-tech data challenge addressing healthcare analytics."
  }
];

export const professionalExperience = [
  {
    period: "July 2026 – Present",
    role: "Human Capital Information System",
    company: "PT Pertamina Hulu Energi",
    location: "Jakarta, Indonesia",
    category: "Oil & Gas",
    highlights: [
      "Prepared BRD and Requirement Initial Checklists (RIC) for cross-divisional internal applications, translating business needs into structured system requirements.",
      "Optimized and maintained analytical dashboards using Power BI and Power Query to manage workforce distribution and employee data for strategic organizational planning.",
      "Automated data workflows to streamline human capital data integration, reducing manual intervention and enhancing system efficiency."
    ],
    technologies: ["Power BI", "Power Query", "BRD / RIC", "Workflow Automation", "ISDP / ERP", "HR Analytics"]
  },
  {
    period: "Oct 2025 – May 2026",
    role: "Assistant Project Controller – Supply Chain & Telecom Integration",
    company: "PT Huawei Tech Investment",
    location: "Jakarta, Indonesia",
    category: "Global ICT & Telecommunication",
    highlights: [
      "Experienced in Supply Chain Project: Coordinated delivery execution, bill of materials (BOM), and site readiness for large-scale post-merger telecom XL-Smart integration across 250+ sites nationwide.",
      "Partnered with SCM, logistics, technical, and operations teams to resolve material risks across 4 XLS dismantle warehouses, achieving 90%+ SLA closure.",
      "Liaised with 20+ installation subcontractors, internal teams, customers, and third-party vendors to resolve material shortages, reducing project delays by 25%."
    ],
    technologies: ["Supply Chain Management (SCM)", "ISDP (Huawei ERP)", "Project Controlling", "Warehouse Logistics", "BOM Planning", "SLA Auditing"]
  },
  {
    period: "Jan 2025 – March 2025",
    role: "Business Consumer Unit Analyst",
    company: "PT Bank Pembangunan Daerah Jawa Barat dan Banten, Tbk. (Bank BJB)",
    location: "Bandung, Indonesia",
    category: "Banking",
    highlights: [
      "Developed an analytic dashboard using Looker Studio to track and evaluate branch-level officer performance.",
      "Performed BI Checking Reports using SLIK for customer financial risk assessment per request.",
      "Enhanced administrative and data input performance by 30%."
    ],
    technologies: ["Google Looker Studio", "SLIK Risk Assessment", "Data Cleansing", "Banking Ops"]
  },
  {
    period: "Jan 2025 – Sep 2025",
    role: "Coding Mentor",
    company: "PT. Cerdas Digital Indonesia (Timedoor Academy)",
    location: "Bandung, Indonesia",
    category: "EdTech & IT Education",
    highlights: [
      "Taught programming, computational thinking, and robotics (ages 5–18) and communicated learning progress to parents.",
      "Assisted marketing campaigns and promotions to increase IT literacy and brand awareness.",
      "Conducted presentations to pitch educational programs and closed sales with prospective customers."
    ],
    technologies: ["Programming Pedagogy", "Robotics", "Client Pitching", "IT Education"]
  },
  {
    period: "Aug 2024 – Dec 2024",
    role: "Machine Learning Cohort & Capstone Lead",
    company: "BANGKIT Academy led by Google, GoTo, and Traveloka",
    location: "Bandung, Indonesia",
    category: "Google Tech Cohort",
    highlights: [
      "Designed and implemented chatbot solutions utilizing TensorFlow and LLM models with Retrieval-Augmented Generation (RAG) to optimize intelligent user interactions.",
      "Led a Capstone project team, driving strategic brainstorming and managing comprehensive reporting to ensure timely project delivery.",
      "Completed 20+ advanced courses and hands-on projects focusing on Machine Learning and Deep Learning frameworks."
    ],
    technologies: ["TensorFlow", "LLaMA", "RAG", "Scikit-Learn", "Deep Learning", "Agile Leadership"]
  }
];

export const academicAndLeadership = [
  {
    period: "May 2023 – May 2024",
    role: "Laboratory Assistant of Enterprise Data Management",
    institution: "Telkom University",
    description: "Taught 3 practical courses to over 650 students, preparing comprehensive learning materials, conducting mentoring sessions, administering assessments, proctoring exams, and compiling final grading reports."
  },
  {
    period: "May 2023 – May 2024",
    role: "Laboratory Assistant of Enterprise Intelligence System",
    institution: "Telkom University",
    description: "Facilitated practical laboratory sessions, mentoring students on IoT, Java, software architecture, and software integration within the laboratory's research framework."
  },
  {
    period: "Feb 2023 – Feb 2024",
    role: "Head of HR Division",
    institution: "FPS Telkom University",
    description: "Directed human resources strategies, managing recruitment and member development, while collaborating with the Head of Student Affairs and faculty-level organizations."
  },
  {
    period: "Oct 2023 – Feb 2025",
    role: "Evaluation Board",
    institution: "Advent Student Association Bandung",
    description: "Evaluated organizational programs and provided strategic feedback to enhance community impact, led candidate selection, and monitored executive board performance."
  }
];

export const skillsMatrix = [
  {
    category: "Data Science, AI & Machine Learning",
    description: "Deep learning, computer vision architectures, large language models, and predictive algorithms.",
    icon: "Brain",
    items: [
      { name: "YOLOv9 & YOLOv8", level: "Expert" },
      { name: "LightGBM & CatBoost", level: "Expert" },
      { name: "TensorFlow & PyTorch", level: "Advanced" },
      { name: "Large Language Models (LLaMA)", level: "Advanced" },
      { name: "RAG & Vector Search", level: "Advanced" },
      { name: "LDA Topic Modeling", level: "Advanced" },
      { name: "Scikit-Learn & OpenCV", level: "Expert" }
    ]
  },
  {
    category: "Enterprise Analytics & Business Intelligence",
    description: "KPI architecture, data warehouse modeling, executive dashboards, and operational automation.",
    icon: "BarChart3",
    items: [
      { name: "Power BI & Power Query", level: "Expert" },
      { name: "Google Looker Studio", level: "Expert" },
      { name: "ISDP ERP Platform", level: "Advanced" },
      { name: "SQL & Data Modeling", level: "Advanced" },
      { name: "Python (Pandas, NumPy)", level: "Expert" },
      { name: "Workflow Automation (n8n)", level: "Advanced" },
      { name: "BRD & RIC Technical Docs", level: "Expert" }
    ]
  },
  {
    category: "Software & Web Engineering",
    description: "API backends, web GIS, reactive user interfaces, and cloud architectures.",
    icon: "Code2",
    items: [
      { name: "Python Flask APIs", level: "Advanced" },
      { name: "PHP Laravel Framework", level: "Advanced" },
      { name: "Streamlit Applications", level: "Expert" },
      { name: "Leaflet JS / Web GIS", level: "Advanced" },
      { name: "JavaScript / ES6+", level: "Advanced" },
      { name: "Oracle Cloud Infrastructure (OCI)", level: "Certified" }
    ]
  },
  {
    category: "Management, Leadership & Strategy",
    description: "Cross-functional project controlling, supply chain governance, Agile delivery, and technical communication.",
    icon: "Compass",
    items: [
      { name: "Project Management (MSI Certified)", level: "Certified" },
      { name: "Design Thinking & Crazy 8's", level: "Expert" },
      { name: "Telecom SCM & SLA Governance", level: "Advanced" },
      { name: "Scrum & Agile Sprint Cycles", level: "Advanced" },
      { name: "Subcontractor & Vendor Mgmt", level: "Advanced" },
      { name: "Scientific Writing (IEEE)", level: "Published" },
      { name: "English Proficiency (EPRT: 510)", level: "Professional" }
    ]
  }
];

export const skillsData = skillsMatrix;
export const experienceTimeline = professionalExperience;

export const portfolioData = {
  personalInfo,
  enterpriseFootprint,
  impactMetrics,
  projectCategories,
  projects,
  certifications,
  honorsAndAchievements,
  professionalExperience,
  academicAndLeadership,
  skillsMatrix,
  skillsData,
  experienceTimeline
};

export default portfolioData;
