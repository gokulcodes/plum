/* eslint-disable jsx-a11y/label-has-associated-control */
import { ChevronLeft } from "@mui/icons-material";
import { Slider, IconButton } from "@mui/material";
import * as Yup from "yup";
import {
  Field, Formik, Form, ErrorMessage,
} from "formik";
import React, { memo, useContext } from "react";
import Image from "next/image";
import { PlumContext } from "../../context/PlumContext";

const marks = [
  {
    value: 100000,
    name: "1,00,000",
    label: "₹1L",
  },
  {
    value: 200000,
    name: "1,00,000",
    label: "₹2L",
  },
  {
    value: 300000,
    name: "1,00,000",
    label: "₹3L",
  },
  {
    value: 500000,
    name: "1,00,000",
    label: "₹5L",
  },
];

function valuetext(value) {
  return `${value}L`;
}

const validationSchema = Yup.object({
  agree: Yup.boolean().oneOf(
    [true],
    "To continue, Please agree with this condition",
  ),
});

function DeductibleAmount() {
  const state = useContext(PlumContext);

  return (
    <div className="flex animate-openUp flex-col">
      <div className="flex flex-row items-start">
        <IconButton
          className="bg-black/5 p-2 hover:bg-black/10"
          onClick={() => {
            state.setActivePage((prev) => prev - 1);
          }}
        >
          <ChevronLeft className="text-5xl" />
        </IconButton>
        <div className="ml-4 mt-2 flex flex-col items-start">
          <h1 className="font-sans text-4xl font-bold">
            Select your deductible amount
          </h1>
          <p className="mt-2 font-sans text-3xl">
            Select the deductible amount for the policy (or policies) below.
            <br />
            <span className="underline">(what is a deductible?)</span>
          </p>
        </div>
      </div>

      <Formik
        initialValues={{
          amount: state.deductible.amount,
          agree: state.deductible.agree,
        }}
        validateOnChange
        validateOnBlur
        enableReinitialize
        validationSchema={validationSchema}
        onSubmit={() => {
          state.setActivePage((prev) => prev + 1);
        }}
      >
        {({ values }) => (
          <Form>
            <div className="mt-20 flex flex-col items-start rounded-xl bg-white">
              <div className="flex w-full flex-col items-start border-b-2 border-black/10 p-6">
                <p className="font-sans text-2xl font-bold">
                  Self (Individual)
                </p>
                <div className="mt-4 flex flex-row items-center">
                  <Image width={36} height={36} src="/profile.svg" />
                  <p className=" ml-2 font-sans text-xl font-bold">John Doe</p>
                </div>
              </div>

              <div className="w-full p-6">
                <p className="mb-4 font-sans text-xl">
                  Sum insured of ₹20,00,000 with a deductible of
                  {" "}
                  <b>
                    ₹
                    {values.amount.toLocaleString("en-IN")}
                  </b>
                </p>
                <Slider
                  defaultValue={values.amount}
                  getAriaValueText={valuetext}
                  step={null}
                  name="amount"
                  onChange={(e) => {
                    state.setDeductible({
                      amount: e.target.value,
                      agree: state.deductible.agree,
                    });
                  }}
                  max={500000}
                  valueLabelDisplay="auto"
                  marks={marks}
                />
                <p className="ml-4 mt-2 font-sans text-xs tracking-wide text-red-600">
                  <ErrorMessage name="amount" />
                </p>
              </div>
            </div>
            <label className="container text-2xl">
              <Field
                type="checkbox"
                className="mt-10"
                checked={state.deductible.agree}
                name="agree"
                onChange={() => {
                  state.setDeductible({
                    amount: state.deductible.amount,
                    agree: !state.deductible.agree,
                  });
                }}
              />
              I understand that this insurance will not be utilized until ₹
              {values.amount.toLocaleString("en-IN")}
              {" "}
              (deductible) is exhausted.
              <span className="checkmark" />
            </label>
            <p className="ml-4 mt-2 font-sans text-lg tracking-wide text-red-600">
              <ErrorMessage name="agree" />
            </p>
            <div className="fixed left-0 bottom-0 z-50 flex w-full justify-end bg-white p-4">
              <button
                type="submit"
                className="w-1/4 rounded-xl bg-orange-600 p-4 font-sans text-xl font-bold text-white"
              >
                Next
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default memo(DeductibleAmount);
