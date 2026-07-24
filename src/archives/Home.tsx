import Typography from "@/components/Typography";
import HeroImg from "@/assets/images/heroImg.png";
import Choose1 from "@/assets/images/Choose1.png";
import Choose2 from "@/assets/images/Choose2.png";
import { Button } from "@/components/common/Button";
import { whyChoose } from "@/constants/homedata";
import Effortless from "@/assets/images/effortless.png";
import { LuMoveRight } from "react-icons/lu";
import SectionHeaders from "@/components/common/SectionHeaders";
import FeaturesSection from "@/components/FeaturesSection";
import ImageTextSection from "@/components/common/ImageTextSection";

const Home = () => {
  return (
    <div>
      <div className=" h-[100vh] w-[100%] flex md:items-end items-start justify-center bg-gradient-to-b from-[#050E2FFA] to-[#17052A] md:py-0 py-[2em] md:pt-0 pt-[30%]">
        <div className="w-[85%] h-[100%] flex md:items-center items-start justify-between">
          <div className="md:w-[45%] w-[100%] space-y-4">
            <Typography.H1 className="text-white leading-[1.3em] ">
              Ensure transparency and trust with AI powered accounting and auditing
            </Typography.H1>

            <Typography.Text className="text-white font-light">
              OrditAI provides unique industry-standard accounting and auditing services using AI that has been trained
              as an accountant and auditor
            </Typography.Text>

            <Typography.Text className="text-white font-light">
              Hire our trained AI to do your accounting and auditing
            </Typography.Text>

            <div className="flex md:flex-row flex-col items-center md:space-x-4 space-x-0 md:gap-y-0 gap-y-4 pt-[2em]">
              <Button
                variant="default"
                className="flex items-center md:justify-between justify-center md:w-auto w-[100%] text-xs"
              >
                Hire George
                <LuMoveRight />
              </Button>

              <Button
                variant="quickAction"
                className="flex items-center md:justify-between justify-center md:w-auto w-[100%]"
              >
                Get a Demo
              </Button>
            </div>
          </div>

          <img src={HeroImg} className="w-[60%] place-self-end hidden md:flex" alt="HeroImg" />
        </div>
      </div>

      <div>
        <div className="w-[85%] mx-auto space-y-3 py-[4em]">
          <SectionHeaders
            introText="WHY CHOOSE ORDIT AI"
            header="Transform Your Accounting with AI"
            subHeader="  OrditAI leverages advanced AI to simplify your accounting and auditing tasks, ensuring efficiency, accuracy,
            and automation in every process."
            color="secondary"
          />

          <div className="flex md:flex-row flex-col items-center justify-between pt-[2em] md:gap-y-0 gap-y-4">
            {whyChoose.map((el) => (
              <div className="md:w-[30%] w-[100%] space-y-2" key={el.name}>
                <img src={el.image} alt={el.description} className="w-[50px]" />
                <Typography.Text className="text-gray-800">{el.name}</Typography.Text>

                <Typography.SubText className="text-gray-600 font-light ">{el.description}</Typography.SubText>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex bg-gradient-to-b from-[#EFF4FF] to-[#F2F2F261] py-[4em]">
        <ImageTextSection
          header="Multiple Workspaces"
          subHeader="Create different workspaces for each client to seamlessly manage the accounting and audit needs of the
              clients. Assign workspaces to members of your organization based on the tasks assigned to each member of
              the organization"
          image={Choose1}
          position="right"
        />
      </div>

      <div className="py-[2em]">
        <ImageTextSection
          header="Add Collaborators"
          subHeader=" Collaborate easily by inviting members of your organization to your workspace and assign roles and
          permissions to them on OrditAI. Ensure efficiency and due process by assigning tasks based on your pre-set
          roles"
          image={Choose2}
          position="left"
        />
      </div>

      <div className="w-[85%] mx-auto py-[2em] relative">
        <div className="md:min-h-[400px] min-h-[250px]">
          <SectionHeaders
            introText="WHY CHOOSE ORDIT AI"
            header="How it Works"
            subHeader="Instruct the AI to carry out tasks for you such as importing journal entries, importing trial balance,
            generating reports and initiating the audit process."
            color="secondary"
          />
        </div>

        <div className="py-[2em] absolute md:top-[25%] top-[52%] w-[100%] bg-transparent flex items-center justify-center overflow-hidden rounded-xl ">
          {/* <video className="w-[100%] rounded-xl" autoPlay muted controls>
            <source src={video} type="video/mp4" />
          </video> */}

          <iframe
            className="w-[100%] rounded-xl  md:h-[600px] h-[200px]"
            src="https://www.youtube.com/embed/g4IDYwkycaI"
            title="orditAi product demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="bg-[#EFF4FF] md:pt-[25%] pt-[30%] md:pb-0 pb-[2.5em]">
        <div className="w-[85%] mx-auto py-[2em] hidden  md:block  ">
          <SectionHeaders
            introText="Discover the Power of OrditAI"
            header="Powerful Features to Transform Your Accounting"
            subHeader="Explore how our AI-driven tools can revolutionize your financial operations."
          />
        </div>

        <FeaturesSection />
      </div>

      <div className="w-[85%] mx-auto py-[3em] space-y-[4em]">
        <div className="space-y-2">
          <SectionHeaders
            introText="CASE STUDIES"
            header="Success Stories Powered by OrditAI"
            subHeader="Explore how OrditAI has transformed businesses across various industries with our AI-driven accounting and
            auditing solutions."
          />
        </div>

        <div className="md:bg-bg2 bg-mobileBg2 md:h-[450px] h-auto md:p-0 p-6 w-[100%] relative rounded-lg overflow-hidden bg-100%">
          <div className="bg-[#0C1E21] absolute opacity-[0.7] w-[100%] h-[100%] top-0 left-0 right-0"></div>

          <div className="z-[50] relative md:w-[85%] w-[100%] h-[100%] mx-auto flex flex-col justify-center space-y-6 ">
            <Typography.H2 className="text-white leading-[1.3em]">E-commerce Growth and Efficiency</Typography.H2>

            <Typography.Text className="font-light text-white md:w-[60%] w-[100%] leading-7">
              An e-commerce company utilized OrditAI to streamline both their accounting and auditing processes. By
              automating journal entries, financial reports, and internal audits, they reduced their month-end closing
              time by 50% and ensured compliance with industry standards, allowing them to focus on scaling their
              operations.
            </Typography.Text>

            <Button variant="glass" className="flex items-center justify-between w-[150px] text-white">
              View Case Study
            </Button>

            <div className="flex items-center space-x-2">
              <div className="h-[10px] w-[50px] bg-white rounded-2xl"></div>
              <div className="h-[10px] w-[20px] bg-gray-400 rounded-2xl"></div>
            </div>
          </div>
        </div>

        <div className="bg-primary md:h-[400px] h-auto rounded-lg w-[100%] flex items-center justify-between md:p-0 p-6 ">
          <div className="flex md:flex-row flex-col items-center justify-between w-[95%] mx-auto md:gap-y-0 gap-y-6 ">
            <div className="md:w-[40%] w-[100%] space-y-3">
              <Typography.SubText className="font-light text-white uppercase tracking-[3px]">
                Get Started with OrditAI Today
              </Typography.SubText>

              <Typography.Headers className="text-white leading-[1.3em]">Effortless Automation</Typography.Headers>

              <Typography.SubText className="font-light text-white leading-6 w-[95%] pb-5">
                Join the hundreds of global companies transforming their financial operations with OrditAI. Our
                AI-powered tools streamline processes, improve accuracy, and boost efficiency. Don't miss out on the
                opportunity to elevate your business.
              </Typography.SubText>

              <Button variant="quickAction" className="">
                Sign Up for a Free Trial
                <LuMoveRight />
              </Button>
            </div>

            <img src={Effortless} alt="Effortless" className="md:w-[50%] w-[100%] rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
