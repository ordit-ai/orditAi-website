import Typography from "@/components/Typography";
import { Button } from "@/components/common/Button";
import HeroImg from "@/assets/images/heroImg.png";
import Effortless from "@/assets/images/effortless.png";
import { auditProcess, auditProcess1, empowerState, numberStats } from "@/constants/homedata";
import AnimatedSection from "@/components/AnimatedSection";
import { AuditIcon } from "@/assets/images/auditProcess/auditIcon";

const Home = () => {
  return (
    <>
      <div className=" h-[calc(100vh-80px)] flex items-end">
        <div className="flex w-[85%] mx-auto justify-between">
          <div className="w-[40%] flex justify-between flex-col">
            <div className="space-y-6">
              <Typography.H1 className="text-[#030124] w-[95%]  ">
                Hi, I’m George.Your{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#492AB1] via-purple-500 to-[#FB8C3C] leading-[1.4em] ">
                  AI Powered
                </span>{" "}
                Auditing Partner
              </Typography.H1>
              <Typography.SubText className="text-gray-600">
                I have been trained using the most updated standards and global standard process flow to handle your
                auditing and accounting tasks.
              </Typography.SubText>
              <Button variant={"default"}>Hire George Today</Button>
            </div>

            <div className="">
              <Typography.SubText className="text-gray-600">
                Trusted by Business Committed to Accuracy and Compliance
              </Typography.SubText>
              {/* <Typography.SubText className="text-gray-600">
                Trusted by Business Committed to Accuracy and Compliance
              </Typography.SubText> */}
            </div>
          </div>

          <img src={HeroImg} className="w-[55%] place-self-end hidden md:flex" alt="HeroImg" />

          {/* <div className="w-[50%]"></div> */}
        </div>
      </div>

      <div className="flex items-center justify-center flex-col py-[2em] space-y-4 border-t-[1px]  border-b-[1px] ">
        <Typography.SubText className="text-gray-600">International Standards That We Adopt</Typography.SubText>

        <div className="flex items-center space-x-5">
          {["GAAP", "CAS", "JGAAP", "ISA", "SEC", "GDPR", "SOX"].map((el) => (
            <Typography.H4 className="text-gray-600 font-normal tracking-[5px]">{el}</Typography.H4>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-b from-white via-purple-50 to-white">
        <div className="w-[80%] mx-auto py-[3em]">
          <Typography.H2 className="text-[#030124] w-[95%] text-center ">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#492AB1] via-purple-500 to-[#FB8C3C] leading-[1.4em] ">
              George
            </span>{" "}
            Powers Your Auditing Process 24/7
          </Typography.H2>

          <Typography.Text className="text-gray-600 text-center">
            Automate your auditing without increasing headcount.{" "}
          </Typography.Text>

          <AnimatedSection data={auditProcess} position="right" />
        </div>
      </div>

      <div className="flex items-center w-[80%] mx-auto  py-[2em]">
        <Typography.H2>The numbers speak for themselves</Typography.H2>
        <div className="flex w-[75%]">
          {numberStats.map((el) => (
            <div className="space-y-2 border-l-[1px] w-[33%] p-4" key={el.id}>
              <AuditIcon />

              <Typography className="font-semibold">{el.title}</Typography>
              <Typography>{el.subtitle}</Typography>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-b from-white via-purple-50 to-white">
        <div className="w-[80%] mx-auto py-[3em]">
          <Typography.H2 className="text-[#030124] w-[95%] text-center ">
            Automate Auditing & Accounting with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#492AB1] via-purple-500 to-[#FB8C3C] leading-[1.4em] ">
              George
            </span>
          </Typography.H2>

          <Typography.Text className="text-gray-600 text-center w-[65%] mx-auto">
            From real-time auditing to continuous compliance monitoring, George takes care of your financial auditing
            and accounting tasks effortlessly.
          </Typography.Text>

          <AnimatedSection data={auditProcess1} position="left" />
        </div>
      </div>

      <div>
        <Typography.H2 className="text-[#030124] w-[95%] text-center ">
          Onboard{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#492AB1] via-purple-500 to-[#FB8C3C] leading-[1.4em] ">
            George
          </span>{" "}
          in 3 Steps
        </Typography.H2>

        <Typography.Text className="text-gray-600 text-center w-[65%] mx-auto">
          From real-time auditing to continuous compliance monitoring, George takes care of your financial auditing and
          accounting tasks effortlessly.
        </Typography.Text>
      </div>

      <div className="py-[3em]">
        <Typography.H2 className="text-[#030124] w-[95%] text-center ">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#492AB1] via-purple-500 to-[#FB8C3C] leading-[1.4em] ">
            George
          </span>{" "}
          Empowers Your Entire Finance Team
        </Typography.H2>

        <Typography.Text className="text-gray-600 text-center w-[65%] mx-auto">
          Financial auditing and accounting tasks
        </Typography.Text>

        <div className="flex w-[80%] mx-auto gap-[1em] py-[2em]">
          {empowerState.map((el) => (
            <div className="border-[1px] p-6 rounded-xl w-[50%]">
              <Typography.H4 className="font-semibold">{el.title}</Typography.H4>
              <Typography>{el.subtitle}</Typography>

              <div className="pt-[3em] flex items-center justify-center">
                <img src={el.image} alt={el.image} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className=" bg-gradient-to-b from-[#565656] to-[#262626]  md:h-[400px] h-auto rounded-lg w-[85%] mx-auto flex items-center justify-between md:p-0 p-6 ">
        <div className="flex md:flex-row flex-col items-center justify-between w-[95%] mx-auto md:gap-y-0 gap-y-6 ">
          <div className="md:w-[40%] w-[100%] space-y-3">
            {/* <Typography.SubText className="font-light text-white uppercase tracking-[3px]">
              Get Started with OrditAI Today
            </Typography.SubText> */}

            <Typography.Headers className="text-white leading-[1.3em]">
              George Seamlessly Integrates with Your Financial auditing Tools
            </Typography.Headers>

            <Typography.SubText className="font-light text-white leading-6 w-[95%] pb-5">
              George works with all major financial platforms to ensure your financial records are accurate, compliant,
              and always audit-ready.
            </Typography.SubText>

            <Button variant={"default"}>Hire George Today</Button>

            {/* <Button variant="quickAction" className="">
              Sign Up for a Free Trial
              <LuMoveRight />
            </Button> */}
          </div>

          <img src={Effortless} alt="Effortless" className="md:w-[50%] w-[100%] rounded-lg" />
        </div>
      </div>
    </>
  );
};

export default Home;
