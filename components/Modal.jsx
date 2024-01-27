import { useState } from "react";
import Image from "next/image";

const Modal = ({ isOpen, onClose, message }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: message,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
  };
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md backdrop-filter bg-black bg-opacity-50 z-20  ">
          <div className="bg-white p-4 rounded-lg flex flex-col w-1/2">
            <button
              onClick={onClose}
              className=" border-2 border-yw absolute  hover:text-gray-800"
            >
              {/* Close button */}
              <Image src="/Close.svg" width={30} height={30} alt="logo" />
            </button>
            <form onSubmit={handleSubmit} className=" min-w-full mt-20 ">
              <div className=" min-w-full mt-4 ">
                <div className="mb-4 ">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border-2 border-primaryColor rounded-md min-w-full "
                    required
                    placeholder="Enter Name"
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border-2 border-primaryColor rounded-md"
                    required
                    placeholder="Enter Email"
                  />
                </div>

                <div className="mb-4">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-3 py-2 border-2 border-primaryColor rounded-md min-w-full"
                    required
                  ></textarea>
                </div>
              </div>
            </form>

            <button
              type="submit"
              className="bg-secondaryColor text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition duration-300 font-semibold border-2 border-yw "
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
