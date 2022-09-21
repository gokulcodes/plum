import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";
import PlumProvider from "../context/PlumContext";

const PageWrapper = dynamic(() => import("../components/core/PageWrapper"));
const Header = dynamic(() => import("../components/core/Header"));

function Plum() {
  return (
    <PlumProvider>
      <Head>
        <title>Plum Assignment</title>
      </Head>
      <div className="flex-1 bg-[#F2F0ED]">
        <Header />
        <PageWrapper />
      </div>
    </PlumProvider>
  );
}
export default Plum;
