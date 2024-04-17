import { fetcher } from "@/utils/api_config";
import useSWR from "swr";

export const useFilter = (query) => {
  // Category ID and search Text
  const { data, isLoading, error } = useSWR(`/api/filter?${query}`, fetcher, {
    revalidateOnFocus: false,
  });
  // Return Response
  return {
    products: data?.products,
    loading: isLoading,
    error,
  };
};
