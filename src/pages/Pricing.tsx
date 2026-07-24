import Typography from "@/components/Typography";
import { URLS } from "@/constants/app-routes";
import { useQuerySubscriptionPlans } from "@/hooks/useQueryOrgSubscription";
import { BiLayer, BiCheckCircle } from "react-icons/bi";
import { cn } from "@/helpers/classHelpers";
import { useState, useMemo } from "react";
import { Plan } from "@/services/paymentService";

const Pricing = () => {
  const { data } = useQuerySubscriptionPlans();
  const [isYearly, setIsYearly] = useState(false);

  // Filter plans by frequency and organize by plan type
  const filteredPlans = useMemo(() => {
    if (!data?.data) return [];

    const frequency = isYearly ? 2 : 1; // 1 = Monthly, 2 = Annually

    //@ts-expect-error frequency is not defined in the plan type
    const plans = data.data.filter((plan) => plan.frequency === frequency);

    // Sort by plan_type (0 = Basic, 1 = Professional, 2 = Enterprise)
    return plans.sort((a, b) => a.plan_type - b.plan_type);
  }, [data?.data, isYearly]);

  // Calculate savings/loss for annual vs monthly
  const getSavingsInfo = (plan: Plan) => {
    if (!isYearly) return null;

    const monthlyPlan = data?.data?.find(
      (p) =>
        //@ts-expect-error frequency is not defined in the plan type
        p.plan_type === plan.plan_type && p.frequency === 1,
    );

    if (!monthlyPlan) return null;

    const monthlyPrice = parseFloat(monthlyPlan.price);
    const annualPrice = parseFloat(plan.price);
    const monthlyEquivalent = annualPrice / 12;
    const difference = monthlyEquivalent - monthlyPrice;

    return {
      monthlyEquivalent: monthlyEquivalent.toFixed(2),
      difference: difference.toFixed(2),
      isSavings: difference < 0,
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EFF4FF] via-white to-[#F8FAFF]">
      {/* Subscription Plans */}
      <div className="w-[85%] mx-auto my-24">
        <div className="text-center mb-12">
          <Typography.Headers className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Pricing Plans
          </Typography.Headers>

          <Typography.Text className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get more work done with our modern AI built for audit professionals.
          </Typography.Text>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <span
              className={cn("text-sm font-medium transition-colors", !isYearly ? "text-gray-900" : "text-gray-500")}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={cn(
                "relative inline-flex h-8 w-16 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                isYearly ? "bg-primary" : "bg-gray-200",
              )}
            >
              <span
                className={cn(
                  "inline-block h-6 w-6 transform rounded-full bg-white transition-transform",
                  isYearly ? "translate-x-9" : "translate-x-1",
                )}
              />
            </button>
            <span className={cn("text-sm font-medium transition-colors", isYearly ? "text-gray-900" : "text-gray-500")}>
              Yearly
              <span className="ml-1 inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                Extended Access
              </span>
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {filteredPlans.map((el, i) => {
            const isPopular = el.plan_type === 1; // Professional plan
            const savingsInfo = getSavingsInfo(el);

            return (
              <div
                key={`plan-${i}`}
                className={cn(
                  "relative group rounded-3xl p-8 transition-all duration-500 hover:scale-105",
                  isPopular
                    ? "bg-gradient-to-br from-primary to-primary/80 text-white shadow-2xl border-2 border-primary"
                    : "bg-white shadow-xl border border-gray-100 hover:shadow-2xl",
                )}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-orange-400 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div
                    className={cn(
                      "w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4",
                      isPopular ? "bg-white/20" : "bg-primary/10",
                    )}
                  >
                    <BiLayer className={cn("w-8 h-8", isPopular ? "text-white" : "text-primary")} />
                  </div>

                  <Typography.Headers
                    className={cn("text-2xl font-bold mb-2", isPopular ? "text-white" : "text-gray-800")}
                  >
                    {el.plan_type_display}
                  </Typography.Headers>

                  <Typography.SubText className={cn("text-sm", isPopular ? "text-white/80" : "text-gray-600")}>
                    {el.description}
                  </Typography.SubText>
                </div>

                {/* Price */}
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center">
                    <span className={cn("text-5xl font-bold", isPopular ? "text-white" : "text-gray-800")}>
                      ${el.price}
                    </span>
                    <span className={cn("text-lg ml-2", isPopular ? "text-white/80" : "text-gray-600")}>
                      /{isYearly ? "year" : "month"}
                    </span>
                  </div>
                  {isYearly && savingsInfo && (
                    <div className="mt-2">
                      <Typography.SubText className={cn("text-sm", isPopular ? "text-white/70" : "text-gray-500")}>
                        ${savingsInfo.monthlyEquivalent}/month equivalent
                      </Typography.SubText>
                      <div
                        className={cn(
                          "text-xs mt-1 px-2 py-1 rounded-full inline-block",
                          savingsInfo.isSavings ? "bg-green-100 text-green-800" : "bg-orange-100 text-orange-800",
                        )}
                      >
                        {savingsInfo.isSavings ? "Save" : "Premium"} ${Math.abs(parseFloat(savingsInfo.difference))}
                        /month
                      </div>
                    </div>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  <Typography.SubText
                    className={cn(
                      "font-semibold text-sm uppercase tracking-wide",
                      isPopular ? "text-white/90" : "text-gray-700",
                    )}
                  >
                    Features
                  </Typography.SubText>

                  <div className="space-y-3">
                    {el?.features?.slice(0, 6).map((feature, i) => (
                      <div key={`feature-${i}`} className="flex items-start space-x-3">
                        <BiCheckCircle
                          size={20}
                          className={cn("flex-shrink-0 mt-0.5", isPopular ? "text-white" : "text-green-500")}
                        />
                        <Typography.SubText
                          className={cn("text-sm leading-relaxed", isPopular ? "text-white/90" : "text-gray-600")}
                        >
                          {feature?.name}
                        </Typography.SubText>
                      </div>
                    ))}
                    {el?.features && el.features.length > 6 && (
                      <Typography.SubText
                        className={cn("text-sm italic", isPopular ? "text-white/70" : "text-gray-500")}
                      >
                        +{el.features.length - 6} more features
                      </Typography.SubText>
                    )}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="space-y-4">
                  <a
                    href={URLS.ORDIT_AI}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "block w-full py-4 px-6 rounded-xl font-semibold text-center transition-all duration-300 transform hover:scale-105",
                      isPopular
                        ? "bg-white text-primary hover:bg-gray-50 shadow-lg"
                        : "bg-primary text-white hover:bg-primary/90 shadow-lg",
                    )}
                  >
                    Get Started
                  </a>

                  <Typography.SubText
                    className={cn("text-center text-xs", isPopular ? "text-white/70" : "text-gray-500")}
                  >
                    Free 30-day trial • No credit card required
                  </Typography.SubText>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
