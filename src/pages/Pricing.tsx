import Typography from "@/components/Typography";
import { Button } from "@/components/common/Button";
import { URLS } from "@/constants/app-routes";
import { cn } from "@/helpers/classHelpers";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { PlanTiers } from "./features.config";

const plans = [
  { name: "User Profile/Organization", basic: true, pro: true, enterprise: true },
  { name: "Workspaces", basic: false, pro: true, enterprise: true },
  { name: "Journal Transfer", basic: false, pro: true, enterprise: true },
  { name: "Account Setup", basic: false, pro: true, enterprise: true },

  { name: "Depreciation Setup", basic: false, pro: true, enterprise: true },
  { name: "Account Services", basic: "Limited Access", pro: true, enterprise: true },
  { name: "Journal Entries", basic: false, pro: true, enterprise: true },

  { name: "Payroll", basic: false, pro: true, enterprise: true },
  { name: "General Ledgers", basic: false, pro: true, enterprise: true },
  {
    name: "Statement of Profit or Loss and Other Comprehensive Income Feature",
    basic: false,
    pro: true,
    enterprise: true,
  },

  { name: "Statement of Cash Flow", basic: false, pro: true, enterprise: true },
  { name: "Statement of Financial Position Feature", basic: false, pro: true, enterprise: true },
  { name: "Statement of Changes in Equity", basic: false, pro: true, enterprise: true },

  { name: "Audit Logs", basic: false, pro: true, enterprise: true },
  { name: "Asset Schedule", basic: "Limited Access", pro: true, enterprise: true },
  { name: "Customer Support", basic: false, pro: true, enterprise: true },

  { name: "Debt Management Schedule", basic: "Limited Access", pro: true, enterprise: true },
  { name: "Income Summary", basic: "Limited Access", pro: true, enterprise: true },
  { name: "Expense Summary", basic: "Limited Access", pro: true, enterprise: true },

  { name: "Sandboxes", basic: false, pro: true, enterprise: true },
  { name: "Roles and Permissions", basic: false, pro: true, enterprise: true },
  { name: "AI Chatbot Features ", basic: "Limited Access", pro: true, enterprise: true },
];

const planHeader = [
  {},
  // {
  //   name: "Basic",
  //   tag: "",

  //   price: "$29.99",
  //   description: "Basic features for up to 10 employees with everything you",
  // },
  {
    name: "Professional",
    tag: "Popular",

    price: "$199.99",
    description: "Advanced features and reporting, better workflows and automation.",
  },
  {
    name: "Enterprise",
    tag: "",

    price: "$299.99",
    description: "Personalised service and enterprise security for large ",
  },
];

const FLEX = "flex items-center justify-center";

const Pricing = () => {
  return (
    <div className=" bg-[#EFF4FF] pt-[8%] pb-[2em]">
      <div className="w-[85%] mx-auto  flex flex-col items-center justify-between my-[3em]">
        <div className="text-center  ">
          <Typography.SubText className="text-primary">Pricing</Typography.SubText>

          <Typography.H1 className="text-gray-800 my-4">Compare our plans and find yours</Typography.H1>
        </div>

        <Typography.Text className="text-gray-500">
          Simple, transparent pricing that grows with you. Try any plan free for 30 days.
        </Typography.Text>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2em] w-[85%] mx-auto my-[3em]">
        {PlanTiers.map((el, i) => {
          return (
            <div
              key={`plan-${i}`}
              className="w-[100%] group mx-auto my-4 border-[2px] border-gray-200 hover:border-primary rounded-lg bg-white p-4 cursor-pointer hover:shadow-lg transition-all ease-in-out duration-300"
            >
              <div>
                <div className=" py-2">
                  <Typography.H4 className="text-gray-800 font-semibold">{el.name}</Typography.H4>
                </div>
              </div>

              <div className="flex items-center py-4 space-x-1 group-hover:border-primary border-b-[1px] border-t-[1px] ">
                <Typography.H2 className="text-gray-700">{el.price}</Typography.H2>

                <Typography.MicroText className="mt-[6px]">per month</Typography.MicroText>
              </div>

              <Typography className="font-semibold py-3">{el.description}</Typography>

              <Typography className="font-semibold mb-2 underline underline-offset-4"> Features</Typography>

              <div className="space-y-2 mb-4">
                {el.features.map((feature, i) => {
                  return (
                    <Typography key={`feature-${i}`} className="font-light text-sm">
                      {feature}
                    </Typography>
                  );
                })}
              </div>

              <Button variant="default" className="w-[100%] h-[40px]">
                <a href={URLS.ORDIT_AI} target="_blank">
                  Get Started
                </a>
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
