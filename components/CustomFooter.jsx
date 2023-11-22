import React from "react";
import Image from "next/image";

const CustomFooter = () => {
  return (
    <div className="min-w-full  bg-subtleblue flex  flex-col text-primaryColor  items-center text-center">
      <ul className="m-2">
        <li>
          <b>ACADEMY</b>
        </li>
        <li>Training Service</li>
        <li>Academic Research Support</li>
        <li>IDE Guidance</li>
        <li>Microsoft Office Packages </li>
      </ul>

      <ul className="m-2">
        <li>
          <b>CONSULTANCY</b>
        </li>
        <li>Data collection and Analysis</li>
        <li>Digital Trandformation</li>
        <li>Project Finance Structuring Advice</li>
        <li>Bank Risk Management and Analyticts </li>
        <li>Pension and Employee Benefits</li>
        <li>Health Insuarance</li>
        <li>IFRS 17 Implementation Support</li>
        <li>Enterprise Rsik Management</li>
        <li>Investment Advisory</li>
      </ul>
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
