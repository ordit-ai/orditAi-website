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
    title: "10x",
    subtitle: "The cost savings compared to a traditional auditing team.",
    icon: TrendIcon,
  },
  {
    id: "number2",
    title: "Save 90%",
    subtitle: "On hiring personnel by deploying AI-powered solutions.",
    icon: ChipIcon,
  },
  {
    id: "number3",
    title: "1000x",
    subtitle: "Capacity to handle audits and accounting tasks 24/7 at scale, with zero downtime.",
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
    title: "OrditAI Has Revolutionized Our Auditing Process",
    subTitle:
      "With OrditAI, our auditing workflow has transformed entirely. What used to take several days is now handled within hours. The platform’s automation features provide us with real-time data and ensure we’re always compliant.",
    office: "Finance Director",
    name: "Aisha Bassey",
  },
  {
    noOfStars: 5,
    title: "Efficient, Accurate, and Time-Saving!",
    subTitle:
      "Before OrditAI, our audits required extensive manual preparation. Now, we rely on OrditAI to manage everything smoothly, delivering instant reports and helping us catch errors early. It’s a game-changer for our team.",
    office: "Senior Financial Analyst",
    name: "Daniel Okonkwo",
  },
  {
    noOfStars: 5,
    title: "Compliance Made Easy with OrditAI",
    subTitle:
      "OrditAI has drastically cut down our audit preparation time. From data uploads to generating insights, everything is seamless. Their compliance checks keep us confident in our reporting accuracy.",
    office: "CFO",
    name: "Jessica Wong",
  },
  {
    noOfStars: 5,
    title: "OrditAI Saves Us Valuable Time and Resources",
    subTitle:
      "OrditAI’s automated reporting has transformed our monthly audit routine. We save hours, and the accuracy is unmatched. Our team now focuses on strategy, knowing OrditAI handles the heavy lifting.",
    office: "Financial Controller",
    name: "Kemi Olatunji",
  },

  {
    noOfStars: 5,
    title: "A Reliable Partner in Financial Auditing",
    subTitle:
      "OrditAI has been instrumental in simplifying our audit processes. The software is intuitive, fast, and helps us stay compliant effortlessly. We now get real-time updates, and it’s been an absolute asset.",
    office: "Chief Accountant",
    name: "Mohammed Adamu",
  },
  // {noOfStars: 5, title: "", subTitle:"", office: "", name: ""},
  // {noOfStars: 5, title: "", subTitle:"", office: "", name: ""}
];
