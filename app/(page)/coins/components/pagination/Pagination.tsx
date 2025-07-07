"use client";
import { Pagination } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";

const PaginationComponent = ({ totalPages }: { totalPages: number }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;

  const handlePageChange = (_: number, value: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", value.toString());
    router.push(`/coins?${params.toString()}`);
  };

  return (
    <Pagination
      sx={{
        "& .MuiPaginationItem-text": {
          color: "#fff !important",
          border: "1px solid #333"
        },
        "& .MuiPaginationItem-text:hover": {
          backgroundColor: "#FF9332 !important"
        },
        "& .Mui-selected": {
          backgroundColor: " #FF9332 !important",
          borderColor: "#FF9332 !important"
        },
        "& .MuiPaginationItem-ellipsis": {
          border: "none"
        }
      }}
      count={totalPages}
      page={currentPage}
      onChange={handlePageChange}
      className="py-6"
    />
  );
};

export default PaginationComponent;
