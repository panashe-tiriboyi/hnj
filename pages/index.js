import Image from "next/image";
import { Inter } from "next/font/google";
import { Divider } from "antd";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import { Roboto_Slab } from "next/font/google";
import ContactUsForm from "@/components/ContactUsForm";
import CustomFooter from "@/components/CustomFooter";
import Link from "next/link";
import Head from "next/head";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-robotoSlab",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "hnj",
};

export default function Home() {
  return (
    <>
      <Head>
        <title>
          H&J Consultancy and Academy - Your Partner in Data and Training
        </title>
        <meta
          name="description"
          content="H&J Consultancy and Academy - Offering comprehensive data-driven solutions and top-notch training in statistical software, academic research, and more."
        />{" "}
        <meta
          name="keywords"
          content="consultancy, data-driven solutions, training, statistical software, academic research, actuarial services, big data analytics, digital transformation"
        />
        <meta name="author" content="H&J" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Open Graph meta tags for better social sharing */}
        <meta property="og:title" content="H&J Consultancy and Academy" />
        <meta
          property="og:description"
          content="Your partner in data-driven solutions and top-notch training."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/hnjLogo.png" />
        <meta property="og:url" content="https://hnj.co.zw" />
        {/* Twitter meta tags for better Twitter sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="H&J Consultancy and Academy" />
        <meta
          name="twitter:description"
          content="Your partner in data-driven solutions and top-notch training."
        />
        <meta name="twitter:image" content="/hnjLogo.png" />
      </Head>
      <Navbar />
      <main
        className={`flex min-h-screen flex-col justify-center  items-center  ${inter.className} `}
      >
        <div className="min-w-full py-10  mt-5 min-h-screen gap-4 flex  flex-col justify-center  items-center bg-homeBg bg-no-repeat bg-cover">
          <div>
            <Image src="/hnjLogo.png" width={200} height={200} alt="logo" />
          </div>
          <div className="xl:w-1/3  bg-primaryColor px-1 py-3 text-sm font-semibold text-gray-700 m-3 border-2 border-yw rounded-lg ">
            <h2
              className={`${robotoSlab.className}  text-white text-2xl text-center mx-5 xl:text-4xl  xl:py-5`}
            >
              Empowering Businesses and Individuals with Data-Driven Solutions
              and Skill Development
            </h2>
          </div>

          <div className="flex flex-col gap-10 xl:flex xl:flex-row xl:gap-20">
            <Card
              key={1}
              imageSrc="/consultancy.png"
              cardName="Consultancy"
              content="We are your one-stop shop for all things data. Our team of
               qualified actuaries, data scientists, and statistical wizards
               leverages the latest tools and techniques to extract meaningful
               insights from your data. We don't just crunch numbers; we
               translate them into actionable strategies that guide your
               success."
              btnName="Learn More"
              href="/consultancy"
            />

            <Card
              key={2}
              imageSrc="/academy.png"
              cardName="Academy"
              content=" We believe that knowledge is power, and we're passionate about sharing
              it. Our academy offers a diverse range of training programs designed
              to equip individuals and organizations with the skills they need to
              excel in today's data-driven landscape."
              btnName="Get Started"
              href="/academy"
            />
          </div>
        </div>

        <div className=" min-w-full bg-primaryColor flex min-h-screen flex-col   items-center p-10">
          <div className="inline-block bg-subtleblue px-10 py-3 mt-10 text-sm font-semibold text-gray-700 mr-2 border-2 border-yw rounded-lg">
            <h2
              className={`${robotoSlab.className} text-primaryColor text-2xl font-bold `}
            >
              CORE PROPOSITIONS
            </h2>
          </div>
          <div className="inline-block bg-subtleblue px-10 py-3 mt-10 text-sm font-semibold text-gray-700 mr-2 border-2 border-yw rounded-lg text-center xl:text-xl xl:mx-20 xl:w-1/3">
            <b>Data-Driven Insights for Smart Decisions:</b> We harness the
            power of data to unlock actionable insights and guide your success.
          </div>
          <div className="inline-block bg-subtleblue px-10 py-3 mt-10 text-sm font-semibold text-gray-700 mr-2 border-2 border-yw rounded-lg text-center xl:text-xl xl:mx-20 xl:w-1/3">
            <b>Unleashing Potential Through Training:</b> Equip yourself and
            your team with the skills and knowledge to thrive in today&apos;s
            competitive landscape.
          </div>
          <div className="inline-block bg-subtleblue px-10 py-3 mt-10 text-sm font-semibold text-gray-700 mr-2 border-2 border-yw rounded-lg text-center xl:text-xl xl:mx-20 xl:w-1/3">
            <b>Tailored Solutions, Exceptional Results:</b> We partner with you
            to understand your unique needs and deliver solutions that drive
            tangible outcomes.
          </div>
        </div>
        <div
          id="aboutUs"
          className="min-w-full  bg-subtleblue flex  flex-col   items-center "
        >
          <div className="inline-block bg-primaryColor px-10 py-3 mt-10 text-sm font-semibold text-gray-700 mr-2 border-2 border-yw rounded-lg">
            <h2 className={`${robotoSlab.className} text-white text-2xl `}>
              ABOUT US
            </h2>
          </div>
          <div className="inline-block bg-primaryColor px-10 py-3 mt-10 text-sm font-semibold text-gray-700 mr-2 border-2 border-yw rounded-lg">
            <h2 className={`${robotoSlab.className} text-white text-2xl `}>
              H&J Consultancy & Academy - Empowering Your Success Through Data
              and Skills
            </h2>
          </div>
          <div className="flex flex-col items-center xl:flex-row xl:mx-52 xl:my-2  ">
            {" "}
            <Image
              className="w-full xl:w-1/2"
              src="/aboutUs.png"
              width={200}
              height={200}
              alt="about us vector image"
            />
            <div className=" bg-primaryColor  flex  flex-col   items-center p-10 text-center text-white xl:text-xl xl:w-1/2 xl:h-full ">
              At H&J, we believe in the power of data and knowledge to unlock
              incredible possibilities. We&apos;re a dynamic duo, seamlessly
              blending the expertise of H&J Consultancy, a data-driven
              powerhouse, and H&J Academy, a haven for skill development.
            </div>
          </div>
          <div className="inline-block bg-subtleblue px-10 py-3  text-sm font-semibold text-gray-700 mr-2 border-2 border-yw rounded-lg">
            <h2
              className={`${robotoSlab.className} text-primaryColor text-2xl `}
            >
              OUR MISSION
            </h2>
          </div>
          <div className="inline-block bg-subtleblue px-10 py-3 mt-10 text-sm font-semibold text-gray-700 mr-2 border-2 border-yw rounded-lg text-center xl:text-xl xl:mx-20">
            To empower businesses and individuals alike with the tools,
            insights, and expertise they need to thrive in today&apos;s
            data-driven world.
          </div>
          <div className="inline-block bg-subtleblue px-10 py-3 mt-10 text-sm font-semibold text-gray-700 mr-2 border-2 border-yw rounded-lg">
            <h2
              className={`${robotoSlab.className} text-primaryColor text-2xl `}
            >
              OUR VALUES
            </h2>
          </div>
          <div className="inline-block bg-subtleblue px-10 py-3 mt-10 text-sm font-semibold text-gray-700 mr-2 border-2 border-yw rounded-lg text-center xl:text-xl xl:mx-20">
            <ul>
              <li>Integrity</li>
              <li>Data Privacy And Security</li>
              <li>Innovation</li>
              <li>Prifessionalism</li>
              <li>Client Satisfaction</li>
            </ul>
          </div>
          <div
            className={` min-w-full bg-primaryColor ${robotoSlab.className} text-white text-2xl text-center p-20 mt-5 `}
          >
            <div className="my-1"> H&J Consultancy & Academy</div>

            <div className="my-1">
              Your partner for strategic decision-making and academic
              excellence.
            </div>
          </div>
          <div className="flex flex-col  xl:flex xl:flex-row mt-5 gap-5 ">
            <div className=" xl:w-1/2 border-2 border-yw rounded-lg mx-2 py-5">
              <h2
                className={`${robotoSlab.className} text-primaryColor text-3xl text-center font-bold `}
              >
                Consultancy
              </h2>

              <div className="inline-block bg-subtleblue px-10 py-3 mt-10 text-sm font-semibold text-gray-700 mr-2  text-center xl:text-xl xl:mx-20">
                <h2
                  className={`${robotoSlab.className} text-primaryColor text-2xl `}
                >
                  Our data-driven solutions encompass
                </h2>
                <ul className="text-start space-y-2">
                  <li>
                    <b>Big Data Analytics:</b> Uncover hidden patterns and
                    trends in your data to optimize operations, inform strategic
                    decisions, and gain a competitive edge.
                  </li>
                  <li>
                    <b>Actuarial Services:</b> Navigate risk with confidence
                    with our comprehensive actuarial solutions, ranging from
                    product pricing and solvency analysis to managing and
                    optimizing insurance portfolios.
                  </li>
                  <li>
                    <b>Digital Transformation:</b> Embrace the power of
                    technology to automate processes, streamline workflows, and
                    unlock new opportunities for growth.
                  </li>
                  <button
                    href="/consultancy"
                    class="hover:bg-blue-700 text-white bg-secondaryColor font-bold py-2 px-4 rounded border border-yw"
                  >
                    <Link href="/consultancy">View More</Link>
                  </button>
                </ul>
              </div>
            </div>

            <div className=" xl:w-1/2 border-2 border-yw rounded-lg mx-2 py-5">
              <h2
                className={`${robotoSlab.className} text-primaryColor text-3xl text-center font-bold`}
              >
                H&J Academy
              </h2>

              <div className=" inline-block bg-subtleblue px-10 py-3 mt-10 text-sm font-semibold text-gray-700 mr-2  text-center xl:text-xl xl:mx-20">
                <h2
                  className={`${robotoSlab.className} text-primaryColor text-2xl `}
                >
                  Our comprehensive training programs cover
                </h2>
                <ul className="text-start space-y-2">
                  <li>
                    <b>Statistical Software:</b> Master cutting-edge software
                    like R, Python, and Stata to analyze data effectively and
                    draw meaningful conclusions.
                  </li>
                  <li>
                    <b>Academic Research Support:</b> Get expert guidance on
                    every step of the research process, from proposal
                    development to data analysis and publication.
                  </li>
                  <li>
                    <b>IDE Guidance:</b> Navigate popular Integrated Development
                    Environments like RStudio and Jupyter Notebook with
                    confidence and unlock your programming potential.
                  </li>
                  <button
                    href="/academy"
                    class="hover:bg-blue-700 text-white bg-secondaryColor font-bold py-2 px-4 rounded border border-yw"
                  >
                    <Link href="/academy">View More</Link>
                  </button>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="min-w-full  bg-subtleblue flex  flex-col   items-center">
          <ContactUsForm />
        </div>
        <CustomFooter />
      </main>
    </>
  );
}
