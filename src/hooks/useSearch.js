import { fetcher } from "@/utils/api_config";
import useSWR from "swr";

export const useSearch = (text, category) => {
  console.log(text);
  // Category ID and search Text
  const categoryPath = `&category=${category}`;
  const { data, isLoading, error } = useSWR(
    `/api/search?keyword=${text}${category ? categoryPath : ""}`,
    fetcher,
    { revalidateOnFocus: false }
  );
  // Return Response
  return {
    products: data?.products,
    loading: isLoading,
    error,
  };
};
