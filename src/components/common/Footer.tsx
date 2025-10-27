import Logo from "@/assets/images/PurpleLogo.png";
import Typography from "../Typography";
import { footerCol, footerRow } from "@/constants/footer-routes";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Company Info & Contact */}
          <div className="lg:col-span-2 space-y-8">
            {/* Logo and Description */}
            <div className="space-y-6">
              <img src={Logo} alt="OrditAI Logo" className="h-10" />
              <Typography.Text className="text-gray-900 font-medium text-lg">
                George Powers Your Financial Success 24/7
              </Typography.Text>
              <Typography.SubText className="text-gray-600 leading-relaxed">
              George is your intelligent audit partner — always on, always accurate.
              </Typography.SubText>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              {/* <Typography.H4 className="text-gray-900 font-semibold">Contact Information</Typography.H4> */}

              {/* Email */}
              {/* <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <a
                  href="mailto:temidayo@orditai.com"
                  className="text-gray-600 hover:text-primary transition-colors duration-200"
                >
                  <Typography.SubText className="hover:text-primary transition-colors duration-200">
                    temidayo@orditai.com
                  </Typography.SubText>
                </a>
              </div> */}

              {/* Phone */}
              {/* <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <a href="tel:08065432603" className="text-gray-600 hover:text-primary transition-colors duration-200">
                  <Typography.SubText className="hover:text-primary transition-colors duration-200">
                    08065432603
                  </Typography.SubText>
                </a>
              </div> */}

              {/* Address */}
              {/* <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <Typography.SubText className="text-gray-600">
                    Maben Estate, Chevron
                    <br />
                    Lagos, Nigeria
                  </Typography.SubText>
                </div>
              </div> */}
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-8">
              {footerCol.map((section) => (
                <div key={section.name} className="space-y-4">
                  <Typography.H4 className="text-gray-900 font-semibold text-sm uppercase tracking-wide">
                    {section.name}
                  </Typography.H4>
                  <div className="space-y-3">
                    {section.colArray.map((link) => (
                      <div key={link.id}>
                        <Link
                          to={link.link}
                          className="inline-flex items-center gap-2 hover:text-primary transition-colors duration-200"
                        >
                          <Typography.SubText className="text-gray-600 hover:text-primary transition-colors duration-200">
                            {link.value}
                          </Typography.SubText>
                          {link.tag !== "" && (
                            <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                              {link.tag}
                            </span>
                          )}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-100 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Typography.SubText className="text-gray-600">{footerRow.name}</Typography.SubText>
            <div className="flex items-center gap-6">
              {footerRow.rowArray.map((link) => (
                <Link
                  key={link.id}
                  to={link.link}
                  className="text-gray-600 hover:text-primary transition-colors duration-200"
                >
                  <Typography.SubText className="hover:text-primary transition-colors duration-200">
                    {link.value}
                  </Typography.SubText>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
