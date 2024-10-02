import PhoneInput from "@/components/Inputs/PhoneInput";
import PrimaryInput from "@/components/Inputs/PrimaryInput";
import Typography from "@/components/Typography";
import { Button } from "@/components/common/Button";

const ContactUs = () => {
  return (
    <div className=" bg-[#EFF4FF] pt-[10%] pb-[2em]">
      <div className="w-[85%] mx-auto  text-gray-800 space-y-4">
        <Typography.SubText className="">Contact us</Typography.SubText>

        <Typography.H1 className="">We’d love to hear from you</Typography.H1>

        <Typography.Text className=" w-[30%]">Our friendly team is always here to chat.</Typography.Text>
      </div>

      <div className="bg-white p-6 mt-[4em] py-[4em] w-[85%] mx-auto rounded my-4">
        <div className="w-[40%] mx-auto">
          <div className="space-y-2 text-center ">
            <Typography.SubText className={`font-light text-primary tracking-[3px] `}>Contact us</Typography.SubText>

            <Typography.Headers className="text-gray-800 leading-[1.3em]">Get in touch</Typography.Headers>

            <Typography.SubText className="font-light text-gray-600 ">
              We’d love to hear from you. Please fill out this form.
            </Typography.SubText>
          </div>

          <div className="space-y-4 my-[2em]">
            <div className="flex space-x-4">
              <PrimaryInput
                label="First Name"
                name={""}
                placeholder={"First name"}
                value={undefined}
                onChange={() => {}}
              />

              <PrimaryInput
                label="Last Name"
                name={""}
                placeholder={"Last Name"}
                value={undefined}
                onChange={() => {}}
              />
            </div>

            <PrimaryInput
              label="Email"
              name={""}
              placeholder={"you@company.com"}
              value={undefined}
              onChange={() => {}}
            />

            <PhoneInput
              label="Phone number"
              name={""}
              placeholder={"you@company.com"}
              value={undefined}
              onChange={() => {}}
            />

            <div>
              <Typography.SubText className="text-[#344054]">Message</Typography.SubText>

              <textarea
                name=""
                id=""
                placeholder="Leave us a message..."
                className="w-[100%] p-2  border-[1px] border-borderGrey rounded-lg h-[120px] text-xs placeholder:text-xs pl-4 outline-none focus:border-[#C8BEEB] focus:border-2 transition-all w-[100%] duration-300 resize-none "
              ></textarea>
            </div>
          </div>

          <div>
            <Button variant={"default"} className="w-[100%]">
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
