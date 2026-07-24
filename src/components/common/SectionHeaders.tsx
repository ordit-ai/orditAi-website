import Typography from "../Typography";

declare interface TProps {
  introText: string;
  header: string;
  subHeader: string;
  color?: string;
}

const SectionHeaders = ({ introText, header, subHeader, color }: TProps) => {
  return (
    <div className="space-y-2">
      <Typography.SubText
        className={`font-light ${color === "secondary" ? "text-primary" : "text-primary"}  tracking-[3px] uppercase`}
      >
        {introText}
      </Typography.SubText>

      <Typography.Headers className="text-gray-800 leading-[1.3em]">{header}</Typography.Headers>

      <Typography.SubText className="font-light text-gray-600 ">{subHeader}</Typography.SubText>
    </div>
  );
};

export default SectionHeaders;
