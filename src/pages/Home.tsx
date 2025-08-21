import Typography from "@/components/Typography";
import { Button } from "@/components/common/Button";
import HeroImg from "@/assets/images/heroImg.png";
import FIRS from "@/assets/images/logos/Frame.png";
import GeorgeGif from "@/assets/images/george.gif";
import ai1 from "@/assets/images/ai/ai1.png";
import {
  WhatGeorgeCanDo,
  auditProcess,
  empowerState,
  numberStats,
  onboardState,
  testimonialData,
} from "@/constants/homedata";
import AnimatedSection from "@/components/AnimatedSection";
import { LightingIcon } from "@/assets/images/auditProcess/LightingIcon";
import { v4 as uuidv4 } from "uuid";
import { FaStar } from "react-icons/fa";
import { LuMoveLeft, LuMoveRight } from "react-icons/lu";
import { useEffect, useRef } from "react";
import ChatBot from "@/components/chatbot";
import { getToken, setToken } from "@/helpers/authHelpers";
import { URLS } from "@/constants/app-routes";

interface THandleScroll {
  direction: "forward" | "backward";
}

const Home = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const token = getToken();

    if (!token) {
      setToken(uuidv4() as string);
    }
  }, []);

  const handleScroll = ({ direction }: THandleScroll) => {
    if (cardRef.current) {
      cardRef.current.scrollBy({
        left: direction === "forward" ? 200 : -200,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className=" min-h-[calc(100vh-80px)] flex sm:items-end items-center">
        <div className="flex sm:flex-row  flex-col  pl-[7.5%] justify-between">
          <div className="sm:w-[47%] pt-[3em] w-[90%] flex justify-between flex-col">
            <div className="space-y-6">
              {/* AI Auditor for modern businesses */}
              <Typography.Heading className="w-[100%] text-center sm:text-left ">
                AI Auditor <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#492AB1] via-purple-500 to-[#FB8C3C] leading-[1.4em] ">
                  {/* AI Agent */}
                  for modern 
                </span> businesses{" "}
                {/* for Auditing and Accounting  */}
                {/* businesses. */}
              </Typography.Heading>
              <Typography.Text className="sm:text-left text-center">
                Meet George — the AI auditor that makes your team 1000x more efficient. Collaborate. Automate. Deliver.
              </Typography.Text>
              <div className="flex sm:justify-start justify-center w-[100%]">
                <a href={URLS.ORDIT_AI} target="_blank">
                  <Button variant={"default"}>Hire George Today</Button>
                </a>
              </div>
            </div>

            {/* <div className="py-[2em] space-y-4">
              <Typography.SubText className="text-gray-600 sm:text-left text-center">
                Trusted by Audit and accounting firms committed to accuracy and compliance
              </Typography.SubText>
              <div className="flex items-center space-x-4 pt-[0.5em]">
                {HeroLogo.map((el, i) => (
                  <img src={el} alt={`missionImage-${i}`} key={`missionImage-${i}`} className="h-[20px]" />
                ))}
              </div>
            </div> */}
          </div>

          <img
            src={HeroImg}
            className="sm:w-[53%] w-[100%] sm:place-self-end place-self-center flex mx-auto"
            alt="HeroImg"
          />

          {/* <div className="w-[50%]"></div> */}
        </div>
      </div>

      <div className="flex items-center justify-center flex-col py-[3em] space-y-4 border-t-[1px]  border-b-[1px] ">
        {/* <Typography.SubText className="text-gray-600 sm:w-[70%] w-[100%] text-center">
          George is an autonomous auditing and accounting professional,trained using global standards. He is capable of
          doing everything a human auditor can do without oversight.
        </Typography.SubText> */}

        <div className="flex flex-wrap items-center justify-center gap-[1em] w-[85%] mx-auto">
          {["GAAP", "CAS", "JGAAP", "ISA", "SEC", "GDPR", "SOX"].map((el) => (
            <Typography.H4 className="text-gray-600 font-normal tracking-[5px]" key={el}>
              {el}
            </Typography.H4>
          ))}
          <img src={FIRS} alt="FIRS" className="h-[20px]" />
        </div>
      </div>

      <div className="bg-gradient-to-b from-white via-purple-50 to-white">
        <div className="w-[80%] mx-auto py-[3em] space-y-4">
          <Typography.H2 className="text-[#030124] w-[95%] text-center ">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#492AB1] via-purple-500 to-[#FB8C3C] leading-[1.4em] ">
              George
            </span>{" "}
            Drives your accounting and auditing business
          </Typography.H2>

          <Typography.Text className="text-gray-600 text-center">
            {/* Uncover insights, ensure compliance, and achieve unmatched accuracy!{" "} */}
            Increase efficiency by 1000x — beyond human capacity. Deliver fast and accurate audits.
          </Typography.Text>
        </div>
      </div>

      <div className="bg-gradient-to-b from-white via-purple-50 to-white">
        <div className="w-[80%] mx-auto py-[3em] space-y-4">
          <Typography.H2 className="text-[#030124] w-[95%] text-center ">
            Why{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#492AB1] via-purple-500 to-[#FB8C3C] leading-[1.4em] ">
              George ?
            </span>{" "}
          </Typography.H2>

          {/* <Typography.Text className="text-gray-600 text-center">
            Uncover insights, ensure compliance, and achieve unmatched accuracy!{" "}
          </Typography.Text> */}

          <div>
            <AnimatedSection data={auditProcess} position="right" />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-white via-purple-50 to-white">
        <div className="w-[80%] mx-auto py-[3em] space-y-4">
          <Typography.H2 className="text-[#030124] sm:w-[95%] text-center ">
            What can{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#492AB1] via-purple-500 to-[#FB8C3C] leading-[1.4em] ">
              George{" "}
            </span>
            do for you?
          </Typography.H2>

          <Typography.Text className="text-gray-600 text-center sm:w-[65%] w-[100%] mx-auto">
            From real-time auditing to continuous compliance monitoring, George takes care of your financial auditing
            and accounting tasks effortlessly
          </Typography.Text>

          <div className="flex sm:flex-row flex-col items-center justify-center py-8">
            <div className="space-y-7 sm:w-[50%] w-[80%]">
              {WhatGeorgeCanDo.map((el, i) => (
                <div className="" key={el.id}>
                  <Typography.H3>
                    {i + 1}. {el.title}
                  </Typography.H3>
                  <Typography.Text>{el.subtitle}</Typography.Text>
                </div>
              ))}
            </div>

            <div className=" bg-[#030124] rounded-lg flex items-center justify-center sm:h-[70vh] h-auto  ">
              <img src={GeorgeGif} alt="GeorgeGif" className="h-[100%]" />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4 py-[4em]">
        <Typography.H2 className="text-[#030124] sm:w-[95%] w-[90%] mx-auto text-center ">
          Chat with
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#492AB1] via-purple-500 to-[#FB8C3C] leading-[1.4em] ">
            {" "}
            George.
          </span>
        </Typography.H2>

        <ChatBot />
      </div>

      <div className="py-[3em]">
        <div className="space-y-2">
          <Typography.H2 className="text-[#030124] sm:w-[95%] w-[90%] mx-auto text-center ">
            Ready to meet
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#492AB1] via-purple-500 to-[#FB8C3C] leading-[1.4em] ">
              {" "}
              George{" "}
            </span>
            ?
          </Typography.H2>

          <Typography.Text className="text-gray-600 text-center sm:w-[65%] w-[80%] mx-auto">
            Prompt George anytime to handle your complex audit tasks
          </Typography.Text>
        </div>

        <div>
          <div className="flex sm:flex-row flex-col gap-[1.5em] mx-auto w-[80%] py-[4em]">
            <div className="border-[1px] p-8 rounded-xl sm:w-[50%] w-[100%] flex flex-col justify-between space-y-2 hover:shadow-lg cursor-pointer transition-all duration-300">
              <div className="space-y-3">
                <div className="flex items-center space-x-4">
                  <div className="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-primary">
                    <Typography className="text-white">1</Typography>
                  </div>

                  <Typography.H4 className="font-semibold">{onboardState[0].title}</Typography.H4>
                </div>

                <Typography.Text>{onboardState[0].subtitle}</Typography.Text>

                <div className="flex flex-col items-start space-y-2">
                  {onboardState[0].children?.map((el) => (
                    <div key={el} className="border-[1px] rounded-2xl px-3 py-1 flex space-x-2 items-center ">
                      <div className="bg-green-600 w-[15px] h-[15px] rounded-full"></div>
                      <Typography.SubText className="text-gray-700">{el}</Typography.SubText>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-[3em] flex items-center justify-center ">
                <img src={onboardState[0].image} alt={onboardState[0].image} />
              </div>
            </div>

            <div className="sm:w-[50%] w-[100%] flex flex-col gap-[1.5em]">
              {onboardState.slice(1).map((el, i) => (
                <div className="border-[1px] w-[100%] p-8 rounded-xl space-y-3 hover:shadow-lg cursor-pointer transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-primary">
                      <Typography className="text-white">{i + 2}</Typography>
                    </div>

                    <Typography.H4 className="font-semibold">{el.title}</Typography.H4>
                  </div>

                  <Typography.Text>{el.subtitle}</Typography.Text>

                  <div className="pt-[3em] flex items-center justify-center">
                    <img src={el.image} alt={el.image} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center sm:flex-row flex-col w-[80%] mx-auto  py-[2em] justify-between">
        <Typography.H22 className="leading-[1.2em] sm:w-[35%] w-[100%]">
          The numbers speak for themselves
        </Typography.H22>
        <div className="flex sm:flex-row flex-col sm:space-y-0 space-y-2 mt-[2em] sm:mt-0 sm:w-[60%] w-[100%]">
          {numberStats.map((el) => (
            <div className="space-y-2 border-l-[1px] sm:w-[33%] w-[100%] p-4" key={el.id}>
              <el.icon />

              <Typography.Text className="text-[#1D1A1C] font-medium">{el.title}</Typography.Text>
              <Typography>{el.subtitle}</Typography>
            </div>
          ))}
        </div>
      </div>

      <div className="w-[80%] mx-auto flex sm:flex-row flex-col items-center justify-between py-[5em] border-t-[1px] border-b-[1px] sm:gap-0 gap-[3em]">
        <div className="sm:w-[40%] w-[100%] space-y-4">
          <Typography.H2 className="leading-[60px]">
            Discover the potential revenue{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#492AB1] via-purple-500 to-[#FB8C3C] leading-[1.4em] ">
              George
            </span>{" "}
            can generate for
          </Typography.H2>
          <Typography.Text>Discover the potential revenue George can generate for you.</Typography.Text>

          <div>
            <div className="flex items-baseline space-x-3">
              <p className="text-[36px] font-light"> $25,500,000,000</p>
              <p className="text-primary mt-[-1em]">PER YEAR</p>
            </div>
            <hr className="h-[3px] bg-primary" />
          </div>
        </div>

        <div className="sm:w-[50%] w-[100%] sm:space-y-[6em] space-y-[3em]">
          <div className="space-y-[2em]">
            <div className="flex items-baseline space-x-3">
              <Typography.Text className="font-light">
                255,000 AUDIT SESSIONS
                {/* <span className="font-bold text-gray-800"></span> */}
              </Typography.Text>
            </div>

            <div className="relative">
              <div className="w-[20px] h-[20px] rounded-full border-black border-[2px] bg-white absolute top-[-10px] right-[50%]"></div>
              <hr className="h-[3px] bg-primary  " />
            </div>
          </div>

          <div className="space-y-[2em]">
            <div className="flex items-baseline space-x-3">
              <Typography.Text className="font-light">
                AVERAGE AUDIT FEE - <span className="font-bold text-gray-800">$100,000 </span>
              </Typography.Text>
            </div>

            <div className="relative">
              <div className="w-[20px] h-[20px] rounded-full border-black border-[2px] bg-white absolute top-[-10px] right-[60%]"></div>
              <hr className="h-[3px] bg-primary  " />
            </div>
          </div>

          {/* <div className="space-y-[2em]">
            <div className="flex items-baseline space-x-3">
              <Typography.Text className="font-light">
                Average Audit Fee : <span className="font-bold text-gray-800">$5,000</span>
              </Typography.Text>
            </div>

            <div className="relative">
              <div className="w-[20px] h-[20px] rounded-full border-black border-[2px] bg-white absolute top-[-10px] right-[70%]"></div>
              <hr className="h-[3px] bg-primary  " />
            </div>
          </div> */}
        </div>
      </div>

      <div className=" bg-gradient-to-b from-[#565656] to-[#262626]  md:h-[400px] h-auto rounded-lg w-[85%] mx-auto flex items-center justify-between md:p-0 p-6 ">
        <div className="flex md:flex-row flex-col items-center justify-between w-[95%] h-[85%] mx-auto md:gap-y-0 gap-y-6 ">
          <div className="md:w-[40%] w-[100%] space-y-3">
            <Typography.Headers className="text-white leading-[1.3em]">A Partner you can trust.</Typography.Headers>

            <Typography.SubText className="font-light text-white leading-6 w-[95%] pb-5">
              George is more than technology. He’s the partner you’ve been waiting for. With his help, you can focus on
              building relationships with your clients, expanding your business, increasing your revenue,and delivering
              immense value to your clients.
            </Typography.SubText>

            <Typography.SubText className="font-light text-white leading-6 w-[95%] pb-5">
              Let George take care of the details while you focus on the big picture.
            </Typography.SubText>

            <Button variant={"default"}>Hire George Today</Button>
          </div>

          <div className="md:w-[50%] w-[100%] h-[100%] overflow-hidden">
            <img src={ai1} alt="Effortless" className="rounded-lg w-[100%] h-[100%]  object-cover" />
          </div>
        </div>
      </div>

      <div className="py-[5em] border-b-[1px] border-t-[1px]">
        <div className="space-y-4">
          <Typography.H2 className="text-[#030124] sm:w-[95%] w-[90%] mx-auto text-center ">
            George Keeps Your Audit Firm Running Smoothly!
          </Typography.H2>

          <Typography.Text className="text-gray-600 text-center sm:w-[65%] w-[80%] mx-auto">
            That's why you should hire him now.
          </Typography.Text>
        </div>

        <div className="flex sm:flex-row flex-col w-[80%] mx-auto gap-[1em] py-[3em]">
          {empowerState.map((el) => (
            <div className="border-[1px] p-8 rounded-xl sm:w-[50%] w-[100%] space-y-2 hover:shadow-lg cursor-pointer transition-all duration-300">
              <div className="flex items-center space-x-4">
                <LightingIcon />

                <Typography.H4 className="font-semibold">{el.title}</Typography.H4>
              </div>

              <Typography.Text>{el.subtitle}</Typography.Text>

              <div className="pt-[3em] flex items-center justify-center">
                <img src={el.image} alt={el.image} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="py-[5em]" id="our-mission">
        <Typography.H2 className="text-center">Our Mission</Typography.H2>
        <div className="sm:w-[50%] w-[80%] shadow-xl rounded-lg border-[1px] my-[3em]  mx-auto">
          <div className="sm:w-[70%] w-[80%] mx-auto text-center space-y-6  sm:py-[4em] py-[2em]">
            <div className="flex items-center justify-center space-x-6 py-[1em]">
              <img src={Sticker1} alt="Sticker1" className="w-[60px]" />
              <img src={Sticker2} alt="Sticker2" className="w-[60px]" />
            </div>
            <Typography.Text>
              We are on a mission to create and train digital workers that are capable of complementing humans at work
              in ensuring growth, efficiency and increased output
            </Typography.Text>
            <Typography.Text>
              We have a team of highly experienced professionals and our goal is continued improvement of the digital
              workers for the benefit of organizations that hire them
            </Typography.Text>

            <Typography className="pt-[2em]">BUILT BY PREVIOUS TECHNOLOGY, LEGAL, AND AUDIT TEAMS AT</Typography>

            <div className="flex flex-wrap justify-center items-center space-x-4 pt-[0.5em] gap-5">
              {missonImages.map((el, i) => (
                <img src={el} alt={`missionImage-${i}`} key={`missionImage-${i}`} className="h-[20px]" />
              ))}
            </div>
          </div>

          <div></div>
        </div>
      </div> */}

      <div className="bg-gradient-to-b from-white via-purple-50 to-white py-[1em]">
        <div className="w-[85%] mx-auto flex sm:flex-row flex-col items-center justify-between  sm:gap-0 gap-[2em]">
          <div>
            <Typography.H2 className="text-[#030124]">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#492AB1] via-purple-500 to-[#FB8C3C] leading-[1.4em] ">
                George
              </span>{" "}
              Delivers Result
            </Typography.H2>

            <Typography.Text className="text-gray-600 ">
              The testimonials below are attributed to fictional characters, <br />
              but they reflect real sentiments and feedback we’ve received from early users.
            </Typography.Text>
          </div>

          <div className="flex  items-center sm:justify-center justify-between sm:w-auto w-[60%] space-x-4">
            <div
              className="w-[35px] h-[35px] border-[1px] border-primary rounded-full flex items-center justify-center cursor-pointer"
              onClick={() =>
                handleScroll({
                  direction: "backward",
                })
              }
            >
              <LuMoveLeft className="text-lg text-primary" />
            </div>
            <div
              className="w-[35px] h-[35px] border-[1px] border-primary rounded-full flex items-center justify-center cursor-pointer bg-primary "
              onClick={() =>
                handleScroll({
                  direction: "forward",
                })
              }
            >
              <LuMoveRight className="text-lg text-white" />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[2em] w-[100%] overflow-auto my-[3em] pl-[7.5%]    " ref={cardRef}>
          {testimonialData.map((elm, i) => (
            <div
              key={`TestimonialCard-${i}`}
              className=" p-8 h-[400px]  sm:min-w-[400px] min-w-[350px] border-[1px] rounded-xl bg-white cursor-pointer hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  {Array.from({ length: elm.noOfStars }).map((el) => (
                    <FaStar key={`FaStar-${el}`} className="text-primary" />
                  ))}
                </div>

                <Typography.Text className="text-gray-800 font-semibold">{elm.title}</Typography.Text>

                <Typography.SubText className="font-light">{elm.subTitle}</Typography.SubText>
              </div>

              <div>
                <Typography.Text className="text-gray-700">{elm.name}</Typography.Text>

                <Typography.SubText className="font-light">{elm.office}</Typography.SubText>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className=" bg-gradient-to-b from-[#565656] to-[#262626]  md:h-[400px] h-auto rounded-lg w-[85%] mx-auto flex items-center justify-between md:p-0 p-6 ">
        <div className="flex md:flex-row flex-col items-center justify-between w-[95%] h-[85%] mx-auto md:gap-y-0 gap-y-6 ">
          <div className="md:w-[40%] w-[100%] space-y-3">
            <Typography.Headers className="text-white leading-[1.3em]">
              Delegate audit tasks to George while you focus on business growth
            </Typography.Headers>

            <Typography.SubText className="font-light text-white leading-6 w-[95%] pb-5">
              Perform risk assessment, analyze control methods and perform substantive audit using George
            </Typography.SubText>

            <a href={URLS.ORDIT_AI} target="_blank">
              <Button variant={"default"}>Hire George Today</Button>
            </a>
          </div>

          <div className="md:w-[50%] w-[100%] h-[100%] overflow-hidden">
            <img src={ai1} alt="Effortless" className="rounded-lg w-[100%] h-[100%]  object-cover" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
