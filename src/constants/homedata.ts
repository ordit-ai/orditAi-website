import Effort from "@/assets/images/effort.png";
import Intelligent from "@/assets/images/Intelligent.png";
import Precison from "@/assets/images/precision.png";

import Grow from "@/assets/images/auditProcess/grow.png";
import GetMore from "@/assets/images/auditProcess/getMore.png";
import Perform from "@/assets/images/auditProcess/perform.png";
import Save from "@/assets/images/auditProcess/save.png";

import ai1 from "@/assets/images/ai/ai1.png";
import ai2 from "@/assets/images/ai/ai2.png";
import ai3 from "@/assets/images/ai/ai3.png";
import ai4 from "@/assets/images/ai/ai4.png";

import Empower1 from "@/assets/images/auditProcess/empower1.png";

import Empower2 from "@/assets/images/auditProcess/empower2.png";

import Onboard1 from "@/assets/images/auditProcess/onboard1.png";
import Onboard2 from "@/assets/images/auditProcess/onboard2.png";
import Onboard3 from "@/assets/images/auditProcess/onboard3.png";

import Logo1 from "@/assets/images/auditProcess/kpmg.png";
import Logo2 from "@/assets/images/auditProcess/deel.png";
import Logo3 from "@/assets/images/auditProcess/flw.png";
// import Logo4 from "@/assets/images/auditProcess/ey.png";
// import Logo5 from "@/assets/images/auditProcess/baba.png";
// import Logo6 from "@/assets/images/auditProcess/swipe.png";
import Logo7 from "@/assets/images/auditProcess/google.png";

import Hero1 from "@/assets/images/auditProcess/ship.png";
import Hero2 from "@/assets/images/auditProcess/topship.png";
import Hero3 from "@/assets/images/auditProcess/send.png";
import Hero4 from "@/assets/images/auditProcess/float.png";
import { ChipIcon, ScaleIcon, TrendIcon } from "@/assets/icons";
// import { TrendIcon } from "@/assets/icons/TrendIcon";
// import { ChipIcon } from "@/assets/icons/ChipIcon";
// import { ScaleIcon } from "@/assets/icons/ScaleIcon";

export const missonImages = [Logo1, Logo2, Logo3, Logo7];
export const HeroLogo = [Hero1, Hero2, Hero3, Hero4];

export const whyChoose = [
  {
    id: 1,
    name: "Effortless Automation",
    description:
      "Automate repetitive tasks like journal entries and data extraction, freeing up your team to focus on higher-value activities.",
    image: Effort,
  },
  {
    id: 2,
    name: "Intelligent Anomaly Detection",
    description:
      "Use AI to identify and flag discrepancies in your financial data, ensuring you catch issues before they become problems",
    image: Intelligent,
  },
  {
    id: 3,
    name: "Precision and Reliability",
    description:
      "Reduce errors and enhance the accuracy of your financial records with AI-driven insights and verification.",
    image: Precison,
  },
];

export const featuresData = [
  {
    id: "features1",
    name: "Journal Entry Automation",
    description: [
      "Simplify your bookkeeping with automated journal entries. OrditAI captures and categorizes transactions in real-time, reducing manual effort and minimizing errors.",
      "With automated journal entry, you can ensure accurate financial records and save significant time, allowing your team to focus on strategic tasks that add value to your business.",
    ],
  },
  {
    id: "features2",
    name: "Data Extraction",
    description: [
      "Quickly and accurately pull data from invoices, receipts, and other documents. OrditAI’s smart extraction ensures you have reliable data without manual entry.",
    ],
  },
  {
    id: "features3",
    name: "Anomaly Detection",
    description: [
      "Detect and address irregularities in your financial data automatically. OrditAI helps you catch issues early to maintain accurate and trustworthy records.",
    ],
  },
  {
    id: "features4",
    name: "Real-time Reporting",
    description: [""],
  },

  {
    id: "features5",
    name: "Compliance",
    description: [""],
  },
];

export const auditProcess = [
  {
    id: "audit1",
    title: "Seamless Integration.",
    subtitle:
      "Whether you're a global audit and accounting firm or a solo practitioner, George integrates seamlessly into your workflow, transforming how you handle audits and financial processes.",
    image: Grow,
  },
  {
    id: "audit2",
    title: "Always On, Always Accurate.",
    subtitle:
      "With George, the days of late nights during audit season are over. George never misses a detail, offering round-the-clock service to ensure that your books are balanced.",
    image: Save,
  },
  {
    id: "audit3",
    title: "Independent Expertise.",
    subtitle:
      "George works autonomously, taking care of everything from the planning phase to conclusive phase, without needing human intervention. He’s not just a helper, he’s your dedicated team member.",
    image: Perform,
  },
  {
    id: "audit4",
    title: "Built for the Global Stage.",
    subtitle:
      "George understands the complexities of local and international accounting standards, adapting to meet the unique needs of your business, wherever you are in the world.",
    image: GetMore,
  },
];

export const WhatGeorgeCanDo = [
  {
    id: "george1",
    title: "Complex Audit Tasks",
    subtitle: "George performs full-cycle audits, from planning to reporting. ",
  },
  {
    id: "george2",
    title: "Compliance",
    subtitle: "George ensures compliance with local and global accounting standards.",
  },
  {
    id: "george3",
    title: "Growth",
    subtitle:
      "George's AI-driven control testing and transaction verification minimizes risks and enables seamless business scaling",
  },
  {
    id: "george4",
    title: "Accurate data analysis",
    subtitle:
      "George analyzes vast amounts of financial data in record time, allowing your team to focus on strategy while ensuring fast, accurate data verification.",
  },
];

export type OnboardItem = {
  id: string;
  title: string;
  subtitle: string;
  image: string; // Type for imported image
};

export const auditProcess1 = [
  {
    id: "audit5",
    title: "Discover",
    subtitle:
      "George’s real-time monitoring flags compliance risks early, keeping your business compliant effortlessly.",
    image: ai1,
  },
  {
    id: "audit6",
    title: "Analyze",
    subtitle: "Trust George to deliver accurate, comprehensive reports for every audit analysis.",
    image: ai2,
  },
  {
    id: "audit7",
    title: "Automate",
    subtitle: "With George, the entire audit lifecycle is automated, from report compilation to performance tracking.",
    image: ai3,
  },
  {
    id: "audit8",
    title: "Perform",
    subtitle: "George evolves with your business, adapting his processes to meet your growing audit needs.",
    image: ai4,
  },
];

export const numberStats = [
  {
    id: "number1",
    title: "Significant Cost Reduction",
    subtitle: "Clients report major cost savings compared to building a traditional in-house audit team.",
    icon: TrendIcon,
  },
  {
    id: "number2",
    title: "Faster Audit Cycles",
    subtitle: "Audit engagements that took weeks are completed in a fraction of the time with George.",
    icon: ChipIcon,
  },
  {
    id: "number3",
    title: "24/7 Availability",
    subtitle: "George handles audit tasks around the clock with no downtime, no holidays, no fatigue.",
    icon: ScaleIcon,
  },
];

export const empowerState = [
  {
    id: "empower1",
    title: "Accounting and audit firms",
    subtitle:
      "Your Audit Firm needs a reliable force behind the scenes, running your audit tasks seamlessly and efficiently.",
    image: Empower1,
  },
  {
    id: "empower2",
    title: "Compliance & Growth",
    subtitle:
      "Whether it is managing intricate financial statements or ensuring strict compliance and meeting deadlines, George is trusted and reliable. He is committed to taking care of the details so that you can concentrate on making the strategic decisions.",
    image: Empower2,
  },
];

export const onboardState = [
  {
    id: "onboard1",
    title: "Create an Account",
    subtitle:
      "Sign up to bring George into your finance department. He’ll seamlessly integrate with your existing systems and immediately start carrying out your audit tasks.",
    image: Onboard1,
    children: ["Save Time", "Ensure Compliance", "Full Automation"],
  },
  {
    id: "onboard2",
    title: "Initiate George",
    subtitle:
      "Create a session to start an audit process. You can create multiple sessions for multiple audits or clients.",
    image: Onboard2,
  },

  {
    id: "onboard3",
    title: "Engage George",
    subtitle: "During the session, communicate with George and follow his direction throughout the audit process.",
    image: Onboard3,
  },
];

export const testimonialData = [
  {
    noOfStars: 5,
    title: "George Handles the Detail Work So I Can Focus on What Matters",
    subTitle:
      "As a pension fund auditor, accuracy and regulatory compliance are non-negotiable. OrditAI’s George has significantly reduced the time I spend on repetitive verification tasks, allowing me to focus on higher-level risk assessments and audit quality. It is a tool built with a real understanding of how professional auditing works.",
    office: "Director, Pension & Gratuity Audit | FCA, FCTI — Kwara State Auditor General",
    name: "Abdullateef Abdulrahman",
  },
  {
    noOfStars: 5,
    title: "Our Audit Process Is Now Structured and Efficient",
    subTitle:
      "Before OrditAI, keeping up with financial compliance while running a growing technology business was a constant challenge. George guided us through the entire audit engagement process step by step — from engagement planning to documentation. Our team now approaches audits with far more confidence and structure.",
    office: "Management, SwipeTech Limited",
    name: "SwipeTech Limited",
  },
  {
    noOfStars: 5,
    title: "The Precision George Delivers Is Exactly What Analytics Demands",
    subTitle:
      "OrditAI brings the kind of structured, data-driven approach that an analytics firm expects. George walked us through our audit workflow in a way that was thorough and easy to follow. Our compliance documentation is now more consistent, and our preparation time has dropped considerably.",
    office: "Management, Exquisite Analytica (KPC)",
    name: "Exquisite Analytica (KPC)",
  },
  {
    noOfStars: 5,
    title: "A Practical Tool Built for Real Audit Practice",
    subTitle:
      "Running a chartered accounting firm means managing multiple client engagements simultaneously. OrditAI's George has made it significantly easier to structure audit engagements, maintain compliance with standards, and deliver consistent quality across clients. It is the kind of tool that understands how professional practice actually works.",
    office: "Principal Partner, FCA, FCTI — Benjamin Akanji Omonayajo & Co., Abeokuta",
    name: "Omonayajo Benjamin Akanji",
  },
];
