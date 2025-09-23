"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

type ProjectDetail = {
    id: number;
  name: string;
  description: string;
  image: string;
  links?: string;
  status?: string;
  role?: string;
  type?: string;
  start_date?: string;
  end_date?: string;
  technologies?: string[];
  points?: string[];
};


export default function Projects() {
    const [projectData, setProjectData] = React.useState<ProjectDetail[]|null>(null);
    const router = useRouter();

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
            setProjectData(data as ProjectDetail[]);
        })
        .catch(error => console.error("Error fetching project data:", error));
    }, []);



    return (
    <>
    <div className="p-8 pb-20 lg:px-25 min-h-screen">
        <div className="text-center mb-10">
          <strong className="md:text-xl lg:text-xl sm:text-md mb-4">FEATURE <span className="text-[#0064ec]">WORKS</span></strong>
          <h1 className="text-2xl sm:text-2xl lg:text-4xl md:text-3xl font-bold">A showcase of selected projects that reflect my<br/> <span className="text-[#0064ec]">skills and creativity</span></h1>
        </div>
        
        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 p-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData && projectData.map((project: ProjectDetail) => (
            <div 
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:border-b-3 cursor-pointer hover:border-[#0064ec] hover:scale-105 duration-300 transform-3d" 
                key={project.id}
                onClick={() => router.push(`/projects/${project.id}`)}
                >
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
        ))}

        </div>
    </div>
    </>
    )
}