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
      "Generate leadsheets instantly with George's automation. Simplify financial data summaries and minimize manual input, so your team can prioritize strategic analysis.",
    image: George,
    position: "left",
  },
  {
    id: 2,
    name: "Intelligent Automation",
    icon: ScanIcon,
    subHeading: "Seamless Audits with Computer Vision",
    description:
      "Automate document review during audits with George’s computer vision. Improve accuracy and speed while reducing human error.",
    image: George2,
    position: "right",
  },
  {
    id: 3,
    name: "Add Team Member",
    icon: UsersIcon,
    subHeading: "Collaborate on Audits Effortlessly",
    description:
      "Invite team members to join your audit workspace with controlled access. Collaborate securely while maintaining focus on specific tasks",
    image: George3,
    position: "left",
  },
  {
    id: 4,
    name: "Create Sessions",
    icon: ChartBreakOutIcon,
    subHeading: "Structured Auditing with Real-Time Insights",
    description:
      "Create audit sessions for real-time collaboration and data review. Track progress, verify entries, and ensure timely, accurate audits.",
    image: George4,
    position: "right",
  },
];
