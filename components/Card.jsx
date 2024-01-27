import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({ imageSrc, cardName, btnName, content, key, href }) => {
  return (
    <div
      key={key}
      className="xl:my-5 xl:mx-40 max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg grid justify-items-center text-center  w-70  border-2  border-primaryColor"
    >
      <div className="px-6 py-4 ">
        <div className="font-bold text-xl mb-2">{cardName}</div>
      </div>
      <Image src={imageSrc} width={344} height={344} alt="card image" />

      <span className="inline-block   px-3 py-1 text-sm font-semibold text-gray-700 ">
        {content}
      </span>

      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          <button
            href={href}
            class="hover:bg-blue-700 text-white bg-secondaryColor font-bold py-2 px-4 rounded border border-yw"
          >
            <Link href={href}>{btnName}</Link>
          </button>
        </span>
      </div>
    </div>
  );
};

export default Card;
