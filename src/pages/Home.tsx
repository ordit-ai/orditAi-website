import Typography from "@/components/Typography";
import HeroImg from "@/assets/images/heroImg.png";
import Choose1 from "@/assets/images/Choose1.png";
import Choose2 from "@/assets/images/Choose2.png";
import MessageIcon from "@/assets/images/message-chat-circle.png";
import { Button } from "@/components/common/Button";
import { ImPlay2 } from "react-icons/im";
import { whyChoose } from "@/constants/homedata";
import Effortless from "@/assets/images/effortless.png";
import { LuMoveRight } from "react-icons/lu";

const Home = () => {
  return (
    <div>
      <div className=" h-[100vh] w-[100%] flex items-end  justify-center bg-gradient-to-b from-[#050E2FFA] to-[#17052A]">
        <div className="w-[80%] flex items-start justify-between">
          <div className="w-[45%] space-y-4">
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

            <div className="flex items-center space-x-4 pt-[2em]">
              <Button variant="default" className="flex items-center justify-between">
                Hire George
                <LuMoveRight />
              </Button>


              <Button variant="quickAction" className="flex items-center justify-between">
              Get a Demo
              </Button>
            </div>
          </div>

          <img src={HeroImg} className="w-[55%] place-self-end" alt="HeroImg" />
        </div>
      </div>

      <div>
        <div className="w-[80%] mx-auto space-y-3 py-[4em]">
          <Typography.SubText className="font-light text-green-600">WHY CHOOSE ORDIT AI</Typography.SubText>

          <Typography.Headers className="text-gray-800 leading-[1.3em]">
            Transform Your Accounting with AI
          </Typography.Headers>

          <Typography.SubText className="font-light text-gray-600 w-[60%]">
            OrditAI leverages advanced AI to simplify your accounting and auditing tasks, ensuring efficiency, accuracy,
            and automation in every process.
          </Typography.SubText>

          <div className="flex items-center justify-between pt-[2em]">
            {whyChoose.map((el) => (
              <div className="w-[30%] space-y-2" key={el.name}>
                <img src={el.image} alt={el.description} className="w-[50px]" />
                <Typography.Text className="text-gray-800">{el.name}</Typography.Text>

                <Typography.SubText className="text-gray-600 font-light ">{el.description}</Typography.SubText>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex bg-gradient-to-b from-[#EFF4FF] to-[#F2F2F261] py-[4em]">
        <div className="w-[80%] mx-auto flex items-center justify-between  ">
          <div className="w-[40%] space-y-4">
            <div className="w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center">
              <img src={MessageIcon} alt="message-chat-circle" className="w-[50%]" />
            </div>

            <Typography.H2 className="text-gray-800 leading-[1.3em]">Multiple Workspaces</Typography.H2>

            <Typography.Text className="text-gray-800 font-light">
            Create different workspaces for each client to seamlessly manage the accounting and audit needs of the clients. Assign workspaces to members of your organization based on the tasks assigned to each member of the organization
            </Typography.Text>

            <Button variant="default" className="flex items-center justify-between">
              Get a Demo
              <ImPlay2 />
            </Button>
          </div>

          <img src={Choose1} alt="Workspace image" className="w-[50%]" />
        </div>
      </div>

      <div className="w-[80%] mx-auto flex items-center justify-between py-[2em]">
        <img src={Choose2} alt="Workspace image1" className="w-[50%]" />

        <div className="w-[40%] space-y-4">
          <div className="w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center">
            <img src={MessageIcon} alt="message-chat-circle" className="w-[50%]" />
          </div>

          

          <Typography.H2 className="text-gray-800 leading-[1.3em]">Add Collaborators</Typography.H2>

          <Typography.Text className="text-gray-800 font-light">
          Collaborate easily by inviting members of your organization to your workspace and assign roles and permissions to them on OrditAI. Ensure efficiency and due process by assigning tasks based on your pre-set roles
          </Typography.Text>

          <Button variant="default">
            Get a Demo
            <ImPlay2 />
          </Button>
        </div>
      </div>

      <div className="w-[80%] mx-auto py-[2em] ">
        <div className="space-y-2">
          <Typography.SubText className="font-light text-green-600 tracking-[3px]">
            WHY CHOOSE ORDIT AI
          </Typography.SubText>

          <Typography.Headers className="text-gray-800 leading-[1.3em]">How it Works</Typography.Headers>

          <Typography.SubText className="font-light text-gray-600 ">
            Instruct the AI to carry out tasks for you such as importing journal entries, importing trial balance,
            generating reports and initiating the audit process.
          </Typography.SubText>
        </div>
      </div>

      <div className="w-[80%] mx-auto py-[2em] space-y-[4em]">
        <div className="space-y-2">
          <Typography.SubText className="font-light text-primary tracking-[3px]">CASE STUDIES</Typography.SubText>

          <Typography.Headers className="text-gray-800 leading-[1.3em]">
            Success Stories Powered by OrditAI
          </Typography.Headers>

          <Typography.SubText className="font-light text-gray-600 ">
            Explore how OrditAI has transformed businesses across various industries with our AI-driven accounting and
            auditing solutions.
          </Typography.SubText>
        </div>

        <div className="bg-bg2 h-[450px] w-[100%] relative rounded-lg overflow-hidden">
          <div className="bg-[#0C1E21] absolute opacity-[0.7] w-[100%] h-[100%] top-0 left-0 right-0"></div>

          <div className="z-[50] relative w-[80%] h-[100%] mx-auto flex flex-col justify-center space-y-6 ">
            <Typography.H2 className="text-white leading-[1.3em]">E-commerce Growth and Efficiency</Typography.H2>

            <Typography.Text className="font-light text-white w-[60%] leading-7">
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

        <div className="bg-primary h-[400px] rounded-lg w-[100%]  flex items-center justify-between">

          <div className="flex items-center justify-between w-[95%] mx-auto ">
          <div className="w-[40%] space-y-3">
            <Typography.SubText className="font-light text-white uppercase tracking-[3px]">
              Get Started with OrditAI Today
            </Typography.SubText>

            <Typography.Headers className="text-white leading-[1.3em]">Effortless Automation</Typography.Headers>

            <Typography.SubText className="font-light text-white leading-6 w-[95%] pb-5">
              Join the hundreds of global companies transforming their financial operations with OrditAI. Our AI-powered
              tools streamline processes, improve accuracy, and boost efficiency. Don't miss out on the opportunity to
              elevate your business.
            </Typography.SubText>

            <Button variant="quickAction" className="">
              Sign Up for a Free Trial
              <LuMoveRight />
            </Button>
          </div>

          <img src={Effortless} alt="Effortless" className="w-[50%] rounded-lg" />
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Home;
