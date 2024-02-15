"use client";

import CountUp from "react-countup";
import { FaRegEye } from "react-icons/fa6";

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
