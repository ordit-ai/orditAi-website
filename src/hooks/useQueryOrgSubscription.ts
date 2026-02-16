import paymentServices from "@/services/paymentService";
import { useQuery } from "@tanstack/react-query";

export function useQuerySubscriptionPlans() {
  return useQuery({
    queryKey: ["getSubscriptionPlans"],
    queryFn: async () => {
      return await paymentServices.getSubscriptionPlans("0", 1, 10);
    },
  });
}

