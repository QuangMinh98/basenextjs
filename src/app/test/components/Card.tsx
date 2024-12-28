import { TStore } from "@/lib/store";
import { useSelector } from "react-redux";

export const Card = () => {
  const appInfo = useSelector((state: TStore) => state.appInfo);

  return <div className="text-black">{JSON.stringify(appInfo.isLoading)}</div>;
};
