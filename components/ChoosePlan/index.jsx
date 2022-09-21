/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback, useContext, memo } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import {
  Formik, Form, Field, ErrorMessage,
} from "formik";
import { ExpandMore } from "@mui/icons-material";
import * as Yup from "yup";
import Selector from "../core/Selector";
import { PlumContext } from "../../context/PlumContext";

function ChoosePlan() {
  const {
    basicDetails, setBasicDetails, plan, planError, setPlanError, setActivePage,
  } = useContext(PlumContext);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .matches(
        "^[a-zA-Z0-9]+(?:.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:.[a-zA-Z0-9]+)*$",
        "Enter a valid email address",
      )
      .required("Enter your email address"),
    number: Yup.string()
      .matches("(0|91)?[6-9][0-9]{9}", "Enter a valid mobile number")
      .required("Enter your mobile number"),
    address1: Yup.string()
      .min(2, "Too Short Address!")
      .max(50, "Too Long Address!")
      .required("Enter Address line 01"),
    address2: Yup.string()
      .min(2, "Too Short Address!")
      .max(50, "Too Long Address!")
      .required("Enter Address line 02"),
    pincode: Yup.string()
      .matches("^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$", "Enter valid pincode")
      .required("Enter your area pincode"),
    state: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Enter state"),
  });

  const handleFormChanges = useCallback((e) => {
    setBasicDetails(e);
  }, [basicDetails]);

  return (
    <div className="animate-openUp flex flex-col">
      <script src="https://unpkg.com/@themesberg/flowbite@latest/dist/flowbite.bundle.js" />
      <div className="flex flex-col items-start">
        <h1 className="font-sans text-4xl font-bold">Choose your plan</h1>
        <p className="mt-2 font-sans text-2xl">
          Hello Anisha,
          {" "}
          <br />
          Increase yours and your family&apos;s health insurance cover by
          {" "}
          <b>₹20 lakhs</b>
          {" "}
          with Super top-up!
        </p>
      </div>

      <Formik
        initialValues={{
          email: basicDetails.email,
          number: basicDetails.number,
          address1: basicDetails.address1,
          address2: basicDetails.address2,
          pincode: basicDetails.pincode,
          state: basicDetails.state,
        }}
        validateOnChange
        validateOnBlur
        enableReinitialize
        validationSchema={validationSchema}
        onSubmit={(values) => {
          if (plan !== 0) {
            setBasicDetails(values);
            setActivePage((prev) => prev + 1);
          } else setPlanError("Please select your plan");
        }}
      >
        {({
          values, errors, touched, handleSubmit,
        }) => {
          setBasicDetails(values);
          return (
            <Form>
              <Accordion
                elevation={0}
                defaultExpanded
                className="mt-10 rounded-xl"
              >
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <p className="font-sans text-xl font-bold text-gray-800">
                    Plan details
                  </p>
                </AccordionSummary>
                <AccordionDetails className="flex flex-col border-t-[1px] border-black/10 pt-6">
                  <label htmlFor="plan" className="my-2 font-sans text-xl">
                    Your plan type
                  </label>
                  <div
                    className={`border-2 rounded-xl ${
                      planError ? "border-red-600" : "border-gray-300"
                    } `}
                  >
                    <Selector />
                  </div>
                  {planError && (
                  <p className="ml-4 mt-2 font-sans text-xs tracking-wide text-red-600">
                    {planError}
                  </p>
                  )}
                  {/* <Field
                      as="select"
                      name="plan"
                    > */}
                  {/* <option disabled>Select your plan</option>
                      <option value="One (Individual)">Select your plan</option>
                      <option value="Pro (Individual)">Select your plan</option>
                      <option value="Plus (Individual + Individual)">Select your plan</option>
                      <option value="Max (Floater)">Select your plan</option>
                      <option value="Grand (Floater + Individual)">Select your plan</option>
                    */}
                  {/* </Field> */}
                </AccordionDetails>
              </Accordion>

              <Accordion
                elevation={0}
                defaultExpanded
                className="mt-5 rounded-xl"
              >
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <p className=" font-sans text-xl text-gray-800">
                    <span className="font-bold">Basic details</span>
                    {" "}
                    (required)
                  </p>
                </AccordionSummary>
                <AccordionDetails className="border-t-[1px] border-black/10 pt-6">
                  <div className="grid grid-cols-2 gap-4">
                    <label
                      htmlFor="email"
                      className="col-span-1 my-2 flex flex-col font-sans text-xl"
                    >
                      Personal email address
                      <Field
                        id="email"
                        name="email"
                        className={`mt-2 rounded-xl border-2 ${
                          errors.email && touched.email ? "border-red-600" : ""
                        } p-4 font-sans`}
                        placeholder="Enter"
                        type="text"
                      />
                      <p className="ml-4 mt-2 font-sans text-xs tracking-wide text-red-600">
                        <ErrorMessage name="email" />
                      </p>
                    </label>
                    <label
                      htmlFor="number"
                      className="col-span-1 my-2 flex flex-col font-sans text-xl"
                    >
                      Mobile number
                      <Field
                        id="number"
                        name="number"
                        type="tel"
                        className={`mt-2 rounded-xl border-2 ${
                          errors.number && touched.number
                            ? "border-red-600"
                            : ""
                        } p-4 font-sans`}
                        placeholder="Enter"
                      />
                      <p className="ml-4 mt-2 font-sans text-xs tracking-wide text-red-600">
                        <ErrorMessage name="number" />
                      </p>
                    </label>
                    <label
                      htmlFor="address1"
                      className="col-span-1 my-2 flex flex-col font-sans text-xl"
                    >
                      Address line 01
                      <Field
                        id="address1"
                        name="address1"
                        type="text"
                        className={`mt-2 rounded-xl border-2 ${
                          errors.address1 && touched.address1
                            ? "border-red-600"
                            : ""
                        } p-4 font-sans`}
                        placeholder="Enter"
                      />
                      <p className="ml-4 mt-2 font-sans text-xs tracking-wide text-red-600">
                        <ErrorMessage name="address1" />
                      </p>
                    </label>
                    <label
                      htmlFor="address2"
                      className="col-span-1 my-2 flex flex-col font-sans text-xl"
                    >
                      Address line 02
                      <Field
                        id="address2"
                        name="address2"
                        type="text"
                        className={`mt-2 rounded-xl border-2 ${
                          errors.address2 && touched.address2
                            ? "border-red-600"
                            : ""
                        } p-4 font-sans`}
                        placeholder="Enter"
                      />
                      <p className="ml-4 mt-2 font-sans text-xs tracking-wide text-red-600">
                        <ErrorMessage name="address2" />
                      </p>
                    </label>
                    <label
                      htmlFor="pincode"
                      className="col-span-1 my-2 flex flex-col font-sans text-xl"
                    >
                      Pincode
                      <Field
                        id="pincode"
                        name="pincode"
                        type="tel"
                        className={`mt-2 rounded-xl border-2 ${
                          errors.pincode && touched.pincode
                            ? "border-red-600"
                            : ""
                        } p-4 font-sans`}
                        placeholder="Enter"
                      />
                      <p className="ml-4 mt-2 font-sans text-xs tracking-wide text-red-600">
                        <ErrorMessage name="pincode" />
                      </p>
                    </label>
                    <label
                      htmlFor="state"
                      className="col-span-1 my-2 flex flex-col font-sans text-xl"
                    >
                      State
                      <Field
                        id="state"
                        name="state"
                        type="text"
                        className={`mt-2 rounded-xl border-2 ${
                          errors.state && touched.state ? "border-red-600" : ""
                        } p-4 font-sans`}
                        placeholder="Enter"
                      />
                      <p className="ml-4 mt-2 font-sans text-xs tracking-wide text-red-600">
                        <ErrorMessage name="state" />
                      </p>
                    </label>
                  </div>
                </AccordionDetails>
              </Accordion>
              <div className="fixed left-0 bottom-0 flex z-50 w-full justify-end bg-white p-4">
                <button
                  type="button"
                  onClick={() => {
                    if (plan !== 0) handleSubmit();
                    else {
                      handleSubmit();
                      setPlanError("Please select your plan");
                    }
                  }}
                  className="w-1/4 rounded-xl bg-orange-600 p-4 font-sans text-xl font-bold text-white"
                >
                  Next
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default memo(ChoosePlan);
