import { formatDateTime } from "@/libs/formatDate";

type TProps = {
  message: string;
  time: string;
};

const UserMessage = ({ message, time }: TProps) => {
  return (
    <div className={"flex items-center justify-between  mx-4 "}>
      <p></p>
      <div className={"w-[80%]"}>
        <div className={"flex items-center justify-between"}>
          <p></p>
          {time && <p className="text-xs  leading-5 text-[#475467] ">{formatDateTime(time)}</p>}
        </div>
        <div className={"border-[1px] p-3 rounded-b-lg rounded-tl-lg text-sm mt-1 bg-white"}>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default UserMessage;
