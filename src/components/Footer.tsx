"use client"
import React from "react";
import { TechAdrashLogo } from "@/lib/icons";

export default function Footer() {
    return (
        <>
            <div className="p-8 pb-10 bg-[#1c2b33] text-white rounded-t-3xl relative bottom-0 w-full">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="text-center sm:text-center">
                        <span className="flex gap-1 place-items-center cursor-pointer justify-center lg:justify-start md:justify-start" onClick={() => location.href="/"}>
                            <TechAdrashLogo color="#f1f2f8"/>
                            <h1 className="font-bold text-2xl">TechAdarsh</h1>
                        </span>
                        <p>&copy; 2024 TechAdarsh. All rights reserved.</p>
                    </div>
                    <hr className="bg-gray-500 h-1"/>
                    <div>
                        <ul className="flex gap-4 text-lg" style={{fontFamily: "var(--font-geist-sans)"}}>
                            <li className="pb-2"><a href="/" className="hover:underline">Home</a></li>
                            <li className="pb-2"><a href="/about" className="hover:underline">About</a></li>
                            <li className="pb-2"><a href="/projects" className="hover:underline">Projects</a></li>
                        </ul>
                        <ul className="flex gap-4 text-lg justify-evenly lg:justify-start md:justify-start sm:justify-center" style={{fontFamily: "var(--font-geist-sans)"}}>
                            <li className="pb-2"><a href="https://github.com/techadarsh55" className="hover:underline"><i className="fab fa-lg fa-github"></i></a></li>
                            <li className="pb-2"><a href="https://in.linkedin.com/in/adarsh-admane" className="hover:underline"><i className="fab fa-lg fa-linkedin"></i></a></li>
                            <li className="pb-2"><a href="mailto:adarsh.admane55@email.com" className="hover:underline"><i className="fas fa-lg fa-envelope"></i></a></li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </>
    )
}