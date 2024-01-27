import { useState } from "react";
import { Roboto_Slab } from "next/font/google";
const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-robotoSlab",
});
const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
    <form
      onSubmit={handleSubmit}
      className="min-w-full max-w-md mx-auto py-6 px-4 bg-white rounded-md shadow-md mt-5  gap-4 lg:px-64 xl:px-96"
      id="contactUs"
    >
      <div className="min-w-full flex flex-col justify-center items-center">
        <div className="inline-block bg-primaryColor px-10 py-3  text-sm font-semibold text-gray-700 mr-2 border-2 border-yw rounded-lg">
          <h2 className={`${robotoSlab.className} text-white text-2xl `}>
            CONTACT US
          </h2>
        </div>
      </div>

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
            placeholder="Enter Message"
          ></textarea>
        </div>
      </div>

      <button
        type="submit"
        className="bg-secondaryColor text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition duration-300 font-semibold border-2 border-yw "
      >
        Submit
      </button>
    </form>
  );
};

export default ContactUsForm;
