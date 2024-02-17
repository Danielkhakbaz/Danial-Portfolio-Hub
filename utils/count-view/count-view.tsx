"use client";

import dynamic from "next/dynamic";
import { FaRegEye } from "react-icons/fa6";

const CountUp = dynamic(() => import("react-countup"), {
  ssr: false,
});

type CountViewProps = {
  view: number;
};

const CountView = ({ view }: CountViewProps) => {
  return (
    <>
      <CountUp duration={1.2} end={view} />
      views <FaRegEye />
    </>
  );
};

export default CountView;
