import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Inter } from "next/font/google";

const Academy = () => {
  return (
    <>
      <Navbar />
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <h1>Academy</h1>
      </main>
    </>
  );
};

export default Academy;
