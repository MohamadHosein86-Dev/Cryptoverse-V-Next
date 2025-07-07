"use client";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function useGetCoin() {
  const params = useParams();
  const id = params.id as string | undefined;

  const { data, isLoading, error } = useQuery({
    queryKey: ["coin", id],
    queryFn: async () => {
      const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
      if (!res.ok) {
        throw new Error("خطا در دریافت داده");
      }
      return res.json();
    },
    enabled: !!id // ✅ فقط وقتی id آماده شد اجرا کن
  });

  return { data, isLoading, error };
}
