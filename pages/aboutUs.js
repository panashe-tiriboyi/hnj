import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Inter } from "next/font/google";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 `}
      >
        <h1>About Us</h1>
      </main>
    </>
  );
};

export default AboutUs;
