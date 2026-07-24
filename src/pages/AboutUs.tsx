// import JobCard from "@/components/TeamCards/JobCard";
// import TeamCard1 from "@/components/TeamCards/TeamCard1";
import Typography from "@/components/Typography";
import { useState } from "react";

const AboutUs = () => {
  const [form, setForm] = useState({ name: "", email: "", organisation: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      setError("Please fill in your name and email.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  // const scrollContainerRef = useRef<HTMLDivElement>(null);

  // const scroll = (direction: "left" | "right"): void => {
  //   const scrollAmount = 300;

  //   if (direction == "left") {
  //     scrollContainerRef.current?.scrollBy({ left: -scrollAmount });
  //   } else if (direction == "right") {
  //     scrollContainerRef.current?.scrollBy({ left: scrollAmount });
  //   }
  // };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8FAFF] via-white to-[#EFF4FF]">
      {/* Hero Section */}
      <div className="pt-[8%] pb-[6em]">
        <div className="w-[85%] mx-auto text-center space-y-8">
          <div className="inline-block px-6 py-2 bg-primary/10 rounded-full">
            <Typography.SubText className="text-primary font-medium tracking-wide">About OrditAI</Typography.SubText>
          </div>

          <Typography.H1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Building the Future of Work
          </Typography.H1>

          <Typography.Text className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We're on a mission to revolutionize how businesses operate by creating intelligent digital workers that
            complement human capabilities and drive unprecedented growth.
          </Typography.Text>
        </div>
      </div>

      {/* Mission Section */}
      <div className="w-[85%] mx-auto mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-green-100 rounded-lg">
              <Typography.SubText className="text-green-700 font-semibold">Our Mission</Typography.SubText>
            </div>

            <Typography.Headers className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              Empowering Businesses with AI-Powered Digital Workers
            </Typography.Headers>

            <div className="space-y-4">
              <Typography.Text className="text-lg text-gray-600 leading-relaxed">
                OrditAI is a generative AI company that empowers businesses to achieve scalable growth by building
                digital workers. We design and train intelligent agents capable of complementing humans at work, driving
                efficiency and increased output without increasing headcount.
              </Typography.Text>

              <Typography.Text className="text-lg text-gray-600 leading-relaxed">
                We envisage a future where humans and digital agents collaborate seamlessly, enabling entrepreneurs to
                build viable businesses, optimize resources, and maximize their return on investment.
              </Typography.Text>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl p-8 h-96 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <Typography.Headers className="text-2xl font-bold text-gray-800">
                  Innovation at Scale
                </Typography.Headers>
                <Typography.SubText className="text-gray-600">
                  Transforming businesses through intelligent automation
                </Typography.SubText>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="w-[85%] mx-auto mb-16">
        <div className="text-center mb-12">
          <Typography.SubText className="text-primary font-medium tracking-wide mb-4">Our Values</Typography.SubText>
          <Typography.Headers className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            What Drives Us Forward
          </Typography.Headers>
          <Typography.Text className="text-lg text-gray-600 max-w-2xl mx-auto">
            These core principles guide everything we do and shape the solutions we create
          </Typography.Text>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Innovation */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <Typography.Headers className="text-xl font-semibold text-gray-800 mb-4">Innovation</Typography.Headers>
            <Typography.SubText className="text-gray-600 leading-relaxed">
              We constantly push the boundaries of what's possible with AI, creating cutting-edge solutions that
              transform how businesses operate.
            </Typography.SubText>
          </div>

          {/* Collaboration */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                />
              </svg>
            </div>
            <Typography.Headers className="text-xl font-semibold text-gray-800 mb-4">
              Human-AI Collaboration
            </Typography.Headers>
            <Typography.SubText className="text-gray-600 leading-relaxed">
              We believe in the power of humans and AI working together, complementing each other's strengths to achieve
              extraordinary results.
            </Typography.SubText>
          </div>

          {/* Growth */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <Typography.Headers className="text-xl font-semibold text-gray-800 mb-4">
              Sustainable Growth
            </Typography.Headers>
            <Typography.SubText className="text-gray-600 leading-relaxed">
              We help businesses scale efficiently without compromising quality or increasing operational complexity.
            </Typography.SubText>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="w-[85%] mx-auto mb-16">
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-12 text-white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Typography.Headers className="text-3xl md:text-4xl font-bold">
                Transforming Business Operations
              </Typography.Headers>
              <Typography.SubText className="text-lg text-white/90 leading-relaxed">
                Our digital workers are designed to handle complex tasks, automate repetitive processes, and provide
                intelligent insights that drive business growth and operational excellence.
              </Typography.SubText>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/20 rounded-lg px-4 py-2">
                  <Typography.SubText className="text-white font-medium">Process Automation</Typography.SubText>
                </div>
                <div className="bg-white/20 rounded-lg px-4 py-2">
                  <Typography.SubText className="text-white font-medium">Data Analysis</Typography.SubText>
                </div>
                <div className="bg-white/20 rounded-lg px-4 py-2">
                  <Typography.SubText className="text-white font-medium">Customer Support</Typography.SubText>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100%</div>
                <Typography.SubText className="text-white/80">Scalable Solutions</Typography.SubText>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <Typography.SubText className="text-white/80">Digital Workers</Typography.SubText>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">10x</div>
                <Typography.SubText className="text-white/80">Efficiency Boost</Typography.SubText>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">0</div>
                <Typography.SubText className="text-white/80">Headcount Increase</Typography.SubText>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="w-[85%] mx-auto mb-16 pb-16">
        <div className="text-center mb-12">
          <Typography.SubText className="text-primary font-medium tracking-wide mb-4">Our Vision</Typography.SubText>
          <Typography.Headers className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            The Future We're Building
          </Typography.Headers>
        </div>

        <div className="relative">
          {/* Background decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 rounded-3xl"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/15 to-transparent rounded-full blur-2xl"></div>

          {/* Main content */}
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-gray-100/50 hover:shadow-2xl transition-all duration-500">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>

              <Typography.Text className="text-xl text-gray-700 leading-relaxed font-medium">
                We envision a world where every business, regardless of size, can leverage the power of AI to optimize
                their operations, enhance productivity, and achieve sustainable growth.
              </Typography.Text>

              <Typography.Text className="text-lg text-gray-600 leading-relaxed">
                Our digital workers will become the backbone of modern business operations, handling complex tasks,
                making data-driven decisions, and working seamlessly alongside human teams to create unprecedented
                value.
              </Typography.Text>

              <div className="mt-10 w-full max-w-md mx-auto">
                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center space-y-3">
                    <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <Typography.Headers className="text-xl font-bold text-gray-800">
                      You're on the list!
                    </Typography.Headers>
                    <Typography.SubText className="text-gray-600">
                      Thanks, {form.name.split(" ")[0]}. We'll be in touch soon.
                    </Typography.SubText>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-left">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        placeholder="e.g. Abdullateef Abdulrahman"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        placeholder="you@yourfirm.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Organisation</label>
                      <input
                        type="text"
                        placeholder="Firm or company name (optional)"
                        value={form.organisation}
                        onChange={(e) => setForm({ ...form, organisation: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-sm"
                      />
                    </div>
                    {error && <Typography.SubText className="text-red-500 text-sm">{error}</Typography.SubText>}
                    <button
                      type="submit"
                      className="w-full py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 hover:shadow-lg transition-all duration-300"
                    >
                      Join the Future
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
