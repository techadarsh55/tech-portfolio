import Image from "next/image";
import Link from "next/link";
import Projects from "./projects/page";

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
            className="font-bold p-4 px-8 text-xl rounded-full mt-8 bg-[#0064ec] text-white"
            >Contact Me</button>
          <button
            className="font-bold p-4 px-8 text-xl rounded-full mt-8 bg-[#ffffff] border-2 text-[#0064ec] :hover:background-[#0064ec] :hover:text-white cursor-pointer"
            >Projects</button>
        </div>
      </div>
      <div>
        
        <Image 
          src="/images/adarsh-pixar-transperent.png" 
          alt="adarsh admane" 
          width={512} 
          height={512}
          className="rounded-full min-w-[512px]"
          />
          
      </div>
    </div>

    {/* About Us Section */}
    <div
      className="bg-[#0064ec] text-white p-8 pb-20 rounded-b-3xl">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg">
        I'm Adarsh Admane, a passionate Python Fullstack Developer with expertise in building robust web applications. I specialize in both frontend and backend development, ensuring seamless user experiences and efficient server-side operations. With a strong foundation in Python, I leverage frameworks like Django and Flask to create scalable solutions. My skills extend to database management, UI/UX design, and integrating modern technologies to deliver high-quality software products. Let's connect and bring your ideas to life!
      </p>
      <br/>
      <strong className="text-2xl pb-4">Skills</strong>
      <ul>
        <li className="pb-2">
          <strong><span>&#10158;</span> Frontend:</strong> JavaScript, ReactJs, NextJs, HTML, CSS, BootStrap, TailwindCSS, heroui
        </li>
        <li className="pb-2">
          <strong><span>&#10158;</span> Backend:</strong> Python, Django, Flask, FastAPI, ExpressJs, NodeJS
        </li>
        <li className="pb-2">
          <strong><span>&#10158;</span> Databses:</strong> MySQL, PostgreSQL, MongoDB, S3 buckets
        </li>
        <li className="pb-2">
          <strong><span>&#10158;</span> Others:</strong> REST API, GraphQL, Docker, Git, GitHub, CI/CD, AWS, Netlify
        </li>
        <li>
          <strong>Experience:</strong> 4+ years in fullstack development, working on diverse projects ranging from small business websites to complex web applications.
        </li>       
      </ul>
    </div>

    {/* Project Sections */}

    <div className="p-8 pb-20">
      <h2 className="text-3xl font-bold my-8">Projects</h2>  
      <Projects />    
    </div>


    {/* contact form */}


    
    </>
  );
}
