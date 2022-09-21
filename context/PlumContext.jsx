/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
  createContext, memo, useState,
} from "react";

export const PlumContext = createContext();

function PlumProvider({ children }) {
  const [activePage, setActivePage] = useState(0);
  const [planError, setPlanError] = useState(null);
  const [plan, setPlan] = useState(0);
  const [basicDetails, setBasicDetails] = useState({
    email: "",
    mobile: "",
    address1: "",
    address2: "",
    pincode: "",
    state: "",
  });
  const [deductible, setDeductible] = useState({
    amount: 100000,
    agree: false,
  });

  const [declarations, setDeclarations] = useState({
    declare1: false,
    declare2: false,
    declare3: false,
    declare4: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const initialState = {
    plan,
    planError,
    setPlanError,
    setPlan,
    activePage,
    setActivePage,
    basicDetails,
    setBasicDetails,
    deductible,
    setDeductible,
    setDeclarations,
    declarations,
    submitted,
    setSubmitted,
  };

  return (
    <PlumContext.Provider value={initialState}>
      {children}
    </PlumContext.Provider>
  );
}

export default memo(PlumProvider);
