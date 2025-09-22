import Image from "next/image";
import Link from "next/link";
import Projects from "./projects/page";
import Footer from "@/components/Footer";
import Services from "./services/page";
import Contact from "./contact/page";
import Skills from "./skills/page";
import About from "./about/page";

export default function Home() {
  return (
    <>
    
    {/* Hero Section */}
    <div className="flex flex-col-reverse sm:flex-row justify-around items-center p-8 pb-20 gap-8 min-h-screen">
      <div>
        <h1 className="font-bold mb-8 text-4xl lg:text-6xl md:text-5xl inline-he-block" style={{lineHeight: "1.2"}}>
          Hi,<br/> I'm <span className="text-[#0064ec]">Adarsh Admane,</span> <br/>Python Fullstack Developer
        </h1>
        <p className="text-gray-400 text-xl">
          "I'm a professional software engineer. I craft modern web apps from front to back. From intuitive UIs to scalable backends, I love building clean, efficient, and user-friendly solutions.
        </p>
        {/* <div className="flex gap-4 text-lg text-gray-500 mt-4">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-4xl">Code</span>
          <span className="bg-blue-500 text-white px-4 py-1 rounded-4xl">Design</span>
          <span className="bg-blue-500 text-white px-4 py-1 rounded-4xl">Scale</span>
        </div> */}
        <div className="flex gap-4 pt-6">
          <button
            className="font-bold p-4 px-8 lg:text-xl md:text-xl rounded-full mt-8 bg-[#0064ec] text-white sm:text-lg"
            >Contact Me</button>
          <button
            className="font-bold p-4 px-8 lg:text-xl md:text-xl rounded-full sm:text-lg mt-8 bg-[#ffffff] border-2 text-[#0064ec] :hover:background-[#0064ec] :hover:text-white cursor-pointer"
            >Projects</button>
        </div>
      </div>
      <div>
        
        <Image 
          src="/images/Mask group.png" 
          alt="adarsh admane" 
          width={512} 
          height={512}
          className="lg:min-w-[512px] md:min-w-[450px] sm:min-w-[250px] rounded-b-full"
          />
          
      </div>
    </div>

    {/* about us  */}
    <div>
      <About />
    </div>

    {/* service provide */}
    <div>
      <Services />
    </div>

    {/* Project Sections */}
    <div className="">       
      <Projects />    
    </div>

    {/* contact form */}
    <section>
      <Contact />
    </section>

    </>
  );
}
