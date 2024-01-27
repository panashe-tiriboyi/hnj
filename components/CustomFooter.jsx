import React from "react";
import Image from "next/image";

const CustomFooter = () => {
  return (
    <div className="min-w-full justify-between  bg-subtleblue flex  flex-col text-primaryColor  py-3 text-center lg:flex-row-reverse lg:gap-x-40 px-3 lg:text-sm xl:text-lg">
      <ul>
        <li>
          <b>ACADEMY</b>
        </li>
        <li>Training Service</li>
        <li>Academic Research Support</li>
        <li>IDE Guidance</li>
        <li>Microsoft Office Packages </li>
      </ul>
      <div>
        <b className="pb-2">CONSULTANCY</b>
        <ul className="m-2 grid grid-cols-1 lg:grid-cols-2 ">
          <li className=" lg:border-r-2 lg:pr-4">
            Data collection and Analysis
          </li>
          <li className="pl-2">Digital Transformation</li>
          <li className=" lg:border-r-2 lg:pr-4">
            Project Finance Structuring Advice
          </li>
          <li className="pl-2">Bank Risk Management and Analytics</li>
          <li className=" lg:border-r-2 lg:pr-4">
            Pension and Employee Benefits
          </li>
          <li className="pl-2">Health Insurance</li>
          <li className=" lg:border-r-2 lg:pr-4">
            IFRS 17 Implementation Support
          </li>
          <li className="pl-2">Enterprise Risk Management</li>
          <li className=" lg:border-r-2 lg:pr-4">Investment Advisory</li>
        </ul>
      </div>

      <ul className="m-2 ">
        <li>
          <b>CONNECT WITH US</b>
        </li>
        <li>
          <div className="flex gap-2 items-center justify-center">
            <Image src="/phone.svg" width={50} height={50} alt="logo" />
            <Image src="/youtube.svg" width={50} height={50} alt="logo" />
            <Image src="/gmail.svg" width={50} height={50} alt="logo" />
          </div>
        </li>
        <li>+263 78 513 4019 </li>
        <li>Info@Hnj.co.zw</li>
        <li>Harare Zimbabwe</li>
        <ii>&copy; 2023 HnJ. All rights reserved.</ii>
      </ul>
    </div>
  );
};

export default CustomFooter;
