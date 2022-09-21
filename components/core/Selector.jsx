import React, { Fragment, memo, useContext } from "react";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import { PlumContext } from "../../context/PlumContext";

const plans = [
  {
    id: 1,
    member: "One",
    avatar: "/one.svg",
    descriptionMember: "Individual",
    title: "Self",
    amount: 600,
  },
  {
    id: 2,
    member: "Pro",
    avatar: "/parents.svg",
    descriptionMember: "Individual",
    title: "Parents",
    amount: 0,
  },
  {
    id: 3,
    member: "Plus",
    avatar: "/plus.svg",
    descriptionMember: "Individual + Individual",
    title: "Self + Parents",
    amount: 600,
  },
  {
    id: 4,
    member: "Max",
    avatar: "/max.svg",
    descriptionMember: "Floater",
    title: "Self + Spouse + Kids",
    amount: 1800,
  },
  {
    id: 5,
    member: "Grand",
    avatar: "/grand.svg",
    descriptionMember: "Floater + Individual",
    title: "Self + Spouse + Kids",
    amount: 1800,
  },
];

function Selector() {
  const state = useContext(PlumContext);

  return (
    <Menu as="div" className="relative inline-block w-full text-left">
      <div>
        <Menu.Button className="inline-flex w-full  justify-between rounded-md bg-white px-4 py-5 font-sans text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
          {state.plan === 0 ? "Select your plan" : state.plan}
          <svg
            className="h-5 -mr-1 ml-2 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {plans.map((plan) => (
            <Menu.Item key={plan.id}>
              <button
                type="button"
                key={plan.id}
                className="group flex w-full cursor-pointer flex-col items-start border-b-2 border-black/10"
                onClick={() => {
                  state.setPlanError(null);
                  state.setPlan(`${plan.member} (${plan.descriptionMember})`);
                }}
              >
                <p className="text-md px-4 pt-4 font-sans">
                  <b>{plan.member}</b>
                  {" "}
                  (
                  {plan.descriptionMember}
                  )
                </p>
                <div className="my-2 flex w-full flex-row items-center justify-between p-4 transition-all  group-hover:bg-orange-100">
                  <div className="flex flex-row items-center justify-center">
                    <Image src={plan.avatar} width={28} height={28} />
                    <p className="ml-2 text-xl font-bold">{plan.title}</p>
                  </div>
                  <p className="text-lg font-bold">
                    ₹
                    {plan.amount}
                  </p>
                </div>
              </button>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
export default memo(Selector);
