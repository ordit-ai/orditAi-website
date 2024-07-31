import Logo from "@/assets/images/Logo.png";
import { APP_ROUTES } from "@/constants/app-routes";
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
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
      path: APP_ROUTES.ABOUT_US,
    },
  ];

  return (
    <div className="absolute h-[80px] flex items-center  w-[100vw] justify-center">
      <div className="flex items-center justify-between    w-[80vw] h-[60px] px-4 border-b-[1px]">
        <img src={Logo} alt="Logo" className="h-[25px]" />

        <div className="hidden items-center gap-x-6 md:flex">
          {React.Children.toArray(
            links?.map((link) => (
              <NavLink to={link.path} className={({ isActive }) => (isActive ? "text-white" : "text-white")}>
                {link.name}
              </NavLink>
            )),
          )}
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Header;
