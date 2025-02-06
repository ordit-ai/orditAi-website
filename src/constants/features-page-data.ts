import { ChartBreakOutIcon, DataFlowIcon, ScanIcon, UsersIcon } from "@/assets/icons";
import George from "@/assets/images/features/george.png";
import George2 from "@/assets/images/features/george2.png";
import George3 from "@/assets/images/features/george3.png";
import George4 from "@/assets/images/features/george4.png";

export const featuresPages: {
  id: number;
  icon: () => JSX.Element;
  name: string;
  subHeading: string;
  image: string;
  description: string;
  position: "left" | "right";
}[] = [
  {
    id: 1,
    name: "Smart Automation",
    icon: DataFlowIcon,
    subHeading: "George Automates Leadsheets",
    description:
      "Take advantage of George's cognitive reasoning that extend beyond human capabilities. ",
    image: George,
    position: "left",
  },
  {
    id: 2,
    name: "Intelligent Automation",
    icon: ScanIcon,
    subHeading: "Independent Auditing",
    description:
      "Perform end-to-end audits without any human supervision",
    image: George2,
    position: "right",
  },
  {
    id: 3,
    name: "Add Team Member",
    icon: UsersIcon,
    subHeading: "Collaborate on Audits Effortlessly",
    description:
      "Invite team members to join your audit workspace with controlled access",
    image: George3,
    position: "left",
  },
  {
    id: 4,
    name: "Create Sessions",
    icon: ChartBreakOutIcon,
    subHeading: "Structured Auditing with Real-Time Insights",
    description:
      "Track progress, verify entries, and ensure timely, accurate audits",
    image: George4,
    position: "right",
  },
];
