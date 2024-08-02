import MessageIcon from "@/assets/images/message-chat-circle.png";
import Typography from "../Typography";
import { Button } from "./Button";
import { ImPlay2 } from "react-icons/im";

declare interface TProps {
  header: string;
  subHeader: string;
  image: string;
  position: "left" | "right";
}

const ImageTextSection = ({ header, subHeader, image, position }: TProps) => {
  return (
    <div
      className={`w-[85%] mx-auto flex md:flex-row ${
        position === "left" ? "flex-col" : "flex-col-reverse"
      } flex-col items-center justify-between`}
    >
      {position === "left" && <img src={image} alt="Workspace image" className="md:w-[50%] w-[100%]" />}

      <div className="md:w-[40%] w-[100%] space-y-4">
        <div className="w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center">
          <img src={MessageIcon} alt="message-chat-circle" className="w-[50%]" />
        </div>

        <Typography.H2 className="text-gray-800 leading-[1.3em]">{header}</Typography.H2>

        <Typography.Text className="text-gray-800 font-light">{subHeader}</Typography.Text>

        <Button variant="default" className="flex items-center justify-between">
          Get a Demo
          <ImPlay2 />
        </Button>
      </div>

      {position === "right" && <img src={image} alt="Workspace image" className="md:w-[50%] w-[100%]" />}
    </div>
  );
};

export default ImageTextSection;
