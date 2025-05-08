import paymentServices from "@/services/paymentService";
import { useQuery } from "@tanstack/react-query";

// export default function useQueryOrgSubscription() {
//   return useQuery({
//     queryKey: ["latestSubscriptionPlan"],
//     queryFn: async () => {
//       return await paymentServices.getLatestSubscriptionPlans();
//     },
//   });
// }

// export function useQueryOrgSubscriptionPlans() {
//   return useQuery({
//     queryKey: ["getOrgSubscriptionPlans"],
//     queryFn: async () => {
//       return await paymentServices.getOrgSubscriptionPlans();
//     },
//   });
// }

export function useQuerySubscriptionPlans() {
  return useQuery({
    queryKey: ["getSubscriptionPlans"],
    queryFn: async () => {
      return await paymentServices.getSubscriptionPlans("0", 1, 10);
    },
  });
}

// export function useQueryTransactions() {
//   return useQuery({
//     queryKey: ["getSubscriptionTransactions"],
//     queryFn: async () => {
//       const data = await paymentServices.getTransactions();
//       return data;
//     },
//   });
// }
