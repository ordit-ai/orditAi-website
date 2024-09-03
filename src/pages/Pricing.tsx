import Typography from "@/components/Typography";
import { Button } from "@/components/common/Button";
import { cn } from "@/helpers/classHelpers";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

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
  {
    name: "Basic",
    tag: "",

    price: "$10",
    description: "Basic features for up to 10 employees with everything you",
  },
  {
    name: "Professional",
    tag: "Popular",

    price: "$20",
    description: "Advanced features and reporting, better workflows and automation.",
  },
  {
    name: "Enterprise",
    tag: "",

    price: "$40",
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

      <div className="bg-white w-[85%] mx-auto rounded-lg border-[1px]">
        <div className="w-[90%] mx-auto">
          <div className="flex items-center gap-[2em] w-[100%] justify-center py-4 border-b-[1px]">
            {planHeader.map((el, i) => (
              <div className={cn("w-[25%]")} key={`planHeader-${i}`}>
                {el.name !== undefined && (
                  <div className="space-x-2 flex items-center">
                    <Typography.SubText className="text-gray-700 font-bold">{el.name}</Typography.SubText>
                    {el.tag !== "" && (
                      <p className="bg-purple-100 px-2 py-1 text-xs rounded-2xl text-primary font-semibold">{el.tag}</p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-[2em] w-[100%] justify-center py-4">
            {planHeader.map((el, i) => (
              <div className={cn("w-[25%]")} key={`planHeader-${i}`}>
                {el.name !== undefined && (
                  <div className="space-y-2">
                    <div className="flex items-center py-2 space-x-1">
                      <Typography.H2 className="text-gray-700">{el.price}</Typography.H2>

                      <Typography.MicroText className="mt-[6px]">per month</Typography.MicroText>
                    </div>
                    <Typography.MicroText>{el.description}</Typography.MicroText>
                    <Button variant="default" className="w-[100%] h-[40px]">
                      Get Started
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
          {plans.map((el, i) => {
            return (
              <div
                className={cn(
                  "flex items-center justify-between h-[45px] px-4",
                  i % 2 === 0 ? "bg-white" : "bg-gray-100",
                )}
                key={`plans-${i}`}
              >
                <Typography.SubText className="w-[25%]">{el.name}</Typography.SubText>
                <div className={cn("w-[25%]", FLEX)}>
                  {typeof el.basic === "boolean" && el.basic ? (
                    <IoIosCheckmarkCircleOutline className="text-green-600 text-xl " />
                  ) : typeof el.basic === "string" ? (
                    <Typography.MicroText className="">{el.basic}</Typography.MicroText>
                  ) : (
                    "-"
                  )}

                  {/* {typeof el.basic === "string" ? el.basic : null} */}
                </div>
                <div className={cn("w-[25%]", FLEX)}>
                  {el.pro ? <IoIosCheckmarkCircleOutline className="text-green-600 text-xl text-center" /> : "-"}
                </div>
                <div className={cn("w-[25%]", FLEX)}>
                  {el.enterprise ? <IoIosCheckmarkCircleOutline className="text-green-600 text-xl text-center" /> : "-"}
                </div>
              </div>
            );
          })}

          <div className="flex items-center gap-[2em] w-[100%] justify-center py-4">
            <div className={cn("w-[25%]")}></div>

            <div className={cn("w-[25%]")}>
              <Button variant="default" className="w-[100%] h-[40px]">
                Get Started
              </Button>
            </div>

            <div className={cn("w-[25%]")}>
              <Button variant="default" className="w-[100%] h-[40px]">
                Get Started
              </Button>
            </div>
            <div className={cn("w-[25%]")}>
              <Button variant="default" className="w-[100%] h-[40px]">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
