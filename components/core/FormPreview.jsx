import React, { useContext, memo } from "react";
import { PlumContext } from "../../context/PlumContext";

function FormPreview() {
  const { basicDetails } = useContext(PlumContext);

  return (
    <div className="flex flex-col col-span-1 rounded-xl pb-10 bg-white items-center justify-center">
      <div className="py-4 border-b-2 w-full">
        <p className="font-sans text-2xl text-center ">Form preview</p>
      </div>

      <div className="flex flex-row items-center justify-between w-4/5 py-2 ">
        <p className="font-sans opacity-60">Personal email address</p>
        <p className="font-sans w-48 truncate">{basicDetails?.email}</p>
      </div>

      <div className="flex flex-row items-center justify-between w-4/5 py-2 ">
        <p className="font-sans opacity-60">Mobile number</p>
        <p className="font-sans w-48 truncate">{basicDetails?.number}</p>
      </div>

      <div className="flex flex-row items-center justify-between w-4/5 py-2 ">
        <p className="font-sans opacity-60">Address line 01</p>
        <p className="font-sans w-48 truncate">{basicDetails?.address1}</p>
      </div>

      <div className="flex flex-row items-center justify-between w-4/5 py-2 ">
        <p className="font-sans opacity-60">Address line 02</p>
        <p className="font-sans w-48 truncate">{basicDetails?.address2}</p>
      </div>

      <div className="flex flex-row items-center justify-between w-4/5 py-2 ">
        <p className="font-sans opacity-60">Pincode</p>
        <p className="font-sans w-48 truncate">{basicDetails?.pincode}</p>
      </div>

      <div className="flex flex-row items-center justify-between w-4/5 py-2 ">
        <p className="font-sans opacity-60">State</p>
        <p className="font-sans w-48 truncate">{basicDetails?.state}</p>
      </div>

    </div>
  );
}

export default memo(FormPreview);
