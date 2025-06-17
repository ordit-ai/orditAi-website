import Logo from "@/assets/images/PurpleLogo.png";
import Typography from "../Typography";
import { footerCol, footerRow } from "@/constants/footer-routes";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="p-4">
      <div className="w-[100%]  mx-auto rounded-t-md p-10">
        <div className="border-b-[1px] border-gray-500 py-6 flex md:flex-row flex-col items-start justify-between">
          <div className="md:w-[20%] w-[100%] space-y-6">
            <img src={Logo} alt="Logo" className="h-[25px]" />
            <Typography.Text className="text-gray-800">George Powers Your Financial Success 24/7</Typography.Text>

            <Typography.SubText className="">Your dedicated AI-powered digital employee for audit.</Typography.SubText>
            <Typography.SubText className="">
              It is owned and operated by Ordit Technologies Limited.
            </Typography.SubText>
             <Typography.SubText className="">
          Maben Estate, Chevron
            </Typography.SubText>

           
          </div>

          <div className="md:flex grid grid-cols-2 items-start justify-around md:w-[65%] w-[100%] md:gap-0 gap-6 md:py-0 py-[2em]">
            {footerCol.map((el) => (
              <div key={el.name} className="space-y-3">
                <Typography.MicroText className="text-gray-300">{el.name}</Typography.MicroText>

                {el.colArray.map((elm) => (
                  <Typography.SubText key={elm.id} className=" cursor-pointer">
                    <Link to={elm.link}>
                      {elm.value}{" "}
                      {elm.tag !== "" ? (
                        <span className="text-[9px] bg-opacity-[0.2] bg-primary px-2 py-1 rounded-2xl">{elm.tag}</span>
                      ) : null}
                    </Link>
                  </Typography.SubText>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="text-white flex md:flex-row flex-col items-center justify-between pt-6 md:space-y-0 space-y-2">
          <Typography.SubText>{footerRow.name}</Typography.SubText>

          <div className="flex items-center space-x-5">
            {footerRow.rowArray.map((el) => (
              <Typography.SubText key={el.id} className="cursor-pointer">
                <Link to={el.link}>{el.value}</Link>
              </Typography.SubText>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

//https://api.usemooyi.com/v2/api
