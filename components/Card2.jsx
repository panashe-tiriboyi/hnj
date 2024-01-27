import React from "react";
import Image from "next/image";
import { useState } from "react";
import Modal from "../components/Modal";

const Card2 = ({ imageSrc, cardName, btnName, content, key, message }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div
      key={key}
      className=" max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg grid justify-items-center text-center mt-24 w-70  border w-full xsm:w-5/6 md:w-1/2 lg:w-5/6 xl:h-5/6"
    >
      <div className="px-6 py-4  ">
        <div className="font-bold text-xl mb-2">{cardName}</div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} message={message} />
      <Image src={imageSrc} width={244} height={244} alt="card image" />
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {content}
          <button class="bg-blue-500 hover:bg-blue-700 text-primaryColor font-bold py-2 px-4 rounded border underline border-none">
            Read More
          </button>
        </span>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          <button
            onClick={openModal}
            class="bg-blue-500 hover:bg-blue-700 text-white bg-secondaryColor font-bold py-2 px-4 rounded border border-yw"
          >
            {btnName}
          </button>
        </span>
      </div>
    </div>
  );
};

export default Card2;
