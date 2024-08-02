import { featuresData } from "@/constants/homedata";
import Typography from "./Typography";
import { PiPresentationChart } from "react-icons/pi";
import { Button } from "./common/Button";
import { LuMoveRight } from "react-icons/lu";
import { useState } from "react";
import Screen from "@/assets/images/screen.png";
import Effortless from "@/assets/images/effortless.png";

const FeaturesSection = () => {
  const [step, setStep] = useState<number>(0);
  return (
    <div>
      <div className="flex items-center justify-between mx-auto w-[85%] overflow-y-scroll ">
        <div className="flex items-center gap-x-2 bg-white p-[6px] rounded-md md:w-[83%] w-auto justify-between">
          {featuresData.map((el, i) => (
            <div
              className={`flex items-center justify-center place-self-center  space-x-3 hover:cursor-pointer px-3 py-2 rounded-md md:min-w-[15%] min-w-[250px] md:w-max-auto max-w-[300px] ${
                step === i ? "text-primary bg-purple-100" : " text-gray-700"
              }`}
              key={el.id}
              onClick={() => setStep(i)}
            >
              <PiPresentationChart className="text-xl" />
              <Typography.SubText>{el.name}</Typography.SubText>
            </div>
          ))}
        </div>

        <div className="md:w-auto min-w-[240px]">
          <Button variant="default" className="h-[40px] w-[100%] ">
            Start your free trial
            <LuMoveRight />
          </Button>
        </div>
      </div>

      <div className="md:w-[100%] w-[85%] mx-auto pt-[1em] flex md:flex-row flex-col-reverse  items-start justify-between">
        <div className="md:w-[50%] w-[100%]">
          <div className="md:w-[70%] w-[100%] space-y-6 mx-auto pt-[5em]">
            <Typography.H2 className="text-gray-800">{featuresData[step].name}</Typography.H2>

            <div className="space-y-[1em]">
              {featuresData[step].description.map((el: string) => (
                <Typography.Text className="text-gray-500">{el}</Typography.Text>
              ))}
            </div>
          </div>
        </div>

        <img src={Screen} alt="Screen" className="w-[50%] hidden md:block" />
        <img src={Effortless} alt="Effortless" className="w-[100%] block md:hidden" />
      </div>
    </div>
  );
};

export default FeaturesSection;
