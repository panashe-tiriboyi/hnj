import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Card from "@/components/Card";
import { Roboto_Slab, Inter } from "next/font/google";
import Card2 from "@/components/Card2";
import ContactUsForm from "@/components/ContactUsForm";
import CustomFooter from "@/components/CustomFooter";
import Head from "next/head";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-robotoSlab",
});

const inter = Inter({ subsets: ["latin"] });

const Consultancy = () => {
  return (
    <>
      <Head>
        <title>
          H&J Consultancy and Academy - Your Partner in Data and Training
        </title>
        <meta
          name="description"
          content="H&J Consultancy and Academy - Offering comprehensive data-driven solutions and top-notch training in statistical software, academic research, and more."
        />
        <meta
          name="keywords"
          content="consultancy, data-driven solutions, training, statistical software, academic research, actuarial services, big data analytics, digital transformation"
        />
        <meta name="author" content="H&J" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      <main
        className={`flex min-h-screen flex-col items-center justify-between ${inter.className} `}
      >
        <div>
          <div className="min-w-full py-10 px-5 mt-5  flex flex-col gap-4 justify-center  items-center bg-consultancyBg bg-no-repeat bg-cover xl:px-72 xl:gap-8  xl:pb-0 ">
            <div>
              <Image
                src="/consultancyLogo.jpg"
                width={200}
                height={200}
                alt="logo"
              />
            </div>
            <div className="inline-block bg-primaryColor px-10 py-3 mt-10 text-sm font-semibold text-gray-700 mr-2 border-2 border-yw rounded-lg">
              <h2
                className={`${robotoSlab.className} text-white text-2xl text-center mx-5 `}
              >
                OUR CONSULTANCY PRODUCTS AND SERVICES
              </h2>
            </div>
            <div
              className="  bg-white80 p-1 flex  flex-col justify-center items-center border-2 rounded-2xl min-w-full text-center text-primaryColor font-bold md:flex-row md:py-6 
          "
            >
              <Image
                src="/dataAnalytics.png"
                width={400}
                height={400}
                alt="data analytics image"
              />
              <span className="md:w-1/2">
                {" "}
                At H&J Consultancy, we are a dynamic consultancy specializing in
                providing comprehensive data-driven solutions for strategic
                decision-making. With a strong focus on actuarial consulting,
                data collection, analysis, surveys, and strategic reports, we
                empower businesses to make informed, forward-thinking choices in
                an ever-evolving market landscape.
              </span>
            </div>
            <div className="inline-block bg-subtleblue px-2  py-3 mb-20 text-sm font-semibold text-gray-700 mr-2 border-2 border-yw rounded-xl">
              <h2
                className={`${robotoSlab.className} text-primaryColor text-2xl text-center `}
              >
                BIG DATA ANALYTICS
              </h2>
            </div>
          </div>
          <div class="bg-green-500 mt-[-45%] px-5  gap-4  items-center xsm:mt-[-30%] sm:mt-[-20%] md:mt-[-15%] xl:mt-[-10%] lg:px-0 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-0">
              <Card2
                key={1}
                cardName="Data Collection And Analysis"
                imageSrc="/dataCollection.png"
                content={
                  <ul className="text-start list-disc">
                    <li>Surveys and Market Research</li>
                    <li>Strategic Reports</li>
                    <li>
                      Developing and calibrating models(Including Machine
                      learning)
                    </li>
                  </ul>
                }
                btnName="Book Now"
              />
              <Card2
                key={2}
                cardName="Digital Transformation"
                imageSrc="/digitalTransformation.png"
                content={
                  <ul className="text-start list-disc">
                    <li>
                      Automating process intelligently to improve performance
                    </li>
                    <li>integrating enterprise systems</li>
                    <li>governing information, data privacy...</li>
                  </ul>
                }
                btnName="Book Now"
              />
            </div>

            <Image
              className="hidden lg:block lg:min-w-full pt-20"
              src="/glasses.png"
              width={400}
              height={400}
              alt="glasses image"
            />
            <div className="flex items-center justify-center">
              <div className="inline-block mt-10 bg-subtleblue px-2  py-3 mt-20 text-sm font-semibold text-gray-700 mr-2 border-2 border-yw rounded-xl flex justify-center items-center xl:w-72 mb-0 lg:mt-[-2%]">
                <h2
                  className={`${robotoSlab.className} text-primaryColor text-2xl text-center `}
                >
                  ACTUARIAL SERVICES
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-0">
              {" "}
              <Card2
                key={3}
                cardName="Health Insurance"
                imageSrc="/healthInsurance.png"
                content={
                  <ul className="text-start list-disc">
                    <li>Product designing</li>
                    <li>Product Pricing</li>
                    <li>Solvency projections and analysis</li>
                    <li>Managing and optimizing products</li>
                  </ul>
                }
                btnName="Book Now"
                message=""
              />
              <Card2
                key={4}
                cardName="Bank Risk Management & Analytics"
                imageSrc="/bankRiskManagement.png"
                content={
                  <ul className="text-start list-disc">
                    <li>
                      Developing credit scorecards and credit risk models for
                      IFRS 9
                    </li>
                    <li>Applying IFRS 15 for revenue recognition</li>
                  </ul>
                }
                btnName="Book Now"
              />
              <Card2
                key={5}
                cardName="Enterprise Risk Management"
                imageSrc="/enterpriseRiskManagement.png"
                content={
                  <ul className="text-start list-disc">
                    <li>Product designing</li>
                    <li>Product Pricing</li>
                    <li>Solvency projections and analysis</li>
                    <li>Managing and optimizing products</li>
                  </ul>
                }
                btnName="Book Now"
              />
              <Card2
                key={6}
                cardName="Pension & Employee Benefits"
                imageSrc="/pensionEmployeeBenefits.png"
                content={
                  <ul className="text-start list-disc">
                    <li>
                      valuing and reviewing pension plans and employee benefits
                    </li>
                    <li>Restructuring pension plans</li>
                    <li>value in employee benefits for IAS 19</li>
                  </ul>
                }
                btnName="Book Now"
              />
              <Card2
                key={7}
                cardName="Investment Advisory"
                imageSrc="/investmentAdvisory.png"
                content={
                  <ul className="text-start list-disc">
                    <li>Developing investment policy statements</li>
                    <li>Modeling asset liability</li>
                    <li>Constructing portfolios across....</li>
                    Read More
                  </ul>
                }
                btnName="Book Now"
              />
              <Card2
                key={8}
                cardName="IFRS 17 implementation support"
                imageSrc="/ifrs17.png"
                content={
                  <ul className="text-start list-disc">
                    <li>implementing IFRS 17 end to end</li>
                    <li>
                      analysing infrastructure and operational gaps for IFRS
                      17compliance
                    </li>
                  </ul>
                }
                btnName="Book Now"
              />
            </div>
          </div>
          <div className="bg-cover min-w-full  z-6  mt-4 gap-4 justify-center items-center">
            <Image
              className="min-w-full"
              src="/team.png"
              width={400}
              height={400}
              alt="team image"
            />
          </div>

          <div className="bg-green-500 mt-[-20%] px-5  gap-4 flex flex-col justify-center items-center text-center text-primaryColor xsm:mt-[-15%] sm:mt-[-10%] xl:mt-[-5%] lg:mx-72 xl:pb-5 xl:bg-white">
            <div className="inline-block bg-primaryColor px-1 py-3 mt-10 text-sm font-semibold text-gray-700 mr-2 border-2 border-yw rounded-lg">
              <h2
                className={`${robotoSlab.className} text-white text-2xl text-center mx-5 `}
              >
                Team & Expertise
              </h2>
            </div>
            <Image
              src="/ourTeam.png"
              width={400}
              height={400}
              alt="our team image"
            />
            Our team at H&J Actuarial Consultancy comprises Qualified Actuaries,
            Chartered Accountants (CAs), Statisticians, and Data scientists who
            possess in-depth knowledge across various industries. With an
            average of 5 years of experience, our experts bring a wealth of
            expertise in risk assessment, predictive modelling, and strategic
            planning. We are dedicated to providing innovative solutions
            tailored to our clients&apos; unique needs.
            <div className="inline-block bg-subtleblue  py-3 mt-10 text-sm font-semibold text-gray-700 mr-2 border-2 border-yw rounded-lg">
              <h2
                className={`${robotoSlab.className} text-primaryColor text-2xl xl:px-5`}
              >
                Methodology and Approach
              </h2>
            </div>
            <div className="min-w-full bg-primaryColor  flex  flex-col   items-center p-5 text-center text-white border-yw border-2 rounded-2xl">
              Our team at H&J Actuarial Consultancy comprises Qualified
              Actuaries, Chartered Accountants (CAs), Statisticians, and Data
              scientists who possess in-depth knowledge across various
              industries. With an average of 5 years of experience, our experts
              bring a wealth of expertise in risk assessment, predictive
              modelling, and strategic planning. We are dedicated to providing
              innovative solutions tailored to our clients&apos; unique needs.
            </div>
            <div className="inline-block bg-subtleblue  px-5 py-3 mt-10 text-sm font-semibold text-gray-700 mr-2 border-2 border-yw rounded-lg">
              <h2
                className={`${robotoSlab.className} text-primaryColor text-2xl `}
              >
                Clientele
              </h2>
            </div>
            <div className="min-w-full bg-primaryColor  flex  flex-col   items-center p-5 text-center text-white border-yw border-2 rounded-2xl">
              We serve a diverse range of clients, including individuals,
              insurance companies, financial institutions, and government
              agencies. Our client portfolio includes industry leaders who rely
              on our expertise to navigate complex challenges, optimize their
              operations, and gain a competitive edge in the market.
            </div>
            <div className="inline-block bg-subtleblue  px-5 py-3 mt-10 text-sm font-semibold text-gray-700 mr-2 border-2 border-yw rounded-lg">
              <h2
                className={`${robotoSlab.className} text-primaryColor text-2xl `}
              >
                Technology and Innovation
              </h2>
            </div>
            <div className="min-w-full bg-primaryColor  flex  flex-col   items-center p-5 text-center text-white border-yw border-2 rounded-2xl">
              At H&J Consultancy, we embrace technological advancements and
              leverage innovative tools and analytics platforms to maximize the
              value we deliver to our clients. Our commitment to ongoing
              research and development enables us to stay ahead of emerging
              trends, ensuring that our clients benefit from the latest
              advancements in data analytics and actuarial science. Read More...
            </div>
          </div>
          <div className="min-w-full  bg-subtleblue flex  flex-col   items-center">
            <ContactUsForm />
          </div>
          <CustomFooter />
        </div>
      </main>
    </>
  );
};

export default Consultancy;
