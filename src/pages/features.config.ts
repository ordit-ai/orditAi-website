export const PlanTiers = [
  {
    name: "Basic Plan",
    price: "29.99",
    duration: "30 days",
    currency: "USD",
    description: "Basic access to AI Audit tools with limited features. Ideal for small businesses or individual.",
    features: [
      "Access to only 1 workspace",
      "Limited access to the use of AI",
      "Limited access to file upload",
      "Unable to add collaborators to workspace",
      "5 financial reports per month",
      "Single entity journal access",
      "Only 1 admin user",
      "Custom chart of account",
      "Limited document storage",
    ],
  },
  {
    name: "Professional Plan",
    price: "299.99",
    duration: "30 days",
    currency: "USD",
    description: "A premium subscription with extra features.",
    features: [
      "Access to up to 50 workspaces",
      "Invite up to 10 collaborators",
      "Access to AI",
      "Limited financial forecasts and prediction",
      "50 financial reports and statements per month",
      "Journal access across all accessible workspaces",
      "Ability to test new features",
      "Multiple admin users",
      "Collaborator role management feature",
      "Advanced document storage",
      "Advanced file upload",
      "Import Journal Entries and Trial Balance using AI",
    ],
  },
  {
    name: "Enterprise Plan",
    price: "199.99",
    duration: "180 days",
    currency: "USD",
    description: "An enterprise subscription plan for large organizations",
    features: [
      "Unlimited number of workspaces",
      "Unlimited number of collaborators",
      "Advanced access to AI",
      "Advanced financial forecasts and predictions",
      "Unlimited number of financial reports and statements",
      "Unlimited Journals across all workspaces",
      "Ability to test new features and get privileged access to advanced AI upgrades",
      "Unlimited admin users",
      "More advanced document storage (Limits apply)",
      "More advanced file uploads",
      "AI research and analysis",
      "Dedicated onboarding",
      "Enhanced support",
    ],
  },
];

export type Feature = {
  enabled: boolean;
  label: string;
  note?: string;
};

export type PlanTier = {
  name: string;
  price: string;
  duration: string;
  currency: string;
  features: Record<string, Feature>;
};
