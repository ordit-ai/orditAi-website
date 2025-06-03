import { APP_ROUTES } from "./app-routes";

const footerCol1 = {
  name: "Company",
  colArray: [
    { id: "about-us", value: "About Us", link: APP_ROUTES.ABOUT_US, tag: "" },
    // { id: "careers", value: "Careers", link: APP_ROUTES.CAREERS, tag: "New" },
    { id: "contact", value: "Contact", link: APP_ROUTES.CONTACT, tag: "" },
  ],
};

const footerCol2 = {
  name: "Product",
  colArray: [
    { id: "features", value: "Features", link: APP_ROUTES.FEATURES, tag: "" },
    { id: "pricing", value: "Pricing", link: APP_ROUTES.PRICING, tag: "" },
    { id: "blog", value: "Blog", link: "", tag: "" },
  ],
};

const footerCol3 = {
  name: "Industries",
  colArray: [
    { id: "fintech", value: "Fintech", link: "", tag: "" },
    { id: "healhcare", value: "Healthcare", link: "", tag: "" },
    { id: "retail", value: "Retail", link: "", tag: "" },
    { id: "manufacturing", value: "Manufacturing", link: "", tag: "" },
    { id: "ngos", value: "NGOs", link: "", tag: "" },
    { id: "technology", value: "Technology", link: "", tag: "" },
  ],
};

const footerCol4 = {
  name: "Resources",
  colArray: [
    { id: "blog", value: "Blog", link: "", tag: "" },
    { id: "case-studies", value: "Case Studies", link: "", tag: "" },
  ],
};

export const footerRow = {
  name: `© ${new Date().getFullYear()} Ordit AI. All rights reserved.`,
  rowArray: [
    { id: "terms", value: "Terms", link: APP_ROUTES.TERMS_OF_SERVICE, tag: "" },
    { id: "privacy", value: "Privacy", link: APP_ROUTES.PRIVACY_POLICY, tag: "" },
    { id: "cookies", value: "Cookies", link: "", tag: "" },
  ],
};

export const footerCol = [footerCol1, footerCol2, footerCol3, footerCol4];
