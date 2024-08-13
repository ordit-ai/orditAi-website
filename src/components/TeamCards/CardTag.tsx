import { jobType } from "@/constants/job-type";
import Typography from "../Typography";
// import { GoDotFill } from "react-icons/go";
import { LuDot } from "react-icons/lu";

declare interface TProps {
  text: string;
}
const CardTag = ({ text }: TProps) => {
  return (
    <div className={`${jobType(text)} px-2 py-1 rounded-xl flex items-center `}>
      <LuDot />
      <Typography.MicroText className={`${jobType(text)} capitalize`}>{text}</Typography.MicroText>
    </div>
  );
};

export default CardTag;
