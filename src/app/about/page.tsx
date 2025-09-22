import Image from "next/image";

export default function About() {
  return (
    <>
    <div className="p-8 pb-20 min-h-screen">
      <div className="text-center mb-10">
            <strong className="text-xl mb-3">ABOUT <span className="text-[#0064ec]">ME</span></strong>
            <h1 className="text-2xl sm:text-2xl lg:text-4xl md:text-3xl font-bold">Get to <span className="text-[#0064ec]">Know Us</span></h1>
      </div>

      <div className="flex flex-wrap gap-8 justify-around">
        <div className="">
          <Image
            src="/images/adarsh-pixar-transperent.png"
            alt="adarsh admane"
            width={512}
            height={512}
            className="" />
        </div>
        <div className="max-w-3xl">
          <h1 className="font-bold text-3xl mb-2">I'm <span className="text-[#0064ec]">Adarsh Adamane</span></h1>
          <p className="text-gray-600 max-w-xl font-bold text-2xl pb-2">I’m a <span className="text-[#0064ec]">creative</span> developer who loves turning ideas into interactive, <span className="text-[#0064ec]">user-friendly designs</span>.</p>
          <p className="font-semibold pb-5">A passionate Python Fullstack Developer with expertise in building robust web applications. I specialize in both frontend and backend development, ensuring seamless user experiences and efficient server-side operations. With a strong foundation in Python, I leverage frameworks like Django and Flask to create scalable solutions. My skills extend to database management, UI/UX design, and integrating modern technologies to deliver high-quality software products. Let's connect and bring your ideas to life!</p>
          <button className="font-bold bg-[#0064ec] text-white px-4 py-2 rounded-xl hover:bg-[#f1f2f8] hover:text-[#0064ec] hover:border-2">Let's Connect</button>

          {/* projects */}
          <div className="flex flex-wrap gap-8 justify-start mt-10 text-center">
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