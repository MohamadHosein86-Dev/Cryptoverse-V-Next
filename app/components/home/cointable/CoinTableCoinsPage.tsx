import { CoinType } from "@/app/types/DataTypes";
import Table from "../../table/Table";

export default async function CoinTableCoinsPage({ coins }: { coins: CoinType[] }) {
  return (
    <div className=" flex flex-col items-center gap-4 mx-auto ">
      <Table coins={coins} />
    </div>
  );
}
