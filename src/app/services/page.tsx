import React from "react";

interface ServiesProps {

}

export default function Services() {
    return (
        <>
            <div
                className="p-8 pb-20"
                >
                <div>
                    <span className="pb-4 text-lg font-semibold">My Specialization</span>
                    <h2 className="text-3xl font-bold mb-4"><span className="text-[#0064ec]">Services</span> I Provide</h2>
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
        </>
    )
}