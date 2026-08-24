import booking from "@/assets/work-booking.jpg";
import clinic from "@/assets/work-clinic.jpg";
import ehr from "@/assets/work-ehr.jpg";
import telemed from "@/assets/work-telemed.jpg";

export type Project = {
  slug: string;
  index: string;
  quote?: string;
  title: string;
  subtitle: string;
  client: string;
  role: string;
  year: string;
  description: string;
  image: string;
  imageAlt: string;
  palette: string[];
  paletteNote?: string;
  layout: "image-left" | "image-right";
  tags: string[];
  metrics: string[];
};

export const projects: Project[] = [
  {
    slug: "ehr-platform",
    index: "01",
    quote: "“A modular EHR core built for safety, privacy, and scale.”",
    title: "Electronic Health Record Platform",
    subtitle: "Modular EHR & Clinical Data Core",
    client: "Multi-Clinic Health Network",
    role: "Senior Full-Stack Engineer · Healthcare",
    year: "2024",
    description:
      "Built a modular EHR core with .NET 8 microservices and Clean Architecture: patient charts, encounters, problem lists, allergies, and e-prescribing. Designed for HIPAA-aligned auditing, per-facility data isolation, and clinician-level role-based access.",
    image: ehr,
    imageAlt: "Electronic health record platform showing patient chart, encounters, and clinical timeline",
    palette: ["#0f2a43", "#1f9d8f", "#f08322", "#79c8f2", "#e5493f", "#e8e3da"],
    layout: "image-left",
    tags: [".NET 8", "HL7 FHIR R4", "Clean Architecture", "PostgreSQL", "Redis", "RBAC"],
    metrics: ["HIPAA-aligned audit trail", "FHIR R4 resources", "300% faster chart loads"],
  },
  {
    slug: "telehealth",
    index: "02",
    title: "Telehealth & Remote Monitoring",
    subtitle: "Virtual Care and Live Vitals",
    client: "Telemedicine Provider",
    role: "Senior Software Developer",
    year: "2024",
    description:
      "Developed a telehealth platform with secure video visits, clinical note capture, and real-time remote patient monitoring. SignalR streams vitals from 1,000+ connected medical devices into clinician dashboards with threshold-based alerting.",
    image: telemed,
    imageAlt: "Telehealth dashboard with live patient vitals, video consultation panel, and alerts",
    palette: ["#1f9d8f", "#5fc3b6", "#cfe8e3", "#f2795c", "#79c8f2", "#16283c"],
    layout: "image-right",
    tags: ["Angular", ".NET", "SignalR", "WebRTC", "RPM Devices", "Azure"],
    metrics: ["1,000+ monitored devices", "Sub-second vitals", "Automated clinical alerts"],
  },
  {
    slug: "hl7-fhir-interop",
    index: "03",
    title: "HL7 / FHIR Interoperability Layer",
    subtitle: "Hospital Systems Integration",
    client: "Hospital Information Systems",
    role: "Senior Full-Stack Engineer",
    year: "2023",
    description:
      "Engineered an interoperability layer bridging legacy HL7 v2 feeds, FHIR APIs, LIS lab results, and PACS imaging orders. Idempotent message processing, terminology mapping (ICD-10, SNOMED CT, LOINC), and full audit logging keep patient data consistent across systems.",
    image: clinic,
    imageAlt: "Healthcare interoperability flow connecting HL7 v2, FHIR APIs, lab, and imaging systems",
    palette: ["#0f2a43", "#1f9d8f", "#f08322", "#d9584f", "#b9bfc4", "#e7f0ec"],
    paletteNote:
      "Built around idempotent message pipelines, terminology mapping, and immutable audit logs so clinical data stays reliable across every connected hospital system.",
    tags: ["HL7 v2", "FHIR", "ICD-10 / SNOMED", "LOINC", "Docker", "CI/CD"],
    layout: "image-left",
    metrics: ["Zero-loss message pipeline", "Terminology mapped", "Full clinical audit"],
  },
  {
    slug: "patient-portal",
    index: "04",
    title: "Patient Portal & Appointment Booking",
    subtitle: "Patient-Facing Digital Front Door",
    client: "Primary Care Group",
    role: "Full-Stack Developer",
    year: "2023",
    description:
      "Built a patient portal with Next.js and .NET: online appointment booking, intake forms, lab result viewing, secure messaging with care teams, and prescription refill requests — accessible, mobile-first, and WCAG 2.1 AA compliant.",
    image: booking,
    imageAlt: "Patient portal interface with appointment booking, lab results, and secure messaging",
    palette: ["#0f2a43", "#3b82c4", "#79c8f2", "#f08322", "#f6d635", "#e8e3da"],
    layout: "image-right",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "WCAG 2.1 AA"],
    metrics: ["40% fewer no-shows", "Mobile-first", "Accessible by design"],
  },
];

export const concepts = [
  {
    letter: "A",
    label: "Consent & access layer",
    note: "OAuth 2.0 / SMART on FHIR, JWT sessions, clinician RBAC, and patient consent enforcement.",
  },
  {
    letter: "B",
    label: "Clinical service layer",
    note: "Clean Architecture microservices for encounters, orders, results, and care plans.",
  },
  {
    letter: "C",
    label: "Protected data layer",
    note: "Encrypted PHI storage in PostgreSQL and SQL Server, Redis caching, and immutable audit logs.",
  },
];

export const tools = [
  ".NET 8",
  "C#",
  "ASP.NET Core",
  "HL7 FHIR R4",
  "HL7 v2",
  "SMART on FHIR",
  "DICOM",
  "ICD-10",
  "SNOMED CT",
  "LOINC",
  "Microservices",
  "Clean Architecture",
  "SignalR",
  "WebRTC",
  "Angular",
  "React",
  "Next.js",
  "TypeScript",
  "PostgreSQL",
  "SQL Server",
  "Redis",
  "Azure Health Data Services",
  "Docker",
  "Kubernetes",
];

export const services = [
  {
    title: "EHR & Clinical Systems",
    body: "Patient records, encounters, orders, e-prescribing, and care plans built on .NET 8 microservices with Clean Architecture.",
    items: ["EHR", ".NET 8", "FHIR R4", "Clean Architecture"],
  },
  {
    title: "Healthcare Interoperability",
    body: "HL7 v2 and FHIR integrations across EHRs, LIS labs, PACS imaging, and pharmacy systems with reliable, auditable pipelines.",
    items: ["HL7 v2", "FHIR", "LIS / PACS", "Terminology"],
  },
  {
    title: "Telehealth & Remote Monitoring",
    body: "Secure video visits, device telemetry, and real-time clinician dashboards with alerting on abnormal vitals.",
    items: ["WebRTC", "SignalR", "RPM", "Real-time"],
  },
  {
    title: "Compliance, Cloud & DevOps",
    body: "HIPAA and GDPR-aligned delivery: PHI encryption, audit logging, Azure Health Data Services, Docker, and CI/CD pipelines.",
    items: ["HIPAA", "GDPR", "Azure", "CI/CD"],
  },
];

export const stats = [
  { value: "4+", label: "Years in health tech" },
  { value: "300%", label: "Faster chart performance" },
  { value: "1,000+", label: "Monitored patient devices" },
  { value: "100%", label: "HIPAA-aligned delivery" },
];
