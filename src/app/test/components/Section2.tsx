import { setCount } from "@/lib/Count/CountSlice";
import { TStore } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";

export const Section2 = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: TStore) => state.count);

  const onClick = () => {
    dispatch(setCount(count.count + 1));
  };

  return (
    <div className="bg-white w-[500px] h-[500px]">
      <button className="bg-black text-white" onClick={onClick}>
        Click
      </button>
    </div>
  );
};
