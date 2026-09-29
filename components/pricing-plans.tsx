"use client";

import Link from "next/link";
import { Check } from "lucide-react";

import { usePricingBilling } from "@/components/pricing-billing-context";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useQuerySubscriptionPlans } from "@/hooks/use-query-org-subscription";
import type { Plan as ApiPlan } from "@/lib/services/paymentService";

const formatUsd = (amount: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);

/** Pricing page — three-tier plan grid, fed by the subscription plans API.
 *  Professional is raised and coloured to read as the recommended tier; the
 *  other two share the plain card style used across the site
 *  (border-neutral-200 on white). */
export function PricingPlans() {
  const { period } = usePricingBilling();
  const isYearly = period === "yearly";
  const { data, isLoading } = useQuerySubscriptionPlans();

  const frequency = isYearly ? 2 : 1; // 1 = Monthly, 2 = Annually
  const plans = data?.data
    ? data.data.filter((plan) => plan.frequency === frequency).sort((a, b) => a.plan_type - b.plan_type)
    : [];

  if (isLoading) {
    return (
      <section className="site-gutter bg-white pb-20 lg:pb-32">
        <p className="type-label text-center text-neutral-400">Loading plans…</p>
      </section>
    );
  }

  return (
    <section className="site-gutter bg-white pb-20 lg:pb-32">
      <ul className="mx-auto grid max-w-[1280px] gap-6 lg:grid-cols-3 lg:items-start">
        {plans.map((plan: ApiPlan) => {
          const highlight = plan.plan_type === 1; // Professional plan
          const price = parseFloat(plan.price);
          const displayPrice = isYearly ? price / 12 : price;
          const features = plan.features?.map((f) => f.name) ?? [];

          return (
            <li
              key={plan.id}
              className={cn(
                "relative flex flex-col rounded-site border card-pad",
                highlight ? "border-transparent bg-violet text-white lg:-my-6 lg:py-14" : "border-neutral-200 bg-white",
              )}
            >
              {highlight && (
                <span className="absolute right-8 top-8 rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white">
                  Most popular
                </span>
              )}

              <p className={cn("type-label", highlight ? "text-white/70" : "text-neutral-400")}>
                {plan.plan_type_display}
              </p>

              <p className="mt-5 flex items-baseline gap-1.5">
                <span className="text-5xl font-bold tracking-[-0.02em]">{formatUsd(displayPrice)}</span>
                <span className={cn("text-base", highlight ? "text-white/70" : "text-body")}>/month</span>
              </p>

              <p className={cn("mt-1.5 text-sm", highlight ? "text-white/60" : "text-neutral-400")}>
                {isYearly ? `${formatUsd(price)} billed annually` : "Billed monthly"}
              </p>

              {plan.description && (
                <p className={cn("mt-4 text-base leading-[1.6]", highlight ? "text-white/80" : "text-body")}>
                  {plan.description}
                </p>
              )}

              <Link
                href="#contact"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "mt-7 w-full",
                  highlight && "border-transparent bg-white text-ink hover:bg-neutral-50",
                )}
              >
                Get started
              </Link>

              <ul className={cn("mt-8 space-y-4 border-t pt-7", highlight ? "border-white/15" : "border-neutral-100")}>
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-base">
                    <span
                      className={cn(
                        "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
                        highlight ? "bg-white/20 text-white" : "bg-violet-50 text-violet",
                      )}
                    >
                      <Check aria-hidden className="size-3" strokeWidth={3} />
                    </span>
                    <span className={highlight ? "text-white/90" : "text-ink/80"}>{feature}</span>
                  </li>
                ))}
              </ul>

              <p className={cn("mt-6 text-sm", highlight ? "text-white/60" : "text-neutral-400")}>
                Full feature list on request
              </p>
            </li>
          );
        })}
      </ul>

      <p className="type-label mt-10 text-center text-neutral-400">Free 30-day trial · No credit card required</p>
    </section>
  );
}

export default PricingPlans;
