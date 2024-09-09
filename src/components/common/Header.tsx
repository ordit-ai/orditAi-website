import Logo from "@/assets/images/Logo.png";
import PurpleLogo from "@/assets/images/PurpleLogo.png";
import { APP_ROUTES } from "@/constants/app-routes";
import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Typography from "../Typography";
import { Button } from "./Button";
import { HiMenu } from "react-icons/hi";
import { cn } from "@/helpers/classHelpers";

const Header = () => {
  const location = useLocation();

  const locationArray = location.pathname.split("/");
  const links = [
    {
      name: "Home",
      path: APP_ROUTES.HOME,
    },
    {
      name: "Features",
      path: APP_ROUTES.FEATURES,
    },
    {
      name: "Pricing",
      path: APP_ROUTES.PRICING,
    },
    {
      name: "About Us",
      path: APP_ROUTES.ABOUT_US,
    },

    {
      name: "Resources",
      path: APP_ROUTES.ABOUT_US,
    },

    {
      name: "Contact",
      path: APP_ROUTES.CONTACT,
    },
  ];

  const checkArray = (array: string[]) => {
    const x = ["contact-us", "pricing"];

    for (let i = 0; i < array.length; i++) {
      if (array.includes(x[i])) {
        return true;
      }
    }
  };

  return (
    <div className="absolute h-[80px] flex items-center  w-[100vw] justify-center">
      <div className="flex items-center justify-between w-[85vw] h-[60px] px-4 border-b-[1px]">
        <div className="flex items-center space-x-6">
          {checkArray(locationArray) ? (
            <img src={PurpleLogo} alt="PurpleLogo" className="h-[25px]" />
          ) : (
            <img src={Logo} alt="Logo" className="h-[25px]" />
          )}

          <div className="hidden items-center gap-x-6 md:flex">
            {React.Children.toArray(
              links?.map((link) => (
                <NavLink to={link.path} className={checkArray(locationArray) ? "text-black" : "text-white"}>
                  <Typography.SubText>{link.name}</Typography.SubText>
                </NavLink>
              )),
            )}
          </div>
        </div>

        <div className="md:flex hidden items-center space-x-6">
          <Link to="/">
            <Typography.SubText className={cn(checkArray(locationArray) ? "text-black" : "text-white")}>
              Login
            </Typography.SubText>
          </Link>

          <Button variant={checkArray(locationArray) ? "default" : "quickAction"}>Get Started</Button>
        </div>

        <HiMenu className="flex md:hidden text-white text-3xl cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
