import { MdArrowOutward } from "react-icons/md";
import Typography from "../Typography";
import { RiTwitterXLine } from "react-icons/ri";
import { FaGlobeAmericas, FaLinkedin } from "react-icons/fa";

const TeamCard1 = () => {
  return (
    <div className="bg-team1 bg-cover h-[380px] min-w-[300px] border-gray-500 border-[1px] flex items-center justify-between flex-col">
      <div></div>
      <div className="bg-white bg-opacity-10 backdrop-blur-[8px] h-[50%] p-4 text-white space-y-4 cursor-pointer">
        <div className="flex items-center justify-between text-white">
          <Typography.H3>Alisa Hester</Typography.H3>

          <MdArrowOutward className="text-xl" />
        </div>

        <div className="space-y-1">
          <Typography.SubText>Founder & CEO</Typography.SubText>

          <Typography.MicroText className="text-white">
            Former co-founder of Opendoor. Early staff at Spotify and Clearbit.
          </Typography.MicroText>
        </div>

        <div className="flex items-center space-x-2 text-xl pt-3">
          <RiTwitterXLine />

          <FaLinkedin />

          <FaGlobeAmericas />
        </div>
      </div>
    </div>
  );
};

export default TeamCard1;
