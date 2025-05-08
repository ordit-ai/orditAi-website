import Typography from "@/components/Typography";
import { Button } from "@/components/common/Button";
import { URLS } from "@/constants/app-routes";

import { useQuerySubscriptionPlans } from "@/hooks/useQueryOrgSubscription";
import { BiLayer, BiCheckCircle } from "react-icons/bi";
import { cn } from "@/helpers/classHelpers";

const Pricing = () => {
  const { data } = useQuerySubscriptionPlans();

  const auditPlans = [
    "Per audit stage: $25",
    "Billable hours: $2 per hour spent during the audit process",
    "Computer vision (Inventory checking): $250 (Extra charges may apply depending on complexity and volume)",
    "Per document upload and storage: $5 (Large documents attract higher charges)",
    "Audit report generation: $100",
    "George analysis breakdown and access to documentation: $50",
  ];

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

      <div className="w-[85%] mx-auto bg-white p-8 rounded-lg">
        <Typography.H3 className="underline text-gray-700">Audit Pricing</Typography.H3>

        <div className="w-[70%] space-y-2 py-5">
          <p className="text-lg font-semibold">
            Our most advanced AI called George is capable of independent reasoning and carrying out intelligent tasks
            without supervision.
          </p>

          <div className="space-y-2">
            {auditPlans.map((plan, index) => (
              <div key={index} className="flex items-center space-x-2">
                <BiCheckCircle size={20} className="text-[#667085]" />
                <Typography className="text-[#667085]">{plan}</Typography>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2em] w-[85%] mx-auto my-[3em]">
        {data?.data?.map((el, i) => {
          return (
            <div
              key={`plan-${i}`}
              className={cn(
                "w-[100%] group mx-auto my-4 border-[2px] border-gray-200 hover:border-primary rounded-lg bg-white p-4 cursor-pointer hover:shadow-lg transition-all ease-in-out duration-300",
              )}
            >
              <div className={cn("p-4 flex gap-x-2 items-center border-b-2")}>
                <div className=" p-2 bg-[#F4EBFF] rounded-full [&>*]:text-brand ">
                  <BiLayer color="#7F56D9" />
                </div>
                <Typography.Text className="font-semibold">{el.name}</Typography.Text>
              </div>

              <div className="flex  items-baseline">
                <div className="text-[30px] text-[#344054] " style={{ fontWeight: 500 }}>
                  ${el.price}
                </div>
                <div className="w-[4px]" />
                <Typography.MicroText>Per month</Typography.MicroText>
              </div>

              <Typography className="font-semibold py-3">{el.description}</Typography>

              <Typography className="font-semibold mb-2 underline underline-offset-4"> Features</Typography>

              <div className="space-y-2 mb-4">
                {el?.features?.map((feature, i) => {
                  return (
                    <div className="flex gap-x-2" key={`feature-${i}`}>
                      <div className="w-[30px]">
                        <BiCheckCircle size={20} className={"text-[#667085]"} />
                      </div>

                      <Typography className={"text-[#667085]"} style={{ fontWeight: 400, fontSize: 14 }}>
                        {feature?.name}
                      </Typography>
                    </div>
                  );
                })}
              </div>

              <Typography className="text-[#6941C6] text-center mb-2">Explore All Features</Typography>

              <Button variant="default" className="w-[100%] h-[40px]">
                <a href={URLS.ORDIT_AI} target="_blank">
                  Get Started
                </a>
              </Button>

              {/* <center>{renderActionButton(el.id, el.plan_type_display)}</center> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
