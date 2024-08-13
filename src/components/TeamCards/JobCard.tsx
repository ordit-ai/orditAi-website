import { GrLocation } from "react-icons/gr";
import Typography from "../Typography";
import { IoMdTime } from "react-icons/io";
import CardTag from "./CardTag";

const JobCard = () => {
  return (
    <div className="border-gray-300 border-t-[1px] pt-[1.5em] space-y-2">
      <div className="flex space-x-3 items-center">
        <Typography.SubText>Product Designer</Typography.SubText>
        <CardTag text="design" />
      </div>

      <Typography.MicroText>We’re looking for a mid-level product designer to join our team.</Typography.MicroText>

      <div className="flex items-center space-x-4 text-gray-400">
        <div className="flex items-center space-x-2">
          <GrLocation />
          <Typography.MicroText>Remote</Typography.MicroText>
        </div>

        <div className="flex items-center space-x-2">
          <IoMdTime />
          <Typography.MicroText>Full-time</Typography.MicroText>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
