import React, { memo, useContext } from "react";
import dynamic from "next/dynamic";
import Declaration from "../Declaration";
import DeductibleAmount from "../DeductibleAmount";
import Review from "../Review";
import { PlumContext } from "../../context/PlumContext";

const ChoosePlan = dynamic(() => import("../ChoosePlan"));

const Pages = [
  {
    id: 0,
    name: "Choose Plan",
    component: <ChoosePlan />,
  },
  {
    id: 1,
    name: "Choose Plan",
    component: <DeductibleAmount />,
  },
  {
    id: 2,
    name: "Choose Plan",
    component: <Declaration />,
  },
  {
    id: 3,
    name: "Deductible Amount",
    component: <Review />,
  },
];
function Header() {
  const state = useContext(PlumContext);
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row items-center justify-between mx-auto w-4/5 p-4">
        <div className="bg-black/10 w-[128px] h-[40px] rounded-xl " />
        <div className="bg-black/10 w-[128px] h-[40px] rounded-xl " />
      </div>
      <div className="grid grid-cols-4 w-full">
        {Pages.map((page) => (
          <div className={`p-1 ${page.id <= state.activePage ? "bg-orange-600" : "bg-black/10"} col-span-1 m-1`} />
        ))}
      </div>
    </div>
  );
}

export default memo(Header);
