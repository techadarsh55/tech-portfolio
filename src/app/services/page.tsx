import Image from "next/image";
import React from "react";

interface skillsProps {
    name: string;
    icon: string;
    imgSrc: string;
}

const skillList = [
    { name: "Python", icon: "python", imgSrc: "/skills/python.webp" },
    { name: "Django", icon: "django", imgSrc: "/skills/django.jpg" },
    { name: "FastAPI", icon: "fastapi", imgSrc: "/skills/fastapi.jpg" },
    { name: "Flask", icon: "flask", imgSrc: "/skills/flask.jpg" },
    { name: "React", icon: "react", imgSrc: "/skills/react.webp" },
    { name: "Nextjs", icon: "nextjs", imgSrc: "/skills/nextjs.png" },
    { name: "BootStrap", icon: "bootstrap", imgSrc: "/skills/bootstrap.webp" },
    { name: "JQuery", icon: "jquery", imgSrc: "/skills/jquery.gif" },
    { name: "MySQL", icon: "mysql", imgSrc: "/skills/mysql.png" },
    { name: "PostgreSQL", icon: "postgresql", imgSrc: "/skills/postgresql.png" },
    { name: "AWS", icon: "aws", imgSrc: "/skills/aws.png" },
    { name: "Docker", icon: "docker", imgSrc: "/skills/docker.png" },
    { name: "Figma", icon: "figma", imgSrc: "/skills/figma.png" },
    { name: "Github", icon: "github", imgSrc: "/skills/github.png" },
    { name: "Apache", icon: "apache", imgSrc: "/skills/apache.png" },
    { name: "VSCode", icon: "vscode", imgSrc: "/skills/vscode.png" }
]

export default function Services() {
    return (
        <>
        <div className="p-8 pb-20 min-h-screen">
        <div className="pb-10">
            <div className="text-center mb-6">
                <strong className="text-xl  mb-3">MY <span className="text-[#0064ec]">SKILLS</span></strong>
                <h1 className="text-2xl sm:text-2xl lg:text-4xl md:text-3xl font-bold">Expert in this technical <br/> <span className="text-[#0064ec]">coding & softwares</span></h1>
            </div>

            {/* coding list */}
            <div className="flex flex-wrap justify-center sm:p-4 sm:gap-5 lg:gap-8 lg:p-10 md:p-8 md:gap-6 gap-4">
                {skillList.map((skill: skillsProps) => (
                    <div className="bg-white p-4 rounded-xl flex flex-col gap-2 items-center shadow-md hover:scale-105 transition-transform duration-300" key={skill.name}>
                        <Image
                            src={skill.imgSrc}
                            alt={skill.name}
                            width={50}
                            height={50}
                            className="rounded-xl"
                                />
                        <p className="text-center font-bold">{skill.name}</p>
                    </div>
                ))}             
            </div>
        </div>   

        <div className="">           
            <div className="text-center mb-10">
                <strong className="text-xl  mb-3">MY <span className="text-[#0064ec]">SPECIALIZATION</span></strong>
                <h1 className="text-2xl sm:text-2xl lg:text-4xl md:text-3xl font-bold">Custom development services tailored<br/> <span className="text-[#0064ec]">to business needs</span></h1>
            </div>

            <div className="flex flex-nowrap">
                {/* Service Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white rounded-2xl shadow-md p-6">
                        <span className="text-[#0064ec] mb-2"><i className="fa-solid fa-code fa-2x"></i></span>
                        <h3 className="text-xl font-bold mb-2">Frontend Development</h3>
                        <p className="text-gray-600 mb-4">Crafting responsive and user-friendly interfaces using React, Next.js, and modern CSS frameworks.</p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-md p-6">
                        <span className="text-[#0064ec] mb-2"><i className="fab fa-python fa-2x" aria-hidden="true"></i></span>
                        <h3 className="text-xl font-bold mb-2">Backend Development</h3>
                        <p className="text-gray-600 mb-4">Building robust and scalable server-side applications with Python, Django, Flask, and FastAPI.</p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-md p-6">
                        <span className="text-[#0064ec] mb-2"><i className="fa-solid fa-database fa-2x"></i></span>
                        <h3 className="text-xl font-bold mb-2">Database Management</h3>
                        <p className="text-gray-600 mb-4">Designing and optimizing databases using PostgreSQL, MySQL, and MongoDB for efficient data storage and retrieval.</p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-md p-6">
                        <span className="text-[#0064ec] mb-2"><i className="fa-solid fa-swatchbook fa-2x"></i></span>
                        <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
                        <p className="text-gray-600 mb-4">Creating intuitive and engaging user experiences with a focus on usability and aesthetics.</p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-md p-6">
                        <span className="text-[#0064ec] mb-2"><i className="fa-solid fa-layer-group fa-2x"></i></span>
                        <h3 className="text-xl font-bold mb-2">API Development</h3>
                        <p className="text-gray-600 mb-4">Developing RESTful and GraphQL APIs to enable seamless communication between frontend and backend systems.</p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-md p-6">
                        <span className="text-[#0064ec] mb-2"><i className="fa-solid fa-terminal fa-2x"></i></span>
                        <h3 className="text-xl font-bold mb-2">Deployment & DevOps</h3>
                        <p className="text-gray-600 mb-4">Implementing CI/CD pipelines and deploying applications on cloud platforms like AWS, Heroku, and Vercel.</p>
                    </div>
                </div>
            </div>                
        </div>
        </div>
        </>
    )
}