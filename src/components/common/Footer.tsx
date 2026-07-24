import Logo from "@/assets/images/PurpleLogo.png";
import Typography from "../Typography";
import { footerCol, footerRow } from "@/constants/footer-routes";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <img src={Logo} alt="OrditAI Logo" className="h-10" />
              <Typography.Text className="text-gray-900 font-medium text-lg">
                Your Intelligent Audit Partner, Always On
              </Typography.Text>
              <Typography.SubText className="text-gray-600 leading-relaxed">
                George is your AI-powered audit assistant — always accurate, always available.
              </Typography.SubText>
            </div>

            {/* Contact & Social */}
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@orditai.com"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors duration-200"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <Typography.SubText className="hover:text-primary transition-colors duration-200">
                  hello@orditai.com
                </Typography.SubText>
              </a>

              <a
                href="https://www.linkedin.com/company/orditai/about/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors duration-200"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <Typography.SubText className="hover:text-primary transition-colors duration-200">
                  LinkedIn
                </Typography.SubText>
              </a>
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

        {/* Bottom bar */}
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
