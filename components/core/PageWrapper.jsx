import dynamic from "next/dynamic";
import React, { memo, useContext } from "react";
import { PlumContext } from "../../context/PlumContext";

const FormPreview = dynamic(() => import("./FormPreview"));
const ChoosePlan = dynamic(() => import("../ChoosePlan"));
const DeductibleAmount = dynamic(() => import("../DeductibleAmount"));
const Declaration = dynamic(() => import("../Declaration"));
const Review = dynamic(() => import("../Review"));

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

function PageWrapper() {
  const { activePage } = useContext(PlumContext);

  return (
    <div className={`mx-auto mt-10 grid h-full w-4/5 animate-openUp ${activePage < 3 ? "grid-cols-3" : "grid-cols-1"}  items-start gap-8`}>
      <div className="col-span-2">
        {Pages[activePage].component}
      </div>
      {activePage < 3 && <FormPreview />}
    </div>
  );
}

export default memo(PageWrapper);
