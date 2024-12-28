import { configureStore } from "@reduxjs/toolkit";
import AppInfoSlice, { AppInfo } from "./AppInfo/AppInfoSlice";
import CountSlice, { TCount } from "./Count/CountSlice";

export type TStore = {
  appInfo: AppInfo;
  count: TCount;
};

export const makeStore = () => {
  return configureStore<TStore>({
    reducer: {
      appInfo: AppInfoSlice,
      count: CountSlice,
    },
  });
};
export const store = configureStore<TStore>({
  reducer: {
    appInfo: AppInfoSlice,
    count: CountSlice,
  },
});

// Infer the type of makeStore
export type TAppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type TRootState = ReturnType<TAppStore["getState"]>;
export type TAppDispatch = TAppStore["dispatch"];
