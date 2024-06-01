import { useRef } from "react";
import ContactForm from "./ContactForm";

function Home() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-white font-sans">
      <div className="w-full flex flex-row justify-between  items-center p-2 py-2  sm:px-6 shadow-lg border-b border-customGray border-solid">
        <img src={"/Logo.svg"} alt="logo" className="w-36  p-2 h-full" />
        <nav className="p-2 sm:p-4">
          <ul className="flex space-x-6">
            <li>
              <a
                href="#home"
                onClick={() => scrollToSection(homeRef)}
                className="hover:text-purple-900/70"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#features"
                onClick={() => scrollToSection(featuresRef)}
                className="hover:text-purple-900/70"
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => scrollToSection(contactRef)}
                className="hover:text-purple-900/70"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <section
        ref={homeRef}
        id="home"
        style={{ minHeight: "110dvh" }}
      >
        <div className="relative w-full border">
          <div className=" w-full flex flex-row justify-between m-auto items-center p-2">
            <div className="relative ml-12  flex justify-center items-center">
              <img
                src={"/pinkShadow.png"}
                className="absolute ml-2 right-0 flex justify-center items-center  w-[90%] rotate-[25deg]"
              />
              <img
                src={"/blueShadow.png"}
                className="absolute mr-2 left-0 flex justify-center items-center w-[90%] -rotate-[25deg]"
              />
              <div className="z-[9999] p-2 ">
                <h1 className="text-4xl text-center font-semibold mb-4">
                  Unify, Collaborate, Succeed!
                </h1>
                <p className="text-md font-light mb-8 text-center ">
                  Empower Your Projects, Your Way, with UniTask by Your Side.
                </p>
                <button className=" bg-white border hover:bg-slate-200 text-black font-semibold shadow-lg py-2 px-4 rounded-lg">
                  Get Started
                </button>
              </div>
            </div>
            <div className="">
              <img
                src={"Homeimg1.svg"}
                alt="homeimg"
                className="p-2 mr-12"
              />
              {/*<img
                src={"Ellipse 1197.svg"}
                alt="homeimg"
                className="p-2 border mr-16 border-red-500"
  />*/}
            </div>
            
            
          </div>
          <div className="py-20 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-primaryGray bg-opacity-80 p-4 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold mb-4">Easy to use</h3>
                <p className="text-gray-700">
                  Simplified chore lists with intuitive layout for seamless daily
                  planning
                </p>
              </div>
              <div className="bg-primaryGray bg-opacity-80 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold mb-4">Full Support</h3>
                <p className="text-gray-700">
                  Empower your productivity with personalized task management guided
                  by your rules
                </p>
              </div>
              <div className="bg-primaryGray bg-opacity-80 p-4 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold mb-4">Never feel lost</h3>
                <p className="text-gray-700">
                  Stay seamlessly connected to your tasks anytime, anywhere with our
                  sync mobile app
                </p>
              </div>
            </div>
          <img
            src={"/Lines.png"}
            className="absolute left-0 -top-[30%] right-0 w-[100%]  border-2 border-dotted border-green-300 "
          />
        </div>
      </section>

      <section 
        ref={aboutRef}
        id="home"
        style={{ minHeight: "100dvh" }}
        className="py-20 px-6 text-center"
      >
        <div style={{ minHeight: "70dvh" }}  className="w-full flex flex-row justify-between m-auto items-center bg-primaryGray bg-opacity-80 rounded-lg shadow-md">
          <img
            src={"/aboutimg.svg"}
            alt="aboutimg"
            className="p-2 border w-80 h-80 mr-16"
          />
          <p className="text-lg mb-8" >
          Elevate efficiency while nurturing well-being with UniTasks online
          platform. Seamlessly integrating productivity and mindfulness, our
          solution provides a holistic approach to tackling daily tasks and
          challenges. Prioritize mental wellness as you optimize productivity,
          finding balance and focus within a unified workspace. UniTask empowers
          you to thrive, both professionally and personally, by harmonizing task
          management with self-care practices.
          </p>
        </div>
      </section>

      <footer
        ref={contactRef}
        id="contact"
        className="py-6 px-6"
      >
        <ContactForm />
        <p className="mt-6 p-6 border-t-2 border-customGray border-solid text-center">&copy; 2024 UniTask. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;

