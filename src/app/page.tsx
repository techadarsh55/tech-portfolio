"use client";

import Image from "next/image";
import Projects from "./projects/page";
import Services from "./services/page";
import Contact from "./contact/page";
import About from "./about/page";
import { useRouter } from "next/navigation";

import "./styles/animation.css";
import { useEffect } from "react";


export default function Home() {
  const router = useRouter();
  const tiles = Array.from({ length: 600 });

  useEffect(() => {
      const container = document.getElementById("main-container");
      if (!container) return;
  
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.boundingClientRect.top <= 0) {
            console.log("main-container touched the top!");
          }
        },
        { threshold: [0] }
      );
  
      observer.observe(container);
      return () => observer.disconnect();
    }, []);


  return (
    <>
    <div className="relative min-h-[100vh] w-full">
      {/* Waves */}
      <div className="circle -one"></div>
      <div className="circle -two"></div>
      <div className="circle -three"></div>

      <div className="px-5 py-2 lg:px-8">
        <div>
        <div className="glassmorphism rounded-3xl">  
          <div className="relative w-full top-0 flex flex-col-reverse sm:flex-row justify-evenly items-center lg:p-20 md:p-15 sm:p-10 pb-20 gap-5 lg:min-h-[90vh]">
            <div className="p-8">
              <p className="text-gray-400 text-sm font-semibold">WELCOME TO MY WORLD</p>
              <h1 className="font-bold mb-8 text-4xl lg:text-6xl md:text-5xl inline-he-block" style={{lineHeight: "1.2"}}>
                Hi, I&apos;m <span className="text-[#0064ec]">Adarsh Admane,</span> <br/>Python <span className="text-[#0064ec]">Fullstack </span>Developer
              </h1>
              <p className="text-gray-500 text-xl">
                I&apos;m a professional software engineer. I craft modern web apps from front to back. From intuitive UIs to scalable backends, I love building clean, efficient, and user-friendly solutions.
              </p>
              
              <div className="flex lg:justify-start sm:justify-evenly sm:flex-wrap place-items-center gap-4 pt-6">
                <button
                  className="font-bold p-4 lg:px-8 lg:text-xl md:text-xl rounded-full mt-8 bg-[#0064ec] text-white sm:text-md cursor-pointer shadow-2xl"
                  onClick={() => router.push('/contact')}
                  >
                    <i className="fa-solid fa-paper-plane pr-2"></i>
                    Contact Me</button>
                <button
                  className="font-bold p-4 lg:px-8 lg:text-xl md:text-xl rounded-full sm:text-md mt-8 border-2 text-[#0064ec] hover:bg-[#0064ec] hover:text-white cursor-pointer hover:shadow-lg"
                  onClick={() => router.push('/projects')}
                  >See My Work &rarr;</button>
              </div>
            </div>
            <div>
              
              <Image 
                src="/images/adarsh3.svg" 
                alt="adarsh admane" 
                width={512} 
                height={512}
                loading="lazy"
                className="p-5 min-w-full lg:min-w-[512px] md:min-w-[450px] sm:min-w-[250px] lg:p-5 md:p-5 sm:p-5 rounded-br-[40%]"
                />
                
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    
    {/* Hero Section */}
     {/* <div
      // ai
      className="flex flex-col-reverse sm:flex-row justify-evenly items-center lg:p-20 md:p-15 sm:p-10 pb-20 gap-5 lg:min-h-screen">
      <div className="p-8">
        <p className="text-gray-400 text-sm font-semibold">WELCOME TO MY WORLD</p>
        <h1 className="font-bold mb-8 text-4xl lg:text-6xl md:text-5xl inline-he-block" style={{lineHeight: "1.2"}}>
          Hi, I&apos;m <span className="text-[#0064ec]">Adarsh Admane,</span> <br/>Python <span className="text-[#0064ec]">Fullstack </span>Developer
        </h1>
        <p className="text-gray-500 text-xl">
          I&apos;m a professional software engineer. I craft modern web apps from front to back. From intuitive UIs to scalable backends, I love building clean, efficient, and user-friendly solutions.
        </p>
        
        <div className="flex sm:flex-wrap place-items-center gap-4 pt-6">
          <button
            className="font-bold p-4 lg:px-8 lg:text-xl md:text-xl rounded-full mt-8 bg-[#0064ec] text-white sm:text-md cursor-pointer shadow-2xl"
            onClick={() => router.push('/contact')}
            >
              <i className="fa-solid fa-paper-plane pr-2"></i>
              Contact Me</button>
          <button
            className="font-bold p-4 lg:px-8 lg:text-xl md:text-xl rounded-full sm:text-md mt-8 border-2 text-[#0064ec] hover:bg-[#0064ec] hover:text-white cursor-pointer hover:shadow-lg"
            onClick={() => router.push('/projects')}
            >See My Work &rarr;</button>
        </div>
      </div>
      <div>
        
        <Image 
          src="/images/adarsh3.svg" 
          alt="adarsh admane" 
          width={512} 
          height={512}
          loading="lazy"
          className="p-5 min-w-full lg:min-w-[512px] md:min-w-[450px] sm:min-w-[250px] lg:p-5 md:p-5 sm:p-5 rounded-br-[40%]"
          />
          
      </div>
    </div> */}
    
     <div className="">
      <About />
    </div>

    
    <div>
      <Services />
    </div>

    <div>       
      <Projects />    
    </div>

    {/*


      */}
    </>
  );
}
