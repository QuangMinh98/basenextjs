import { TStore } from "@/lib/store";
import React from "react";
import { useSelector } from "react-redux";

export const Section1 = () => {
  const count = useSelector((state: TStore) => state.count);

  return (
    <div className="bg-white w-[500px] h-[500px]">
      <span className="text-black">{count.count}</span>
    </div>
  );
};
