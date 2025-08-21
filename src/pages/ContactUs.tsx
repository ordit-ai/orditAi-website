// import PhoneInput from "@/components/Inputs/PhoneInput";
// import PrimaryInput from "@/components/Inputs/PrimaryInput";
import Typography from "@/components/Typography";
// import { Button } from "@/components/common/Button";

const ContactUs = () => {
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
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
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
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-8">
            {/* Phone Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <Typography.Headers className="text-xl font-semibold text-gray-800 mb-2">
                    Call us directly
                  </Typography.Headers>
                  <Typography.SubText className="text-gray-600 leading-relaxed mb-4">
                    Prefer to talk? Give us a call for immediate assistance and personalized support.
                  </Typography.SubText>
                  <a
                    href="tel:08065432603"
                    className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors duration-200"
                  >
                    <span className="font-medium text-lg">08065432603</span>
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
            </div>

            {/* Location Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <div className="flex-1">
                  <Typography.Headers className="text-xl font-semibold text-gray-800 mb-2">
                    Visit our office
                  </Typography.Headers>
                  <Typography.SubText className="text-gray-600 leading-relaxed">
                    Maben Estate, Chevron
                    <br />
                    Lagos, Nigeria
                  </Typography.SubText>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
              <div className="text-center">
                <Typography.Headers className="text-xl font-semibold text-gray-800 mb-4">
                  Business Hours
                </Typography.Headers>
                <div className="space-y-2 text-gray-600">
                  <Typography.SubText className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </Typography.SubText>
                  <Typography.SubText className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </Typography.SubText>
                  <Typography.SubText className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium text-gray-500">Closed</span>
                  </Typography.SubText>
                </div>
              </div>
            </div>
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
            <button className="px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-200">
              Schedule a Demo
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary transition-colors duration-200">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
