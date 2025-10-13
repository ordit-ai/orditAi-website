// import PhoneInput from "@/components/Inputs/PhoneInput";
// import PrimaryInput from "@/components/Inputs/PrimaryInput";
import Typography from "@/components/Typography";
import { useNavigate } from "react-router-dom";
// import { Button } from "@/components/common/Button";

const ContactUs = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EFF4FF] via-white to-[#F8FAFF]">
      {/* Hero Section */}
      <div className="pt-[8%] pb-[4em]">
        <div className="w-[85%] mx-auto text-center space-y-6">
          <div className="inline-block px-6 py-2 bg-primary/10 rounded-full">
            <Typography.SubText className="text-primary font-medium tracking-wide">Get in Touch</Typography.SubText>
          </div>

          <Typography.H1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Let's Start a Conversation
          </Typography.H1>

          <Typography.Text className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our friendly team is here to help you with any questions, support, or collaboration opportunities.
          </Typography.Text>
        </div>
      </div>

      {/* Main Contact Section */}
      <div className="w-[85%] mx-auto mb-12">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Contact Methods */}
          <div className="space-y-8">
            {/* Chat Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <Typography.Headers className="text-xl font-semibold text-gray-800 mb-2">
                    Chat with us
                  </Typography.Headers>
                  <Typography.SubText className="text-gray-600 leading-relaxed">
                    Have general inquiries? Chat with our support team for quick responses to your questions.
                  </Typography.SubText>
                </div>
              </div>
            </div>

            {/* Email Section */}
            {/* <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <Typography.Headers className="text-xl font-semibold text-gray-800 mb-2">
                    Send us an email
                  </Typography.Headers>
                  <Typography.SubText className="text-gray-600 leading-relaxed mb-4">
                    Need assistance with important issues? Send us an email and we'll get back to you promptly.
                  </Typography.SubText>
                  <a
                    href="mailto:temidayo@orditai.com"
                    className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors duration-200"
                  >
                    <span className="font-medium">temidayo@orditai.com</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-[85%] mx-auto mb-16">
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-12 text-center text-white">
          <Typography.Headers className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</Typography.Headers>
          <Typography.SubText className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that trust OrditAI for their AI-powered solutions. Let's discuss how we can
            help transform your business.
          </Typography.SubText>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                window.open("https://sandbox.orditai.com/", "_blank");
              }}
              className="px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-200"
            >
              Get Started
            </button>
            <button
              onClick={() => {
                navigate("/about-us");
              }}
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary transition-colors duration-200"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
