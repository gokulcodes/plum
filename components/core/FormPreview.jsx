import React, { useContext, memo } from "react";
import { PlumContext } from "../../context/PlumContext";

function FormPreview() {
  const { basicDetails } = useContext(PlumContext);
  const {
    email, number, address1, address2, pincode, state,
  } = basicDetails;

  return (
    <div className="col-span-1 flex flex-col items-center justify-center rounded-xl bg-white pb-10">
      <div className="w-full border-b-2 py-4">
        <p className="text-center font-sans text-2xl ">Form preview</p>
      </div>

      <div className="flex w-4/5 flex-row items-center justify-between py-2 ">
        <p className="font-sans opacity-60">Personal email address</p>
        <p className="w-48 truncate font-sans">{email}</p>
      </div>

      <div className="flex w-4/5 flex-row items-center justify-between py-2 ">
        <p className="font-sans opacity-60">Mobile number</p>
        <p className="w-48 truncate font-sans">{number}</p>
      </div>

      <div className="flex w-4/5 flex-row items-center justify-between py-2 ">
        <p className="font-sans opacity-60">Address line 01</p>
        <p className="w-48 truncate font-sans">{address1}</p>
      </div>

      <div className="flex w-4/5 flex-row items-center justify-between py-2 ">
        <p className="font-sans opacity-60">Address line 02</p>
        <p className="w-48 truncate font-sans">{address2}</p>
      </div>

      <div className="flex w-4/5 flex-row items-center justify-between py-2 ">
        <p className="font-sans opacity-60">Pincode</p>
        <p className="w-48 truncate font-sans">{pincode}</p>
      </div>

      <div className="flex w-4/5 flex-row items-center justify-between py-2 ">
        <p className="font-sans opacity-60">State</p>
        <p className="w-48 truncate font-sans">{state}</p>
      </div>
    </div>
  );
}

export default memo(FormPreview);
