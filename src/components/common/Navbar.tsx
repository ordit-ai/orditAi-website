import { Dispatch, SetStateAction } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosClose } from "react-icons/io";
import { APP_ROUTES, URLS } from "@/constants/app-routes";
import { Button } from "./Button";
import Typography from "../Typography";

interface TProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const socialData = [
  {
    id: 1,
    name: "LinkedIn",
    path: "",
  },
  { id: 2, name: "Twitter", path: "" },
  { id: 3, name: "Instagram", path: "" },
  {
    id: 4,
    name: "Facebook",
    path: "",
  },
];

const links = [
  { id: 1, name: "Home", path: APP_ROUTES.HOME },
  {
    id: 2,
    name: "About Us",
    path: APP_ROUTES.ABOUT_US,
  },
  { id: 3, name: "Features", path: APP_ROUTES.FEATURES },
  {
    id: 4,
    name: "Careers",
    path: APP_ROUTES.CAREERS,
  },
  {
    id: 4,
    name: "Mission",
    path: APP_ROUTES.MISSON,
  },
  {
    id: 6,
    name: "Contact Us",
    path: APP_ROUTES.CONTACT,
  },
];

const backdrop = {
  visible: { opacity: 1 },
  hidden: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};
const menuAnimate = {
  scale: [1, 2, 2, 1, 1],
  rotate: [0, 0, 270, 270, 0],
  borderRadius: ["20%", "20%", "50%", "50%", "20%", "50%"],
};

const modal = {
  hidden: {
    y: "-100vh",
    opacity: 0,
    transition: {
      duration: 0.6,
    },
  },
  visible: {
    y: "0vh",
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.6,
    },
  },
};

const listy = {
  visible: {
    y: "0",
    opacity: 1,
    delay: 5,
    transition: {
      delay: 0.5,
      duration: 0.6,
    },
  },
};

const Navbar = ({ open, setOpen }: TProps) => {
  return (
    <AnimatePresence mode="wait" onExitComplete={() => setOpen(false)}>
      {open && (
        <div className="z-[99999]">
          <motion.div
            variants={backdrop}
            animate="visible"
            initial="hidden"
            exit="hidden"
            className="fixed w-full h-[100vh] bg-grey top-0 overflow-y-scroll left-0 z-[999999]"
          >
            <motion.div
              variants={modal}
              className="md:w-[70%] sm:w-[90%] w-[100%] h-[100%] overflow-y-scroll z-[99999]  bg-white float-right pt-[1em]"
            >
              <div className="flex justify-between px-8">
                <div></div>
                <motion.div
                  animate={menuAnimate}
                  transition={{ duration: 2 }}
                  className="border-black border-2 p-2 rounded-[50%]"
                  onClick={() => setOpen(false)}
                >
                  <IoIosClose className="text-3xl" />
                </motion.div>
              </div>
              <div className="mt-[5em]">
                <div className="flex w-[80%] mx-auto justify-between">
                  <div className="mx-auto">
                    <p className="text-[16px] text-[#808080]">Socials</p>
                    <div className="flex flex-col mt-4">
                      {socialData.map((data) => {
                        const { id, name, path } = data;
                        return (
                          <a
                            href={path}
                            key={id}
                            className="py-2 md:text-[16px] text-[14px] text-black"
                            target="_blank"
                          >
                            {name}
                          </a>
                        );
                      })}
                    </div>
                  </div>

                  <div className="">
                    <p className="text-[16px] text-[#808080]">Menu</p>
                    <motion.ul variants={listy} animate="visible" className="flex flex-col mt-4 ">
                      {links.map((data) => {
                        const { id, name, path } = data;
                        return (
                          <motion.li
                            whileHover={{
                              scale: 1.3,
                              originX: 0,
                              color: "#000",
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                            animate="visible"
                            key={id}
                            className="cursor-pointer"
                          >
                            <a href={path} className="sm:text-[48px] text-[28px] font-medium text-black">
                              {name}
                            </a>
                          </motion.li>
                        );
                      })}
                    </motion.ul>
                  </div>
                </div>
              </div>

              <a href={URLS.ORDIT_AI} target="_blank" className="flex items-center justify-center mt-[5em]">
                <Button variant="default" className="w-[80%] mx-auto">
                  <Typography.MicroText className="font-light text-white">Hire George</Typography.MicroText>
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
