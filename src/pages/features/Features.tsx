import Typography from "@/components/Typography";
import { Button } from "@/components/common/Button";
import { cn } from "@/helpers/classHelpers";
import { FC } from "react";

interface TProps {
  elm: {
    name: string;
    subHeading: string;
    image: string;
    description: string;
    position: "left" | "right";
  };
}
const Features: FC<TProps> = ({ elm }) => {
  return (
    <div
      className={cn(
        "flex items-center sm:flex-row  justify-between sm:gap-0 gap-[2em]",
        elm.position === "left" ? "flex-col" : "flex-col-reverse",
      )}
    >
      {elm.position === "left" && <img src={elm.image} alt={elm.name} className="sm:w-[45%] w-[100%]" />}

      <div className="sm:w-[45%] w-[100%] space-y-3">
        <Typography.SubText className="uppercase">{elm.name}</Typography.SubText>

        <Typography.H33>{elm.subHeading}</Typography.H33>

        <Typography.SubText className="font-light">{elm.description}</Typography.SubText>

        <Button>Hire George Today</Button>
      </div>

      {elm.position === "right" && <img src={elm.image} alt={elm.name} className="sm:w-[45%] w-[100%]" />}
    </div>
  );
};

export default Features;
