"use client";

export default function Shortcut() {
    return (
        <>
            <div className="flex flex-wrap justify-between place-items-center bg-gradient-to-b from-[#0064ec] to-[#1c2b33] text-white p-10 py-30 shadow-md mt-10 gap-5">
                <div className="">
                    <h1 className="text-4xl font-bold">Let&apos;s discuss your idea</h1>
                    <p className="text-lg text-gray-300">Have a thought about your future website or application? I am always here.</p>
                </div>
                <button
                    className="text-[#0064ec] bg-[#f1f2f8] font-bold px-4 p-2 rounded-4xl gap-2"
                    onClick={() => window.location.href ="/contact"}
                    >
                        <i className="fa-solid fa-paper-plane pr-2"></i>
                        Contact Me</button>
            </div>
        </>
    )
}