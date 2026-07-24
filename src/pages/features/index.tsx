import Typography from "@/components/Typography";
import Features from "./Features";
import { featuresPages } from "@/constants/features-page-data";
import { Button } from "@/components/common/Button";
// import ai1 from "@/assets/images/ai/ai1.png";
import HeroImg from "@/assets/images/heroImg.png";

const FeaturesPage = () => {
  return (
    <div>
      <div className="space-y-6 flex items-center flex-col justify-center sm:pt-[5em] pt-[3em] border-b-[1px]">
        <Typography.Heading className="w-[100%] text-center">
          George, Your Trusted
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#492AB1] via-purple-500 to-[#FB8C3C] leading-[1.4em] ">
            AI Auditor and Accountant
          </span>
        </Typography.Heading>
        <Typography.Text className=" text-center sm:w-[50%] w-[80%]">
          Trained with global standards to handle your auditing and accounting tasks.
        </Typography.Text>
        <Button variant={"default"} className="m">
          Hire George Today
        </Button>

        <img src={HeroImg} className="sm:w-[40%]  w-[100%]" alt="HeroImg" />
      </div>

      <div className="w-[80%] mx-auto space-y-[3em] py-[4em]">
        <div className="space-y-4">
          <Typography.H2 className="text-[#030124] w-[95%] text-center leading-[1.3em] ">
            Explore how George can revolutionize your financial operations.{" "}
          </Typography.H2>

          <Typography.Text className="text-gray-600 text-center">
            Explore how our AI-driven tools can revolutionize your financial operations.
          </Typography.Text>
        </div>

        <div className="space-y-[3em]">
          {featuresPages.map((elm) => {
            return <Features key={`featuresPage-${elm.id}`} elm={elm} />;
          })}
        </div>
      </div>

      {/* <div className=" bg-gradient-to-b from-[#565656] to-[#262626]  md:h-[400px] h-auto rounded-lg w-[85%] mx-auto flex items-center justify-between md:p-0 p-6 ">
        <div className="flex md:flex-row flex-col items-center justify-between w-[95%] h-[85%] mx-auto md:gap-y-0 gap-y-6 ">
          <div className="md:w-[40%] w-[100%] space-y-3">
            <Typography.Headers className="text-white leading-[1.3em]">
              Delegate audit tasks to George while you focus on business growth
            </Typography.Headers>

            <Typography.SubText className="font-light text-white leading-6 w-[95%] pb-5">
              Perform risk assessment, analyze control methods and perform substantive audit using George
            </Typography.SubText>

            <Button variant={"default"}>Hire George Today</Button>
          </div>

          <div className="md:w-[50%] w-[100%] h-[100%] overflow-hidden">
            <img src={ai1} alt="Effortless" className="rounded-lg w-[100%] h-[100%]  object-cover" />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default FeaturesPage;
