import { CoinDetailsType, CoinType } from "../types/DataTypes";

const BASE_URL = process.env.NEXT_PUBLIC_API_UR;

export const getCoins = async () => {
  const response = await fetch(
    `${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`,
    { method: "GET", cache: "no-store" }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok " + response.statusText);
  }

  const data = await response.json();
  return data as CoinType[];
};

export const getCoin = async (id: string) => {
  const response = await fetch(`${BASE_URL}/coins/${id}`, {
    method: "GET"
  });

  if (!response.ok) {
    throw new Error("Network response was not ok " + response.statusText);
  }

  const data = await response.json();
  return data as CoinDetailsType;
};

export const paginationCoins = async (page: string) => {
  const res = await fetch(
    `${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false`,
    { cache: "no-store" }
  );

  if (!res.ok) throw new Error("Failed to fetch data.");
  const coins = await res.json();

  return coins as CoinType[];
};

export const fetchChartData = async (
  coinId: string,
  days: number | string,
  priceType: string
) => {
  const res = await fetch(
    `${BASE_URL}/coins/${coinId}/market_chart?vs_currency=usd&days=${days}`
  );

  if (!res.ok) throw new Error("Failed to fetch chart data");

  const data = await res.json();
  const raw = data[priceType];

  return {
    labels: raw.map((item: [number, number]) =>
      new Date(item[0]).toLocaleDateString()
    ),
    datasets: [
      {
        label: "Price",
        data: raw.map((item: [number, number]) => item[1]),
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59,130,246,0.3)",
        fill: true
      }
    ]
  };
};
