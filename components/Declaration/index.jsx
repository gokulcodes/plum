/* eslint-disable jsx-a11y/label-has-associated-control */
import { ChevronLeft } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import {
  Form, Formik, ErrorMessage, Field,
} from "formik";
import * as Yup from "yup";
import React, { useContext } from "react";
import { PlumContext } from "../../context/PlumContext";

const validationSchema = Yup.object({
  declare1: Yup.boolean().oneOf(
    [true],
    "To continue, Please agree with this condition",
  ),
  declare2: Yup.boolean().oneOf(
    [true],
    "To continue, Please agree with this condition",
  ),
  declare3: Yup.boolean().oneOf(
    [true],
    "To continue, Please agree with this condition",
  ),
  declare4: Yup.boolean().oneOf(
    [true],
    "To continue, Please agree with this condition",
  ),
});

function Declaration() {
  const { declarations, setActivePage, setDeclarations } = useContext(PlumContext);
  return (
    <div className="flex animate-openUp flex-col">
      <div className="flex flex-row items-start">
        <IconButton
          className="bg-black/5 p-2 hover:bg-black/10"
          onClick={() => {
            setActivePage((prev) => prev - 1);
          }}
        >
          <ChevronLeft className="text-5xl" />
        </IconButton>
        <div className="ml-4 mt-2 flex flex-col items-start">
          <h1 className="font-sans text-4xl font-bold">Declaration</h1>
          <Formik
            initialValues={{
              declare1: declarations.declare1,
              declare2: declarations.declare2,
              declare3: declarations.declare3,
              declare4: declarations.declare4,
            }}
            validateOnChange
            validateOnBlur
            enableReinitialize
            validationSchema={validationSchema}
            onSubmit={() => {
              setActivePage((prev) => prev + 1);
            }}
          >
            {() => (
              <Form>
                <label className="container text-2xl">
                  <Field
                    type="checkbox"
                    checked={declarations.declare1}
                    name="agree"
                    onChange={() => {
                      setDeclarations({
                        declare1: !declarations.declare1,
                        declare2: declarations.declare2,
                        declare3: declarations.declare3,
                        declare4: declarations.declare4,
                      });
                    }}
                  />
                  <span className="checkmark" />
                  I hereby declare that none of
                  the proposed members are habitual consumers of alcohol,
                  tobacco, gutka or any recreational drugs.
                </label>
                <p className="ml-4 mt-2 font-sans text-lg tracking-wide text-red-600">
                  <ErrorMessage name="declare1" />
                </p>

                <label className="container text-2xl">
                  <Field
                    type="checkbox"
                    className="mt-20"
                    checked={declarations.declare2}
                    name="agree"
                    onChange={() => {
                      setDeclarations({
                        declare1: declarations.declare1,
                        declare2: !declarations.declare2,
                        declare3: declarations.declare3,
                        declare4: declarations.declare4,
                      });
                    }}
                  />
                  <span className="checkmark" />
                  I hereby declare that all
                  proposed members are in good health and entirely free from any
                  mental pf physical impairements or deformities,
                  disease/condition.
                </label>
                <p className="ml-4 mt-2 font-sans text-lg tracking-wide text-red-600">
                  <ErrorMessage name="declare2" />
                </p>

                <label className="container text-2xl">
                  <Field
                    type="checkbox"
                    className="mt-20"
                    checked={declarations.declare3}
                    name="agree"
                    onChange={() => {
                      setDeclarations({
                        declare1: declarations.declare1,
                        declare2: declarations.declare2,
                        declare3: !declarations.declare3,
                        declare4: declarations.declare4,
                      });
                    }}
                  />
                  <span className="checkmark" />
                  I have understood that there is
                  30 days waiting period for all diseases and 2 years on named
                  ailments. (list of named ailements)
                </label>
                <p className="ml-4 mt-2 font-sans text-lg tracking-wide text-red-600">
                  <ErrorMessage name="declare3" />
                </p>

                <label className="container text-2xl">
                  <Field
                    type="checkbox"
                    className="mt-20"
                    checked={declarations.declare4}
                    name="agree"
                    onChange={() => {
                      setDeclarations({
                        declare1: declarations.declare1,
                        declare2: declarations.declare2,
                        declare3: declarations.declare3,
                        declare4: !declarations.declare4,
                      });
                    }}
                  />
                  <span className="checkmark" />
                  I understand that this policy
                  doesn&apos;t cover Pre-existing diseases.
                </label>
                <p className="ml-4 mt-2 font-sans text-lg tracking-wide text-red-600">
                  <ErrorMessage name="declare4" />
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
      </div>
    </div>
  );
}

export default Declaration;
