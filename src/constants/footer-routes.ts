import { APP_ROUTES } from "./app-routes";

const footerCol1 = {
  name: "Company",
  colArray: [{ id: "about-us", value: "About Us", link: APP_ROUTES.ABOUT_US, tag: "" }],
};

const footerCol2 = {
  name: "Product",
  colArray: [
    { id: "features", value: "Features", link: APP_ROUTES.FEATURES, tag: "" },
    { id: "pricing", value: "Pricing", link: APP_ROUTES.PRICING, tag: "" },
  ],
};

export const footerRow = {
  name: `© ${new Date().getFullYear()} OrditAI. All rights reserved.`,
  rowArray: [
    { id: "terms", value: "Terms", link: APP_ROUTES.TERMS_OF_SERVICE, tag: "" },
    { id: "privacy", value: "Privacy", link: APP_ROUTES.PRIVACY_POLICY, tag: "" },
    { id: "refund_policy", value: "Refund policy", link: APP_ROUTES.REFUND_POLICY, tag: "" },
  ],
};

export const footerCol = [footerCol1, footerCol2];
