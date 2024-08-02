import Logo from "@/assets/images/Logo.png";
import Typography from "../Typography";
import { footerCol, footerRow } from "@/constants/footer-routes";

const Footer = () => {
  console.log(footerCol, "footerCol");
  return (
    <div className="p-4">
      <div className="bg-[#040126] w-[100%]  mx-auto rounded-t-md p-10">
        <div className="border-b-[1px] border-gray-500 py-6 flex md:flex-row flex-col items-start justify-between">
          <div className="md:w-[20%] w-[100%] space-y-6">
            <img src={Logo} alt="Logo" className="h-[25px]" />

            <Typography.SubText className="text-white">
              OrditAI automates tasks, minimizes errors, and delivers deeper financial understanding
            </Typography.SubText>
          </div>

          <div className="md:flex grid grid-cols-2 items-start justify-around md:w-[65%] w-[100%] md:gap-0 gap-6 md:py-0 py-[2em]">
            {footerCol.map((el) => (
              <div key={el.name} className="space-y-3">
                <Typography.MicroText className="text-gray-300">{el.name}</Typography.MicroText>

                {el.colArray.map((elm) => (
                  <Typography.SubText key={elm.id} className="text-white cursor-pointer">
                    {elm.value}{" "}
                    {elm.tag !== "" ? (
                      <span className="text-[9px] bg-white bg-opacity-[0.2] px-2 py-1 rounded-2xl">{elm.tag}</span>
                    ) : null}
                  </Typography.SubText>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="text-white flex items-center justify-between pt-6">
          <Typography.SubText>{footerRow.name}</Typography.SubText>

          <div className="flex items-center space-x-5">
            {footerRow.rowArray.map((el) => (
              <Typography.SubText key={el.id} className="cursor-pointer">
                {el.value}
              </Typography.SubText>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
