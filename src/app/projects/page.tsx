"use client";

import Image from "next/image";
import React from "react";

export default function Projects() {
    // Example project objects
    const project_data = [
    {
        id: 1,
        title: "E-commerce Website",
        description: "A full-featured e-commerce platform for online shopping.",
        role: "Fullstack Developer",
        technology: ["Django", "React", "PostgreSQL", "TailwindCSS"],
        points: [
        "Implemented user authentication and authorization",
        "Integrated payment gateway",
        "Designed responsive UI",
        "Built RESTful APIs for product management"
        ]
    },
    {
        id: 2,
        title: "Blog Platform",
        description: "A dynamic blog platform with user interaction features.",
        role: "Backend Developer",
        technology: ["Flask", "Vue.js", "MongoDB"],
        points: [
        "Created post creation and commenting functionality",
        "Enabled user registration and login",
        "Optimized database queries",
        "Deployed on cloud infrastructure"
        ]
    },
    {
        id: 3,
        title: "Task Management App",
        description: "An app for efficient task tracking and management.",
        role: "Frontend Developer",
        technology: ["FastAPI", "Svelte", "SQLite"],
        points: [
        "Developed interactive task board",
        "Implemented CRUD operations",
        "Added notifications for deadlines",
        "Ensured cross-device compatibility"
        ]
    }
    ];

    const [projectData, setProjectData] = React.useState<any>([]);

    function getData(url: string) {
        return new Promise((resolve, rejects) => {
            fetch(url)
            .then(response => {
                if(!response.ok){
                    rejects("Failed to fetch data");
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => rejects(error));
        })
    }

    React.useEffect(() => {
        // Simulate fetching data from an API
        // getData('https://')
        getData('https://t1c9s2lsj8.execute-api.us-east-1.amazonaws.com/default/MyProjectDetails')
        .then(data => {
            console.log("Fetched project data:", data);
            setProjectData(data);
        })
        .catch(error => console.error("Error fetching project data:", error));

        // setProjectData(project_data);
    }, []);



    return (
    <>
    <div className="p-8 pb-20">
        <div className="mb-5">
            <h1 className="font-bold mb-2 text-2xl lg:text-4xl md:text-3xl inline-he-block text-[#1c2b33]">My Work</h1>
            <p className="text-gray-400 text-xl">Here’s a selection of projects I’ve built, showcasing my skills across frontend, backend, databases, and UI design.</p>
        </div>
        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 p-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData ? projectData.map((project: any) => (
            <div className="bg-white rounded-2xl shadow-md overflow-hidden" key={project.id}>
            <Image 
                src={project.image || "/images/project1.png"}
                alt={project.name || ""} 
                width={400} 
                height={200}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                <a href={`/projects/${project.id}`} className="text-blue-500 hover:underline" data-id={project.id}>
                    <span className="font-bold">View Details</span> &rarr;
                </a>
            </div>
            </div>
        )) : ''}

        </div>
    </div>
    </>
    )
}