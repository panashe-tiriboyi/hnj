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

const Academy = () => {
  return (
    <>
      <Head>
        <title>
          H&J Academy - Comprehensive Training in Statistical Software and
          Office Packages
        </title>
        <meta
          name="description"
          content="H&J Academy offers training in statistical software, academic research support, IDE guidance, and Microsoft Office packages. Empowering individuals and organizations with comprehensive learning services."
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
          <div className="min-w-full py-10 px-5 mt-5  flex flex-col gap-4 justify-center  items-center bg-academyBg bg-no-repeat bg-cover xl:px-72 xl:gap-8  xl:pb-0 ">
            <div>
              <Image
                src="/academyLogo.png"
                width={200}
                height={200}
                alt="logo"
              />
            </div>
            <div className="inline-block bg-primaryColor px-10 py-3 mt-10 text-sm font-semibold text-gray-700 mr-2 border-2 border-yw rounded-lg">
              <h2
                className={`${robotoSlab.className} text-white text-2xl text-center mx-5 `}
              >
                WELCOME TO H & J ACADEMY
              </h2>
            </div>
            <div
              className="  bg-white80 p-1 flex flex-col justify-center items-center border-2 rounded-2xl min-w-full text-center text-primaryColor font-bold  md:flex-row md:py-6
          "
            >
              <Image
                src="/academy2.png"
                width={300}
                height={400}
                alt="books image"
              />
              <span className="md:w-1/2">
                H&J Academy is a leading training school that specializes in
                providing comprehensive training in statistical software,
                academic research support, project assistance, IDE guidance, and
                Microsoft Office packages. With a team of experienced
                professionals and a commitment to excellence, we empower
                individuals and organizations to enhance their statistical and
                research capabilities while mastering essential office
                productivity tools. We offer both physical and online services
                to cater to diverse learning needs.
              </span>
            </div>
            <div className="inline-block bg-subtleblue px-2  py-3 mb-20 text-sm font-semibold text-gray-700 mr-2 border-2 border-yw rounded-xl ">
              <h2
                className={`${robotoSlab.className} text-primaryColor text-2xl text-center `}
              >
                Products AND SERVICES
              </h2>
            </div>
          </div>
          <div class="bg-green-500 mt-[-45%] px-5  gap-4 justify-center items-center  grid grid-cols-1 lg:grid-cols-2 lg:gap-0 xsm:mt-[-30%] sm:mt-[-20%] md:mt-[-15%] xl:mt-[-10%] lg:px-0">
            <Card2
              key={1}
              cardName="Training Services"
              imageSrc="/trainngServices.png"
              content={
                <ul className="text-start list-disc">
                  <li>
                    statistical software, including R, Stata, SPSS, Python,
                    JavaScript, MATLAB, SAS
                  </li>
                  <li>
                    Microsoft Office packages such as Advanced Excel, Power BI,
                    PowerPoint, and Access
                  </li>
                  <li>
                    gain proficiency in data analysis, statistical modeling,
                    programming, data visualization,
                  </li>
                </ul>
              }
              message="Hello! I'm interested in your comprehensive Training Services. I would like to inquire about the available training programs and consultation options. Specifically, I'm looking for support in research proposal development, data collection and analysis, literature review, academic writing, research publication, and citation management. Can you provide more details on the courses and consultation formats available, as well as any upcoming sessions? Thank you!"
              btnName="Book Now"
            />
            <Card2
              key={2}
              cardName="Academic Reasearch Support"
              imageSrc="/academicResearch.png"
              content={
                <ul className="text-start list-disc">
                  <li>comprehensive rigorous academic research.</li>
                  <li>Research proposal development</li>
                  <li>Data collection and analysis</li>
                  <li>Literature review</li>
                  <li>Academic writing</li>
                  <li>Research publication</li>
                  <li>Citation management</li>
                </ul>
              }
              message="Hi there! I'm interested in your Academic Research Support services. I would like to know more about the training programs you offer on statistical software and Microsoft Office packages. Could you share information about the courses designed for individuals with varying levels of expertise? Additionally, I'm curious about the availability of both physical and online training sessions. Thank you!"
              btnName="Book Now"
            />
            <Card2
              key={3}
              cardName="IDE Guidance"
              imageSrc="/ide.png"
              content={
                <ul className="text-start list-disc">
                  <li>
                    We provide comprehensive guidance and training on Integrated
                    Development Environments (IDEs)
                  </li>
                  <li>
                    {" "}
                    Such as RStudio, Jupyter Notebook, MATLAB, SAS Studio, and
                    other popular development environments.{" "}
                  </li>
                  <li>Both in-person and online</li>
                </ul>
              }
              message="Greetings! I'm looking for guidance on Integrated Development Environments (IDEs) for programming and data analysis. Specifically, I'm interested in learning about RStudio, Jupyter Notebook, MATLAB, SAS Studio, and other popular IDEs. Can you provide more details on the assistance and training you offer, both in-person and online? I appreciate your support!"
              btnName="Book Now"
            />
            <Card2
              key={4}
              cardName="Microsoft Office Packages"
              imageSrc="/officeLogos.png"
              content={
                <ul className="text-start list-disc">
                  <li>
                    We provide training on Microsoft Office packages, including
                    Excel, Word, PowerPoint, and Access.
                  </li>
                  <li>Both in-person and online</li>
                  <li>
                    We offer flexibility to accommodate different learning
                    preferences and geographical constraints.
                  </li>
                </ul>
              }
              message="Hello H&J Academy! I'm interested in your Microsoft Office Packages training. I would like to learn more about the courses covering Excel, Word, PowerPoint, and Access. Can you share details on the training sessions, including options for physical attendance at your academy and access to online materials and webinars? Thank you!"
              btnName="Book Now"
            />
          </div>
          <div className="min-w-full  px-2 z-6  mt-4 gap-4 flex flex-col justify-center items-center text-center  text-primaryColor lg:px-40">
            <div className="inline-block bg-primaryColor px-2 py-3 mt-10 text-sm font-semibold text-gray-700 mr-2 border-2 border-yw rounded-lg">
              <h2 className={`${robotoSlab.className} text-white text-2xl `}>
                OUR YOUTUBE CHANNEL
              </h2>
            </div>
            H&J Online Academy (formerly PassMaths Online Academy) provides
            in-depth and clear explanations of various concepts and problems
            across all academic fields.
            <Image
              src="/ytPlaceholder.png"
              width={400}
              height={400}
              alt="youtube place holder image"
            />
            <button class="bg-blue-500 hover:bg-blue-700 text-white bg-primaryColor font-bold py-2 px-4 rounded border border-yw">
              All Videos
            </button>
          </div>
          <div className="bg-cover min-w-full  z-6  mt-4 gap-4  justify-center items-center xl:w-screen">
            <Image
              className="w-screen"
              src="/team2.png"
              width={400}
              height={400}
              alt="team image"
            />
          </div>
          <div className="bg-green-500 mt-[-20%] px-5  gap-4 flex flex-col justify-center items-center text-center text-primaryColor xsm:mt-[-10%] lg:mt-[-7%] lg:px-40 xl:mt-[-55%] xl:px-0">
            <div className="inline-block bg-primaryColor px-1 py-3 mt-10 text-sm font-semibold text-gray-700 mr-2 border-2 border-yw rounded-lg">
              <h2
                className={`${robotoSlab.className} text-white text-2xl text-center mx-5 `}
              >
                MEET OUR TEAM
              </h2>
            </div>
            <div className="xl:bg-subtleblue xl:min-w-full xl:pt-20 xl:pb-64 xl:px-40">
              Our team at H&J Academy comprises experienced professionals with
              expertise in statistical analysis, research methodologies,
              programming, project management, and office productivity tools. We
              have a diverse group of trainers and consultants who are
              passionate about delivering high-quality training and support. Our
              team stays updated with the latest industry trends, software
              advancements, and best practices, ensuring that our clients
              receive the most relevant and valuable guidance.
            </div>
            <div className="flex flex-col xl:flex-row justify-center items-center xl:gap-40 xl:mt-[-15%] ">
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="/johannesMachinya.png"
                  width={400}
                  height={400}
                  alt="Johannes Machinya image"
                />
                <p>
                  <b>Johannes Machinya</b>
                </p>
                <p>CEO and Co-founder BSc Honours in Actuarial Science</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="/hlamalaniChauke.png"
                  width={400}
                  height={400}
                  alt="Hlamalani Chauke image"
                />
                <p>
                  <b>Hlamalani Chauke</b>
                </p>
                <p>
                  Managing Director and Co-founder BSc Honours in Actuarial
                  Science
                </p>
              </div>
            </div>
          </div>
          <div className="bg-cover min-w-full  z-6  mt-4 gap-4  justify-center items-center">
            <Image
              className="md:hidden w-full"
              src="/books.png"
              width={400}
              height={400}
              alt="books image"
            />
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

export default Academy;
