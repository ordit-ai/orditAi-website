import { handleApiError } from "@/lib/httpApiErrors";
import PaymentApi from "@/lib/api/paymentApi";

interface BasePaginatedResult<T> {
  message: string;
  total_number_of_pages: number;
  current_page_entries: number;
  current_page_number: number;
  previous_page_number: number | null;
  next_page_number: number | null;
  total_entries: number;
  data: T[];
}

export interface Plan {
  id: string; // UUID format
  name: string;
  description?: string;
  plan_type: 0 | 1 | 2;
  plan_type_display: string;
  frequency: 1 | 2; // 1 = Monthly, 2 = Annually
  frequency_display: string;
  price: string; // Decimal format
  duration_in_days: number;
  currency: 0 | 1 | 2 | 3;
  currency_display: string;
  features?: {
    name: string;
    is_active: boolean;
  }[];
}

const paymentServices = {
  getSubscriptionPlans: async (
    currency?: string,
    page?: number,
    pageSize?: number,
  ): Promise<BasePaginatedResult<Plan>> => {
    try {
      const params = { currency, page, page_size: pageSize };
      const response = await PaymentApi.get("/subcription/subscription-plans/public/", { params });
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },
};

export default paymentServices;
