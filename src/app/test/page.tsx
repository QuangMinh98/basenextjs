"use client";

import React from "react";
import { getUsers } from "../api/test";

export default function Test() {
  const [number, setNumber] = React.useState(1);
  const [data, setData] = React.useState(null);

  const onClick = () => {
    setNumber(number + 1);
  };

  const getData = async () => {
    const apiResult = await getUsers();

    setData(apiResult);
  };

  React.useEffect(() => {
    console.log(number);

    getData();

    return;
  }, [number]);

  return (
    <div className="flex flex-col gap-lg">
      {data?.toString()}
      <button onClick={onClick}>Click</button>
    </div>
  );
}
