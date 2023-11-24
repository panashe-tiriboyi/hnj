import Image from "next/image";
import { Inter } from "next/font/google";
import { Divider } from "antd";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import { Roboto_Slab } from "next/font/google";
import ContactUsForm from "@/components/ContactUsForm";
import CustomFooter from "@/components/CustomFooter";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-robotoSlab",
});

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <main
        className={`flex min-h-screen flex-col justify-center  items-center  ${inter.className}`}
      >
        <div className="min-w-full py-10  mt-5 flex min-h-screen flex-col justify-center  items-center bg-homeBg">
          <div>
            <Image
              src="/consultancyLogo.jpg"
              width={200}
              height={200}
              alt="logo"
            />
          </div>
          <Card
            key={1}
            imageSrc="/consultancy.png"
            cardName="Consultancy"
            btnName="Learn More"
          />
          <Card
            key={2}
            imageSrc="/academy.png"
            cardName="Academy"
            btnName="Get Started"
          />
        </div>

        <div className=" min-w-full bg-primaryColor flex min-h-screen flex-col   items-center p-10">
          <div className="inline-block bg-subtleblue px-10 py-3 mt-10 text-sm font-semibold text-gray-700 mr-2 border-2 border-yw rounded-lg">
            <h2
              className={`${robotoSlab.className} text-primaryColor text-2xl `}
            >
              OVERVIEW
            </h2>
          </div>
          <div className="inline-block bg-subtleblue px-10 py-3 mt-10 text-sm font-semibold text-gray-700 mr-2 border-2 border-yw rounded-lg">
            <h2
              className={`${robotoSlab.className} text-primaryColor text-2xl `}
            >
              MISSION
            </h2>
          </div>
          <div className="inline-block bg-subtleblue px-10 py-3 mt-10 text-sm font-semibold text-gray-700 mr-2 border-2 border-yw rounded-lg text-center">
            Leading research and data analytics consultant in Africa and the
            world at large
          </div>
          <div className="inline-block bg-subtleblue px-10 py-3 mt-10 text-sm font-semibold text-gray-700 mr-2 border-2 border-yw rounded-lg">
            <h2
              className={`${robotoSlab.className} text-primaryColor text-2xl `}
            >
              VISION
            </h2>
          </div>
          <div className="inline-block bg-subtleblue px-10 py-3 mt-10 text-sm font-semibold text-gray-700 mr-2 border-2 border-yw rounded-lg text-center">
            Our vision is to empower organizations with actionable insights and
            drive informed decision-making across industries.
          </div>
          <div className="inline-block bg-subtleblue px-10 py-3 mt-10 text-sm font-semibold text-gray-700 mr-2 border-2 border-yw rounded-lg">
            <h2
              className={`${robotoSlab.className} text-primaryColor text-2xl `}
            >
              VALUES
            </h2>
          </div>
          <div className="inline-block bg-subtleblue px-10 py-3 mt-10 text-sm font-semibold text-gray-700 mr-2 border-2 border-yw rounded-lg text-center">
            <ul>
              <li>Integrity</li>
              <li>Data Privacy And Security</li>
              <li>Innovation</li>
              <li>Prifessionalism</li>
              <li>Client Satisfaction</li>
            </ul>
          </div>
        </div>
        <div className="min-w-full border-2 border-yw bg-subtleblue flex min-h-screen flex-col   items-center ">
          <div className="inline-block bg-primaryColor px-10 py-3 mt-10 text-sm font-semibold text-gray-700 mr-2 border-2 border-yw rounded-lg">
            <h2 className={`${robotoSlab.className} text-white text-2xl `}>
              ABOUT US
            </h2>
          </div>

          <Image
            className="w-full"
            src="/aboutUs.png"
            width={200}
            height={200}
            alt="logo"
          />
          <div className="min-w-full bg-primaryColor  flex  flex-col   items-center p-10 text-center text-white">
            Established in 2019, H&J Actuarial Consultancy is an innovative firm
            headquartered in Harare. Our team of seasoned professionals combines
            their extensive industry experience with cutting-edge analytics
            techniques to deliver actionable insights and drive tangible results
            for our clients. As a trusted partner, we are committed to exceeding
            expectations and delivering value-driven solutions.
          </div>
        </div>
        <div className="min-w-full  bg-subtleblue flex  flex-col   items-center">
          <div className="inline-block bg-primaryColor px-10 py-3 mt-10 text-sm font-semibold text-gray-700 mr-2 border-2 border-yw rounded-lg">
            <h2 className={`${robotoSlab.className} text-white text-2xl `}>
              CONTACT US
            </h2>
          </div>
          <ContactUsForm />
        </div>
        <CustomFooter />
      </main>
    </>
  );
}
