type TProps = {
  message: React.ReactNode;
};
const OUIUserMessage = ({ message }: TProps) => {
  if (typeof message == "string") {
    return (
      <div className={"flex items-center justify-end"}>
        <div className={"p-3 rounded-md bg-brand-500 text-white text-right full  sm:max-w-[80%] min-w-fit"}>
          <p>{message}</p>
        </div>
      </div>
    );
  }
  return <div className={"flex items-center justify-end"}>{message}</div>;
};

export const OUIUserMessageCustom = ({ message }: TProps) => {
  if (typeof message == "string") {
    return (
      <div className={"flex items-center justify-end"}>
        <div className={"p-3 text-white text-right max-w-[80%] sm:max-w-[60%] min-w-fit"}>{message}</div>
      </div>
    );
  }
  return <div className={"flex items-center justify-end"}>{message}</div>;
};

export default OUIUserMessage;
