import Effort from "@/assets/images/effort.png";
import Intelligent from "@/assets/images/Intelligent.png";
import Precison from "@/assets/images/precision.png";

import Grow from "@/assets/images/auditProcess/grow.png";
import GetMore from "@/assets/images/auditProcess/getMore.png";
import Perform from "@/assets/images/auditProcess/perform.png";
import Save from "@/assets/images/auditProcess/save.png";

import Discover from "@/assets/images/auditProcess/discover.png";
import Analyze from "@/assets/images/auditProcess/analyze.png";
import Automate from "@/assets/images/auditProcess/automate.png";
import Perform1 from "@/assets/images/auditProcess/perform1.png";

import Empower1 from "@/assets/images/auditProcess/empower1.png";
import Empower2 from "@/assets/images/auditProcess/empower2.png";

import Onboard1 from "@/assets/images/auditProcess/onboard1.png";
import Onboard2 from "@/assets/images/auditProcess/onboard2.png";
import Onboard3 from "@/assets/images/auditProcess/onboard3.png";

import Logo1 from "@/assets/images/auditProcess/kpmg.png";
import Logo2 from "@/assets/images/auditProcess/deel.png";
import Logo3 from "@/assets/images/auditProcess/flw.png";
import Logo4 from "@/assets/images/auditProcess/ey.png";
import Logo5 from "@/assets/images/auditProcess/baba.png";
import Logo6 from "@/assets/images/auditProcess/swipe.png";

import Hero1 from "@/assets/images/auditProcess/ship.png";
import Hero2 from "@/assets/images/auditProcess/topship.png";
import Hero3 from "@/assets/images/auditProcess/send.png";
import Hero4 from "@/assets/images/auditProcess/float.png";

export const missonImages = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6];
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
    title: "Grow your Revenue",
    subtitle: "Automate audits with George, freeing your team to focus on top clients and growth.",
    image: Grow,
  },
  {
    id: "audit2",
    title: "Save Cost",
    subtitle: "Let George  handle labor-intensive auditing tasks without the cost of hiring additional staff",
    image: Save,
  },
  {
    id: "audit3",
    title: "Performing Audit Task",
    subtitle: "George automates audits, speeding up preparation, review, and finalization of financial documents",
    image: Perform,
  },
  {
    id: "audit4",
    title: "Get More Auditing Done",
    subtitle: "George automates audits, helping you manage more clients without increasing staff.",
    image: GetMore,
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
    image: Discover,
  },
  {
    id: "audit6",
    title: "Analyze",
    subtitle: "Trust George to deliver accurate, comprehensive reports for every audit analysis.",
    image: Analyze,
  },
  {
    id: "audit7",
    title: "Automate",
    subtitle: "With George, the entire audit lifecycle is automated, from report compilation to performance tracking.",
    image: Automate,
  },
  {
    id: "audit8",
    title: "Perform",
    subtitle: "George evolves with your business, adapting his processes to meet your growing audit needs.",
    image: Perform1,
  },
];

export const numberStats = [
  {
    id: "number1",
    title: "10x",
    subtitle: "The cost savings compared to a traditional auditing team.",
  },
  {
    id: "number2",
    title: "Save 60%",
    subtitle: "On hiring personnel by deploying AI-powered solutions.",
  },
  {
    id: "number3",
    title: "Unlimited",
    subtitle: "Capacity to handle audits and accounting tasks 24/7 at scale, with zero downtime.",
  },
];

export const empowerState = [
  {
    id: "empower1",
    title: "Auditing Teams",
    subtitle:
      "George automates the tedious parts of auditing—like tracking transactions and verifying compliance—allowing your team to focus on providing higher-level financial insights.",
    image: Empower1,
  },
  {
    id: "empower2",
    title: "Management & Growth",
    subtitle:
      "Stay ahead of compliance requirements with George’s AI-powered auditing tools. With real-time data and automated auditing, you’ll minimize risks and ensure growth isn’t hampered by financial or regulatory surprises.",
    image: Empower2,
  },
];

export const onboardState = [
  {
    id: "onboard1",
    title: "Hire George",
    subtitle:
      "Sign up and plug George into your finance department. He’ll begin automating auditing tasks immediately while seamlessly integrating with your existing systems.",
    image: Onboard1,
    children: ["Save Time", "Ensure Compliance", "Full Automation"],
  },
  {
    id: "onboard2",
    title: "Train George",
    subtitle:
      "Tell George the specifics of your audit needs, and he’ll adapt to your company’s unique financial structure and compliance requirements.",
    image: Onboard2,
  },

  {
    id: "onboard3",
    title: "Grow with George",
    subtitle:
      "George will prepare audit reports, perform compliance checks, and reduce errors, ensuring your business is always audit-ready, allowing your team to focus on strategic growth.",
    image: Onboard3,
  },
];
