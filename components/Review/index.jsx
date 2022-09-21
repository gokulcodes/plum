import { ChevronLeft } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useContext, memo } from "react";
import Lottie from "react-lottie-player";
import { PlumContext } from "../../context/PlumContext";

const CONGRATS = require("../../public/congrats.json");

function Review() {
  const {
    basicDetails,
    submitted,
    setActivePage,
    setSubmitted,
    plan,
    deductible,
  } = useContext(PlumContext);

  return (
    <div className="w-full animate-openUp">
      <div className="flex flex-row items-start">
        {!submitted && (
          <IconButton
            className="bg-black/5 p-2 hover:bg-black/10"
            onClick={() => {
              setActivePage((prev) => prev - 1);
            }}
          >
            <ChevronLeft className="text-5xl" />
          </IconButton>
        )}
        <div className="ml-4 mt-2 flex w-full flex-col items-start">
          <h1 className="font-sans text-4xl font-bold">
            {submitted ? "Congratulation!" : "Review and confirm payment"}
          </h1>
        </div>
      </div>
      <div className="mt-10 flex w-full flex-col items-start rounded-xl bg-white p-10">
        <div className="grid grid-cols-2 gap-12 py-2">
          <p className="cols-span-1 w-64 text-xl opacity-60">Plan selected</p>
          <p className="text-xl font-bold">{plan}</p>
        </div>
        <div className="grid grid-cols-2 gap-12 py-2">
          <p className="cols-span-1 w-64 text-xl opacity-60">Email Address</p>
          <p className="text-xl font-bold">{basicDetails.email}</p>
        </div>
        <div className="grid grid-cols-2 gap-12 py-2">
          <p className="cols-span-1 w-64 text-xl opacity-60">Mobile number</p>
          <p className="text-xl font-bold">{basicDetails.number}</p>
        </div>
        <div className="grid grid-cols-2 gap-12 py-2">
          <p className="cols-span-1 w-64 text-xl opacity-60">Address line 01</p>
          <p className="text-xl font-bold">{basicDetails.address1}</p>
        </div>
        <div className="grid grid-cols-2 gap-12 py-2">
          <p className="cols-span-1 w-64 text-xl opacity-60">Address line 02</p>
          <p className="text-xl font-bold">{basicDetails.address2}</p>
        </div>
        <div className="grid grid-cols-2 gap-12 py-2">
          <p className="cols-span-1 w-64 text-xl opacity-60">Pincode</p>
          <p className="text-xl font-bold">{basicDetails.pincode}</p>
        </div>
        <div className="grid grid-cols-2 gap-12 py-2">
          <p className="cols-span-1 w-64 text-xl opacity-60">state</p>
          <p className="text-xl font-bold">{basicDetails.state}</p>
        </div>
        <div className="grid grid-cols-2 gap-12 py-2">
          <p className="cols-span-1 w-64 text-xl opacity-60">
            Deductible Amount
          </p>
          <p className="text-xl font-bold">
            {deductible.amount.toLocaleString("en-IN")}
          </p>
        </div>
      </div>
      {!submitted ? (
        <div className="fixed left-0 bottom-0 z-50 flex w-full justify-end bg-white p-4">
          <button
            onClick={() => setSubmitted(true)}
            type="submit"
            className="w-1/4 rounded-xl bg-orange-600 p-4 font-sans text-xl font-bold text-white"
          >
            Submit
          </button>
        </div>
      ) : (
        <Lottie
          loop
          animationData={CONGRATS}
          play
          className="absolute top-0 left-0 z-50 scale-150 transform"
          style={{ width: "100%", height: "100vh" }}
        />
      )}
    </div>
  );
}

export default memo(Review);
