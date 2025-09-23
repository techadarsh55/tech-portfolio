"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();
  return (
    <>
    <div className="p-8 pb-20 min-h-[90%]">
      <div className="text-center mb-10">
            <strong className="md:text-xl lg:text-xl sm:text-md mb-4">ABOUT <span className="text-[#0064ec]">ME</span></strong>
            <h1 className="text-2xl sm:text-2xl lg:text-4xl md:text-3xl font-bold">Get to <span className="text-[#0064ec]">Know Us</span></h1>
      </div>

      <div className="flex flex-wrap gap-8 justify-evenly">
        <div className="">
          <Image
            src="/images/about.png"
            alt="adarsh admane"
            width={450}
            height={450}
            className="lg:w-[512px] md:w-[250px] sm:w-[512px]" />
        </div>
        <div className="lg:max-w-3xl lg:text-start sm:text-center">
          <h1 className="font-bold text-3xl mb-2">I'm <span className="text-[#0064ec]">Adarsh Adamane</span></h1>
          <p className="text-gray-600 font-bold text-2xl pb-2">I’m a <span className="text-[#0064ec]"></span> creative developer who loves turning ideas into interactive, user-friendly designs<span className="text-[#0064ec]"></span>.</p>
          <p className="pb-5 text-gray-400 text-xl">A passionate Python Fullstack Developer with expertise in building robust web applications. I specialize in both frontend and backend development, ensuring seamless user experiences and efficient server-side operations. With a strong foundation in Python, I leverage frameworks like Django and Flask to create scalable solutions. My skills extend to database management, UI/UX design, and integrating modern technologies to deliver high-quality software products. Let's connect and bring your ideas to life!</p>
          <button
            onClick={() => router.push('/contact')} 
            className="font-bold bg-[#0064ec] text-white px-4 py-2 rounded-xl hover:bg-[#f1f2f8] hover:text-[#0064ec] hover:border-2">Let's Connect</button>

          {/* projects */}
          <div className="flex flex-wrap gap-8 justify-center mt-10 text-center">
            <div>
              <p className="text-xl text-[#0064ec] font-bold">4+ years</p>
              <p className="text-2xl text-[#1c2b33] font-extrabold">Experience</p>
            </div>
            <hr  className="h-[54px] bg-[#0064ec] w-[2px]"/>
            <div>
              <p className="text-xl text-[#0064ec] font-bold">8+</p>
              <p className="text-2xl text-[#1c2b33] font-extrabold">Projects</p>
            </div>
            <hr  className="h-[54px] bg-[#0064ec] w-[2px]"/>
            <div>
              <p className="text-xl text-[#0064ec] font-bold">Computer Science</p>
              <p className="text-2xl text-[#1c2b33] font-extrabold">Education</p>
            </div>            
          </div>
        </div>        
      </div>
      </div>
    
    </>
  );
}