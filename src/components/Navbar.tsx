"use client";

import { CloseBtnIcon, HomeIcon, MenuIcon, TechAdrashLogo } from "@/lib/icons";
import Link from "next/link";
import { useState } from "react";

const navigation = [
    { name: 'Home', href: '/' , solid: false},
    { name: 'About', href: '/about', solid: false },
    { name: 'Services', href: '/services', solid: false },
    { name: 'Works', href: '/projects', solid: false },
    { name: 'Contact Me', href: '/contact', solid: true },
]


export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        console.log("Menu toggled:", !menuOpen);
    }

    return (
        <>
        <div 
            className="flex w-full justify-between items-center p-2 mt-3.5 px-3 rounded-4xl z-11 shadow-none"
            style={{
            background: "var(--foreground-1)",
            color: "var(--background-1)"}}
            >
                <div className="flex gap-1 place-items-center cursor-pointer" onClick={() => location.href="/"}>
                    <span>
                        <TechAdrashLogo color="#0064e0"/>
                    </span>
                    <h1 className="font-bold text-2xl">TechAdarsh</h1>
                </div>
            
            <div>
                <ul 
                    className="hidden sm:flex gap-4 ml-auto place-items-center" 
                    style={{fontFamily: "var(--font-geist-sans)"}}>
                        {navigation.map((item) => (
                            <li key={item.name}>                    
                                <Link 
                                    href={item.href} 
                                    onClick={() => setMenuOpen(false)}
                                    className={ item.solid ?
                                        "font-bold text-lg p-2 rounded-full text-white bg-[#0064ec]"
                                        :  ""}
                                    >{item.name}</Link>
                            </li>
                        ))}                    
                </ul>
                <button
                    className="flex sm:hidden ml-4 rounded-full p-2 transition duration-200 :focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-foreground"
                    style={{background: "var(--background-1)", color:"var(--foreground-1)"}}
                    onClick={toggleMenu}
                    >
                        {menuOpen ? 
                            <CloseBtnIcon />
                            :
                            <MenuIcon/>
                         }
                </button>
            </div>
            <div
             className={`flex justify-center p-3 absolute top-10 left-0 w-full z-10 ${menuOpen ? "" : "hidden"}`}>
                <ul className="sm:hidden top-16 left-0 mt-2 w-full rounded-2xl shadow-2xl bg-foreground text-background flex flex-col items-center gap-4 p-4 transition-transform duration-300 ease-in-out">
                {navigation.map((item) => (
                    <li
                        className="w-full text-center :hover:font-bold :hover:bg-background-2 :hover:text-foreground-2 p-1 rounded-2xl" key={item.name}>                    
                        <Link 
                            href={item.href} 
                            onClick={() => setMenuOpen(false)}
                            className={ item.solid ?
                                "font-bold text-lg p-2 rounded-full text-white bg-[#0064ec]"
                                :  ""}
                            >{item.name}</Link>
                    </li>
                ))}               
                
            </ul>
            </div>
        </div>         
        </>
    )
}